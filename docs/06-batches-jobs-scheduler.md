# Batches, jobs, and scheduler

For a visual introduction to the Batch → Journal Entry → Transaction → Investor Allocation hierarchy, see [Accounting cycle and batches](dominio/03-ciclo-contabil-e-batches.md).

## Operating model

Batches can be created manually, by ATM, API, Data Import, or Business Events. Support must distinguish creation, validation, hold, posting, export, logical deletion, and permanent removal according to the flow and installation configuration.

The documented Application Server provides scheduler services for ATM, Data Import, DX Sync/Workflow, OLE DB, Reporting Services, RS Word, and Report Wizard. Mappings are stored in `Config.xml` in the Investran Servers folder in the described architecture. Confirm the current path before using it.

## Batch diagnosis

Record BatchID, Legal Entity, type, status, creator/process, GL/effective dates, number of JEs/transactions, and the latest event. Determine whether the problem is in generation, validation, posting, or the next integration.

The Administrator's Guide describes `INV_spBatchValidation` as part of the Investran Maintenance Job and the `Log_vwBatchValidation` view for reviewing errors. Direct execution of a stored procedure in production requires approval and a local procedure.

## Retry and reprocessing

1. Preserve the state, logs, IDs, and output.
2. Check whether a partial write occurred or a batch already exists.
3. Identify idempotency and the financial effect of duplication.
4. Obtain functional authorization.
5. Prefer the application-supported mechanism.
6. Reprocess once and reconcile.
7. Escalate if the cause is still unknown.

## Services

Before a restart, check dependencies and active work. Documentation shows maintenance through Service Manager and `net start`/`net stop`; it warns that console status may not immediately reflect external commands. Use real monitoring as the source of truth.

## KT pending

- Inventory of jobs/services with sequence, schedule, and SLA.
- Stuck/timeout criteria.
- Approved tables and queries for diagnosis.
- Idempotency matrix and reprocessing instructions.
- Business-validation owner for each batch.

## Sources

- *Internal_Inv7_INV_Administrators_7.pdf*, Application Server, Scheduler Services, and Batch Validation sections.
- *Internal_Inv7_INV_Implementation.pdf*, pages 4-5 and scheduler configuration.
- *Internal_Inv7_INV_ATM_Dev_Guide_7.pdf*, execution and commit.
