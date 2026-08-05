# Catálogo de endpoints

Todos os caminhos são relativos a `${BASE_URL}`. Exceto quando indicado, as operações exigem `Authorization: Bearer <token>` e retornam JSON.

## Batches e General Ledger

| Método | Caminho | Finalidade |
|---|---|---|
| POST | `/api/batch` | Criar um batch em Held com journal entries, transactions, UDFs e alocações |
| POST | `/api/batch/queue` | Publicar uma solicitação de batch na fila configurada; não aparece no Swagger |
| GET | `/api/batch/{id}` | Carregar um batch e seus dados internos |
| GET | `/api/batch/types` | Listar tipos de batch |
| GET | `/api/batch/accounts` | Listar contas do GL |
| GET | `/api/batch/journalentry/types` | Listar tipos de journal entry |
| GET | `/api/batch/journalentry/transaction/types` | Listar tipos de transaction |
| GET | `/api/batch/journalentry/transaction/udfs?required=false` | Listar definições de UDF de transaction |
| GET | `/api/batch/journalentry/transaction/allocations/{legalEntityId}` | Listar regras de alocação válidas para uma Legal Entity |
| GET | `/api/batch/journalentry/transaction/allocations/specificinvestor/{investorId}` | Localizar Specific Investors de um Investor |
| PUT | `/api/batch/status/held/{id}` | Alterar um batch para Held usando a identidade de impersonation |
| PUT | `/api/batch/status/post/{id}` | Fazer o posting de um batch usando a identidade de impersonation |
| PUT | `/api/batch/status/delete/{id}` | Excluir um batch pelo serviço de General Ledger |
| PUT | `/api/batch/status/unpost/{id}` | Fazer o unpost de um batch |
| PUT | `/api/batch/status/purge/{id}` | Remover permanentemente um batch excluído |

`POST /api/batch/queue` retorna o ID da solicitação, não o batch criado no Investran. A infraestrutura da fila, novas tentativas e consulta de status não são expostas por nenhum controller deste repositório.

## Legal Entities

| Método | Caminho | Finalidade |
|---|---|---|
| GET | `/api/legalentity/{id}` | Carregar uma Legal Entity |
| POST | `/api/legalentity` | Criar uma Legal Entity |
| PUT | `/api/legalentity/{id}` | Atualizar uma Legal Entity |
| DELETE | `/api/legalentity/{id}` | Remover uma Legal Entity |
| GET | `/api/legalentity/status` | Listar status de Legal Entity |
| GET | `/api/legalentity/types` | Listar tipos de Legal Entity |
| GET | `/api/legalentity/udfs?required=false` | Listar definições de UDF de Legal Entity |

## Investors

| Método | Caminho | Finalidade |
|---|---|---|
| GET | `/api/investor/{id}` | Carregar um Investor |
| GET | `/api/investor/search/{name}` | Pesquisar Investors cujo nome contém o texto informado |
| GET | `/api/investor/search/{vehicleId}` | Retornar Investors relacionados a um Specific Vehicle; explicitamente anônimo no código |
| POST | `/api/investor` | Criar um Investor e, opcionalmente, o relacionamento com contato |
| PUT | `/api/investor/{id}` | Atualizar um Investor |
| DELETE | `/api/investor/{id}` | Remover um Investor |
| GET | `/api/investor/class` | Listar classes de investidor |
| GET | `/api/investor/type` | Listar tipos de investidor |
| GET | `/api/investor/udfs?required=false` | Listar definições de UDF de Investor |

As duas rotas `search/{value}` possuem o mesmo formato e não têm uma restrição de rota explícita. Valide o roteamento real na aplicação implantada. Em uma versão futura da API, prefira uma rota inequívoca, como `search/name/{name}` ou `vehicle/{vehicleId}/investors`.

## Deals

