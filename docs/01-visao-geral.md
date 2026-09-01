# Visão geral e mapa de componentes

Esta página é o ponto de entrada da wiki: ela mostra como os módulos do Investran se conectam e para onde ir quando a dúvida for específica.

## Mapa operacional rápido

| Componente | Papel principal | Onde aprofundar |
|---|---|---|
| Web e autenticação | acesso ao sistema e controles de segurança | [Arquitetura e ambientes](02-arquitetura-e-ambientes.md) |
| ATM | geração e execução de batches a partir de templates | [ATM](active-templates/README.md) |
| Allocation Rules | distribuição de valores entre investidores | [Allocation Rules](allocation-rules/README.md) |
| Reporting | relatórios, filtros, Crystal e WRS | [Report Wizard e Crystal](07-report-wizard-e-crystal.md) |
| API e SDK | integração programática e contratos WCF | [API, SDK e WRS](08-apis-sdk-wrs.md) |
| Data Import | carga massiva em XLSX e reconciliação | [Data Import e interfaces](10-data-import-e-interfaces.md) |
| Application Server | schedulers, workers e serviços de execução | [Application Server e Services](application-services/README.md) |
| Business Events | processos automatizados e partner transfer | [Business Events](14-business-events.md) |

## Fluxo funcional do suporte

1. Identificar o canal afetado: web, batch, interface, report ou API.
2. Confirmar ambiente, database, usuário e permissões.
3. Isolar a camada: autenticação, IIS, scheduler/service, banco ou integração externa.
4. Localizar o módulo responsável e seguir o guia específico.
5. Validar o resultado antes de fechar o incidente.

## Próximos passos recomendados

- [Entidades e relacionamentos](dominio/01-entidades-e-relacionamentos.md)
- [Ciclo contábil e batches](dominio/03-ciclo-contabil-e-batches.md)
- [Arquitetura lógica](arquitetura/01-arquitetura-logica.md)
- [Fluxos ponta a ponta](arquitetura/03-fluxos-ponta-a-ponta.md)
- [Troubleshooting](13-troubleshooting.md)

## KT pendente

- versão e maintenance release do ambiente atendido;
- módulos licenciados e usados no cliente;
- customizações e nomes de servidores;
- owners de processo e critérios de escalonamento.
