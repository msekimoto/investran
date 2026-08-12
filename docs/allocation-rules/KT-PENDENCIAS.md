# Allocation Rules - pendências de Knowledge Transfer

O manual padrão do ARM já documenta interface, atributos, ciclo `Draft` -> `Normal`, rules simples/complexas, VBA, simulação, object model e Import-Export Console. Esta lista concentra o conhecimento que continua específico de cada ambiente.

## 1. Acesso e ambientes

- [ ] caminho de instalação/atalho do ARM em cada ambiente;
- [ ] versão do ARM e compatibilidade com Investran/MR;
- [ ] grupos e procedimento para solicitar `ARM Admin` e `ARM User`;
- [ ] contas de serviço usadas por automações;
- [ ] diferenças de configuração entre DEV, UAT e PROD.

## 2. Inventário das regras

Para cada regra crítica, obter:

- [ ] nome e identificador;
- [ ] status, Top Down/Bottom Up e Use VBA;
- [ ] owner funcional e técnico;
- [ ] Legal Entities e processos atendidos;
- [ ] properties, parameters, reports e referências VBA;
- [ ] consumidores: Accounting, Active Template, Batch, BE, job ou integração;
- [ ] volume, frequência e criticidade;
- [ ] última alteração e motivo.

## 3. Convenções de desenvolvimento

- [ ] padrão de nomes para rules, reports, parameters e UDFs;
- [ ] pasta Public Read-only usada pelos driver reports;
- [ ] política para `Locked`, `Notes` e `Allow performance optimization`;
- [ ] bibliotecas/referências VBA aprovadas;
- [ ] tratamento padrão de erro e logging;
- [ ] regras para null Investor, GP/LP, rounding e tolerância;
- [ ] valores configuráveis e UDFs usados pelas regras.

## 4. Testes e validação funcional

- [ ] massa de testes representativa e Legal Entities seguras;
- [ ] casos de referência com resultado esperado;
- [ ] tolerâncias para Amount, LEAmount e Quantity;
- [ ] evidência exigida para aprovação;
- [ ] responsável pela reconciliação financeira;
- [ ] testes de AT/Batch integrados após simulação no ARM;
- [ ] baselines de duração e volume.

## 5. Promoção

Embora o produto forneça o Import-Export Console, é necessário documentar:

- [ ] caminho e versão da console;
- [ ] seleção da rule e dos reports relacionados;
- [ ] formato/local do pacote;
- [ ] ordem das dependências;
- [ ] tratamento de IDs e conflitos no destino;
- [ ] aprovações e segregação de função;
- [ ] janela e comunicação;
- [ ] validação pós-importação;
- [ ] necessidade de Refresh, cache ou restart.

## 6. Rollback

- [ ] como preservar a última versão aprovada;
- [ ] se rollback usa reimportação, duplicação ou troca de regra consumidora;
- [ ] restrições quando a regra já está em uso;
- [ ] como tratar transações geradas durante a janela;
- [ ] critérios para abortar ou reverter;
- [ ] reconciliação obrigatória após rollback.

## 7. Troubleshooting e suporte

- [ ] localização dos logs e eventos úteis;
- [ ] como depurar VBA na versão instalada;
- [ ] erros conhecidos e workarounds;
- [ ] consultas/relatórios para identificar regra e InvestorSet executados;
- [ ] procedimento quando regra está locked por outro desenvolvedor;
- [ ] procedimento quando uma regra em uso precisa mudar;
- [ ] contatos de DBA, infraestrutura, funcional, desenvolvimento e FIS;
- [ ] severidade e SLA de incidentes de alocação.

## 8. Perguntas práticas para a sessão de KT

1. Mostre uma regra simples e uma complexa usadas em produção.
2. Mostre como identificar todos os consumidores de uma regra.
3. Execute uma simulação e explique cada property e parameter.
4. Mostre o driver report e reconcilie suas quatro colunas.
5. Percorra um `Sub Main` real e o preenchimento de `AllocationRule.Results`.
6. Provoque um erro controlado e mostre onde ele aparece.
7. Demonstre exportação em DEV e importação em UAT.
8. Demonstre o rollback da última alteração real.
9. Explique um incidente histórico, sua causa raiz e prevenção.
10. Mostre como validar cache/performance optimization quando a regra é chamada pelo ATM.

## 9. Evidências que devem sair do KT

- screenshots sanitizados dos fluxos;
- catálogo de rules e consumers;
- exemplo de pacote de promoção sem dados sensíveis;
- matriz de testes e resultados esperados;
- links para tickets/releases anteriores;
- locais de logs e consultas aprovadas;
- owners e matriz de escalonamento;
- runbook revisado com um caso real.

## Critério de conclusão

O KT de ARM só está concluído quando você consegue, sem assistência:

1. identificar a regra executada e seus consumidores;
2. explicar properties, parameters, reports e VBA;
3. reproduzir uma execução no ARM;
4. reconciliar o InvestorSet;
5. diagnosticar regra versus contexto de entrada;
6. promover em ambiente não produtivo;
7. validar e reverter seguindo o processo interno da organização.

## Referências

- [Interface do ARM e ciclo de vida](arm-interface-and-lifecycle.md)
- [Object model e contratos técnicos](object-model.md)
- [Desenvolvimento e alteração](development.md)
- [Troubleshooting e playbooks](troubleshooting.md)