| Método | Caminho | Finalidade |
|---|---|---|
| GET | `/api/deal/direct/{id}` | Carregar um Direct Investment Deal |
| POST | `/api/deal/direct` | Criar um Direct Investment Deal |
| PUT | `/api/deal/direct/{id}` | Atualizar um Direct Investment Deal |
| DELETE | `/api/deal/direct/{id}` | Remover um Direct Investment Deal |
| GET | `/api/deal/direct/udfs?required=false` | Listar definições de UDF de Direct Deal |
| GET | `/api/deal/fund/{id}` | Carregar um Fund Investment Deal |
| POST | `/api/deal/fund` | Criar um Fund Investment Deal |
| PUT | `/api/deal/fund/{id}` | Atualizar um Fund Investment Deal |
| DELETE | `/api/deal/fund/{id}` | Remover um Fund Investment Deal |
| GET | `/api/deal/fund/udfs?required=false` | Listar definições de UDF de Fund Deal |
| GET | `/api/deal/investmentfamilies` | Listar famílias de investimento |
| GET | `/api/deal/sourcetypes` | Listar tipos de origem |
| GET | `/api/deal/countries` | Listar países |
| GET | `/api/deal/states/{countryId}` | Listar estados de um país |
| GET | `/api/deal/cities/{stateId}` | Listar cidades de um estado |

## Positions

| Método | Caminho | Finalidade |
|---|---|---|
| GET | `/api/position/{id}` | Carregar uma Position |
| GET | `/api/position/{name}` | Pesquisar Positions cujo nome contém o texto informado |
| POST | `/api/position` | Criar uma Position |
| PUT | `/api/position/{id}` | Atualizar uma Position |
| DELETE | `/api/position/{id}` | Remover uma Position |
| GET | `/api/position/udfs?required=false` | Listar definições de UDF de Position |

A restrição de rota do tipo inteiro diferencia `/{id}` de `/{name}`.

## Entidades contextuais (`Specific*`)

| Método | Caminho | Finalidade |
|---|---|---|
| GET | `/api/specificvehicle/{legalEntityId}` | Listar Specific Vehicles de uma Legal Entity |
| GET | `/api/specificinvestor/{id}` | Carregar um Specific Investor |
| POST | `/api/specificinvestor` | Criar um Specific Investor |
| DELETE | `/api/specificinvestor/{id}` | Remover um Specific Investor |
| GET | `/api/specificinvestor/investortypes` | Listar tipos de investidor |
| GET | `/api/specificinvestor/udfs?required=false` | Listar definições de UDF de Specific Investor |
| GET | `/api/specificdeal/{id}` | Carregar um Specific Deal |
| POST | `/api/specificdeal` | Criar um Specific Deal |
| DELETE | `/api/specificdeal/{id}` | Remover um Specific Deal |
| GET | `/api/specificdeal/udfs?required=false` | Listar definições de UDF de Specific Deal |
| GET | `/api/specificposition/{id}` | Carregar uma Specific Position |
| POST | `/api/specificposition` | Criar uma Specific Position |
| DELETE | `/api/specificposition/{id}` | Remover uma Specific Position |
| GET | `/api/specificposition/udfs?required=false` | Listar definições de UDF de Specific Position |

## Contatos

| Método | Caminho | Finalidade |
|---|---|---|
| GET | `/api/contact/organization/search/{name}` | Pesquisar contatos do tipo Organization |
| POST | `/api/contact/organization` | Criar um contato do tipo Organization |
| GET | `/api/contact/organization/udfs?required=false` | Listar definições de UDF de Organization |
| GET | `/api/contact/individual/search/{name}` | Pesquisar contatos do tipo Individual |
| POST | `/api/contact/individual` | Criar um contato do tipo Individual |
| GET | `/api/contact/individual/udfs?required=false` | Listar definições de UDF de Individual |

## Lookups comuns

| Método | Caminho | Finalidade |
|---|---|---|
| GET | `/api/lookups/costallocations` | Listar alocações de custos |
| GET | `/api/lookups/paymentinstructions` | Listar instruções de pagamento |
| GET | `/api/lookups/domains` | Listar domínios do Team Security |
| GET | `/api/lookups/currencies` | Listar moedas |
| GET | `/api/lookups/entitytypes` | Listar tipos de entidade |
| GET | `/api/lookups/reviewstatus` | Listar status de revisão |
| GET | `/api/lookups/sourcetypes` | Listar tipos de origem |

A maioria das respostas de lookup usa o formato compacto:

```json
[
  { "id": 1, "name": "Exemplo" }
]
```

As respostas de lookup de batch também podem conter `active`.

## Segurança

| Método | Caminho | Finalidade |
|---|---|---|
| GET | `/api/security` | Retornar dados de segurança/domínio pelo serviço de segurança |
| GET | `/api/security/{id}` | Carregar o objeto de domínio selecionado pela implementação do controller |

Os comentários XML e os nomes em `SecurityController` não descrevem corretamente sua implementação. Confirme o contrato da resposta antes de criar um consumidor dependente desses endpoints.
