# Active Templates (AT) — Manual de Sustentação

## 1. Escopo e confiabilidade

Este documento foi iniciado a partir do **Developer's Guide to Active Template Manager**, voltado ao Investran 6.2 SR3. Ele descreve o comportamento padrão apresentado pela FIS/SunGard nessa versão.

Informações específicas da Goldman Sachs — nomes de bancos, servidores, caminhos, grupos, pipelines, credenciais, aprovações e procedimentos de promoção — não constam no manual e devem ser registradas durante o Knowledge Transfer.

---

## 2. O que é um Active Template

Um **Active Template (AT)** é uma unidade executável composta por uma combinação de:

- parâmetros;
- Driver Reports;
- Auxiliary Reports;
- Journal Entry Templates;
- Transaction Templates;
- código VBA, quando necessário.

O AT é executado pelo **ATM Engine** para gerar batches de transações. Segundo o guia, o Active Template Manager cria batches novos; ele não é destinado a editar ou modificar batches já existentes.

### Componentes principais

- **ATM — Active Template Manager:** ferramenta de desenvolvimento usada para criar, testar e depurar Active Templates.
- **ATM Engine:** mecanismo de execução no servidor de aplicação.
- **AT Execution:** execução de um AT válido considerando atributos, parâmetros, reports, templates e VBA.
- **Staging Database:** área temporária na qual os batches gerados permanecem antes do commit no Investran.

### Fluxo resumido

```text
Parâmetros / Reports / VBA
          ↓
     Active Template
          ↓
       ATM Engine
          ↓
   Batches em Staging
          ↓
 Preview e validação
          ↓
 Commit no Investran
```

---

## 3. Estrutura de um Active Template

Ao selecionar um AT no ATM, a ferramenta apresenta uma árvore com seus elementos. O manual cita os seguintes nós:

- Parameters;
- Driver Reports;
- Auxiliary Reports;
- Journal Entries;
- Transaction Templates;
- VBA associado ao template.

O cadastro do AT também mantém informações como criador, data de criação, último usuário que alterou, data da última alteração, notas, Batch Type e status.

### Status

- **Draft:** template em desenvolvimento; não fica disponível para uso normal no Investran.
- **Normal:** template liberado após testes.
- **System:** status reservado a templates de sistema.

> Regra prática: não alterar o status para `Normal` antes de concluir simulação, execução controlada, conferência dos batches e validação funcional.

---

## 4. Driver Reports e Auxiliary Reports

### Driver Reports

Driver Reports são Report Wizard reports usados como entrada principal do AT. Eles determinam os registros sobre os quais o template trabalha e, consequentemente, quantos conjuntos de transações poderão ser gerados.

O manual informa que um AT pode possuir de zero a três Driver Reports. As colunas do report são mapeadas para propriedades em níveis como Batch, Journal Entry ou Transaction Template.

#### Comportamento importante

Quando o AT utiliza Driver Report, cada linha retornada pode originar as transações definidas nos templates. Uma transação pode ser eliminada se seus valores forem zerados, dependendo das propriedades configuradas.

### Auxiliary Reports

Auxiliary Reports fornecem dados complementares ao código VBA ou à lógica do template, sem necessariamente controlar diretamente a quantidade de batches ou transações.

### Requisito de localização dos reports

O guia recomenda que reports utilizados por ATs estejam em pastas **Public Read-only** do Report Wizard.

Depois de alterar um Report Wizard report utilizado pelo AT, execute **Refresh** no ATM para evitar trabalhar com metadados desatualizados.

---

## 5. Journal Entries e Transaction Templates

Os Journal Entry Templates e Transaction Templates funcionam como o molde dos registros que serão gerados.

- O Journal Entry define a estrutura do lançamento.
- Os Transaction Templates representam as transações que compõem cada Journal Entry.
- A ordem das transações pode ser relevante, especialmente quando existe uma transação dominante e outra não dominante.
- A propriedade relacionada a transações com valor zero influencia se registros zerados serão mantidos ou removidos da saída.

### Ponto de atenção

Antes de corrigir um AT, identifique se o defeito está:

