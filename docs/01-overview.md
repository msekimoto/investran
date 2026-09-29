# Overview and component map

This page is the wiki entry point. It shows how Investran modules connect and where to go when a question is specific.

## Quick operational map

| Component | Main role | Learn more |
|---|---|---|
| Web and authentication | System access and security controls | [Architecture and environments](02-architecture-and-environments.md) |
| ATM | Batch generation and execution from templates | [ATM](active-templates/README.md) |
| Allocation Rules | Value allocation across investors | [Allocation Rules](allocation-rules/README.md) |
| Reporting | Reports, filters, Crystal, and WRS | [Report Wizard and Crystal](07-report-wizard-and-crystal.md) |
| API and SDK | Programmatic integration and WCF contracts | [API, SDK, and WRS](08-apis-sdk-wrs.md) |
| Data Import | Bulk XLSX loading and reconciliation | [Data Import and interfaces](10-data-import-and-interfaces.md) |
| Application Server | Schedulers, workers, and execution services | [Application Server and Services](application-services/README.md) |
| Business Events | Automated processes and Partner Transfer | [Business Events](14-business-events.md) |

## Support flow

1. Identify the affected channel: web, batch, interface, report, or API.
2. Confirm the environment, database, user, and permissions.
3. Isolate the layer: authentication, IIS, scheduler/service, database, or external integration.
4. Find the responsible module and follow its specific guide.
5. Validate the result before closing the incident.

## Recommended next steps

- [Entities and relationships](domain/01-entities-and-relationships.md)
- [Accounting cycle and batches](domain/03-accounting-cycle-and-batches.md)
- [Logical architecture](architecture/01-logical-architecture.md)
- [End-to-end flows](architecture/03-end-to-end-flows.md)
- [Troubleshooting](13-troubleshooting.md)

## KT pending

- Version and maintenance release of the supported environment.
- Licensed modules used by the customer.
- Customizations and server names.
- Process owners and escalation criteria.
