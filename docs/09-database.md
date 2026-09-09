# Database

## Scope

The sources describe SQL Server, Master and Staging databases, Investran accounts, security, encryption, maintenance jobs, backup/restore, validation, cleanup, reindexing, and performance tools. The schema is a FIS product: direct changes must be an approved exception.

## Safe operations

- Use least-privilege access and read-only queries for diagnosis.
- Always state the environment and database in the ticket or script.
- Validate estimates and execution plans before a heavy query.
- Do not run DML, DDL, or a state-changing stored procedure in production without approval, backup, and rollback.
- Do not clean Staging while ATM, BE, or import processing is active.
- After a restore, review users, services, names, URLs, and integrations.

## Documented maintenance

The Administrator's Guide describes daily, weekly, and monthly schedules for the Investran Maintenance Job, Staging/audit/common-repository/web-reporting log cleanup, batch/contact/portfolio validation, reindexing/defragmentation, and permanent removal. Confirm the actual schedule and parameters with the DBA.

## Performance

Collect the time window, symptoms, duration, blocking, wait types, CPU, memory, I/O, growth, concurrency, and execution plan. Correlate SQL Server behavior with the workstation and Application Server. The guide mentions SQLdiag, Performance Monitor, and SQL Profiler; use currently approved tools.

## Backup and restore

Document frequency, retention, encryption, location, owner, and the latest restore test. An existing backup does not prove recoverability. For a change, record a coherent Master and Staging rollback point.

## KT pending

- Database, replication, and reporting-DB diagram.
- SQL jobs and owners.
- Approved queries and customized tables.
- Backup/restore policy, RPO/RTO, and latest test.
- Runbooks for blocking, growth, corruption, and failover.

## Sources

- *Internal_Inv7_INV_Administrators_7.pdf*, pages 3-5 and SQL/backup/performance chapters.
- *Internal_Inv7_INV_Implementation.pdf*, pages 3-4 and Database Setup.
- *Internal_Inv7_INV_Maint_Process.pdf*, pages 5-6.