1. nos dados retornados pelo Driver/Auxiliary Report;
2. no mapeamento entre colunas e propriedades;
3. na definição do Journal Entry;
4. na definição do Transaction Template;
5. na Allocation Rule atribuída;
6. no código VBA;
7. na configuração ou execução do Scheduler.

---

## 6. Parâmetros

Parâmetros podem ser obrigatórios ou opcionais, possuir valor padrão e ser mapeados para propriedades do AT.

### Ao analisar um defeito

Registre:

- nome do parâmetro;
- tipo esperado;
- obrigatoriedade;
- valor padrão;
- propriedade mapeada;
- origem do valor em produção;
- impacto quando vazio, nulo ou inválido.

Erros de parâmetro costumam se manifestar como ausência de linhas nos reports, valores incorretos em propriedades ou falhas no VBA.

---

## 7. VBA e objetos utilizados

O guia indica que ATs simples podem existir sem VBA, mas considera esse cenário limitado e pouco comum em processos complexos.

As classes documentadas incluem:

- `Application`;
- `Context`;
- `RWReport`;
- `InvestorSet`.

### Boa prática mínima

Use `Option Explicit` como primeira linha do módulo VBA. Isso obriga a declaração das variáveis e reduz erros causados por nomes digitados incorretamente.

### Cuidados com código legado

O manual marca alguns métodos como obsoletos e mantidos apenas por compatibilidade com versões antigas. Ao encontrar métodos legados:

1. não substitua automaticamente;
2. confirme a versão atual do Investran;
3. identifique por que o método foi usado;
4. crie teste de regressão antes da alteração;
5. valide o comportamento financeiro do resultado.

---

## 8. Como entender um AT desconhecido

Ao receber um chamado sobre um AT que você nunca viu, siga esta sequência.

### 8.1 Identificação

- Nome e ID do AT.
- Status atual.
- Batch Type.
- Última alteração e responsável.
- Descrição e notas existentes.
- Processo funcional que o executa.

### 8.2 Entradas

- Parâmetros obrigatórios e opcionais.
- Driver Reports e filtros.
- Auxiliary Reports.
- User Defined Fields consultados.
- Allocation Rules referenciadas.

### 8.3 Lógica

- Eventos VBA implementados.
- Condições e desvios.
- Cálculos e arredondamentos.
- Totais acumulados.
- Regras para transação dominante e não dominante.
- Tratamento de registros zerados.

### 8.4 Saídas

- Quantidade esperada de batches.
- Journal Entries gerados.
- Transactions geradas.
- Valores Local e Legal Entity.
- Resultado no Staging.
- Resultado após commit no Investran.

### 8.5 Dependências

- Report Wizard reports.
- Allocation Rules.
- Transaction Types.
- UDFs.
- Scheduler Service.
- Staging Database.
- Configurações do banco Master.

---

## 9. Criação de Active Templates

O manual apresenta dois padrões principais.

### 9.1 AT sem Driver Report

Usado para gerar um conjunto de Journal Entries e Transactions com base em parâmetros e, quando necessário, Auxiliary Reports.

Fluxo conceitual:

1. criar o AT e definir seus atributos;
2. configurar Journal Entries;
3. configurar Transaction Templates;
4. definir parâmetros;
5. adicionar VBA, se necessário;
6. configurar Auxiliary Reports;
7. simular;
8. executar em ambiente controlado;
9. revisar os batches em Staging;
10. liberar o status apenas após validação.

### 9.2 AT com Driver Report

Usado quando o processo precisa percorrer um conjunto de registros retornados por Report Wizard.

Fluxo conceitual:

1. criar o AT e definir seus atributos;
2. configurar Journal Entries e Transactions;
3. definir parâmetros;
4. adicionar e configurar o Driver Report;
5. mapear colunas do report para propriedades;
6. implementar VBA necessário;
7. simular com massa conhecida;
8. comparar a quantidade de linhas do driver com a quantidade de saídas esperadas;
9. executar e validar no Staging.

---

## 10. Alteração segura de um AT

### Antes de alterar

