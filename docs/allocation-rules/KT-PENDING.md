# Allocation Rules - outstanding Knowledge Transfer items

The standard ARM manual already documents the interface, attributes, `Draft` -> `Normal` lifecycle, simple/complex rules, VBA, simulation, object model, and Import-Export Console. This list focuses on knowledge that remains specific to each environment.

## 1. Access and environments

- [ ] ARM installation path/shortcut in each environment;
- [ ] ARM version and compatibility with Investran/MR;
- [ ] groups and procedure for requesting `ARM Admin` and `ARM User`;
- [ ] service accounts used by automations;
- [ ] configuration differences between DEV, UAT, and PROD.

## 2. Rule inventory

For each critical rule, obtain:

- [ ] name and identifier;
- [ ] status, Top Down/Bottom Up, and Use VBA;
- [ ] functional and technical owners;
- [ ] Legal Entities and processes supported;
- [ ] properties, parameters, reports, and VBA references;
- [ ] consumers: Accounting, Active Template, Batch, BE, job, or integration;
- [ ] volume, frequency, and criticality;
- [ ] last change and reason.

## 3. Development conventions

- [ ] naming standards for rules, reports, parameters, and UDFs;
- [ ] Public Read-only folder used by driver reports;
- [ ] policy for `Locked`, `Notes`, and `Allow performance optimization`;
- [ ] approved VBA libraries/references;
- [ ] standard error handling and logging;
- [ ] rules for null Investor, GP/LP, rounding, and tolerance;
- [ ] configurable values and UDFs used by the rules.

## 4. Testing and functional validation

- [ ] representative test data and safe Legal Entities;
- [ ] reference cases with expected results;
- [ ] tolerances for Amount, LEAmount, and Quantity;
- [ ] evidence required for approval;
- [ ] person responsible for financial reconciliation;
- [ ] integrated AT/Batch tests after simulation in ARM;
- [ ] duration and volume baselines.

## 5. Promotion

Although the product provides the Import-Export Console, the following must be documented:

- [ ] console path and version;
- [ ] selection of the rule and related reports;
- [ ] package format/location;
- [ ] dependency order;
- [ ] handling of IDs and conflicts at the destination;
- [ ] approvals and segregation of duties;
- [ ] maintenance window and communication;
- [ ] post-import validation;
- [ ] need for Refresh, cache handling, or restart.

## 6. Rollback

- [ ] how to preserve the last approved version;
- [ ] whether rollback uses reimport, duplication, or changing the rule used by the consumer;
- [ ] restrictions when the rule is already in use;
- [ ] how to handle transactions generated during the window;
- [ ] criteria for aborting or reverting;
- [ ] required reconciliation after rollback.

## 7. Troubleshooting and support

- [ ] location of useful logs and events;
- [ ] how to debug VBA in the installed version;
- [ ] known errors and workarounds;
- [ ] queries/reports to identify the rule and InvestorSet used in execution;
- [ ] procedure when a rule is locked by another developer;
- [ ] procedure when a rule in use needs to change;
- [ ] contacts for DBA, infrastructure, functional support, development, and FIS;
- [ ] severity and SLA for allocation incidents.

## 8. Practical questions for the KT session

1. Show a simple rule and a complex rule used in production.
2. Show how to identify all consumers of a rule.
3. Run a simulation and explain each property and parameter.
4. Show the driver report and reconcile its four columns.
5. Walk through a real `Sub Main` and how `AllocationRule.Results` is populated.
6. Trigger a controlled error and show where it appears.
7. Demonstrate export in DEV and import in UAT.
8. Demonstrate rollback of the last actual change.
9. Explain a past incident, its root cause, and prevention.
10. Show how to validate cache/performance optimization when ATM calls the rule.

## 9. Evidence to obtain from KT

- sanitized screenshots of the workflows;
- catalog of rules and consumers;
- example promotion package without sensitive data;
- test matrix and expected results;
- links to previous tickets/releases;
- log locations and approved queries;
- owners and escalation matrix;
- runbook reviewed against a real case.

## Completion criterion

ARM KT is complete only when you can independently:

1. identify the executed rule and its consumers;
2. explain properties, parameters, reports, and VBA;
3. reproduce an execution in ARM;
4. reconcile the InvestorSet;
5. distinguish rule issues from input context issues;
6. promote in a non-production environment;
7. validate and revert following the organization's internal process.

## References

- [ARM interface and lifecycle](arm-interface-and-lifecycle.md)
- [Object model and technical contracts](object-model.md)
- [Development and changes](development.md)
- [Troubleshooting and playbooks](troubleshooting.md)
