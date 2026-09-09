# Troubleshooting

This document summarizes the recommended diagnostic method for Investran events. It is intentionally short: use it for triage and then follow the correct module guide.

## Standard method

1. Define impact and severity.
2. Record the timeline.
3. Capture batch, job, report, AT/AR/BE, and user IDs.
4. Preserve logs, status, and sanitized evidence.
5. Split by layer: user/web → IIS/API → scheduler/service → database → integration.
6. Compare with a known environment or case.
7. Test one hypothesis at a time.
8. Validate the business result before closing the case.
9. Record the cause, fix, prevention, and monitoring.

## Symptom → quick guide

| Symptom | Check first |
|---|---|
| Login/SSO failure | [Architecture and environments](02-arquitetura-e-ambientes.md) |
| Job stopped or queued | [Application Server and Services](application-services/README.md) |
| AT does not create a batch | [ATM](active-templates/README.md) |
| AR produces incorrect values | [Allocation Rules](allocation-rules/README.md) |
| Report fails or is slow | [Report Wizard and Crystal](07-report-wizard-e-crystal.md) |
| Import rejected | [Data Import and interfaces](10-data-import-e-interfaces.md) |
| API fault or invalid contract | [API, SDK, and WRS](08-apis-sdk-wrs.md) |
| Business Event fails | [Business Events](14-business-events.md) |

## Stop and escalate when

- there is duplication, corruption, or financial-impact risk;
- the action needs state-changing SQL, a security change, or restore;
- you cannot confirm whether a partial write occurred;
- the workaround expands access or disables a control;
- the result cannot be reconciled.

## Next step

Use the [runbooks](../runbooks/incidente.md) for the operational flow by incident, batch failure, reporting failure, or Business Event failure.
