# Operational glossary

The terms below describe how this knowledge base uses them. Confirm screen names, services, and versions in the environment before performing a procedure.

| Term | Practical meaning |
|---|---|
| AT / Active Template | An active template used to structure, run, or publish configurable processes and outputs. |
| ARM / Allocation Rules Manager | The allocation-rule set and its development, validation, and publication lifecycle. |
| Batch | A grouped process tracked by an identifier. Its result must be reconciled before a retry or reprocessing. |
| BE / Business Event | A configured event that starts or coordinates a business action. It can produce downstream effects and requires partial-state validation. |
| Cutoff | A time or condition after which operational or financial impact can change. The actual value is `KT pending`. |
| Sanitized evidence | A record that supports diagnosis or validation without exposing credentials, personal or financial data, or internal topology. |
| KT | Knowledge transfer. `KT pending` marks information that still needs confirmation with the responsible team. |
| Technical / functional owner | The role accountable for technical support or for the business-process decision and validation. |
| Reconciliation | A controlled comparison of counts, values, statuses, and downstream effects to confirm that a process completed correctly. |
| Retry / reprocessing | A new execution attempt. It is safe only after confirming the prior state, idempotency, and approval when duplicate-processing risk exists. |
| RW / Report Wizard | The component and definitions used for reports, parameters, filters, and reporting results. |
| SLA | A service commitment. Do not assume a value unless it is confirmed for the environment. |
| WRS / Web Reporting Services | The web-service layer for discovering and running reports. |

## Use of this glossary

If a term has a specific meaning in an environment, document it with its source, version, owner, and evidence in the related component or runbook. Do not replace a standard term with a local abbreviation without defining it here or in the document itself.
