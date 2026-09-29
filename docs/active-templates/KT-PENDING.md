# Active Templates - outstanding Knowledge Transfer items

The standard manual already explains the interface, menus, VBA Editor, Simulation, Scheduler, Preview, and Commit. This list focuses on what needs to be gathered about the supported environment.

## 1. Where to access it

- [ ] server/workstation and ATM path in DEV, UAT, and PROD;
- [ ] ATM version and maintenance release;
- [ ] databases and visual environment identification;
- [ ] entitlements to view, edit, simulate, run, and promote;
- [ ] access provisioning process and owner.

## 2. Template inventory

For each critical AT:

- [ ] name, ID, Batch Type, owner, and criticality;
- [ ] functional process and calendar;
- [ ] parameters and defaults;
- [ ] Driver/Auxiliary Reports;
- [ ] JE/Transaction tree;
- [ ] implemented VBA events;
- [ ] Allocation Rules and UDFs;
- [ ] consumers and schedules;
- [ ] baseline for rows, batches, duration, and volume.

## 3. Editing and saving conventions

- [ ] standard for duplicating and naming copies;
- [ ] when to use `Locked`;
- [ ] required Notes and Description content;
- [ ] where to export code/definitions for version control;
- [ ] allowed VBA references;
- [ ] policy for `Ignore Errors`;
- [ ] required review after reordering JE/TX;
- [ ] owner who approves changing to `Normal`.

## 4. Debugging

- [ ] safe AT for training;
- [ ] demonstration of breakpoints, Watch, Immediate, and Stack;
- [ ] standardized log messages;
- [ ] Scheduler/Application Server log locations;
- [ ] correlation between ticket, Process ID, user, and batch;
- [ ] procedure for a stuck process or cancellation.

## 5. Scheduler and Staging

- [ ] service names and hosts;
- [ ] polling frequency and queues;
- [ ] service account identity and credential vault;
- [ ] Staging database for each environment;
- [ ] approved dashboards/queries;
- [ ] Staging retention and cleanup;
- [ ] authorization for restart/cancellation;
- [ ] handling of generated, uncommitted batches.

## 6. Promotion

- [ ] ARM & ATM Export-Import Console version/path;
- [ ] package contents and separate dependencies;
- [ ] source, target, and import order;
- [ ] ID and conflict handling;
- [ ] approvals, tickets, and change windows;
- [ ] post-import validation and Refresh;
- [ ] smoke test in the target.

## 7. Rollback

- [ ] storage of the last approved version;
- [ ] step-by-step reimport/restore procedure;
- [ ] coordinated rollback of reports, parameters, and rules;
- [ ] criteria for stopping executions;
- [ ] handling of batches already committed;
- [ ] owner who approves accounting reversal/rebook.

## 8. Required hands-on session

Ask a colleague to demonstrate the following, recording sanitized evidence:

1. locate a real AT;
2. explain the entire tree;
3. duplicate it and keep a copy in Draft;
4. change a Parameter and mapping;
5. change/save VBA;
6. change a driver and run Refresh;
7. simulate with a breakpoint and Debug Log;
8. run through the Scheduler with Preview;
9. promote DEV -> UAT;
10. perform a training rollback;
11. analyze a historical incident.

## Completion criterion

KT is complete when you can independently:

- locate and explain a critical AT;
- identify where a change should be made;
- change and confirm that each component was saved;
- simulate and debug;
- run through the Scheduler without automatic commit;
- reconcile Preview;
- promote and roll back in a non-production environment;
- escalate with logs, Process ID, and sufficient evidence.

## References

- [Interface, access, and navigation](01-interface-access-navigation.md)
- [Structure and operation](02-structure-and-operation.md)
- [Editing, saving, and publishing](03-editing-saving-publishing.md)
- [Debugging, execution, Preview, and Commit](04-debug-execution-preview-commit.md)
