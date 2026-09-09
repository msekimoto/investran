# Report Wizard, Crystal Reports, and Web Reporting Services

This area brings together Investran reporting material. For operational support, start with the architecture guide and then use the specific report, WRS, Crystal, or incident guide.

## Where to find a quick answer

- [Reporting architecture](reporting/01-arquitetura-reporting.md): foundations and where a failure sits in the chain.
- [Report Wizard - development and operations](reporting/02-report-wizard-desenvolvimento-operacao.md): creation, parameters, maintenance, and diagnosis.
- [Web Reporting Services](reporting/03-web-reporting-services.md): publication, security, services, integrators, and formats.
- [Report Wizard practical guide](reporting/guia-pratico-report-wizard.md): daily workflows and validation.
- [WRS practical guide](reporting/guia-pratico-reporting-services.md): web-service operations and support.
- [Reporting failure runbook](../runbooks/falha-reporting.md): actions for real incidents.

## Quick decision

| Situation | Recommended guide |
|---|---|
| Report returns no data or an incorrect result | [Report Wizard - development and operations](reporting/02-report-wizard-desenvolvimento-operacao.md) |
| WRS authentication, publication, or output failure | [Web Reporting Services](reporting/03-web-reporting-services.md) |
| Crystal layout, section, or presentation problem | [Report Wizard practical guide](reporting/guia-pratico-report-wizard.md) |
| Active incident with business impact | [Reporting failure runbook](../runbooks/falha-reporting.md) |

## Golden rule

A change to a report's form, parameter, filter, version, or cardinality can affect ATM, ARM, WRS, Business Events, and integrations. Always validate the change in a safe environment and test every consumer before publishing.

## Minimum checklist before changing a report

1. Identify the book, report, and owner.
2. Check who consumes it.
3. Save the last valid version.
4. Validate parameters, filters, and volume.
5. Test in a controlled environment.
6. Confirm rollback and reconciliation.

## KT pending

- List of critical reports and owners.
- Security levels and WRS filters.
- Endpoints and certificates by environment.
- Volume, SLA, and performance baseline.
