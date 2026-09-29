# Configuration and deployment

## Required settings

| Key | Purpose | Secret? |
|---|---|---:|
| `BaseUrl` | Public/root URL used by OAuth and Swagger | No |
| `WebServicesUri` | Investran Web Services endpoint | Environment-specific |
| `ServicePrincipalName` | SPN for Windows authentication | Environment-specific |
| `EndPointIdentity` | DNS identity of the WCF endpoint | Environment-specific |
| `Server` | Investran database server supplied to ApplicationScope | Environment-specific |
| `Database` | Investran database name | Environment-specific |
| `WindowsCredentialKey` | Credential Manager key required by the current constructor | Sensitive reference |
| `ByPassCredentialManager` | Enables plain-text credentials for development only | No, but dangerous |
| `InvestranVaultCredentials` | Vault reference for the standard service identity | Sensitive reference |
| `InvestranVaultImpersonateCredentials` | Vault reference for the impersonation identity | Sensitive reference |
| `investran-username-bypass` | Development bypass user | Yes |
| `investran-password-bypass` | Development bypass password | Yes |

RabbitMQ settings are also required to submit batches: server, port, user, password, queue names, and exchange names.

## Service startup

The authentication component registers Investran Web Services at `WebServicesUri`, configures DNS/SPN endpoint identities, and enables user/password and Windows authentication. It then creates an application scope for `Server` and `Database`.

If any required connection setting is empty, startup throws `Missing WebConfig Parameters`.

## Swagger and OAuth

Swagger publishes version `v1`, includes generated XML comments, and configures an application OAuth2 flow pointing to:

```text
${BaseUrl}/auth/connect/token
```

Ensure that `BaseUrl` is the externally reachable HTTPS URL when the API is behind a proxy or load balancer.

## IIS and hosting notes

The repository contains artifacts from both classic ASP.NET Web API/OWIN and more recent project and hosting generations. Before deployment, confirm which startup path and target framework are used by the actual build/package. The code includes:

- `Global.asax` and `System.Web.Http` controllers;
- OWIN startup and IdentityServer integration;
- ASP.NET Core-style hosting/`Program` references;
- WiX installer packaging.

Document the supported build and deployment process for each environment instead of assuming that every startup file is active.

## Configuration hygiene

The repository contains configuration values that must be treated as secrets or internal infrastructure data. Before production use:

1. rotate exposed credentials and client secrets;
2. remove secrets from Git history when required by policy;
3. replace IdentityServer client secrets and certificate references stored in code with external configuration;
4. keep `ByPassCredentialManager=false` outside development;
5. restrict CORS; do not combine a wildcard origin with credentials;
6. require HTTPS for token issuance;
7. do not version signing certificates or private keys;
8. add automated secret scanning.

This guide does not reproduce credentials or environment-specific values found in the source code.
