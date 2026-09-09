# Business Events (BE)

Business Events are business-oriented processes run by the web layer and Investran services. They combine a configuration interface, an imported template, domain rules, Investran API access, and—depending on the event—Report Wizard reports, Allocation Rules, database scripts, and batch generation.

This section organizes the knowledge needed to deploy, configure, run, and support Business Events.

## Guides

1. [Business Events practical guide](guia-pratico-business-events.md)
2. [Partner Transfer in depth](partner-transfer.md)
3. [Troubleshooting and recovery](troubleshooting.md)
4. [Earlier summary: Business Events and Partner Transfer](../14-business-events.md)

## What the manuals confirm

- BE templates are distributed as `.ZIP` files.
- Import occurs in Investran Web under **Events & Imports > Business Events > Import Templates**.
- Add and edit permissions are required in the Business Event module.
- A BE can depend on SQL scripts, `.CAB` or `.IED` reports, Report Wizard, and Allocation Rules.
- The architecture has client/web and server components connected through the Enterprise Service Bus.
- The maintenance documentation lists `Equity Pickup`, `Fund Valuation`, `LP Capital Event`, and `Partner Transfer` as system Business Events for that version.

This is a catalog for that maintenance release, not proof that those are the only BEs installed in the current environment.

## Operating rule

Treat a BE as a dependency chain, not only as a template. Before running or publishing a change, identify the template, version, reports, rules, scripts, service account, affected entities, and artifacts that can be written.

## Priority KT

- Inventory of installed BEs, versions, and owners.
- Purpose and operating window of every event.
- Parameters and business validations.
- Reports, Allocation Rules, scripts, and hierarchies in use.
- Services, accounts, and servers involved.
- Generated batches, entries, and files.
- Approved reprocessing and rollback procedure.
- Recurring incidents and escalation criteria.
