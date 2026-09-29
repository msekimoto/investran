# STEP Practical User Guide

> **Document control:** Status: KT pending · Technical/functional owners: to be confirmed · Scope: source material only; validate the installed version and environment · Last validation: not validated locally · Next review: after controlled validation or any STEP process change · Evidence: sanitized ticket/change and reconciled result.

This document complements the STEP overview with an operational walkthrough for users who need to run the functionality safely.

## Purpose

STEP supports a processing stage with defined parameters, result review, and consistency checks before production use is finalized.

## Intended users

This guide is for:

- Investran users who run STEP;
- support analysts;
- operations teams;
- people responsible for process and report validation.

## Recommended procedure

### 1. Confirm the context

Before starting, confirm:

- which process or scenario is being run;
- the reference period;
- that the expected result has been agreed in advance;
- any rules specific to the entity, portfolio, or transaction involved.

### 2. Open the functionality

- Open the Investran module used for STEP.
- Select the correct environment.
- Confirm the entity, scenario, and available operation.

### 3. Set filters and parameters

Carefully review the process fields:

- activity or stage to process;
- data source or record population;
- filters for accounts, funds, investors, periods, or rules;
- validation and processing options.

### 4. Run the process

- Select the command to run or start the process.
- Monitor progress messages and alerts.
- If an error appears, stop and investigate it before resuming.

### 5. Validate the system response

Validation should cover:

- whether the expected record exists;
- whether counts and amounts are reasonable;
- whether the final process status is expected;
- whether logs, reports, and monitoring controls show any inconsistency.

### 6. Record the result

Record:

- execution date and time;
- scenario or case run;
- parameters used;
- result;
- any need for reprocessing or review.

## Execution checklist

- correct environment;
- permissions confirmed;
- data and parameters reviewed;
- expected result defined;
- execution monitored;
- validation completed;
- record and approval completed, if applicable.

## Risk conditions

Avoid running STEP when:

- the functional team has not validated the scenario;
- data is pending or inconsistent;
- parameters are too generic for the case;
- no one responsible for the operation is available to monitor it.

## Quick diagnosis

If the process does not produce the expected result, review in this order:

1. credentials and permissions;
2. environment and process context;
3. input filters and parameters;
4. system logs and alerts;
5. consistency of source data;
6. whether functional adjustment or approved reprocessing is needed.

## Source

This guide was consolidated from internal materials, operating procedures, and support guidance related to STEP. Confirm it against the standards and rules of the target environment.

Source document: *FIS-STEP Generic - User Guide.pdf*.
