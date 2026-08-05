# Configuration and deployment

## Required configuration

| Key | Purpose | Secret? |
|---|---|---:|
| `BaseUrl` | public/root URL used by OAuth and Swagger | No |
| `WebServicesUri` | Investran Web Services endpoint | Environment-sensitive |
| `ServicePrincipalName` | SPN for Windows authentication | Environment-sensitive |
| `EndPointIdentity` | WCF DNS endpoint identity | Environment-sensitive |
| `Server` | Investran database server passed to ApplicationScope | Environment-sensitive |
| `Database` | Investran database name | Environment-sensitive |
| `WindowsCredentialKey` | credential-manager key required by current constructor | Sensitive reference |
| `ByPassCredentialManager` | enables development-only plaintext credential mode | No, but dangerous |
| `InvestranVaultCredentials` | vault reference for normal service identity | Sensitive reference |
| `InvestranVaultImpersonateCredentials` | vault reference for impersonation identity | Sensitive reference |
| `investran-username-bypass` | development bypass username | Yes |
| `investran-password-bypass` | development bypass password | Yes |

Queue-related settings are also present for RabbitMQ batch submission: server, port, username, password, queue and exchange names.

## Service initialization

The authentication component registers Investran Web Services at `WebServicesUri`, configures DNS/SPN endpoint identities and enables username/password and Windows authentication methods. It then creates an application scope for `Server` and `Database`.

If any required connection setting is blank, initialization throws `Missing WebConfig Parameters`.

## Swagger and OAuth

Swagger publishes version `v1`, includes generated XML comments and configures an OAuth2 application flow against:

```text
${BaseUrl}/auth/connect/token
```

Ensure `BaseUrl` reflects the externally reachable HTTPS URL when the API sits behind a proxy/load balancer.

## IIS / hosting notes

The repository contains both classic ASP.NET Web API/OWIN artifacts and newer hosting/project artifacts. Before deployment, confirm which startup path and target framework are used by the actual build/package. The source includes:

- `Global.asax` and `System.Web.Http` controllers;
- OWIN startup and IdentityServer integration;
- ASP.NET Core-style `Program`/hosting references;
- WiX installer packaging.

Document the supported build and deployment path for each environment rather than assuming all startup files are active.

## Configuration hygiene

The repository currently contains configuration values that should be treated as secrets or internal infrastructure data. Before production use:

1. rotate exposed credentials and client secrets;
2. remove secret values from Git history where policy requires it;
3. replace hard-coded IdentityServer client secrets/certificate references with external configuration;
4. keep `ByPassCredentialManager=false` outside development;
5. restrict CORS instead of combining wildcard origin with credentials;
6. require HTTPS for token issuance;
7. do not commit signing certificates or private keys;
8. add automated secret scanning.

This guide intentionally does not reproduce any credential or environment-specific value found in the source.
