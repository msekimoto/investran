# Investran - Maintenance and Support Knowledge Base

This is an operational knowledge base for supporting Investran 7. It summarizes the available FIS/SunGard manuals without copying those documents or including credentials or production data.

## 1. Learn Investran

Start with the [guided learning path](docs/17-learning-path.md), then read the [overview and component map](docs/01-overview.md) and [architecture and environments](docs/02-architecture-and-environments.md). Use [entities and relationships](docs/domain/01-entities-and-relationships.md) and the [operational glossary](docs/19-glossary.md) as reference while learning.

## 2. Resolve a support issue

1. Start with [Quick operations and on-call](docs/18-quick-operations.md) to assess impact and preserve evidence.
2. Use [Troubleshooting](docs/13-troubleshooting.md) to route by symptom and system layer.
3. Follow the relevant runbook below.
4. Record the cause, action, evidence, and follow-up in the ticket, then update the related guide.

| Situation | Runbook |
|---|---|
| Unknown impact or multiple layers | [Incident triage](runbooks/incident.md) |
| Batch, scheduler, or job failure | [Batch or job failure](runbooks/batch-job-failure.md) |
| Report Wizard, Crystal, WRS, or export | [Reporting failure](runbooks/reporting-failure.md) |
| Business Event or Partner Transfer | [Business Event failure](runbooks/business-event-failure.md) |
| Planned deployment, upgrade, or maintenance | [Deployment and maintenance](runbooks/deployment-maintenance.md) |

## 3. Work on a module

Use the module guide as the entry point, then follow its detailed procedures and troubleshooting links.

| Module | Start here |
|---|---|
| Application Server and services | [Module guide](docs/application-services/README.md) |
| Active Templates | [Module guide](docs/active-templates/README.md) |
| Allocation Rules | [Module guide](docs/allocation-rules/README.md) |
| Business Events | [Module guide](docs/business-events/README.md) |
| Data Import | [Module guide](docs/data-import/README.md) |
| Reporting and Web Reporting Services | [Reporting architecture](docs/reporting/01-reporting-architecture.md) |
| REST API and SDK | [API and SDK overview](docs/08-apis-sdk-wrs.md) |

## 4. Find technical reference

- [Operations, criticality, and calendar](docs/03-operations-and-calendar.md)
- [Batches, jobs, and scheduler](docs/06-batches-jobs-scheduler.md)
- [Database](docs/09-database.md)
- [Data Import and interfaces](docs/10-data-import-and-interfaces.md)
- [Configuration, security, and SSO](docs/11-configuration-security-sso.md)
- [Deployment and upgrade](docs/12-deploy-upgrade.md)
- [End-to-end architecture](docs/architecture/01-logical-architecture.md)
- [Source catalog and traceability](docs/15-source-catalog.md)

## 5. Keep the knowledge current

Treat `KT pending` as an open knowledge gap. Confirm operational details with the responsible technical and functional owners, record the source and validation evidence, and update the relevant guide after incidents, releases, or process changes.

- [KT plan and open gaps](docs/16-kt-plan.md)
- [How to contribute](CONTRIBUTING.md)
- [Information security policy](SECURITY.md)
- [Runbook template](templates/runbook.md) and [knowledge transfer template](templates/knowledge-transfer.md)

The wiki covers standard product behavior and documented practices. Validate environment-specific procedures before production use. New Markdown files in `docs/`, `runbooks/`, and `templates/` appear in the wiki automatically. To work locally, run `npm install` and `npm run dev`; use `npm run check` to validate links, runbook controls, and the production build, then `npm run preview` to serve the built site.
