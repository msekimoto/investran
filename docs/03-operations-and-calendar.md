# Operations, criticality, and calendar

The manuals describe technical capabilities, not each organization's operating calendar. This document is intended to become the daily support dashboard for a customer. It is an initial suggestion for an analyst who already knows the Investran tools and needs the customer-specific details.

## Suggested minimum routine

### Start of day

- Check critical services and schedulers.
- Review failures and delays since the previous shift.
- Validate queues and jobs in `Ready`, `Running`, or an equivalent state beyond the expected time.
- Confirm disk space, database availability, and certificate/account alerts.
- Check pending inbound and outbound interfaces.

### During the day

- Record a ticket before any intervention.
- Correlate time, user, entity, job/batch, and environment.
- Preserve logs and evidence before a retry or restart.
- Reconcile the business output, not only the technical status.

### End of day

- Confirm completion of critical processes.
- Record open items, workarounds, and the next owner.
- Ensure no batch, import, or BE remains partially processed.

## Calendar to obtain during KT

| Process | Frequency/time | SLA/cutoff | Dependency | Business validation | Owner/backup |
|---|---|---|---|---|---|
| Closing batches | KT pending | KT pending | KT pending | KT pending | KT pending |
| Reporting | KT pending | KT pending | KT pending | KT pending | KT pending |
| Data Import/interfaces | KT pending | KT pending | KT pending | KT pending | KT pending |
| Business Events | KT pending | KT pending | KT pending | KT pending | KT pending |
| Maintenance job/backup | KT pending | KT pending | KT pending | KT pending | KT pending |
| Servers and infrastructure | KT pending | KT pending | KT pending | KT pending | KT pending |
| Interfaces with other applications | KT pending | KT pending | KT pending | KT pending | KT pending |
| Know your customer (networking) | KT pending | KT pending | KT pending | KT pending | KT pending |

## Criticality

- **P1:** Financial or regulatory risk, blocked close, broad outage, or corruption/inconsistency.
- **P2:** Important process blocked, with no acceptable workaround.
- **P3:** Restricted impact or a controlled workaround.
- **P4:** Question, improvement, or planned maintenance.

Align the official account definitions and SLAs during KT.
