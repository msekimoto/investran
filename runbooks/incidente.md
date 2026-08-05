# Runbook - Triagem de incidente

## Entrada

Ticket, ambiente, início, impacto, usuários/entidades, mensagem, IDs e cutoff.

## Procedimento

1. Classificar severidade e acionar comunicação.
2. Verificar indisponibilidade ampla versus caso isolado.
3. Registrar última execução boa e mudanças recentes.
4. Capturar logs/status antes de alterar estado.
5. Localizar camada: cliente/web, autenticação, serviço/scheduler, banco ou integração.
6. Aplicar teste reversível e de baixo risco.
7. Usar runbook específico; não improvisar SQL/restart/retry.
8. Validar funcionalmente e monitorar recorrência.

## Saída

Causa ou hipótese, ação, evidência, resultado, impacto residual, owner e follow-up/RCA.

