# APIs, SDK e Web Reporting Services

Esta página funciona como porta de entrada para integrações e reporting programático. Os detalhes completos ficam nos guias especializados abaixo.

## Guias principais

- [API e SDK em profundidade](integracoes/01-api-e-sdk.md): object model, DTOs, fetch options, versionamento e General Ledger.
- [Arquitetura de reporting](reporting/01-arquitetura-reporting.md): cadeia de reporting e ponto de falha.
- [Web Reporting Services](reporting/03-web-reporting-services.md): segurança, publicação e suporte ao serviço SOAP.
- [Runbook de falha de reporting](../runbooks/falha-reporting.md): ação em incidentes ativos.

## Quando usar cada caminho

| Situação | Guia indicado |
|---|---|
| Problema em DTO, contrato, Load/Publish/Remove | [API e SDK em profundidade](integracoes/01-api-e-sdk.md) |
| Falha em autenticação, URL ou WRS | [Web Reporting Services](reporting/03-web-reporting-services.md) |
| Relatório não renderiza ou não responde | [Report Wizard - desenvolvimento e operação](reporting/02-report-wizard-desenvolvimento-operacao.md) |
| Incidente em produção | [Runbook de falha de reporting](../runbooks/falha-reporting.md) |

## Checklist de integração

- confirmar consumidor, endpoint, contrato e versão do assembly;
- validar autenticação, autorização e certificados;
- registrar timeout, retry e idempotência;
- guardar request/response/fault sanitizados;
- reconciliar o efeito da escrita antes de repetir ou compensar.

## Checklist de WRS

- validar CompanyID, URL, IIS, app pool e certificado;
- confirmar security levels, contact e WRS filter;
- isolar o report RW antes de investigar transporte ou formato;
- verificar logs, carga e performance por ambiente.

## KT pendente

- inventário de endpoints e consumidores;
- autenticação e certificados atuais;
- regras de retry, idempotência e correlação;
- versão dos assemblies e manutenção implementada no ambiente.
