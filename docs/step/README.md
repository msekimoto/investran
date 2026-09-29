# STEP: Investran User Guide

> **Document control:** Status: KT pending · Technical/functional owners: to be confirmed · Scope: source material only; validate the installed version and environment · Last validation: not validated locally · Next review: after controlled validation or any STEP process change · Evidence: sanitized ticket/change and reconciled result.

This section brings together the operational guide for the STEP functionality in Investran, for end users, analysts, and support teams. It focuses on safe execution, result validation, and monitoring critical events.

> This material is a practical reference for operating and supporting STEP. Always confirm names, permissions, parameters, and paths in the current environment before running anything in production.

## What STEP does

STEP is used to carry out, validate, and monitor stages of a business process. In practical terms, it brings together execution preparation, parameter review, result generation, and consistency checks before final consolidation.

Using STEP correctly helps reduce the risk of:

- incomplete processing;
- inconsistencies between records and reports;
- rework in critical business areas;
- unmonitored work in production environments.

## When to use STEP

Use STEP when you need to:

- run a specific business-processing step;
- validate configured rules before close or consolidation;
- review results in a controlled way before publishing or approval;
- monitor execution status alongside reports, logs, and processing controls.

## Access and prerequisites

Before starting, confirm:

1. You have access to the correct Investran environment.
2. Your profile has permission to run STEP.
3. The functional owner has defined the process parameters and filters.
4. The reference date, scenario, and processing population have been agreed.
5. A backup, execution control, and result-validation routine are in place.

## Basic workflow

### 1. Open the process

- Open the Investran module used for the STEP process.
- Confirm the environment, system, and execution context.
- Select the operation or stage relevant to the case.

### 2. Set the parameters

Before running, review:

- reference period;
- records or entities in scope;
- filters, exclusions, or hierarchy rules;
- flags or processing options that affect the result;
- access permissions and the status of related data.

If the case has business-specific rules, confirm that the person responsible for the operation has validated the parameters.

### 3. Validate before execution

Before confirming the run, check that:

- the data and filters match the requested period;
- no pending process could interfere with the result;
- the functional owner understands the expected impact;
- the intended result is clearly defined.

### 4. Run STEP

- Start the processing routine.
- Monitor the status message, progress, and system logs.
- Stop and investigate any alert, warning, or error that requires intervention.

### 5. Review the result

After execution:

- review the records created or updated;
- compare the result with what was expected;
- validate totals, counts, values, and rule consistency;
- confirm whether processing completed successfully or partially failed.

## Validation checklist

Use this checklist before closing the execution:

- the process ran in the correct environment;
- filters and parameters were checked;
- the result matches the period and scenario;
- records were reviewed through sampling or reconciliation;
- logs were reviewed;
- discrepancies were assessed and addressed;
- functional approval was recorded when required.

## Common issues

### The process will not start

Check:

- profile and access permissions;
- selected environment;
- dependencies in the process or related module;
- status of the integration or service involved.

### The result is unexpected

Check:

- parameters for the step that ran;
- applied filters;
- reconciliation of source data;
- records that may have been excluded, skipped, or duplicated.

### Processing failed partway through

For incomplete processing:

- identify the failed stage;
- confirm whether rollback occurred or residual processing remains;
- recheck the prior state and affected records;
- reprocess only with approval from the responsible business team.

## Operating practices

- Never run STEP in production before validating the scenario.
- Keep a record of the parameters and result.
- Document adjustments and rule exceptions.
- Review logs and reports after each run.
- Avoid ad hoc changes without functional approval.
- Preserve execution history for audit and support.

## Support and governance

Operate STEP according to the environment's standards and business process. If the calculation rule, data impact, or production behavior is unclear, follow the official procedure of the responsible team and consult support or maintenance as needed.

## Knowledge-transfer items to confirm

The following details depend on environment-specific knowledge and must be confirmed before production use:

- the organization's STEP execution standard;
- parameters used for each process and scenario;
- business rules and exceptions;
- functional owners for each stage;
- approved reprocessing and rollback procedures.

## Related documents

- [STEP practical user guide](practical-user-guide.md)
- [Learning path](../17-learning-path.md)
- [Troubleshooting](../13-troubleshooting.md)

## Source

This guide was compiled as an internal operational and support reference from available STEP materials. It has not been validated in a supported environment.

The content was consolidated from internal materials, operating procedures, and support guidance related to STEP. It has been adapted for practical use and must be confirmed against the standards and rules of the target environment.

Source document: *FIS-STEP Generic - User Guide.pdf*.
