# Investran - Maintenance and Support Knowledge Base

This is an operational knowledge base for supporting Investran 7. It summarizes the available FIS/SunGard manuals without copying those documents or including credentials or production data.

## Browseable wiki

The wiki is organized by subject and support lifecycle. It provides search and links between related documents. New files in `docs/`, `runbooks/`, and `templates/` are added to the application navigation automatically.

- Local development: run `npm install` and `npm run dev`.
- Build: run `npm run build`.
- Preview: run `npm run preview`.

## Start with the right path

1. [Learning path](docs/17-trilha-de-aprendizado.md)
2. [Overview and component map](docs/01-visao-geral.md)
3. [Architecture and environments](docs/02-arquitetura-e-ambientes.md)
4. [Entities and relationships](docs/dominio/01-entidades-e-relacionamentos.md)
5. [Logical architecture and components](docs/arquitetura/01-arquitetura-logica.md)
6. [Operations, criticality, and calendar](docs/03-operacao-e-calendario.md)
7. [Troubleshooting](docs/13-troubleshooting.md)
8. [KT plan and gaps](docs/16-plano-de-kt.md)
9. [Quick operations and on-call guide](docs/18-operacao-rapida.md)
10. [Operational glossary](docs/19-glossario.md)

## Browse by area

### Foundations and operations

- [Overview](docs/01-visao-geral.md)
- [Architecture and environments](docs/02-arquitetura-e-ambientes.md)
- [Operations, criticality, and calendar](docs/03-operacao-e-calendario.md)
- [Batches, jobs, and scheduler](docs/06-batches-jobs-scheduler.md)
- [Database](docs/09-database.md)

### Main modules

- [ATM](docs/active-templates/README.md)
- [Allocation Rules](docs/allocation-rules/README.md)
- [Report Wizard and Crystal](docs/07-report-wizard-e-crystal.md)
- [API, SDK, and WRS](docs/08-apis-sdk-wrs.md)
- [Data Import and interfaces](docs/10-data-import-e-interfaces.md)
- [Application Server and Services](docs/application-services/README.md)
- [Business Events](docs/14-business-events.md)

### Diagnosis and governance

- [Troubleshooting](docs/13-troubleshooting.md)
- [Runbooks](runbooks/incidente.md)
- [Source catalog](docs/15-catalogo-de-fontes.md)
- [Quick operations and on-call guide](docs/18-operacao-rapida.md)
- [Operational glossary](docs/19-glossario.md)
- [Contribution rules](CONTRIBUTING.md)
- [Sensitive information policy](SECURITY.md)

## Documentation status

This knowledge base covers the standard product and documented operating practices. It does not replace knowledge of the supported environment. Information that still needs confirmation through knowledge transfer is marked as `KT pending` and must be validated before any production action.
