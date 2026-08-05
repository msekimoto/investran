# Operação, criticidade e calendário

Os manuais descrevem capacidades técnicas, mas não o calendário Goldman. Este documento deve virar o painel diário do suporte.

## Rotina mínima sugerida

### Início do dia

- conferir serviços e schedulers críticos;
- revisar falhas/atrasos desde o último turno;
- validar filas e jobs em `Ready`, `Running` ou equivalente além do tempo esperado;
- confirmar espaço em disco, disponibilidade de banco e alertas de certificado/conta;
- verificar interfaces de entrada e saída aguardadas.

### Durante o dia

- registrar ticket antes de qualquer intervenção;
- correlacionar horário, usuário, entidade, job/batch e ambiente;
- preservar log e evidência antes de retry/restart;
- reconciliar saída funcional, não apenas status técnico.

### Fim do dia

- confirmar conclusão dos processos críticos;
- registrar pendências, workarounds e próximo owner;
- garantir que nenhum batch/import/BE ficou parcialmente processado.

## Calendário a obter no KT

| Processo | Frequência/horário | SLA/cutoff | Dependência | Validação funcional | Owner/backup |
|---|---|---|---|---|---|
| Batches de fechamento | KT pendente | KT pendente | KT pendente | KT pendente | KT pendente |
| Reporting | KT pendente | KT pendente | KT pendente | KT pendente | KT pendente |
| Data Import/interfaces | KT pendente | KT pendente | KT pendente | KT pendente | KT pendente |
| Business Events | KT pendente | KT pendente | KT pendente | KT pendente | KT pendente |
| Maintenance Job/backup | KT pendente | KT pendente | KT pendente | KT pendente | KT pendente |

## Criticidade

- **P1:** risco financeiro/regulatório, fechamento bloqueado, indisponibilidade ampla ou corrupção/inconsistência.
- **P2:** processo importante bloqueado, sem workaround aceitável.
- **P3:** impacto restrito ou workaround controlado.
- **P4:** dúvida, melhoria ou manutenção planejada.

Alinhar definições e SLAs oficiais da conta durante o KT.

