# Modelos de requisição e exemplos

## Convenções gerais

- O media type de requisição e resposta é JSON.
- Os IDs pertencem ao Investran; não são chaves de negócio geradas pelo cliente.
- Use os endpoints de lookup e UDF para descobrir IDs válidos antes de uma gravação.
- Gravações de entidades podem depender de `Version` para controle de concorrência otimista.
- Valores de UDF usam `{ "id": <field-id>, "value": "<value>" }`.
- Normalmente, uma criação bem-sucedida retorna o DTO do Investran criado, com seu ID atribuído.

## UDFs

Valor enviado na requisição:

```json
{
  "id": 123,
  "value": "Exemplo"
}
```

Definição retornada por um endpoint `/udfs`:

```json
{
  "id": 123,
  "name": "Business Unit",
  "entityType": "Investor",
  "required": true,
  "values": ["A", "B"]
}
```

Use `?required=true` para solicitar somente as definições obrigatórias.

## Criar um Investor

```http
POST /api/investor HTTP/1.1
Authorization: Bearer <token>
Content-Type: application/json
```

```json
{
  "name": "Example Investor",
  "nameAlias": "EXAMPLE",
  "domainId": 1,
  "entityTypeId": 2,
  "reviewStatusId": 1,
  "contactOrganizationId": 1001,
  "contactIndividualId": null,
  "taxId": "<redacted>",
  "udfs": [
    { "id": 123, "value": "A" }
  ]
}
```

O controller pode associar um contato Organization ou Individual existente quando o respectivo ID é fornecido.

## Criar uma Position

```json
{
  "dealId": 2001,
  "name": "Example Position",
  "securityId": 3001,
  "suffix": "A",
  "udfs": []
}
```

## Criar relacionamentos contextuais

Specific Investor:

```json
{
  "investorId": 1001,
  "specificVehicleId": 4001,
  "investorTypeId": 1,
  "reviewStatusId": 1,
  "udfs": []
}
```

Specific Deal:

```json
{
  "legalEntityId": 5001,
  "dealId": 2001,
  "specificInvestorId": 6001,
  "commitmentPercent": 100.0,
  "active": true,
  "participant": true,
  "reviewStatusId": 1,
  "udfs": []
}
```

Specific Position:

```json
{
  "positionId": 3001,
  "specificDealId": 7001,
  "positionPercent": 100.0,
  "reviewStatusId": 1,
  "entityTypeId": 1,
  "udfs": []
}
```

## Criar um batch

```json
{
  "legalEntityId": 5001,
  "batchTypeId": 1,
  "glDate": "2026-08-05T00:00:00Z",
  "reference": "CLIENT-REQUEST-123",
  "comments": "Created through REST API",
  "editable": true,
  "journalEntries": [
    {
      "journalEntryTypeId": 1,
      "transactions": [
        {
          "glAccountCode": "100000",
          "transactionTypeId": 10,
          "comments": "Example debit",
          "effectiveDate": "2026-08-05T00:00:00Z",
          "dealId": 2001,
          "positionId": 3001,
          "legalEntityAmount": 1000.00,
          "legalEntityAmountCurrencyId": 1,
          "localAmount": 1000.00,
          "localAmountCurrencyId": 1,
          "quantity": 0,
          "pricePerShare": 0,
          "wholeAmounts": false,
          "allocationRuleId": 1,
          "udfs": [],
          "investorAllocations": [
            {
              "specificInvestorId": 6001,
              "legalEntityAmount": 1000.00,
              "localAmount": 1000.00,
              "quantity": 0
            }
          ]
        },
        {
          "glAccountCode": "200000",
          "transactionTypeId": 11,
          "comments": "Example credit",
          "effectiveDate": "2026-08-05T00:00:00Z",
          "dealId": 2001,
          "positionId": 3001,
          "legalEntityAmount": -1000.00,
          "legalEntityAmountCurrencyId": 1,
          "localAmount": -1000.00,
          "localAmountCurrencyId": 1,
          "quantity": 0,
          "pricePerShare": 0,
          "wholeAmounts": false,
          "allocationRuleId": 1,
          "udfs": [],
          "investorAllocations": [
            {
              "specificInvestorId": 6001,
              "legalEntityAmount": -1000.00,
              "localAmount": -1000.00,
              "quantity": 0
            }
          ]
        }
      ]
    }
  ]
}
```

Os IDs e sinais acima são apenas ilustrativos. Obtenha IDs válidos pelos lookups e confirme o comportamento contábil no ambiente de destino.

### Comportamento da alocação

- Para a regra de sistema “No Allocation”, o controller cria internamente uma alocação placeholder.
- Para as demais regras, podem ser fornecidas `investorAllocations` explícitas.
- A extensão de alocação pode calcular as alocações antes que o batch seja publicado.

### Fluxo do batch

```text
POST /api/batch
  → retorna o batch criado em Held e seu ID
GET /api/batch/{id}
  → verificar journal entries e transactions internas
PUT /api/batch/status/post/{id}
  → fazer o posting somente depois de reconciliação e aprovação
```

## Atualização e exclusão

As requisições de atualização usam o ID do recurso no caminho e um modelo completo ou quase completo no corpo:

```http
PUT /api/investor/1001
Authorization: Bearer <token>
Content-Type: application/json
```

As exclusões chamam a operação nativa `Remove` do Investran. Elas não necessariamente se comportam como uma simples exclusão no banco e podem falhar por causa de relacionamentos, permissões, workflow ou regras de integridade referencial.
