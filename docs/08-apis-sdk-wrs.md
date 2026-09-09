# APIs, SDK, and Web Reporting Services

This page is an entry point for programmatic integrations and reporting. Full details are in the specialized guides below.

## Main guides

- [API and SDK in depth](integracoes/01-api-e-sdk.md): object model, DTOs, fetch options, versioning, and General Ledger.
- [Reporting architecture](reporting/01-arquitetura-reporting.md): reporting chain and failure points.
- [Web Reporting Services](reporting/03-web-reporting-services.md): security, publication, and SOAP service support.
- [Reporting failure runbook](../runbooks/falha-reporting.md): actions for active incidents.

## When to use each path

| Situation | Recommended guide |
|---|---|
| DTO, contract, Load/Publish/Remove problem | [API and SDK in depth](integracoes/01-api-e-sdk.md) |
| Authentication, URL, or WRS failure | [Web Reporting Services](reporting/03-web-reporting-services.md) |
| Report does not render or respond | [Report Wizard - development and operations](reporting/02-report-wizard-desenvolvimento-operacao.md) |
| Production incident | [Reporting failure runbook](../runbooks/falha-reporting.md) |

## Integration checklist

- Confirm the consumer, endpoint, contract, and assembly version.
- Validate authentication, authorization, and certificates.
- Record timeout, retry, and idempotency behavior.
- Keep sanitized request/response/fault records.
- Reconcile the write effect before repeating or compensating.

## WRS checklist

- Validate CompanyID, URL, IIS, app pool, and certificate.
- Confirm security levels, Contact, and WRS filter.
- Isolate the RW report before investigating transport or format.
- Check logs, load, and performance by environment.

## KT pending

- Endpoint and consumer inventory.
- Current authentication and certificates.
- Retry, idempotency, and correlation rules.
- Assembly versions and environment maintenance level.
