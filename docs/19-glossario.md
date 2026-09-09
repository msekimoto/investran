# Glossário operacional

Os termos abaixo descrevem o uso nesta base de conhecimento. Confirme nomes de telas, serviços e versões no ambiente antes de executar um procedimento.

| Termo | Significado prático |
|---|---|
| AT / Active Template | Template ativo usado para estruturar, executar ou publicar processos e saídas configuráveis. |
| ARM / Allocation Rules Manager | Conjunto de regras de alocação e seu ciclo de desenvolvimento, validação e publicação. |
| Batch | Processamento agrupado e rastreável por identificador, cujo resultado precisa ser reconciliado antes de retry ou reprocessamento. |
| BE / Business Event | Evento configurado que inicia ou coordena uma ação de negócio; pode gerar efeitos downstream e exige validação de estado parcial. |
| Cutoff | Horário ou condição-limite após a qual o impacto operacional ou financeiro pode mudar. O valor real é `KT pendente`. |
| Evidência sanitizada | Registro que sustenta diagnóstico ou validação sem expor credenciais, dados pessoais, financeiros ou topologia interna. |
| KT | Transferência de conhecimento. `KT pendente` marca uma informação que ainda precisa ser confirmada com a equipe responsável. |
| Owner técnico / funcional | Papel responsável, respectivamente, pela sustentação técnica e pela decisão ou validação do processo de negócio. |
| Reconciliação | Comparação controlada de contagens, valores, status e efeitos downstream para confirmar que um processo terminou corretamente. |
| Retry / reprocessamento | Nova tentativa de execução. Só é segura após confirmar o estado anterior, idempotência e aprovação quando houver risco de duplicação. |
| RW / Report Wizard | Componente e definições usados para relatórios, parâmetros, filtros e resultados de reporting. |
| SLA | Compromisso de serviço; não assuma um valor se ele não estiver confirmado para o ambiente. |
| WRS / Web Reporting Services | Camada de serviços web para descoberta e execução de relatórios. |

## Uso do glossário

Se um termo tiver interpretação específica no ambiente, documente-a com fonte, versão, owner e evidência no componente ou runbook correspondente. Não substitua o termo padrão por uma abreviação local sem defini-la aqui ou no próprio documento.
