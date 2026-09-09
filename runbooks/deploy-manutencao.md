# Runbook - Deployment and maintenance

## Document control

| Field | Value |
|---|---|
| Status | KT pending |
| Technical owner | To be confirmed with the support team |
| Functional owner | To be confirmed with the business team |
| Scope and environment | Standard product; validate version, maintenance window, and environment before execution |
| Last validation | Not validated in a supported environment |
| Next review | After the first controlled execution or a version change |
| Evidence | Approved ticket, rollback plan, smoke-test results, and sanitized closure record |

## Before

- Ticket, approvals, maintenance window, and communication.
- Version, package, and checksum.
- Release notes and affected customizations.
- Backup or restore point and abort criteria.
- Services and jobs to stop, plus their owner.
- Smoke and regression tests, with approvers.

## Execution

Follow the version-specific runbook. Historical material indicates that the database should be handled before servers and workstations, with coordinated application of the components. Record the start and end time and the result of every step.

## After

- Services, scheduler, IIS, and connectivity.
- Login and authorization.
- A critical report.
- Controlled AT, AR, BE, import, and API checks within the change scope.
- Reconciliation and monitoring.
- A formal decision to close or roll back.
