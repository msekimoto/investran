# Runbook - Batch or job failure

## Document control

| Field | Value |
|---|---|
| Status | KT pending |
| Technical owner | To be confirmed with the support team |
| Functional owner | To be confirmed with the business team |
| Scope and environment | Standard product; validate the job, scheduler, and affected environment |
| Last validation | Not validated in a supported environment |
| Next review | After a reviewed production incident or scheduler change |
| Evidence | Ticket, BatchID/job ID, sanitized logs, and approved reconciliation |

1. Record the BatchID, job/execution ID, status, time, and originating process.
2. Confirm whether a partial write exists or a batch was already created.
3. Check the scheduler, service, account, queue, and dependencies.
4. Collect related application and database logs.
5. Review approved validation or logs. Do not run DML or stored procedures without authorization.
6. Assess idempotency and duplicate-processing risk.
7. Obtain functional approval before retrying or reprocessing.
8. Reprocess once through the supported mechanism.
9. Reconcile counts, values, statuses, and the downstream process.

**Stop:** unknown partial state, financial impact, lock or blocking, or a repeated failure.
