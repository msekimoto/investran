# Troubleshooting

Este documento reúne o método de diagnóstico recomendado para eventos no Investran. Ele foi mantido curto para servir como guia de triagem e apontar o caminho correto em cada módulo.

## Método padrão

1. definir impacto e severidade;
2. registrar linha do tempo;
3. capturar IDs de batch, job, report, AT/AR/BE e usuário;
4. preservar logs, status e evidência sanitizada;
5. dividir por camadas: usuário/web → IIS/API → scheduler/service → banco → integração;
6. comparar com um ambiente ou caso conhecido;
7. testar uma hipótese por vez;
8. validar o resultado funcional antes de encerrar o caso;
9. registrar causa, correção, prevenção e monitoramento.

## Sintoma → guia rápido

| Sintoma | Onde verificar primeiro |
|---|---|
| Login/SSO falha | [Arquitetura e ambientes](02-arquitetura-e-ambientes.md) |
| Job parado ou em fila | [Application Server e Services](application-services/README.md) |
| AT não gera batch | [ATM](active-templates/README.md) |
| AR gera valores incorretos | [Allocation Rules](allocation-rules/README.md) |
| Report falha ou fica lento | [Report Wizard e Crystal](07-report-wizard-e-crystal.md) |
| Import rejeitado | [Data Import e interfaces](10-data-import-e-interfaces.md) |
| API fault ou contrato inválido | [API, SDK e WRS](08-apis-sdk-wrs.md) |
| Business Event falha | [Business Events](14-business-events.md) |

## Pare e escale quando

- houver risco de duplicação, corrupção ou impacto financeiro;
- a ação exigir SQL mutável, alteração de segurança ou restore;
- não for possível confirmar se houve escrita parcial;
- o workaround ampliar acesso ou desativar controle;
- o resultado não puder ser reconciliado.

## Próximo passo

Use os [runbooks](../runbooks/incidente.md) para seguir o fluxo operacional por incidente, falha de batch, falha de reporting ou falha de Business Event.

