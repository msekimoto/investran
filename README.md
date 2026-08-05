# Investran - Base de conhecimento de manutenção e suporte

Base operacional para sustentação do Investran 7. O conteúdo foi consolidado a partir dos manuais FIS/SunGard disponíveis, sem incluir cópias desses documentos, credenciais ou dados de produção.

> **Regra de confiança:** os manuais de referência são antigos (principalmente 2014-2017). Confirme versão, configuração e procedimento no ambiente Goldman Sachs antes de executar qualquer ação. Campos `KT pendente` identificam conhecimento que precisa ser obtido com a equipe.

## Comece por aqui

1. [Visão geral e mapa de componentes](docs/01-visao-geral.md)
2. [Arquitetura e ambientes](docs/02-arquitetura-e-ambientes.md)
3. [Operação, criticidade e calendário](docs/03-operacao-e-calendario.md)
4. [Troubleshooting](docs/13-troubleshooting.md)
5. [Lacunas de KT e plano de transferência](docs/16-plano-de-kt.md)

## Conhecimento técnico

| Área | Guia | Cobertura atual |
|---|---|---|
| Active Templates | [ATM](docs/active-templates/README.md) | Estrutura, desenvolvimento, execução, debug e publicação |
| Allocation Rules | [ARM](docs/allocation-rules/README.md) | Regras estáticas/dinâmicas, Top Down/Bottom Up e validação |
| Batches e scheduler | [Batches, jobs e scheduler](docs/06-batches-jobs-scheduler.md) | Ciclo, serviços, validação e recuperação segura |
| Report Wizard e Crystal | [Reporting](docs/07-report-wizard-e-crystal.md) | Componentes, integração, parâmetros e diagnóstico |
| APIs, SDK e WRS | [Integrações programáticas](docs/08-apis-sdk-wrs.md) | WCF/SOAP, DTOs, operações e Web Reporting Services |
| Database | [Banco de dados](docs/09-database.md) | Master/Staging, manutenção, backup, performance e cautelas |
| Interfaces | [Data Import e interfaces](docs/10-data-import-e-interfaces.md) | XLSX, jobs, reconciliação e integrações |
| Configurações e acessos | [Administração e segurança](docs/11-configuracoes-seguranca-sso.md) | Team Security, contas de serviço, IIS e SSO |
| Deploy e upgrade | [Mudanças e releases](docs/12-deploy-upgrade.md) | Sequência, pré-checks, backup, validação e rollback decisório |
| Business Events | [Business Events e Partner Transfer](docs/14-business-events.md) | Configuração, logs e fluxo funcional de Partner Transfer |

## Runbooks

- [Triagem de incidente](runbooks/incidente.md)
- [Falha de batch/job](runbooks/falha-batch-job.md)
- [Falha de relatório](runbooks/falha-reporting.md)
- [Falha de Business Event](runbooks/falha-business-event.md)
- [Deploy/manutenção](runbooks/deploy-manutencao.md)

## Governança

- [Catálogo e rastreabilidade das fontes](docs/15-catalogo-de-fontes.md)
- [Regras de contribuição](CONTRIBUTING.md)
- [Tratamento de informação sensível](SECURITY.md)
- [Template de componente](templates/componente.md)
- [Template de runbook](templates/runbook.md)
- [Template de sessão de KT](templates/knowledge-transfer.md)

## Estado da documentação

Esta primeira versão documenta o **produto padrão** a partir das fontes disponíveis. Ela não confirma a topologia, nomes de servidores, credenciais, customizações, jobs, volumes, SLAs ou contatos da Goldman Sachs. Use o [plano de KT](docs/16-plano-de-kt.md) para completar essas lacunas.
