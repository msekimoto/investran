# Architecture and environments

This document is a map of the main Investran components and what must be validated in every environment before a change.

## High-level view

A typical architecture combines:

- Web/IIS for authentication and access.
- Application Server for schedulers, workers, and asynchronous services.
- SQL Server with Master and Staging databases.
- Reporting, ATM, ARM, Data Import, and Business Events as processing modules.
- Certificates, service accounts, and MSMQ/RabbitMQ/MSDTC as critical dependencies.

For the complete logical diagram, see [Logical architecture and components](arquitetura/01-arquitetura-logica.md).

## Checklist by environment

| Item | Confirm |
|---|---|
| Version and MR | Installed release, hotfix, and compatibility |
| Web and URLs | Endpoints, IIS, app pools, and certificates |
| SQL Server | Master, Staging, jobs, backups, and restore |
| Application Server | Services, accounts, logs, and execution queue |
| Schedulers | Active jobs, dependencies, and schedules |
| Security | Team Security, SSO, accounts, and permissions |
| Integrations | Endpoints, tokens/certificates, and retry rules |

## Common risks

- Assuming the old architecture represents the current environment.
- Restarting services without checking running jobs.
- Ignoring account, URL, database, or certificate changes after clone/restore.
- Treating a platform failure as a business-function failure.

## Learn more

- [Logical architecture](arquitetura/01-arquitetura-logica.md)
- [Application Server and Services](application-services/README.md)
- [Batches, jobs, and scheduler](06-batches-jobs-scheduler.md)
- [Business Events](14-business-events.md)
- [Database](09-database.md)
- [Troubleshooting](13-troubleshooting.md)

## Next step

Use the [KT plan](16-plano-de-kt.md) to record the real values for every environment and complete the inventory before operating in production.
