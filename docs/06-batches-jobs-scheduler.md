# Batches, jobs e scheduler

## Modelo operacional

Batches podem ser criados manualmente, por ATM, API, Data Import ou Business Events. O suporte deve distinguir criação, validação, hold, postagem, exportação, exclusão lógica e remoção permanente conforme o fluxo e a configuração da instalação.

O Application Server documentado possui serviços scheduler para ATM, Data Import, DX Sync/Workflow, OLE DB, Reporting Services, RS Word e Report Wizard. Os mappings ficam no `Config.xml` da pasta Investran Servers na arquitetura descrita; confirme o caminho atual antes de usar essa informação.

## Diagnóstico de batch

Registrar BatchID, Legal Entity, tipo, status, criador/processo, datas GL/effective, quantidade de JEs/transações e último evento. Determinar se o problema está na geração, validação, posting ou integração seguinte.

O guia administrativo descreve `INV_spBatchValidation` como parte do Investran Maintenance Job e a view `Log_vwBatchValidation` para revisar erros. Execução direta de stored procedure em produção requer aprovação e procedimento local.

## Retry/reprocessamento

1. Preservar estado, log, IDs e output.
2. Verificar se houve escrita parcial ou batch já criado.
3. Identificar idempotência e efeito financeiro de duplicação.
4. Obter autorização funcional.
5. Preferir mecanismo suportado pela aplicação.
6. Reprocessar uma única vez e reconciliar.
7. Escalar se a causa continuar desconhecida.

## Serviços

Antes de restart, verificar dependências e trabalhos ativos. A documentação mostra manutenção via Service Manager e também `net start`/`net stop`; ela alerta que o status do console pode não refletir imediatamente comandos externos. Use o monitoramento real como fonte de verdade.

## KT pendente

- inventário de jobs/serviços com sequência, agenda e SLA;
- critérios de stuck/timeout;
- tabelas/consultas aprovadas para diagnóstico;
- matriz de idempotência e instruções de reprocessamento;
- owner de validação funcional por batch.

## Fontes

- *Internal_Inv7_INV_Administrators_7.pdf*, seções Application Server, Scheduler Services e Batch Validation.
- *Internal_Inv7_INV_Implementation.pdf*, páginas 4-5 e configuração dos schedulers.
- *Internal_Inv7_INV_ATM_Dev_Guide_7.pdf*, execução e commit.

