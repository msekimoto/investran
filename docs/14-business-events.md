# Business Events and Partner Transfer

> For step-by-step architecture, import, configuration, operations, and diagnosis, see [Business Events](business-events/README.md), the [practical guide](business-events/guia-pratico-business-events.md), the [Partner Transfer guide](business-events/partner-transfer.md), and [troubleshooting](business-events/troubleshooting.md).

## Business Events

Templates are published through Investran Web. For a newly added template that has never executed correctly, confirm a version compatible with the maintenance release and `Active` status. Internal material advises restarting the web deployment service after activation; confirm current impact and procedure before doing so.

Available notes identify logs on two sides:

- Web Server: installation log folder, file named with the BE and date.
- Application Server: BE-account profile, under `AppData\Local\Business Events\Logs`, with GUID/name/date.

Exact paths vary and must be inventoried.

## Partner Transfer (PT BE)

PT BE manages ownership transfer within or across Fund Family entities, by percentage or commitment amount. The guide distinguishes the effective-date method for historical dates from the non-effective-date method aggregated on the transfer date. It creates reversals for the transferor and rebooking for transferee(s), using driver reports and exclusion configurations/hierarchies.

### Essential pre-checks

- Investors/vehicles and relationships configured.
- Transactions completed through the transfer date.
- Excluded account/transaction-type hierarchies reviewed.
- Method, parameters, and percentages approved.
- Pre-transfer balance reports reconciled.
- Memo transaction-type and UDF impact understood.

### Post-checks

- Generated batch, status, and lock.
- Reversal and rebooking by investor/deal.
- Totals, currencies, quantities, GL/effective dates.
- UDFs and included/excluded fields for the version.
- Before/after balances and functional approval.

## Warning

The guide mentions unlocking by deleting a footprint through SQL. This is an invasive action and **not an authorized runbook**. Consider it only with a current official procedure, approval, backup, and FIS/DBA involvement where applicable.

## KT pending

- BEs used by the organization and their versions.
- Customized parameters, hierarchies, and reports.
- Reprocessing and footprint handling.
- Functional owners and reconciliation cases.

## Sources

- *GFT Business Events Troubleshooting Guide.docx*.
- *PT BE Guidebook_2018.06.29.docx*.
- *Internal_Inv7_Partner.Transfer.Instructions.pdf*.
- *Internal_Inv7_INV_Maint_Process.pdf*, Business Event deployment checklists.
