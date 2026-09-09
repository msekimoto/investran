# Knowledge Transfer plan

## Priority 1 - operate and recover

| Topic | Required evidence | Status |
|---|---|---|
| PROD/UAT topology and access | Validated diagram + tested access | Pending |
| Daily/close calendar | Schedule, SLA, cutoff, and owner | Pending |
| Jobs/schedulers/batches | Inventory + assisted execution + simulated failure | Pending |
| Monitoring and logs | Dashboard/location/alert for each component | Pending |
| Recurring incidents | Top 10 with symptoms, cause, and recovery | Pending |
| Escalation | FIS/DBA/infrastructure/functional contacts and hours | Pending |
| Backup/restore/DR | RPO/RTO + latest test | Pending |

## Priority 2 - maintain and change

| Topic | Required evidence | Status |
|---|---|---|
| Customized ATs | Catalog, dependencies, debug, and promotion | Pending |
| Customized ARs | Business rule, cases, and reconciliation | Pending |
| Reports/Crystal | Catalog, consumers, and baseline | Pending |
| APIs/interfaces/imports | Contract, idempotency, logs, and reconciliation | Pending |
| Business Events | Versions, reports, parameters, and recovery | Pending |
| Deployment/rollback | UAT execution and signed checklist | Pending |
| Database | Customized schema, jobs, and approved queries | Pending |

## Required questions in every session

1. Which business process and cutoff does this component support?
2. How do I recognize business success, not only technical success?
3. Which dependencies and recent changes most often cause failure?
4. Where are the logs, IDs, dashboards, and evidence?
5. What can I safely repeat/restart and what duplicates data?
6. What is the rollback point and when should I stop?
7. Who approves, validates, and receives escalation?
8. What was the worst incident and what is not written down?

## Completion criteria

For critical topics: a specialist demonstrates → you execute in a safe environment → both simulate a failure → you diagnose and recover → the owner validates the document. A recording without hands-on practice does not complete KT.
