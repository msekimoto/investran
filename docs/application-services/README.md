# Application Server and Services

The Investran Application Server hosts heavy and asynchronous processing that should not depend on an interactive user session. It uses scheduling services, a dispatcher, and specialized workers for Active Templates, Data Import, Data Exchange, OLE DB, and reporting.

This section explains the documented service set, its purpose, and how to operate it safely.

## Guides

1. [Architecture and service catalog](catalogo-services.md)
2. [Operations, configuration, and monitoring](operacao-monitoramento.md)
3. [Troubleshooting and safe restart](troubleshooting-restart.md)
4. [Earlier summary: Application Server, workers, and scheduler](../arquitetura/02-application-server.md)

## Quick answer: which services exist?

The documented Service Manager can add these scheduler-service families:

| Service Manager action | Purpose |
|---|---|
| Add ATM | Active Template Manager |
| Add Data Import | Data Import in Investran Web |
| Add DX Sync | Data Exchange Synchronization |
| Add DX Workflow | Data Exchange Workflow |
| Add OLE DB | Investran OLE DB Provider |
| Add RS | Reporting Services |
| Add RS Word | Word document processing for Reporting Services packages |
| Add RW | Report Wizard and Crystal in Investran Web, plus related integrations |

Business Events have their own architecture and service account, so they do not appear as an `Add` button in this list. The manual also identifies the shared `FTI Process Scheduler` and `FTI Process Dispatcher` components.

> Names shown in Windows Services (`services.msc`) may include a prefix, version, database, or instance name. Do not use this table as a production inventory: confirm Service Name, Display Name, executable, account, and environment on every server.

## Do not confuse these terms

- **Service Manager:** Investran administrative tool for creating/configuring instances.
- **Windows service:** A process registered in the Windows Service Control Manager.
- **Scheduling Service:** Finds pending work according to its polling interval.
- **Dispatcher:** Routes work to the appropriate worker.
- **Worker/Executor:** Runs the concrete activity.
- **Job/process:** A functional unit requested by a user or integration.
- **IIS/SQL/MSMQ/RabbitMQ/MSDTC:** Platform dependencies; not all are Investran services.

## Priority KT

- Real Windows-service inventory by server and environment.
- Mapping between Display Name, Service Name, and module.
- Logon account and password-vault/rotation process.
- Master, Staging, port, UNC, and other dependencies.
- Polling, concurrency, and capacity.
- Log paths and alerts.
- Dependencies and start/stop order.
- Active-job check before restart.
- Orphan-process or stopped-queue recovery.
- Procedure after restore, clone, upgrade, or password change.
