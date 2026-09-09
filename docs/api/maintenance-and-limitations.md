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
- batches, journal entries, transactions, allocations, and status transitions.

It is not a generic REST exposure of every Investran SDK service. Adding a native DTO or service does not automatically create a REST endpoint.

## Current limitations identified in the code

### Versioning

Swagger describes routes as `v1`, but URLs do not include a version segment. Contract changes can therefore break existing clients unless compatibility is managed deliberately.

### Response contracts

Several endpoints return native Investran DTOs instead of stable API response models. SDK/MR updates can change serialization or the structure of internal objects.

### Error contract

Most downstream validation failures become HTTP 500 responses with plain exception text. Clients cannot safely distinguish validation, authorization, conflict, missing-resource, and infrastructure errors.

### Asynchronous methods

Controller actions are declared as `async`, but normally execute synchronous SDK calls. They do not make downstream processing asynchronous, except for the dedicated queue endpoint.

### Queue observability

The queue endpoint is hidden from Swagger, and this repository contains no REST endpoint to query status, cancel, or retry a request.

### Route ambiguity

Investor searches by name and by vehicle use equivalent route templates without constraints.

### Authentication documentation drift

The code contains a mix of IdentityServer and hosting generations. Before changing authentication or startup, verify which package is actually deployed.

### Security exposure

Versioned configuration contains secrets and internal infrastructure data. Rotate them and move them to external configuration; do not copy them into documentation or examples.

## Checklist for safe changes

1. Identify the REST route, request model, domain, and native service contract.
2. Confirm SDK and Investran version compatibility.
3. Add dedicated request and response contracts whenever possible.
4. Define HTTP statuses and the error schema.
5. Test authorization and Team Security.
6. Test CRUD or the batch lifecycle in a disposable environment.
7. Validate transactionality, retry behavior, and idempotency.
8. Update Swagger XML comments and this endpoint catalog.
9. Add logs without secrets or sensitive payloads.
10. Run regression tests with representative Investran data.

## Recommended improvements

- versioned OpenAPI contract in the repository;
- API versioning;
- typed error responses using Problem Details;
- route constraints and consistent resource naming;
- consistent semantics for `201 Created`, `204 No Content`, and `404 Not Found`;
- request validation before SDK calls;
- correlation IDs propagated through the queue and WCF;
- health/readiness endpoints for the API, vault, and Investran Web Services;
- endpoint to query queue-request status;
- automated integration tests;
- secret scanning and external configuration for OAuth clients.
