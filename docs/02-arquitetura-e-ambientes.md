# Arquitetura e ambientes

Este documento serve como mapa dos componentes principais do Investran e do que precisa ser validado em cada ambiente antes de qualquer mudança.

## Visão de alto nível

A arquitetura típica combina:

- Web/IIS para autenticação e acesso;
- Application Server para schedulers, workers e serviços assíncronos;
- SQL Server com Master e Staging;
- Reporting, ATM, ARM, Data Import e Business Events como módulos de processamento;
- certificados, contas de serviço e MSMQ/RabitMQ/MSDTC como dependências críticas.

Para o desenho lógico completo, veja [Arquitetura lógica e componentes](arquitetura/01-arquitetura-logica.md).

## Checklist por ambiente

| Item | O que confirmar |
|---|---|
| Versão e MR | release instalada, hotfix e compatibilidade |
| Web e URLs | endpoints, IIS, app pools, certificados |
| SQL Server | Master, Staging, jobs, backups e restauração |
| Application Server | serviços, contas, logs e fila de execução |
| Schedulers | jobs ativos, dependências e agendamentos |
| Segurança | Team Security, SSO, contas e permissões |
| Integrações | endpoints, tokens/certificados e regras de retry |

## Riscos comuns

- assumir que a arquitetura antiga representa o ambiente atual;
- reiniciar serviços sem confirmar jobs em execução;
- ignorar alterações de conta, URL, banco ou certificados após clone/restore;
- tratar falha de plataforma como falha funcional.

## Onde aprofundar

- [Arquitetura lógica](arquitetura/01-arquitetura-logica.md)
- [Application Server e Services](application-services/README.md)
- [Batches, jobs e scheduler](06-batches-jobs-scheduler.md)
- [Business Events](14-business-events.md)
- [Database](09-database.md)
- [Troubleshooting](13-troubleshooting.md)

## Próximo passo

Use o [plano de KT](16-plano-de-kt.md) para registrar os valores reais de cada ambiente e completar o inventário antes de operar em produção.

