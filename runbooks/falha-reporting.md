# Runbook - Reporting failure

## Document control

| Field | Value |
|---|---|
| Status | KT pending |
| Technical owner | To be confirmed with the support team |
| Functional owner | To be confirmed with the business team |
| Scope and environment | Standard product; validate the affected consumer, version, and environment |
| Last validation | Not validated in a supported environment |
| Next review | After a reviewed production incident or reporting change |
| Evidence | Ticket, sanitized parameters, process IDs, and business validation |

Use this runbook for Report Wizard, Crystal Reports, Web Reporting Services, Data Exchange, or automations that consume RW reports.

## 1. Record the incident

Collect:

- environment, UTC time, impact, and number of users;
- book, report, and version or date of the last change;
- consumer: RW, Crystal, WRS, Data Exchange, AT, AR, BE, or application;
- user/Contact and related entity, without credentials;
- sanitized parameters and output format;
- message, status/fault, and screenshot;
- duration, expected and returned rows, and correlation/process ID;
- last successful execution.

## 2. Classify before acting

| Symptom | Initial category |
|---|---|
| report does not appear | publication or security |
| report appears but a parameter has no options | relationship, security level, or WRS filter |
| empty result | data, parameter, filter, or security |
| incorrect totals/rows | RW definition, cardinality, period, or data change |
| slow/timeout | volume, RW engine, serialization, concurrency, or SQL |
| RW works but Crystal fails | provider, datasource, schema, parameters, or subreport |
| RW works but WRS fails | IIS/TLS, WRS configuration, identity, or format |
| works for an admin but not for a user | authorization; do not close as resolved |
| execution may have completed after timeout | unknown state; reconcile before retrying |

## 3. Isolate by layer

1. Run the base RW with the same user and parameters.
2. Reduce the data set without changing the logic.
3. Compare with the last known-good version and a known data set.
4. If RW is correct, test the next layer separately.
5. Do not automatically retry expensive processing until you know whether the earlier execution completed.

### Report Wizard

- confirm the book/report and version;
- validate parameter names, IDs, types, and formats;
- check columns, filters, aggregation, hierarchy, currency, and time period;
- compare rows and totals;
- check logs and SQL blocking.

### Crystal Reports

- confirm the provider and datasource;
- validate Add Command and associated parameters;
- run **Verify Database** after a schema change;
- review remapped fields, joins, command flags, and subreports;
- test the shell and drivers separately.

### Web Reporting Services

- validate DNS, port, TLS, certificate, site, and app pool;
- test `ServiceVersion`;
- confirm `CompanyID` and the configured connection;
- use `GetBooksAndReports` to verify publication;
- use `GetReportParameters` before execution;
- check Contact, primary email, `WebServicesEnabled`, relationship, security level, and WRS filter;
- distinguish execution by SQL user from execution by Contact;
- for paged HTML, validate `reportProcessId`, `totalPages`, and `pageNumber`;
- for PDF, confirm binary content and `Content-Type`.

## 4. Safe decisions

- **Report missing for everyone:** check publication and availability before changing individual security.
- **Missing for one user:** compare relationship and security level with an equivalent user.
- **Too much data:** stop distribution and treat it as a potential security incident.
- **Timeout:** check whether execution completed and measure where time was spent; do not only raise the limit.
- **Financial discrepancy:** stop publication or consumption, preserve evidence, and reconcile with the source.
- **Recent change:** prefer rollback of the approved definition when impact is high and the cause is unclear.

## 5. Validate the fix

1. Repeat the original scenario.
2. Validate totals, cardinality, signs, currency, and date.
3. Test at least one positive and one negative security case.
4. Test all affected formats and consumers.
5. Compare duration and volume with the baseline.
6. Record root cause, action, evidence, and prevention.

## 6. Escalation

Send the evidence package to:

- infrastructure for DNS, TLS, IIS, app pool, network, or certificate issues;
- the DBA for blocking, execution plan, database unavailability, or degradation;
- development for STA threading, provider, serialization, or integration contract issues;
- functional/reporting support for filters, parameters, totals, shell/driver, and business rules;
- security for inappropriate exposure or entitlement/relationship differences;
- FIS for a reproducible standard-product defect, with version and minimum steps.

## References

- [Reporting architecture](../docs/reporting/01-arquitetura-reporting.md)
- [Report Wizard - development and operations](../docs/reporting/02-report-wizard-desenvolvimento-operacao.md)
- [Web Reporting Services](../docs/reporting/03-web-reporting-services.md)
