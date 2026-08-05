# Endpoint catalog

All paths are relative to `${BASE_URL}`. Except where noted, operations require `Authorization: Bearer <token>` and return JSON.

## Batches and General Ledger

| Method | Path | Purpose |
|---|---|---|
| POST | `/api/batch` | Create a held batch with journal entries, transactions, UDFs and allocations |
| POST | `/api/batch/queue` | Publish a batch request to the configured queue; hidden from Swagger |
| GET | `/api/batch/{id}` | Load a batch and its nested data |
| GET | `/api/batch/types` | List batch types |
| GET | `/api/batch/accounts` | List GL accounts |
| GET | `/api/batch/journalentry/types` | List journal-entry types |
| GET | `/api/batch/journalentry/transaction/types` | List transaction types |
| GET | `/api/batch/journalentry/transaction/udfs?required=false` | List transaction UDF definitions |
| GET | `/api/batch/journalentry/transaction/allocations/{legalEntityId}` | List allocation rules valid for a Legal Entity |
| GET | `/api/batch/journalentry/transaction/allocations/specificinvestor/{investorId}` | Find Specific Investors for an Investor |
| PUT | `/api/batch/status/held/{id}` | Change a batch to Held using the impersonation identity |
| PUT | `/api/batch/status/post/{id}` | Post a batch using the impersonation identity |
| PUT | `/api/batch/status/delete/{id}` | Delete a batch through the General Ledger service |
| PUT | `/api/batch/status/unpost/{id}` | Unpost a batch |
| PUT | `/api/batch/status/purge/{id}` | Permanently purge a deleted batch |

`POST /api/batch/queue` returns a request ID, not the created Investran batch. Queue infrastructure, retry and status lookup are not exposed by a controller in this repository.

## Legal Entities

| Method | Path | Purpose |
|---|---|---|
| GET | `/api/legalentity/{id}` | Load a Legal Entity |
| POST | `/api/legalentity` | Create a Legal Entity |
| PUT | `/api/legalentity/{id}` | Update a Legal Entity |
| DELETE | `/api/legalentity/{id}` | Remove a Legal Entity |
| GET | `/api/legalentity/status` | List Legal Entity statuses |
| GET | `/api/legalentity/types` | List Legal Entity types |
| GET | `/api/legalentity/udfs?required=false` | List Legal Entity UDF definitions |

## Investors

| Method | Path | Purpose |
|---|---|---|
| GET | `/api/investor/{id}` | Load an Investor |
| GET | `/api/investor/search/{name}` | Search Investors whose name contains the supplied text |
| GET | `/api/investor/search/{vehicleId}` | Return Investors related to a Specific Vehicle; explicitly anonymous in code |
| POST | `/api/investor` | Create an Investor and optional contact relationship |
| PUT | `/api/investor/{id}` | Update an Investor |
| DELETE | `/api/investor/{id}` | Remove an Investor |
| GET | `/api/investor/class` | List investor classes |
| GET | `/api/investor/type` | List investor types |
| GET | `/api/investor/udfs?required=false` | List Investor UDF definitions |

The two `search/{value}` routes have the same route shape and no explicit route constraint. Verify actual routing in the deployed application; prefer adding an unambiguous route such as `search/name/{name}` or `vehicle/{vehicleId}/investors` in a future API version.

## Deals

