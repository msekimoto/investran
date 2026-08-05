# Allocation Rules — Pendências de Knowledge Transfer

Este documento contém apenas informações que não ficaram suficientemente demonstradas nos PDFs recebidos ou que podem variar conforme a versão e o ambiente Goldman Sachs.

## 1. Ferramentas e acesso

- [ ] Qual versão do Allocation Rule Manager (ARM) está instalada?
- [ ] Como abrir o ARM em cada ambiente?
- [ ] Quais grupos concedem `ARM Admin` e `ARM User`?
- [ ] Há diferença de permissões entre DEV, QA/UAT e PROD?
- [ ] Regras de sistema podem ser visualizadas, duplicadas ou editadas?

## 2. Localização e inventário

- [ ] Como pesquisar AR por nome?
- [ ] Como pesquisar por ID?
- [ ] Existe filtro por tipo, status, owner ou data de alteração?
- [ ] Como exportar uma lista completa das ARs?
- [ ] Existe convenção de nomenclatura Goldman Sachs?
- [ ] Como identificar regras obsoletas ou sem uso?
- [ ] Existe metadata/report oficial que relaciona nome e ID?

## 3. Estrutura interna

- [ ] Quais componentes formam uma AR customizada na versão instalada?
- [ ] A implementação usa VBA, SQL, fórmulas, reports ou outra linguagem?
- [ ] Quais eventos/métodos podem ser customizados?
- [ ] Quais objetos de contexto ficam disponíveis?
- [ ] Onde são configurados parâmetros e valores padrão?
- [ ] Como identificar tabelas, views e reports usados pela regra?

## 4. Criação e alteração

- [ ] Passo a passo para criar uma nova AR.
- [ ] Passo a passo para duplicar uma regra existente.
- [ ] Passo a passo para editar e salvar.
- [ ] Existe status Draft/Normal/System ou equivalente?
- [ ] Há bloqueio/check-out para impedir edição concorrente?
- [ ] Como comparar versão anterior e nova?
- [ ] Como registrar change ticket e justificativa dentro da regra?

## 5. Debugging

- [ ] Existe editor/debugger no ARM?
- [ ] É possível usar breakpoint?
- [ ] Quais variáveis e objetos podem ser inspecionados?
- [ ] Como executar uma regra isoladamente?
- [ ] Como informar Legal Entity, datas, valores e demais parâmetros?
- [ ] Onde ficam debug log e execution log?
- [ ] Como aumentar o nível de log?
- [ ] Como correlacionar execução do ARM com Batch/AT?

## 6. Testes

- [ ] Existe massa padrão de teste?
- [ ] Como capturar o resultado completo por investidor?
- [ ] Como comparar duas versões da regra?
- [ ] Existe ferramenta automatizada de regression test?
- [ ] Quais tolerâncias de rounding são aceitas?
- [ ] Quem valida o resultado funcional?
- [ ] É obrigatório testar também via AT/Batch consumidor?

## 7. Publicação

- [ ] Qual ferramenta promove AR entre bancos/ambientes?
- [ ] O `ARM & ATM Export-Import Console` é usado neste projeto?
- [ ] O export inclui dependências automaticamente?
- [ ] Reports, metadata ou configurações precisam ser promovidos separadamente?
- [ ] Existe pipeline ou processo manual?
- [ ] Quem aprova a promoção?
- [ ] Existe janela de mudança?
- [ ] Como validar que a versão correta chegou ao destino?

## 8. Rollback

- [ ] Como exportar/guardar a versão anterior?
- [ ] É possível restaurar uma regra sem trocar o ID?
- [ ] O rollback exige reinício de serviços ou limpeza de cache?
- [ ] Como tratar batches gerados pela versão defeituosa?
- [ ] Qual é o procedimento de rollback em produção?

## 9. Dependências

- [ ] Como descobrir todos os ATs que referenciam uma AR?
- [ ] Como descobrir Batch Types ou Transaction Templates que usam a regra?
- [ ] Como descobrir regras chamadas por Business Events?
- [ ] Como identificar dependências de Report Wizard?
- [ ] Existe busca por Allocation Rule ID no banco ou metadata?
- [ ] A alteração de uma AR invalida cache ou objetos compilados?

## 10. Operação e incidentes

- [ ] Quais são os erros mais frequentes de AR na Goldman Sachs?
- [ ] Quais regras possuem maior volume de execução?
- [ ] Quais processos têm SLA ou janela crítica?
- [ ] Quais ARs participam do fechamento mensal/trimestral?
- [ ] Há regras específicas para management fee, subsequent close, rebook ou GP allocations?
- [ ] Quem é o contato funcional para validar cada família de regra?

## 11. Evidências que devem ser coletadas no KT

Para cada demonstração, salvar:

- screenshots das telas;
- nome e versão do ambiente;
- exemplo de regra real não sensível;
- parâmetros usados;
- resultado esperado e obtido;
- localização dos logs;
- passos de export/import;
- passos de rollback;
- incidentes conhecidos;
- contatos responsáveis.

## 12. Critério de conclusão do KT

O KT de Allocation Rules será considerado suficiente quando o responsável conseguir, sem assistência:

- [ ] localizar uma regra por nome e ID;
- [ ] identificar seus consumidores;
- [ ] reproduzir uma execução;
- [ ] inspecionar entradas e resultado por investidor;
- [ ] identificar a camada onde o cálculo divergiu;
- [ ] alterar uma cópia em DEV;
- [ ] executar regressão;
- [ ] promover para QA/UAT;
- [ ] validar a promoção;
- [ ] executar rollback;
- [ ] documentar causa raiz e evidências.