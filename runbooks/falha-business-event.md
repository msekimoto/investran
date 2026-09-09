# Runbook - Falha de Business Event

## Controle documental

| Campo | Valor |
|---|---|
| Status | KT pendente |
| Owner técnico | A definir com a equipe de sustentação |
| Owner funcional | A definir com a área de negócio |
| Escopo e ambiente | Produto padrão; validar Business Event, template e ambiente afetado |
| Última validação | Não validado em ambiente atendido |
| Próxima revisão | Após incidente real revisado ou alteração no fluxo do evento |
| Evidência | Ticket, execution/GUID, logs sanitizados e reconciliação aprovada |

1. Registrar BE, template/version, parâmetros, usuário, entidade, horário e execution/GUID.
2. Confirmar compatibilidade com a MR e status ativo.
3. Preservar logs do Web Server e Application Server.
4. Verificar deployment service, BE service account e dependências RW.
5. Determinar se foi criado batch/footprint/output parcial.
6. Não repetir nem desbloquear via SQL sem aprovação e reconciliação.
7. Corrigir configuração em ambiente seguro, executar caso controlado e reconciliar.
8. Para Partner Transfer, validar reversões, rebooking, datas, percentuais, moedas e hierarquias de exclusão.

