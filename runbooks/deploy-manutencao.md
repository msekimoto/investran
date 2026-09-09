# Runbook - Deploy/manutenção

## Controle documental

| Campo | Valor |
|---|---|
| Status | KT pendente |
| Owner técnico | A definir com a equipe de sustentação |
| Owner funcional | A definir com a área de negócio |
| Escopo e ambiente | Produto padrão; validar versão, janela e ambiente antes da execução |
| Última validação | Não validado em ambiente atendido |
| Próxima revisão | Após a primeira execução controlada ou mudança de versão |
| Evidência | Ticket aprovado, plano de retorno, resultados de smoke test e encerramento sanitizado |

## Antes

- ticket/aprovações/janela/comunicação;
- versão, pacote e checksum;
- release notes e customizações afetadas;
- backup/restore point e critério de abortar;
- serviços/jobs a parar e owner;
- testes smoke/regressão e aprovadores.

## Execução

Siga o runbook específico da versão. O material histórico orienta database antes de servers/workstations e aplicação coordenada dos componentes. Registre início/fim e resultado de cada passo.

## Depois

- serviços, scheduler, IIS e conectividade;
- login/autorização;
- report crítico;
- AT/AR/BE/import/API controlados conforme escopo;
- reconciliação e monitoramento;
- decisão formal de concluir ou retornar.