| Method | Path | Purpose |
|---|---|---|
| GET | `/api/deal/direct/{id}` | Load a Direct Investment Deal |
| POST | `/api/deal/direct` | Create a Direct Investment Deal |
| PUT | `/api/deal/direct/{id}` | Update a Direct Investment Deal |
| DELETE | `/api/deal/direct/{id}` | Remove a Direct Investment Deal |
| GET | `/api/deal/direct/udfs?required=false` | List Direct Deal UDF definitions |
| GET | `/api/deal/fund/{id}` | Load a Fund Investment Deal |
| POST | `/api/deal/fund` | Create a Fund Investment Deal |
| PUT | `/api/deal/fund/{id}` | Update a Fund Investment Deal |
| DELETE | `/api/deal/fund/{id}` | Remove a Fund Investment Deal |
| GET | `/api/deal/fund/udfs?required=false` | List Fund Deal UDF definitions |
| GET | `/api/deal/investmentfamilies` | List investment families |
| GET | `/api/deal/sourcetypes` | List source types |
| GET | `/api/deal/countries` | List countries |
| GET | `/api/deal/states/{countryId}` | List states for a country |
| GET | `/api/deal/cities/{stateId}` | List cities for a state |

## Positions

| Method | Path | Purpose |
|---|---|---|
| GET | `/api/position/{id}` | Load a Position |
| GET | `/api/position/{name}` | Search Positions whose name contains text |
| POST | `/api/position` | Create a Position |
| PUT | `/api/position/{id}` | Update a Position |
| DELETE | `/api/position/{id}` | Remove a Position |
| GET | `/api/position/udfs?required=false` | List Position UDF definitions |

The integer route constraint makes `/{id}` distinguishable from `/{name}`.

## Contextual (`Specific*`) entities

| Method | Path | Purpose |
|---|---|---|
| GET | `/api/specificvehicle/{legalEntityId}` | List Specific Vehicles for a Legal Entity |
| GET | `/api/specificinvestor/{id}` | Load a Specific Investor |
| POST | `/api/specificinvestor` | Create a Specific Investor |
| DELETE | `/api/specificinvestor/{id}` | Remove a Specific Investor |
| GET | `/api/specificinvestor/investortypes` | List investor types |
| GET | `/api/specificinvestor/udfs?required=false` | List Specific Investor UDF definitions |
| GET | `/api/specificdeal/{id}` | Load a Specific Deal |
| POST | `/api/specificdeal` | Create a Specific Deal |
| DELETE | `/api/specificdeal/{id}` | Remove a Specific Deal |
| GET | `/api/specificdeal/udfs?required=false` | List Specific Deal UDF definitions |
| GET | `/api/specificposition/{id}` | Load a Specific Position |
| POST | `/api/specificposition` | Create a Specific Position |
| DELETE | `/api/specificposition/{id}` | Remove a Specific Position |
| GET | `/api/specificposition/udfs?required=false` | List Specific Position UDF definitions |

## Contacts

| Method | Path | Purpose |
|---|---|---|
| GET | `/api/contact/organization/search/{name}` | Search Organization contacts |
| POST | `/api/contact/organization` | Create an Organization contact |
| GET | `/api/contact/organization/udfs?required=false` | List Organization UDF definitions |
| GET | `/api/contact/individual/search/{name}` | Search Individual contacts |
| POST | `/api/contact/individual` | Create an Individual contact |
| GET | `/api/contact/individual/udfs?required=false` | List Individual UDF definitions |

## Common lookups

| Method | Path | Purpose |
|---|---|---|
| GET | `/api/lookups/costallocations` | List cost allocations |
| GET | `/api/lookups/paymentinstructions` | List payment instructions |
| GET | `/api/lookups/domains` | List Team Security domains |
| GET | `/api/lookups/currencies` | List currencies |
| GET | `/api/lookups/entitytypes` | List entity types |
| GET | `/api/lookups/reviewstatus` | List review statuses |
| GET | `/api/lookups/sourcetypes` | List source types |

Most lookup responses use the compact shape:

```json
[
  { "id": 1, "name": "Example" }
]
```

Batch lookup responses may also contain `active`.

## Security

| Method | Path | Purpose |
|---|---|---|
| GET | `/api/security` | Return security/domain data from the security service |
| GET | `/api/security/{id}` | Load the domain object selected by the controller implementation |

The XML comments and names in `SecurityController` do not accurately describe its implementation. Confirm the response contract before building a consumer around these endpoints.