- Confirme o ambiente e o banco conectado.
- Registre a versão atual do AT.
- Exporte ou duplique o artefato conforme o procedimento do projeto.
- Identifique reports e Allocation Rules dependentes.
- Capture parâmetros e massa usada para reproduzir o defeito.
- Registre o resultado atual antes da correção.
- Confirme o comportamento esperado com o cliente ou analista funcional.

### Durante a alteração

- Faça a menor mudança possível.
- Evite alterar simultaneamente VBA, reports e regras sem necessidade.
- Não introduza valores de negócio hard-coded quando puderem ser mantidos em UDFs ou configuração apropriada.
- Use nomes claros e comentários apenas onde explicam decisões não óbvias.
- Faça Refresh quando reports relacionados forem modificados.

### Depois da alteração

- Simule o mesmo cenário que reproduzia o erro.
- Execute cenários de regressão.
- Compare os batches antes/depois.
- Valide valores, sinal, moeda, datas, investidores, posições, Journal Entries e Allocation Rules.
- Revise o log mesmo quando a execução terminar com sucesso.

---

## 11. Debugging

O guia separa o debugging em duas frentes:

- **VBA Source Debugging**;
- **Debug Log**.

### Estratégia recomendada

1. Reproduza o erro com o menor conjunto de dados possível.
2. Execute em simulação antes de usar o Scheduler Engine.
3. Confirme parâmetros e linhas retornadas pelos reports.
4. Inspecione o fluxo dos eventos VBA.
5. Valide o conteúdo do `Context` em cada etapa relevante.
6. Confirme os valores produzidos no `InvestorSet`.
7. Verifique Allocation Rule e índices utilizados.
8. Analise arredondamentos e transação não dominante.
9. Revise o Debug Log.
10. Só então execute o AT pelo Scheduler Engine.

### Perguntas de diagnóstico

- O erro ocorre antes ou depois da geração do batch?
- O Driver Report retorna o conjunto correto?
- O problema ocorre em todas as linhas ou apenas em uma?
- O AT está usando metadados antigos de um report alterado?
- A Allocation Rule escolhida é a esperada?
- Existem diferenças entre Local Amount e LE Amount?
- O erro é de lógica, permissão, banco, staging ou scheduler?

---

## 12. Testes

O manual recomenda duas etapas distintas.

### 12.1 Simulation Mode

Serve para verificar lógica e resultado sem tratar a execução como produção.

Valide:

- parâmetros;
- retorno dos reports;
- número de Journal Entries;
- número de Transactions;
- valores e moedas;
- regras de alocação;
- comportamento de linhas zeradas;
- erros de VBA.

### 12.2 Execução pelo Scheduler Engine

Depois de depurado e validado em simulação, o AT deve ser executado usando o Scheduler Engine para confirmar que está pronto para produção.

Os resultados podem permanecer no Staging para inspeção e ser removidos sem commit, ou podem ser commitados para validação controlada conforme o procedimento do ambiente.

### Casos mínimos de regressão

- cenário padrão;
- ausência de dados;
- apenas uma linha no Driver Report;
- múltiplas linhas;
- valores zero;
- valores negativos;
- moedas diferentes, quando aplicável;
- arredondamento;
- parâmetros opcionais vazios;
- limite ou maior volume razoável;
- cenário que originou o incidente.

---

## 13. Execução, Preview e Commit

O manual descreve o seguinte fluxo operacional:

1. executar o processo do AT;
2. consultar o Process ID;
3. usar **View Log** ou `Ctrl+L` para analisar o log;
4. quando a geração for bem-sucedida, usar **Preview** ou `Ctrl+P`;
5. revisar os batches em uma tela semelhante ao Transaction Panel;
6. somente após aprovação, agendar/realizar o commit para o banco Investran.

### Regra de segurança

Nunca considere um AT validado apenas porque o processo terminou sem exceção. O Preview deve ser revisado funcionalmente e comparado ao resultado esperado.

---

## 14. Publicação e promoção entre ambientes

O guia informa que o utilitário **ARM & ATM Export-Import Console** facilita a transferência de Active Templates e reports relacionados entre bancos de dados.

