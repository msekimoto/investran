# Errors and troubleshooting

## HTTP behavior

Successful controller operations usually return `200 OK`, including creates and status changes. The API does not consistently use `201 Created`, `204 No Content`, `404 Not Found` or a shared validation-error contract.

Unexpected exceptions are handled by `ExceptionHandlerFilterAttribute`:

- the method, absolute URL and exception message are logged;
- the client receives HTTP 500;
- the response body contains the exception message;
- the reason phrase directs the caller to an administrator.

Native `ResultFaultDto` messages are flattened into a comma-separated exception message by integration services.

## Diagnostic flow

```mermaid
flowchart TD
    E[REST call failed] --> H{HTTP status}
    H -->|401| A[Token, authority, expiry and scope]
    H -->|404| R[Base path, attribute route and deployment version]
    H -->|500| L[Find API log by method, URL and time]
    L --> B{Message category}
    B -->|vault/account| V[Credential vault and Investran identity]
    B -->|endpoint/SPN| W[WCF URI, DNS identity, SPN and network]
    B -->|property/result fault| D[Payload IDs, required fields, UDFs and permissions]
    B -->|timeout| T[60-second transaction, downstream latency and blocking]
```

## What to capture

- environment and base URL;
- UTC timestamp;
- method and route;
- response status/body with sensitive data removed;
- caller/client ID, never client secret or token;
- entity, batch or queue request ID;
- payload schema and reference IDs, sanitized;
- corresponding API log;
- downstream Investran/WCF fault and service availability.

## Common failures

### 401 Unauthorized

- token expired or issued by another authority;
- missing `investran-api` scope;
- wrong BaseUrl/Authority behind proxy;
- malformed Bearer header.

### Missing WebConfig Parameters

One or more required Investran connection settings was not supplied to `Authentication`.

### Vault credential failure

The configured vault reference cannot be resolved or the runtime identity cannot access it.

### User validation or permission failure

The service account is invalid, locked, expired or lacks Team Security access to the requested domain/entity.

### Endpoint identity / SPN failure

The WCF endpoint, DNS identity, SPN or authentication method does not match the deployed Investran Web Services endpoint.

### Investran property fault

Check required fields, lookup IDs, entity version, UDF IDs/types and relationships. The current API forwards flattened native property messages as HTTP 500.

### Batch failed or appears partial

Do not immediately retry. Search by the returned batch ID/reference and reconcile journal entries, transactions and allocations. A client timeout does not prove that `Publish` failed.

### Queue request accepted but no batch appears

The queue endpoint returns only a request ID and this repository exposes no request-status endpoint. Check RabbitMQ producer/consumer logs, dead-letter handling and downstream batch creation using the correlation ID.

## Logging limitations

Current logging records exception messages but does not establish a consistent correlation ID across REST, queue, WCF and Investran. Avoid logging bearer tokens, credentials or full sensitive payloads. A future improvement should add structured fields for request ID, entity type/ID, batch reference and downstream operation.
