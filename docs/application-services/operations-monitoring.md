# Application Services - operations, configuration, and monitoring

> **Document control:** Status: KT pending · Technical/functional owners: to be confirmed · Scope: validate against the installed version and each environment · Last validation: not validated locally · Next review: after controlled validation or any service/configuration change · Evidence: attach a sanitized ticket/change and test result.

## Accounts involved

The documented Application Server can use up to three identities, in addition to the specific Business Events account:

- **Startup Account:** runs the Process Scheduler and serves as the default identity for services;
- **Database Account:** configures/accesses Master and Staging;
- **Scheduler Account:** used by schedulers for connection and execution;
- **Business Event service account:** used by the BE architecture.

One user can hold multiple roles, but this increases the impact of an account lockout or password change. Prefer identifiable technical accounts, without routine interactive use and with the minimum supported privileges.

## Common configuration

Service dialogs repeat four groups:

### Database Configuration

- Windows/current user or SQL authentication, where supported;
- Investran Master server/database;
- Staging server/database, when the module uses staging.

The older manual requires a server name rather than an IP address, port, or alias in several configurations. Validate DNS and this restriction in the current version.

### Scheduler Configuration

- Scheduler Account identity;
- polling interval;
- maximum parallel processes;
- separate categories, such as Execution/Commit or Generation/Delivery;
- temporary tracing for analysis.

### External resources

- port and firewall for OLE DB;
- SPN/Kerberos;
- UNC shared folder;
- Reporting Services Processing Location;
- Word/Office and default printer;
- email, fax, or filesystem for delivery.

### Persistence

According to the manual, scheduler service mappings are saved in `Config.xml` in the `Investran Servers` installation folder. The file can survive an upgrade and contain settings from multiple versions.

Treat it as sensitive configuration: controlled backup, restricted access, comparison after upgrade, and no publication when it contains servers, users, or credentials.

## Polling interval

Determines how often the scheduler looks for new work.

- too low: more queries and overhead;
- too high: greater latency before jobs start;
- changing it does not fix a slow worker or a blocked queue;
- document the unit, default, current value, and justification.

The manual uses 10 seconds as the default for some services, but this number should not be applied blindly to every module/environment.

## Maximum Parallel Processes

Controls concurrency, not individual speed.

Before increasing it:

- measure CPU, memory, I/O, and SQL waits;
- check licenses and module limits;
- assess locks and contention in Staging/Master;
- confirm filesystem, Office, and destination capacity;
- run a volume test;
- define how to return to the previous value.

Older manuals mention up to three processes per processor in several modules and a value of 1 for DX Workflow. These are historical references, not sizing guidance for the current environment.

## Operations through Service Manager

To start/stop an instance:

1. open Service Manager on the correct Application Server;
2. confirm the environment/database of the selected row;
3. check active jobs/processes;
4. select the instance;
5. use `Start` or `Stop`;
6. validate the state in Windows and in the functional module;
7. monitor logs and the processing of new jobs.

The guide also documents `net start "Scheduler Service Name"` and `net stop "Scheduler Service Name"`. Use the **actual Service Name/Display Name**, not an assumed name. The Service Manager console may not refresh immediately after an external command.

## Daily health check

- critical services in the expected state;
- correct Startup Type;
- accounts not locked and passwords not nearing expiration;
- no abnormal queue growth;
- oldest jobs within SLA;
- no retry loops;
- Master/Staging accessible;
- space available for databases, transaction logs, temp, and Processing Location;
- no new Scheduler/Dispatcher errors in Event Viewer;
- logs being written and retention working;
- recent outputs generated successfully.

## Monitoring by layer

| Layer | What to monitor |
|---|---|
| Windows service | state, start mode, logon failure, and restart count |
| Scheduler | polling, oldest pending job, and jobs picked up |
| Dispatcher | worker creation and handoff failures |
| Worker | duration, CPU/memory, errors, and output |
| SQL | connectivity, locks, waits, space, and growth |
| Staging | backlog, orphaned jobs, and retention |
| Filesystem | space, permissions, path length, and locked files |
| Functional | batch/report/import completed and reconciled |

`Running` in Windows does not prove functional health. A service can be started but unable to process work because of a password, database, queue, mapping, or external dependency.

## Smoke tests by service

| Service | Minimum functional test |
|---|---|
| ATM | run Test AT or a controlled AT with Preview |
| Data Import | validate a small file without loading |
| DX Sync | run/observe a controlled synchronization |
| DX Workflow | process a non-financial test item, when available |
| OLE DB | test the datasource and a low-cost query |
| RS | generate a simple package without external delivery |
| RS Word | generate a package containing a test Word document |
| RW | run a simple report in Investran Web |
| Business Events | run a controlled BE without impact or according to the runbook |

## After an upgrade, restore, or clone

- open Service Manager and review all mappings;
- confirm the target Master and Staging;
- prevent accidental connections to production;
- review accounts, SPNs, ports, and shares;
- check `Config.xml` retained from the previous version;
- restart only after the review;
- run a smoke test for each installed service;
- record the binary version and approved configuration.

The Administrator's Guide warns that after a database restore/overwrite, the Application Server must be reconfigured through Service Manager; otherwise, tables may still point to old Staging server/database names.

## Operational KT

Request a hands-on session to:

1. open Service Manager in each environment;
2. map each row to a Windows service;
3. show accounts and destinations without exposing passwords;
4. locate logs and Event Viewer;
5. find an active job and its worker;
6. demonstrate safe stop/start in a non-production environment;
7. run a smoke test for each module;
8. simulate an invalid password or unavailable dependency;
9. restore the state and validate the backlog;
10. update the inventory and runbook.
