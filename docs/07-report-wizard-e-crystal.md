# Report Wizard, Crystal Reports e Web Reporting Services

Esta área reúne os materiais de reporting do Investran. Para suporte operacional, vale começar pelo guia de arquitetura e seguir para o caso específico: report, WRS, Crystal ou falha de incidente.

## Onde está a resposta rápida

- [Arquitetura de reporting](reporting/01-arquitetura-reporting.md): fundamentos e onde a falha está na cadeia.
- [Report Wizard - desenvolvimento e operação](reporting/02-report-wizard-desenvolvimento-operacao.md): criação, parâmetros, manutenção e diagnóstico.
- [Web Reporting Services](reporting/03-web-reporting-services.md): publicação, segurança, serviços, integradores e formatos.
- [Guia prático do Report Wizard](reporting/guia-pratico-report-wizard.md): fluxos de trabalho e validação do dia a dia.
- [Guia prático do WRS](reporting/guia-pratico-reporting-services.md): operação e suporte ao serviço web.
- [Runbook de falha de reporting](../runbooks/falha-reporting.md): ação em incidentes reais.

## Decisão rápida

| Situação | Guia indicado |
|---|---|
| Relatório não retorna dados ou o resultado é incorreto | [Report Wizard - desenvolvimento e operação](reporting/02-report-wizard-desenvolvimento-operacao.md) |
| Falha de autenticação, publicação ou saída WRS | [Web Reporting Services](reporting/03-web-reporting-services.md) |
| Problema de layout, seção e apresentação no Crystal | [Guia prático do Report Wizard](reporting/guia-pratico-report-wizard.md) |
| Incidente ativo com impacto de negócio | [Runbook de falha de reporting](../runbooks/falha-reporting.md) |

## Regra de ouro

Mudança em forma, parâmetro, filtro, versão ou cardinalidade de um report pode afetar ATM, ARM, WRS, Business Events e integrações. Sempre valide a alteração em ambiente seguro e teste cada consumidor antes de publicar.

## Checklist mínimo antes de alterar um report

1. identificar o book, report e owner;
2. verificar quem o consome;
3. salvar a última versão válida;
4. validar parâmetros, filtros e volume;
5. testar em ambiente controlado;
6. confirmar rollback e reconciliação.

## KT pendente

- lista de reports críticos e owners;
- security levels e filtros no WRS;
- endpoints e certificados por ambiente;
- volume, SLA e performance de referência.
