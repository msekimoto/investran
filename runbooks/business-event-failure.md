# Runbook - Business Event failure

## Document control

| Field | Value |
|---|---|
| Status | KT pending |
| Technical owner | To be confirmed with the support team |
| Functional owner | To be confirmed with the business team |
| Scope and environment | Standard product; validate the Business Event, template, and affected environment |
| Last validation | Not validated in a supported environment |
| Next review | After a reviewed production incident or event-flow change |
| Evidence | Ticket, execution/GUID, sanitized logs, and approved reconciliation |

1. Record the BE, template and version, parameters, user, entity, time, and execution/GUID.
2. Confirm compatibility with the MR and active status.
3. Preserve Web Server and Application Server logs.
4. Check the deployment service, BE service account, and RW dependencies.
5. Determine whether a partial batch, footprint, or output was created.
6. Do not repeat the action or unlock data through SQL without approval and reconciliation.
7. Fix the configuration in a safe environment, run a controlled case, and reconcile it.
8. For Partner Transfer, validate reversals, rebooking, dates, percentages, currencies, and exclusion hierarchies.
