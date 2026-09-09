# Operação rápida e plantão

Use esta página como ponto de entrada durante um incidente ou antes de uma mudança. Ela reduz o tempo até o diagnóstico sem substituir a aprovação, o ticket ou o runbook específico.

> **Limite conhecido:** owners, SLAs, horários de corte, topologia e contatos do ambiente ainda são `KT pendente`. Não invente esses dados: registre a lacuna no ticket e escale pelo processo vigente.

## Nos primeiros 15 minutos

1. Abra ou atualize o ticket com horário, ambiente, impacto, usuários ou entidades afetadas e o último comportamento conhecido como bom.
2. Preserve evidências sanitizadas antes de alterar estado: mensagem, IDs de correlação, status, screenshot e logs relevantes.
3. Classifique o alcance: indisponibilidade geral, processo isolado, dado incorreto, segurança ou degradação.
4. Compare mudanças recentes com uma execução conhecida. Execute somente verificações reversíveis e de baixo risco.
5. Escolha o runbook abaixo. Pare e escale se houver impacto financeiro, segurança, escrita parcial, dados duplicados ou estado desconhecido.

## Escolha o caminho

| Situação | Primeiro procedimento |
|---|---|
| Impacto ainda incerto ou múltiplas camadas | [Triagem de incidente](../runbooks/incidente.md) |
| Batch, scheduler ou job com falha | [Falha de batch/job](../runbooks/falha-batch-job.md) |
| Report Wizard, Crystal, WRS ou exportação | [Falha de reporting](../runbooks/falha-reporting.md) |
| Business Event ou Partner Transfer | [Falha de Business Event](../runbooks/falha-business-event.md) |
| Deploy, upgrade ou manutenção planejada | [Deploy/manutenção](../runbooks/deploy-manutencao.md) |

## Critérios para parar e escalar

- há possível exposição de dados, falha de autorização ou evidência não sanitizada;
- a operação pode duplicar, excluir ou alterar dados financeiros;
- existe processamento parcial, lock persistente ou o resultado de uma tentativa anterior é desconhecido;
- a mudança exige SQL, reinício, retry ou reprocessamento não previsto no procedimento aprovado;
- a causa atravessa uma camada sem owner confirmado (infraestrutura, banco, integração ou funcional).

Ao escalar, envie o pacote mínimo: ticket, impacto, ambiente, janela temporal, passo reproduzível, IDs correlatos, ação já realizada, resultado, evidência sanitizada e decisão solicitada.

## Fechamento mínimo

Antes de encerrar, valide o cenário original, um caso negativo de segurança quando aplicável, reconciliação funcional e ausência de recorrência no período acordado. Registre causa (ou hipótese), ação, evidência, impacto residual, follow-up e a atualização necessária nesta base.

## Referências

- [Troubleshooting geral](13-troubleshooting.md)
- [Plano de KT](16-plano-de-kt.md)
- [Glossário](19-glossario.md)
- [Política de informação sensível](../SECURITY.md)
