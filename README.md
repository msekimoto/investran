# Investran - Base de conhecimento de manutenção e suporte

Base operacional para sustentação do Investran 7. O conteúdo foi consolidado a partir dos manuais FIS/SunGard disponíveis, sem incluir cópias desses documentos, credenciais ou dados de produção.

## Wiki navegável

A documentação também pode ser consultada em uma aplicação Vue, com navegação por assunto, busca em todo o conteúdo, índice da página e renderização dos diagramas Mermaid.

- Em desenvolvimento: execute `npm install` e `npm run dev`.
- Build local: execute `npm run build` e `npm run preview`.
- Publicação: o workflow `Publicar wiki` reconstrói o GitHub Pages a cada alteração de Markdown enviada à branch `main`.

A própria árvore de arquivos é o catálogo da wiki. Novos documentos adicionados a `docs/`, `runbooks/` ou `templates/` são incluídos automaticamente no próximo build, sem manter uma segunda lista manual.

> **Regra de confiança:** os manuais de referência são antigos (principalmente 2014-2017). Confirme versão, configuração e procedimento no ambiente atual antes de executar qualquer ação. Campos `KT pendente` identificam conhecimento que precisa ser obtido com a equipe.

## Comece por aqui

1. [Trilha de aprendizado](docs/17-trilha-de-aprendizado.md)
2. [Entidades e relacionamentos](docs/dominio/01-entidades-e-relacionamentos.md)
3. [Arquitetura lógica e componentes](docs/arquitetura/01-arquitetura-logica.md)
4. [Visão geral e mapa de componentes](docs/01-visao-geral.md)
5. [Arquitetura e ambientes](docs/02-arquitetura-e-ambientes.md)
6. [Operação, criticidade e calendário](docs/03-operacao-e-calendario.md)
7. [Troubleshooting](docs/13-troubleshooting.md)
8. [Lacunas de KT e plano de transferência](docs/16-plano-de-kt.md)

## Conhecimento técnico

| Área | Guia | Cobertura atual |
|---|---|---|
| Active Templates | [ATM](docs/active-templates/README.md) | Estrutura, desenvolvimento, execução, debug e publicação |
| Allocation Rules | [ARM](docs/allocation-rules/README.md) | Regras estáticas/dinâmicas, Top Down/Bottom Up e validação |
| Batches e scheduler | [Batches, jobs e scheduler](docs/06-batches-jobs-scheduler.md) | Ciclo, serviços, validação e recuperação segura |
| Report Wizard e Crystal | [Reporting](docs/07-report-wizard-e-crystal.md) | Componentes, integração, parâmetros e diagnóstico |
| APIs, SDK e WRS | [Integrações programáticas](docs/08-apis-sdk-wrs.md) | WCF/SOAP, DTOs, operações e Web Reporting Services |
| Database | [Banco de dados](docs/09-database.md) | Master/Staging, manutenção, backup, performance e cautelas |
| Application Services | [Application Server e Services](docs/application-services/README.md) | Catálogo de Windows services, finalidade, operação, monitoramento e restart seguro |
| Interfaces | [Data Import e interfaces](docs/10-data-import-e-interfaces.md) | XLSX, jobs, reconciliação e integrações |
| Data Import - guia completo | [Data Import](docs/data-import/README.md) | Serviço, templates, mappings, jobs, entidades, reconciliação e troubleshooting |
| Configurações e acessos | [Administração e segurança](docs/11-configuracoes-seguranca-sso.md) | Team Security, contas de serviço, IIS e SSO |
| Deploy e upgrade | [Mudanças e releases](docs/12-deploy-upgrade.md) | Sequência, pré-checks, backup, validação e rollback decisório |
| Business Events | [Business Events e Partner Transfer](docs/14-business-events.md) | Configuração, logs e fluxo funcional de Partner Transfer |
| Business Events - guia completo | [Business Events](docs/business-events/README.md) | Arquitetura, deployment, configuração, operação, Partner Transfer e troubleshooting |

## Mapas de entendimento

- [Fundos, investidores e investimentos](docs/dominio/02-fundos-investidores-investimentos.md)
- [Ciclo contábil e batches](docs/dominio/03-ciclo-contabil-e-batches.md)
- [Application Server, workers e scheduler](docs/arquitetura/02-application-server.md)
- [Fluxos ponta a ponta](docs/arquitetura/03-fluxos-ponta-a-ponta.md)
- [Arquitetura de reporting](docs/reporting/01-arquitetura-reporting.md)
- [API e SDK em profundidade](docs/integracoes/01-api-e-sdk.md)

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

Esta primeira versão documenta o **produto padrão** a partir das fontes disponíveis. Ela não confirma a topologia, nomes de servidores, credenciais, customizações, jobs, volumes, SLAs ou contatos do ambiente atendido. Use o [plano de KT](docs/16-plano-de-kt.md) para completar essas lacunas.
