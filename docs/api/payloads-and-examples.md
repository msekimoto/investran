# Request models and examples

## General conventions

- Request and response media type is JSON.
- IDs are Investran IDs, not client-generated business keys.
- Use lookup and UDF endpoints to discover valid IDs before a write.
- Entity writes can depend on `Version` for optimistic concurrency.
- UDF values use `{ "id": <field-id>, "value": "<value>" }`.
- A successful create normally returns the created Investran DTO with its assigned ID.

## UDFs

Request value:

```json
{
  "id": 123,
  "value": "Example"
}
```

Definition returned by an `/udfs` endpoint:

```json
{
  "id": 123,
  "name": "Business Unit",
  "entityType": "Investor",
  "required": true,
  "values": ["A", "B"]
}
```

Use `?required=true` to request only required definitions.

## Create an Investor

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

The controller can associate an existing Organization or Individual contact when the respective ID is provided.

## Create a Position

```json
{
  "dealId": 2001,
  "name": "Example Position",
  "securityId": 3001,
  "suffix": "A",
  "udfs": []
}
```

## Create contextual relationships

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

## Create a batch

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

The IDs and signs above are illustrative only. Obtain valid lookup IDs and confirm accounting behavior with the target environment.

### Allocation behavior

- For the system “No Allocation” rule, the controller creates a placeholder allocation internally.
- For other rules, explicit `investorAllocations` can be supplied.
- The allocation extension may calculate allocations before the batch is published.

### Batch workflow

```text
POST /api/batch
  → returns created held batch and ID
GET /api/batch/{id}
  → verify nested journal entries and transactions
PUT /api/batch/status/post/{id}
  → post only after reconciliation and approval
```

## Update and delete

Update requests use the resource ID in the path and a full or near-full model in the body:

```http
PUT /api/investor/1001
Authorization: Bearer <token>
Content-Type: application/json
```

Deletes call the native Investran `Remove` operation. They are not guaranteed to behave like a simple database delete and may fail because of relationships, permissions, workflow or referential rules.
