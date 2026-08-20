# Business Events (BE)

Business Events são processos orientados a negócio executados pela camada web e por serviços do Investran. Eles combinam uma interface de configuração, um template importado, regras de domínio, acesso às APIs do Investran e, dependendo do evento, relatórios do Report Wizard, Allocation Rules, scripts de banco e geração de batches.

Esta seção organiza o conhecimento necessário para implantar, configurar, executar e sustentar Business Events.

## Guias

1. [Guia prático de Business Events](guia-pratico-business-events.md)
2. [Partner Transfer em profundidade](partner-transfer.md)
3. [Troubleshooting e recuperação](troubleshooting.md)
4. [Resumo anterior: Business Events e Partner Transfer](../14-business-events.md)

## O que está comprovado pelos manuais

- os templates de BE são distribuídos como arquivos `.ZIP`;
- a importação ocorre no Investran Web, em **Events & Imports > Business Events > Import Templates**;
- são necessárias permissões de inclusão e alteração no módulo Business Event;
- um BE pode depender de scripts SQL, reports `.CAB` ou `.IED`, Report Wizard e Allocation Rules;
- a arquitetura possui componentes no cliente/web e no servidor, conectados pelo Enterprise Service Bus;
- a documentação de manutenção lista `Equity Pickup`, `Fund Valuation`, `LP Capital Event` e `Partner Transfer` como Business Events de sistema daquela versão.

Essa lista é um catálogo daquela maintenance release, não uma garantia de que sejam os únicos BEs existentes ou instalados no ambiente atual.

## Regra de operação

Um BE deve ser tratado como uma cadeia de dependências, não apenas como um template. Antes de executar ou publicar uma alteração, identifique o template, a versão, os reports, as regras, os scripts, a conta de serviço, as entidades afetadas e os artefatos que podem ser gravados.

## KT prioritário

- inventário de BEs instalados, versões e owners;
- finalidade e janela operacional de cada evento;
- parâmetros e validações funcionais;
- reports, Allocation Rules, scripts e hierarquias usados;
- serviços, contas e servidores envolvidos;
- batches, lançamentos e arquivos produzidos;
- procedimento aprovado de reprocessamento e rollback;
- incidentes recorrentes e critérios de escalonamento.

