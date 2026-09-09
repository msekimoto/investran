# Deployment, maintenance release, and upgrade

## Source principles

Maintenance packages are cumulative and must be validated with the supplied hash. FIS recommends testing first and keeping components compatible. The documented order starts with the database; customizations may need repackaging/recompiling according to release notes.

## Decision sequence

1. Confirm source/target version, compatibility, and release notes.
2. Inventory customizations, integrations, AT/AR/reports/BE, and SDK assemblies.
3. Define the window, approvals, communication, and abort criteria.
4. Validate package/checksum and prerequisites.
5. Create a coherent Master/Staging backup and test applicable recovery.
6. Stop users/processes as planned.
7. Update the database before servers/workstations using the version runbook.
8. Import required system packages.
9. Restart/reactivate components in a controlled way.
10. Run smoke tests, regression tests, and business reconciliation.

## Rollback

Rollback is not only reinstalling an earlier binary. It can require coordinated recovery of databases, applications, packages, and configuration. Define the point of no return before the window and do not create new transactions during an incompatible recovery.

## Artifacts

The sources describe `.CAB` files for Active Templates/Allocation Rules and `.IED` files for Reporting Services/Report Wizard/Crystal packages. Business Event templates follow a separate procedure. Confirm formats and tools for the installed version.

## KT pending

- Internal change/release process and owners.
- Current version, MR/hotfix history, and baseline.
- Customizations that need recompilation.
- Tested regression and rollback procedure.
- Maintenance windows and FIS/infrastructure/DBA communication.

## Sources

- *Internal_Inv7_INV_Maint_Process.pdf*, pages 3-15.
- *Internal_Inv7_Investran Upgrade User Guide.pdf*, pages 1-75.
- *Internal_Inv7_INV_Release_Notes_7.pdf*, pages 1-40.
