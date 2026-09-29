# Runbook - Incident triage

## Document control

| Field | Value |
|---|---|
| Status | KT pending |
| Technical owner | To be confirmed with the support team |
| Functional owner | To be confirmed with the business team |
| Scope and environment | Standard product; validate severity, calendar, and affected environment |
| Last validation | Not validated in a supported environment |
| Next review | After the first reviewed incident or an escalation-process change |
| Evidence | Ticket, timeline, sanitized logs, decision, and follow-up |

## Inputs

Ticket, environment, start time, impact, affected users or entities, message, IDs, and cutoff.

## Procedure

1. Classify severity and start communication.
2. Check whether the issue is widespread or isolated.
3. Record the last successful execution and recent changes.
4. Capture logs and status before changing state.
5. Locate the layer: client/web, authentication, service/scheduler, database, or integration.
6. Apply a reversible, low-risk test.
7. Use the specific runbook; do not improvise SQL, restarts, or retries.
8. Validate the business result and monitor for recurrence.

## Output

Cause or hypothesis, action, evidence, result, remaining impact, owner, and follow-up/RCA.
