# Maintenance and known limitations

## Supported resource groups

The current REST surface covers:

- Legal Entities;
- Investors and Specific Investors;
- Direct/Fund Deals and Specific Deals;
- Positions and Specific Positions;
- Specific Vehicles;
- Organization and Individual contacts;
- UDF definitions;
- common lookups and security data;
- batches, journal entries, transactions, allocations and status transitions.

It is not a generic REST exposure of every Investran SDK service. Adding a native DTO/service does not automatically create a REST endpoint.

## Current limitations found in source

### Versioning

Routes are described as Swagger `v1`, but URLs do not include an API-version segment. Contract evolution can therefore break existing clients unless compatibility is managed deliberately.

### Response contracts

Several endpoints return native Investran DTOs rather than stable API response models. SDK/MR upgrades may change serialization or nested object shape.

### Error contract

Most downstream validation failures become HTTP 500 with plain exception text. Clients cannot reliably distinguish validation, authorization, conflict, not-found and infrastructure errors.

### Async methods

Controller actions are declared `async` but generally execute synchronous SDK calls. They do not create asynchronous downstream behavior except the explicit queue endpoint.

### Queue observability

The queue endpoint is hidden from Swagger and no REST status/cancel/retry endpoint exists in this repository.

### Routing ambiguity

Investor search by name and by vehicle use equivalent route templates without constraints.

### Authentication documentation mismatch

The source contains a mixture of IdentityServer/hosting generations. Validate the package actually deployed before changing authentication or startup code.

### Security exposure

Secrets and internal infrastructure values are present in tracked configuration. Rotate and externalize them; do not copy them into documentation or examples.

## Safe change checklist

1. Identify REST route, request model, domain and native service contract.
2. Confirm SDK and Investran version compatibility.
3. Add dedicated request/response contracts where possible.
4. Define status codes and error schema.
5. Test authorization and Team Security.
6. Test create/read/update/delete or batch lifecycle in a disposable environment.
7. Verify transactionality and retry/idempotency.
8. Update Swagger XML comments and this endpoint catalog.
9. Add logs without secrets or sensitive payloads.
10. Run regression tests against representative Investran data.

## Recommended next improvements

- OpenAPI contract checked into source control;
- API versioning;
- typed Problem Details error responses;
- route constraints and consistent resource naming;
- `201 Created`/`204 No Content`/`404 Not Found` semantics;
- request validation before SDK calls;
- correlation IDs propagated through queue and WCF;
- health/readiness endpoints for API, vault and Investran Web Services;
- queue request-status endpoint;
- automated integration tests;
- secret scanning and externalized OAuth client configuration.
