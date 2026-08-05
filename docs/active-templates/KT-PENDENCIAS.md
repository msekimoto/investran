# Active Templates - pendências de Knowledge Transfer

O manual padrão já explica a interface, os menus, o VBA Editor, Simulation, Scheduler, Preview e Commit. Esta lista concentra o que precisa ser obtido sobre o ambiente Goldman Sachs.

## 1. Onde acessar

- [ ] servidor/workstation e caminho do ATM em DEV, UAT e PROD;
- [ ] versão do ATM e maintenance release;
- [ ] databases e identificação visual de ambiente;
- [ ] entitlements para visualizar, editar, simular, executar e promover;
- [ ] processo e owner para concessão de acesso.

## 2. Inventário dos templates

Para cada AT crítico:

- [ ] nome, ID, Batch Type, owner e criticidade;
- [ ] processo funcional e calendário;
- [ ] parâmetros e defaults;
- [ ] Driver/Auxiliary Reports;
- [ ] árvore de JEs/Transactions;
- [ ] eventos VBA implementados;
- [ ] Allocation Rules e UDFs;
- [ ] consumidores e agendamentos;
- [ ] baseline de linhas, batches, duração e volume.

## 3. Convenções de alteração e salvamento

- [ ] padrão para duplicar e nomear cópias;
- [ ] quando usar `Locked`;
- [ ] conteúdo obrigatório de Notes e Description;
- [ ] onde exportar código/definição para versionamento;
- [ ] referências VBA permitidas;
- [ ] política para `Ignore Errors`;
- [ ] revisão obrigatória após reordenar JE/TX;
- [ ] owner que aprova mudança para `Normal`.

## 4. Debugging

- [ ] AT seguro para treinamento;
- [ ] demonstração de breakpoints, Watch, Immediate e Stack;
- [ ] mensagens de log padronizadas;
- [ ] localização de logs do Scheduler/Application Server;
- [ ] correlação entre ticket, Process ID, usuário e batch;
- [ ] procedimento para processo preso ou cancelamento.

## 5. Scheduler e Staging

- [ ] nomes e hosts dos serviços;
- [ ] frequência de polling e filas;
- [ ] identidade e cofre da conta de serviço;
- [ ] Staging database por ambiente;
- [ ] dashboards/consultas aprovados;
- [ ] retenção e limpeza do Staging;
- [ ] autorização para restart/cancelamento;
- [ ] tratamento de batches gerados e não commitados.

## 6. Promoção

- [ ] versão/caminho do ARM & ATM Export-Import Console;
- [ ] conteúdo do pacote e dependências separadas;
- [ ] origem, destino e ordem de importação;
- [ ] tratamento de IDs e conflitos;
- [ ] aprovações, tickets e janelas;
- [ ] validação pós-importação e Refresh;
- [ ] smoke test no destino.

## 7. Rollback

- [ ] armazenamento da última versão aprovada;
- [ ] passo a passo de reimportação/restauração;
- [ ] rollback conjunto de reports, parameters e regras;
- [ ] critério para interromper execuções;
- [ ] tratamento de batch já commitado;
- [ ] owner que aprova reversão/rebook contábil.

## 8. Sessão prática obrigatória

Peça que um colega demonstre, gravando evidências sanitizadas:

1. localizar um AT real;
2. explicar toda a árvore;
3. duplicar e manter uma cópia em Draft;
4. alterar um Parameter e mapping;
5. alterar/salvar VBA;
6. alterar um driver e executar Refresh;
7. simular com breakpoint e Debug Log;
8. executar pelo Scheduler com Preview;
9. promover DEV -> UAT;
10. executar um rollback de treinamento;
11. analisar um incidente histórico.

## Critério de conclusão

O KT está concluído quando você consegue sozinho:

- localizar e explicar um AT crítico;
- identificar onde uma mudança deve ser feita;
- alterar e confirmar que cada componente foi salvo;
- simular e depurar;
- executar via Scheduler sem commit automático;
- reconciliar Preview;
- promover e reverter em ambiente não produtivo;
- escalar com logs, Process ID e evidências suficientes.

## Referências

- [Interface, acesso e navegação](01-interface-acesso-navegacao.md)
- [Estrutura e funcionamento](02-estrutura-e-funcionamento.md)
- [Alteração, salvamento e publicação](03-alteracao-salvamento-publicacao.md)
- [Debug, execução, Preview e Commit](04-debug-execucao-preview-commit.md)
