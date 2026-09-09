# Allocation Rules (AR) — Support Guide

> Initial baseline built from the Investran materials supplied to this repository. Confirm environment-specific procedures during KT before any production change.

## Purpose

This document set supports the analysis and maintenance of **Allocation Rules** in Investran. Its goal is not to catalog every existing rule, but to provide a safe method to find, understand, test, and diagnose an unknown rule.

## Concept

Allocation Rules define how a transaction value, profit, expense, gain, loss, or share quantity is distributed among investors associated with a Legal Entity.

A rule can produce:

- Percentages by investor.
- Values by investor.
- Quantities by investor.
- Resulting aggregations at Vehicle and Legal Entity level.

## Documented classifications

### Static Allocation Rules

These use fixed percentages stored in a table for investors. The conceptual material states that they are maintained through the **Static Allocation Rules** tool in Portfolio & Investor Manager. In a normal Investran scenario, this type of rule rarely causes a problem.

### Dynamic Allocation Rules

These calculate percentages from data available at execution time. Documented examples include:

- By Average Cash Balance
- By Commitment & Closing Date
- By Commitment (No Date)
- By Specific Closing Date Commitment
- By Unfunded Commitment
- Investment Cost (As of GL Date)
- Management Fees — inside investment period
- Management Fees — outside investment period

### Top Down and Bottom Up

**Top Down** starts with a value at Legal Entity level and distributes it across investors by a rule or percentage table. **Bottom Up** defines or calculates values at investor level and then aggregates them to Vehicle and Legal Entity.

## Related components

```mermaid
flowchart LR
    TX[Transaction / Batch] --> AR[Allocation Rule]
    AR --> INV[Investor Allocations]
    INV --> VEH[Vehicle Totals]
    VEH --> LE[Legal Entity Totals]
    AT[Active Template] -->|Allocation Rule ID| AR
    RW[Report Wizard / Metadata] -->|Lookup and validation| AR
```

## Transaction allocation methods

| ID | Rule | Description |
|---:|---|---|
| 0 | Non-Dominant | Uses the allocation of the dominant transaction. |
| 1 | No Allocation | No values are allocated to investors. |
| 2 | User Provided | The user enters the allocation manually. |
| 3 | AR | The user selects the allocation to calculate investor allocations automatically. |

These IDs appear as example constants in the ATM guide. Confirm behavior and identifiers in the installed version before using them.

## ARM permissions

- **ARM Admin:** Create, edit, run, and delete Allocation Rules in Allocation Rule Manager.
- **ARM User:** Run Allocation Rules in Allocation Rule Manager.

Without the right permissions, an access issue can look like a rule defect.

## Module documents

- [ARM practical guide](guia-pratico-arm.md): navigation, components, creation, execution, validation, and publication with tool screenshots.
- [ARM interface and lifecycle](arm-interface-and-lifecycle.md)
- [Object model and technical contracts](object-model.md)
- [Architecture and flow](architecture.md)
- [Rule anatomy](anatomy.md)
- [Types and methods](types-and-methods.md)
- [Development and change](development.md)
- [Maintenance guide](maintenance-guide.md)
- [Troubleshooting and playbooks](troubleshooting.md)
- [KT pending](KT-PENDENCIAS.md)

## Support principle

When receiving an incident, do not start by changing the rule. First confirm:

1. Which AR ran.
2. Which Legal Entity and investors were in context.
3. Which dates and values were used.
4. Whether the error is in investor selection, ratio calculation, or result consumption.
5. Whether AR is the cause or received incorrect data from an AT, Batch, Report Wizard, or configuration.

## Sources

- *Investran 7 Developer's Guide to Allocation Rule Manager* (2014-10-17).
- *Investran Conceptual Design Document*, section 3.6 — Investor Allocation Rules.
- *Developer's Guide to Active Template Manager*, VBA, development, and troubleshooting sections.
- *Accounting Supplemental Training Materials*, batch and investor-allocation sections.

## What the ARM manual confirms

The ARM guide documents interface, attributes, properties, parameters, reports, states, simulation, simple and complex rules, VBA, `RWReport`/`InvestorSet`/`AllocationRule` objects, and Import-Export Console use.

It does not confirm each organization's approval, promotion, rollback, customized-rule, owner, baseline, or business-validation process. Those items remain mandatory KT.
