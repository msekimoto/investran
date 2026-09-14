# STEP - guia de usuários do Investran

Esta sessão consolida o guia operacional da funcionalidade STEP no Investran para usuários finais, analistas e time de suporte. O foco é orientar a execução do processo com segurança, validação de resultados e acompanhamento de eventos críticos.

> O conteúdo abaixo foi organizado em linguagem em português do Brasil e serve como referência de uso e sustentação operacional. Sempre valide nomes, permissões, parâmetros e caminhos do ambiente atual antes de executar em produção.

## O que é a funcionalidade STEP

A funcionalidade STEP no Investran é usada para conduzir etapas de processamento, validação e acompanhamento dentro do fluxo de negócio. Em termos práticos, ela centraliza a preparação da execução, a revisão dos parâmetros, a geração do resultado e a confirmação de consistência antes da consolidação final.

A utilização correta do STEP reduz riscos de:

- processamento incompleto;
- dados inconsistentes entre registros e relatórios;
- retrabalho em áreas críticas do negócio;
- pendências de acompanhamento em ambientes de produção.

## Quando utilizar o STEP

Use o STEP quando for necessário:

- executar uma etapa de processamento específica do negócio;
- validar regras parametrizadas antes do fechamento ou consolidação;
- revisar resultados de forma controlada antes de publicar ou aprovar;
- acompanhar o status da execução junto a relatórios, logs e controles de processamento.

## Acesso e pré-requisitos

Antes de iniciar, confirme:

1. acesso ao ambiente correto do Investran;
2. perfil ou permissão para executar a funcionalidade STEP;
3. parâmetros e filtros do processo definidos pelo responsável funcional;
4. data, cenário e universo de processamento previamente alinhados;
5. existência de backup, controle de execução e rotina de validação do resultado.

## Fluxo básico de uso

### 1. Acesso ao processo

- entre no módulo do Investran para o processo STEP;
- confirme o ambiente, sistema e contexto de execução;
- selecione a operação ou etapa relevante para o caso em análise.

### 2. Definição dos parâmetros

Antes de executar, confira:

- período de referência;
- universo de registros ou entidades envolvidas;
- regras de filtro, exclusão ou hierarquia;
- flags ou opções de processamento que afetem o resultado;
- permissões de acesso e status dos dados relacionados.

Se o caso tiver regras de negócio específicas, verifique se o parâmetro foi validado por quem responde pela operação.

### 3. Validação pré-execução

Antes de confirmar a execução, faça uma verificação simples:

- dados e filtros estão coerentes com o período solicitado;
- não há pendências em outros processos que possam interferir;
- o responsável funcional está ciente do impacto esperado;
- o resultado desejado está claramente definido.

### 4. Execução do STEP

- inicie a rotina de processamento;
- acompanhe a mensagem de status, progresso e logs do sistema;
- determine se há alertas, mensagens de warning ou erro que exijam interrupção ou ajuste.

### 5. Acompanhamento do resultado

Após a execução:

- revise os registros gerados ou atualizados;
- compare o resultado com o esperado;
- valide totais, quantidades, valores e consistência da regra aplicada;
- confirme se o processo foi concluído com sucesso ou se houve falha parcial.

## Checklist de validação

Use esta checklist como referência antes de encerrar a execução:

- processo executado no ambiente correto;
- filtros e parâmetros conferidos;
- resultado compatível com período e cenário;
- registros revisados com amostragem ou reconciliação;
- logs consultados;
- divergências avaliadas e tratadas;
- aprovação funcional registrada, quando exigido.

## Erros comuns e como tratar

### Processo não inicia

Verifique:

- perfil e permissão de acesso;
- ambiente selecionado;
- dependências do processo ou do módulo relacionado;
- status da integração ou serviço envolvido.

### Resultado inesperado

Verifique:

- parâmetros do passo executado;
- filtros aplicados;
- reconciliação de dados de origem;
- registros que podem ter sido excluídos, ignorados ou duplicados.

### Falha parcial

Em casos de processamento incompleto:

- identifique qual etapa falhou;
- confirme se houve rollback ou processamento residual;
- revalide o estado anterior e os registros afetados;
- o reprocessamento deve ser realizado apenas com aprovação da área responsável.

## Boas práticas de uso

- nunca execute o STEP em produção sem validação do cenário;
- mantenha registro do parâmetro e do resultado obtido;
- documente ajustes e desvios de regra;
- revise logs e relatórios após cada execução;
- evite mudanças ad hoc sem aprovação funcional;
- preserve o histórico de execução para auditoria e suporte.

## Governança e suporte

A funcionalidade STEP deve ser operada conforme o padrão do ambiente e o processo de negócio da organização. Quando houver dúvida sobre regra de cálculo, impacto de dados ou comportamento em produção, sempre siga o procedimento oficial do time responsável e, se necessário, consulte a área de suporte ou manutenção.

## Pendências de KT

Algumas informações dependem de conhecimento específico do ambiente atendido e devem ser confirmadas antes de operar em produção:

- padrão de execução do STEP no ambiente da organização;
- conjunto de parâmetros utilizados por processo e por cenário;
- regras de negócio específicas e exceções;
- responsáveis funcionais por cada etapa;
- procedimento de reprocessamento e rollback.

## Documentos relacionados

- [Guia prático do STEP](guia-usuario-step.md)
- [Trilha de aprendizado](../17-trilha-de-aprendizado.md)
- [Troubleshooting](../13-troubleshooting.md)

## Fonte

Este guia foi estruturado como referência interna de operação e suporte, com foco em uso prático e validação do processo STEP no Investran.

## Referência de origem

As informações desta página foram consolidadas a partir de materiais internos, procedimentos operacionais e orientações de suporte relacionadas à funcionalidade STEP do Investran. O conteúdo foi adaptado para uso prático e deve ser confirmado com o padrão e as regras específicas do ambiente em que será executado.

FIS-STEP Generic - User Guide.pdf
