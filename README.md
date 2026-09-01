# Investran - Base de conhecimento de manutenção e suporte

Base operacional para sustentação do Investran 7. O conteúdo foi consolidado a partir dos manuais FIS/SunGard disponíveis, sem incluir cópias desses documentos, credenciais ou dados de produção.

## Wiki navegável

A wiki é organizada por assunto e por ciclo de suporte, com busca e links cruzados entre os documentos. Novos arquivos em `docs/`, `runbooks/` e `templates/` entram automaticamente na navegação da aplicação.

- Local: execute `npm install` e `npm run dev`.
- Build: execute `npm run build`.
- Preview: execute `npm run preview`.

## Comece pelo caminho certo

1. [Trilha de aprendizado](docs/17-trilha-de-aprendizado.md)
2. [Visão geral e mapa de componentes](docs/01-visao-geral.md)
3. [Arquitetura e ambientes](docs/02-arquitetura-e-ambientes.md)
4. [Entidades e relacionamentos](docs/dominio/01-entidades-e-relacionamentos.md)
5. [Arquitetura lógica e componentes](docs/arquitetura/01-arquitetura-logica.md)
6. [Operação, criticidade e calendário](docs/03-operacao-e-calendario.md)
7. [Troubleshooting](docs/13-troubleshooting.md)
8. [Plano de KT e lacunas](docs/16-plano-de-kt.md)

## Navegação por área

### Fundamentos e operação
- [Visão geral](docs/01-visao-geral.md)
- [Arquitetura e ambientes](docs/02-arquitetura-e-ambientes.md)
- [Operação, criticidade e calendário](docs/03-operacao-e-calendario.md)
- [Batches, jobs e scheduler](docs/06-batches-jobs-scheduler.md)
- [Banco de dados](docs/09-database.md)

### Módulos principais
- [ATM](docs/active-templates/README.md)
- [Allocation Rules](docs/allocation-rules/README.md)
- [Report Wizard e Crystal](docs/07-report-wizard-e-crystal.md)
- [API, SDK e WRS](docs/08-apis-sdk-wrs.md)
- [Data Import e interfaces](docs/10-data-import-e-interfaces.md)
- [Application Server e Services](docs/application-services/README.md)
- [Business Events](docs/14-business-events.md)

### Diagnóstico e governança
- [Troubleshooting](docs/13-troubleshooting.md)
- [Runbooks](runbooks/incidente.md)
- [Catálogo de fontes](docs/15-catalogo-de-fontes.md)
- [Regras de contribuição](CONTRIBUTING.md)
- [Tratamento de informação sensível](SECURITY.md)

## Estado da documentação

A base atual traz o produto padrão e os padrões de operação documentados, mas não substitui o conhecimento do ambiente atendido. As informações que ainda dependem de KT ficam marcadas como `KT pendente` e devem ser validadas antes de qualquer ação em produção.
