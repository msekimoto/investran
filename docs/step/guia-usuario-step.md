# Guia prático do usuário do STEP no Investran

Este documento complementa a sessão de STEP e oferece um passo a passo operacional para usuários que precisam executar a funcionalidade com segurança.

## Objetivo

O objetivo do STEP é permitir a execução de uma etapa de processamento com parâmetros definidos, revisão de resultados e confirmação de consistência antes de consolidar o uso em produção.

## Perfil de uso

Esse guia é indicado para:

- usuários do Investran que executam o fluxo STEP;
- analistas de suporte;
- equipes de operação;
- responsáveis por validação de processos e relatórios.

## Procedimento recomendado

### 1. Confirmar o contexto

Antes de iniciar, confirme:

- qual processo ou cenário está sendo executado;
- qual é o período de referência;
- se o resultado esperado foi previamente alinhado;
- se há regras específicas para a entidade, carteira ou operação envolvida.

### 2. Acessar a funcionalidade

- acesse o módulo do Investran correspondente ao STEP;
- selecione o ambiente válido;
- confirme a entidade, o cenário e a operação disponível.

### 3. Definir filtros e parâmetros

Reveja cuidadosamente os campos do processo:

- atividade ou etapa a ser processada;
- base de dados ou conjunto de registros;
- filtros por conta, fundo, investidor, período ou regra;
- opções de validação e processamento.

### 4. Executar a rotina

- clique em executar ou iniciar processo;
- acompanhe mensagens de progresso e alertas;
- se houver erro, interrompa a execução e analise o motivo antes de retomar.

### 5. Validar a resposta do sistema

A validação deve cobrir:

- existência do registro esperado;
- quantidade e montante coerentes;
- status final do processo conforme o esperado;
- ausência de inconsistência em logs, relatórios ou controles de monitoramento.

### 6. Registrar o resultado

O usuário deve registrar:

- data e hora da execução;
- cenário ou caso executado;
- parâmetros utilizados;
- resultado obtido;
- eventual necessidade de reprocessamento ou revisão.

## Checklist de execução

- ambiente correto;
- permissões confirmadas;
- dados e parâmetros revisados;
- resultado esperado definido;
- execução iniciada com acompanhamento;
- validação concluída;
- registro e aprovação realizados, se aplicável.

## Situações de risco

Evite executar o STEP quando:

- o cenário ainda não foi validado pela área funcional;
- houver dados pendentes ou inconsistentes;
- os parâmetros forem genéricos demais para o caso em análise;
- não houver acompanhamento do responsável pela operação.

## Diagnóstico rápido

Se o processo não vier como esperado, revise nesta ordem:

1. credenciais e permissões;
2. ambiente e contexto do processo;
3. filtros e parâmetros de entrada;
4. logs e alertas do sistema;
5. consistência dos dados de origem;
6. necessidade de reprocessamento ou ajuste funcional.

## Recomendação final

O STEP deve ser tratado como um processo controlado, com validação de entrada e saída. A execução correta depende de regras, dados e contexto do ambiente. Em caso de dúvida, priorize a revisão do cenário antes de continuar a operação.

## Referência de origem

As informações desta página foram consolidadas a partir de materiais internos, procedimentos operacionais e orientações de suporte relacionadas à funcionalidade STEP do Investran. O conteúdo foi adaptado para uso prático e deve ser confirmado com o padrão e as regras específicas do ambiente em que será executado.

FIS-STEP Generic - User Guide.pdf
