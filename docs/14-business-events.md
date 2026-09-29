# Business Events: support routing

Use this page to find the authoritative procedure for the issue. Detailed configuration, execution, and recovery instructions live in the [Business Events module guide](business-events/README.md); Partner Transfer specifics live in the [Partner Transfer guide](business-events/partner-transfer.md).

## Choose the right guide

- Learn the architecture, dependencies, and deployment model: [Business Events module guide](business-events/README.md).
- Prepare or execute a business event: [Business Events practical guide](business-events/business-events-practical-guide.md).
- Investigate a failed or partial execution: [Business Events troubleshooting](business-events/troubleshooting.md).
- Validate a Partner Transfer: [Partner Transfer guide](business-events/partner-transfer.md).

## Stop before destructive recovery

Do not unlock a Business Event by deleting a footprint through SQL based on an old note or an unverified workaround. Treat this as an invasive database change. Stop and obtain a current approved procedure, business and technical approval, a recovery plan, and DBA/FIS involvement where applicable. Record the incident and review the canonical guide before closing the ticket.
