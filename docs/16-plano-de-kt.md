# Plano de Knowledge Transfer

## Prioridade 1 - operar e recuperar

| Tópico | Evidência exigida | Status |
|---|---|---|
| Topologia PROD/UAT e acessos | diagrama validado + acesso testado | Pendente |
| Calendário diário/fechamento | agenda, SLA, cutoff e owner | Pendente |
| Jobs/schedulers/batches | inventário + execução assistida + falha simulada | Pendente |
| Monitoramento e logs | dashboard/local/alerta para cada componente | Pendente |
| Incidentes recorrentes | top 10 com sintomas, causa e recuperação | Pendente |
| Escalonamento | contatos FIS/DBA/infra/funcional e horários | Pendente |
| Backup/restore/DR | RPO/RTO + último teste | Pendente |

## Prioridade 2 - manter e mudar

| Tópico | Evidência exigida | Status |
|---|---|---|
| ATs customizados | catálogo, dependências, debug e promoção | Pendente |
| ARs customizadas | regra funcional, casos e reconciliação | Pendente |
| Reports/Crystal | catálogo, consumidores e baseline | Pendente |
| APIs/interfaces/imports | contrato, idempotência, logs e reconciliação | Pendente |
| Business Events | versões, reports, parâmetros e recovery | Pendente |
| Deploy/rollback | execução em UAT e checklist assinado | Pendente |
| Database | schema customizado, jobs e consultas aprovadas | Pendente |

## Perguntas obrigatórias em cada sessão

1. Qual processo de negócio e cutoff este componente atende?
2. Como reconheço sucesso funcional, não apenas técnico?
3. Quais dependências e mudanças recentes mais causam falha?
4. Onde estão logs, IDs, dashboards e evidências?
5. O que posso repetir/reiniciar com segurança e o que duplica dados?
6. Qual é o ponto de retorno e quando devo parar?
7. Quem aprova, quem valida e quem é escalado?
8. Qual foi o pior incidente e o que não está escrito?

## Critério de conclusão

Para tópicos críticos: especialista demonstra → você executa em ambiente seguro → vocês simulam uma falha → você diagnostica e recupera → owner valida o documento. Gravação sem prática não conclui o KT.

