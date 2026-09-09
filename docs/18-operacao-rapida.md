# Quick operations and on-call guide

Use this page as the entry point during an incident or before a change. It shortens the time to diagnosis without replacing approval, a ticket, or the specific runbook.

> **Known limit:** owners, SLAs, cutoffs, topology, and environment contacts are still `KT pending`. Do not invent this information. Record the gap in the ticket and escalate through the current process.

## First 15 minutes

1. Open or update the ticket with the time, environment, impact, affected users or entities, and the last known-good behavior.
2. Preserve sanitized evidence before changing state: message, correlation IDs, status, screenshot, and relevant logs.
3. Classify the scope: broad outage, isolated process, incorrect data, security, or degradation.
4. Compare recent changes with a known-good execution. Run only reversible, low-risk checks.
5. Select the runbook below. Stop and escalate if there is financial impact, security risk, partial writes, duplicate data, or an unknown state.

## Choose a path

| Situation | First procedure |
|---|---|
| Unknown impact or multiple layers | [Incident triage](../runbooks/incidente.md) |
| Batch, scheduler, or job failure | [Batch/job failure](../runbooks/falha-batch-job.md) |
| Report Wizard, Crystal, WRS, or export | [Reporting failure](../runbooks/falha-reporting.md) |
| Business Event or Partner Transfer | [Business Event failure](../runbooks/falha-business-event.md) |
| Planned deployment, upgrade, or maintenance | [Deployment and maintenance](../runbooks/deploy-manutencao.md) |

## Stop and escalate when

- there may be data exposure, an authorization failure, or unsanitized evidence;
- the operation may duplicate, delete, or change financial data;
- processing is partial, a lock persists, or the previous attempt has an unknown result;
- the change requires SQL, a restart, a retry, or reprocessing that is not in an approved procedure;
- the cause crosses a layer without a confirmed owner: infrastructure, database, integration, or functional support.

When escalating, provide the minimum package: ticket, impact, environment, time window, reproducible step, related IDs, action already taken, result, sanitized evidence, and requested decision.

## Minimum closure

Before closing, validate the original scenario, a negative security case when applicable, business reconciliation, and no recurrence during the agreed period. Record the cause (or hypothesis), action, evidence, remaining impact, follow-up, and the required update to this knowledge base.

## References

- [General troubleshooting](13-troubleshooting.md)
- [KT plan](16-plano-de-kt.md)
- [Glossary](19-glossario.md)
- [Sensitive information policy](../SECURITY.md)
