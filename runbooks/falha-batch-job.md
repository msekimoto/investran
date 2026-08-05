# Runbook - Falha de batch ou job

1. Registrar BatchID/job/execution ID, status, horário e processo originador.
2. Confirmar se há escrita parcial ou batch já criado.
3. Verificar scheduler/service/account, fila e dependências.
4. Coletar logs correlatos de aplicação e banco.
5. Consultar validação/log aprovado; não executar DML ou SP sem autorização.
6. Avaliar idempotência e risco de duplicação.
7. Obter aprovação funcional antes de retry/reprocessamento.
8. Reprocessar uma vez pelo mecanismo suportado.
9. Reconciliar contagem, valores, status e processo downstream.

**Parar:** estado parcial desconhecido, impacto financeiro, lock/bloqueio ou repetição da falha.

