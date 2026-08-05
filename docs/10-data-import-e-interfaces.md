# Data Import e interfaces

## Capacidade

O Data Import documentado aceita XLSX (Excel 2007+) e pode ser automatizado pelo SDK. Ele suporta dados web, transacionais e de mercado, condicionado a licença e entitlement. UDFs suportam valores para UDFs já existentes; Team Security domains/entitlements não são importados pelo recurso descrito.

## Fluxo controlado

1. Identificar tipo de entidade e licença/entitlement.
2. Usar template versionado e confirmar mappings.
3. Validar mandatory/required fields, IDs, referências, datas, grouping indexes e UDFs.
4. Fazer dry run/amostra em ambiente seguro.
5. Submeter job e registrar ID, arquivo, checksum, usuário e horário.
6. Monitorar status e capturar erros por linha.
7. Reconciliar contagem, valores e entidades criadas/atualizadas.
8. Arquivar evidência sanitizada e tratar rejeições.

## Retry

Antes de repetir, verificar se houve carga parcial e se as linhas usam InvestranID/chaves capazes de atualizar em vez de duplicar. Cancelamento ou status de falha não garante ausência de escrita. Definir estratégia por interface.

## Catálogo de interface a preencher

| Interface | Direção/formato | Agenda | Chave/idempotência | Reconciliação | Owner |
|---|---|---|---|---|---|
| KT pendente | KT pendente | KT pendente | KT pendente | KT pendente | KT pendente |

## Fontes

- *INV_Data_Import_7.pdf*, páginas 3-6 e capítulos de job/reconciliation/guidelines.
- *Internal_Inv7_Data Import Utility User Guide.pdf*, páginas 1-56 (ferramenta anterior e templates).
- *Internal_Inv7_INV_Implementation.pdf*, configuração do Data Import Service.