Ele não documenta o processo específico da Goldman Sachs. Portanto, antes de promover qualquer artefato, registre no KT:

- ferramenta e versão utilizadas;
- origem e destino;
- objetos incluídos automaticamente;
- dependências que precisam ser exportadas separadamente;
- ordem de importação;
- permissões necessárias;
- processo de aprovação;
- evidência de teste;
- validação pós-deploy;
- estratégia de rollback.

### Checklist de publicação

- [ ] AT testado em Simulation Mode.
- [ ] AT executado com sucesso pelo Scheduler Engine.
- [ ] Preview validado.
- [ ] Reports dependentes publicados.
- [ ] Allocation Rules e Transaction Types confirmados no destino.
- [ ] UDFs e configurações confirmadas.
- [ ] Export/backup da versão anterior guardado.
- [ ] Plano de rollback definido.
- [ ] Status final do AT confirmado.
- [ ] Smoke test executado no destino.

---

## 15. Rollback

O manual confirma a existência de transferência por Export-Import, mas não fornece um processo de rollback específico do projeto.

A estratégia mínima deve ser:

1. exportar ou preservar a versão anterior antes da promoção;
2. registrar todos os objetos alterados;
3. definir o critério objetivo para rollback;
4. impedir novos commits do AT defeituoso;
5. restaurar a versão anterior do AT e dependências;
6. executar smoke test;
7. validar se há batches incorretos no Staging ou já commitados;
8. tratar batches já commitados pelo procedimento contábil aprovado — não presumir que basta excluir registros diretamente no banco.

---

## 16. Troubleshooting

### AT não aparece no Investran

Verifique:

- se o status está como `Draft`;
- permissões do usuário;
- banco/ambiente conectado;
- atualização de metadados;
- se o AT foi corretamente promovido.

### Driver Report não retorna dados

Verifique:

- parâmetros enviados;
- filtros e prompts;
- permissões do report;
- pasta Public Read-only;
- alteração recente sem Refresh no ATM;
- dados existentes no ambiente.

### Quantidade incorreta de transações

Verifique:

- quantidade de linhas retornadas pelo Driver Report;
- número de Transaction Templates por Journal Entry;
- lógica que zera transações;
- configuração de `Allow zero transactions`;
- condições no VBA.

### Valores ou alocações incorretas

Verifique:

- Allocation Rule aplicada;
- InvestorSet produzido;
- Local Amount e LE Amount;
- índices de investidores;
- regras de arredondamento;
- transação dominante e não dominante;
- UDFs e percentuais utilizados.

### Falha no Scheduler

O guia orienta validar com administradores:

- instalação e execução do Scheduler Service;
- conta utilizada pelo serviço;
- permissões no banco Master e Staging;
- configuração do Staging Connection;
- parâmetros de ATM no banco Master.

Os nomes exatos das tabelas e campos citados pelo manual devem ser confirmados para a versão atual antes de qualquer alteração direta.

### Processo executou, mas batch não chegou ao Investran

Verifique:

- log de geração;
- estado do processo no Staging;
- Preview;
- etapa de Commit;
- log do Commit;
- conectividade e permissões entre Staging e Master.

---

## 17. Boas práticas

- Manter reports do AT em pasta Public Read-only.
- Executar Refresh após mudanças em reports.
- Manter AT em Draft enquanto estiver em desenvolvimento.
- Usar `Option Explicit` no VBA.
- Evitar hard-code de valores de negócio; preferir UDFs ou configuração adequada.
- Confirmar IDs de Allocation Rules por metadata/report em vez de confiar apenas em números memorizados.
- Testar em simulação e também pelo Scheduler Engine.
- Revisar Preview antes do Commit.
- Preservar versão anterior antes de promoção.
- Nunca corrigir diretamente dados contábeis no banco sem procedimento aprovado.
- Registrar chamado, causa raiz, alteração, evidência e resultado.

---

## 18. Informações pendentes do KT Goldman Sachs

Consulte e preencha o arquivo [KT-PENDENCIAS.md](KT-PENDENCIAS.md).
