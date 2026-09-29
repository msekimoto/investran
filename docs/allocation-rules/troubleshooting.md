# Allocation Rules — Troubleshooting and Playbooks

## Using this document

Choose the symptom closest to the incident. Reproduce the scenario in a controlled environment and record evidence before changing the rule.

---

## Playbook 1 — Allocated total does not reconcile to the transaction total

### Checks

1. compare transaction `Amount` and `LEAmount` with the sum of the results per investor;
2. confirm scales and decimal places;
3. check rounding differences;
4. confirm whether a non-dominant transaction is responsible for balancing;
5. check whether the AT changes values before or after the AR runs;
6. identify investors excluded because of zero value, date, or eligibility;
7. confirm whether `NULL` values exist.

### Possible causes

- rounding without residual handling;
- different investor universes used for calculation and validation;
- rule applied to the wrong transaction template;
- value changed by VBA after allocation;
- rebook logic not rebalanced;
- local amount and LE amount calculated with different scales.

### Closure evidence

- investor sum equals the total within the approved tolerance;
- debits and credits balanced;
- before/after comparison report attached.

---

## Playbook 2 — Expected investor received no allocation

### Checks

1. confirm that the investor belongs to the correct Legal Entity;
2. confirm status and validity on the transaction date;
3. validate commitment, closing date, unfunded commitment, or the other base used;
4. check filters in the AR and the calling process;
5. confirm permissions/domain;
6. compare execution with a different date;
7. check whether the rule is static and whether the investor is in the percentage table.

### Possible causes

- closing date later than the date used by the rule;
- zero or missing commitment;
- investor outside the fund/vehicle universe;
- outdated static rule;
- filter by Deal/Position or Transaction Type;
- incorrect date parameter supplied by the Batch/AT.

---

## Playbook 3 — Ineligible investor received an allocation

### Checks

1. list the entire returned InvestorSet;
2. determine the condition that should exclude the investor;
3. check the closing date and participation period;
4. validate whether the rule used is `By Commitment (No Date)` when it should consider the date;
5. check whether the consumer replaced the expected rule;
6. confirm whether the investor is incorrectly included in a static allocation table.

### Safe action

Do not apply a manual correction only to the batch without understanding the cause. The same defect may affect other executions.

---

## Playbook 4 — Percentages are incorrect but add up to 100%

### Checks

- identify the mathematical base of the rule;
- capture base values for each investor;
- recalculate ratios outside Investran;
- confirm the date used to query the base;
- look for management fee overrides or investor-specific settings;
- validate whether the calculation uses commitment, called capital, invested capital, cash balance, or investment cost.

### Diagnosis

If ratios reproduced with the same base match, the AR may be correct and the functional expectation may be wrong. Confirm the business rule with the client.

---

## Playbook 5 — Allocation Rule works in ARM but fails in the Active Template

### Checks

1. confirm the Allocation Rule ID assigned by the AT;
2. look for changes to `Application.Context.AllocationRule`;
3. check whether the rule changes by `JEIndex` or `TXIndex`;
4. validate `Application.Context` values immediately before execution;
5. confirm whether the AT uses `User Provided` and populates the `InvestorSet` manually;
6. compare parameters and dates between ARM and ATM;
7. validate Driver Reports and Auxiliary Reports.

### Likely cause

The difference is usually in the context supplied by the consumer, not necessarily in the rule.

---

## Playbook 6 — NULL values for all Investor IDs in a GP Legal Entity

The ATM troubleshooting guide documents a scenario where a non-Draft GP Legal Entity transaction uses an Allocation Rule other than `No Allocation` or `Non-Dominant` and ends with `NULL` values for all Investor IDs.

### Documented procedure

1. run the AT in Simulation Mode;
2. place a breakpoint in `Application_AfterTransaction`;
3. check whether the code is allocating from the first element of the InvestorSet, described as the “unallocated investor”;
4. change the logic to allocate from the investors associated with the GP Legal Entity;
5. repeat the simulation and validate the InvestorSet.

---

## Playbook 7 — Rebook produced an unexpected distribution

### Checks

1. identify the original rule and the Rebook Allocation Rule;
2. confirm start date, end date, and subsequent close date;
3. validate which balances were included by GL Account, Transaction Type, Deal, Position, Investor, and Effective Date;
4. confirm whether attributes not carried over, such as Lot or Income Security, are relevant to the expected result;
5. compare the reversal and the new entry;
6. validate rounding of the non-dominant transaction.

The conceptual material states that the Subsequent Close AT can reverse balances and rebook them using a parameterized rule, often `By Commitment & Closing Date`.

---

## Playbook 8 — Result changes depending on the date

This may be expected behavior for Dynamic Allocation Rules.

### Checks

- which date the rule uses: Effective Date, GL Date, closing date, or a specific cutoff date;
- commitments valid on each date;
- investor closings;
- investment period;
- investment cost “as of GL Date”;
- changes in cash balance or unfunded commitment.

### Conclusion

Document the rule's reference date explicitly. Do not treat variation over time as a defect without confirming the business rule.

---

## Playbook 9 — Incorrect management fee

### Checks

1. determine whether the fund is within or outside the investment period;
2. confirm the expected base:
   - within the period: commitment;
   - outside the period: invested capital, according to the conceptual document;
3. confirm the fund-level rate;
4. confirm specific rates or overrides per investor;
5. validate effective dates;
6. confirm whether a custom management fee allocation rule exists.

---

## Playbook 10 — User cannot create or edit an AR

### Checks

- does the user have `ARM Admin`?
- do they only have `ARM User`?
- are they connected to the correct database/environment?
- is the rule a system rule or subject to editing restrictions?
- are there client-specific controls?

The supplied material establishes that `ARM Admin` allows creation, editing, execution, and deletion; `ARM User` allows execution.

---

## Quick diagnostic checklist

```text
[ ] Rule and ID confirmed
[ ] Environment confirmed
[ ] Legal Entity confirmed
[ ] Batch/JE/Transaction identified
[ ] Dates captured
[ ] Amount and LEAmount captured
[ ] InvestorSet exported
[ ] Calculation base identified
[ ] Sum and rounding validated
[ ] Calling component reviewed
[ ] Scenario reproduced in testing
[ ] Root cause recorded
```

## Information still requiring KT

- exact location of ARM logs;
- breakpoint/debug features available in the installed version;
- official AR export/import method;
- versioning mechanism;
- internal approval and deployment process;
- technical rollback supported in the environment.
