# Allocation Rules — Troubleshooting e Playbooks

## Uso deste documento

Escolha o sintoma mais próximo do incidente. Reproduza o cenário em ambiente controlado e registre evidências antes de alterar a regra.

---

## Playbook 1 — Total alocado não fecha com o total da transação

### Verificações

1. compare `Amount` e `LEAmount` da transação com a soma do resultado por investidor;
2. confirme escalas e casas decimais;
3. verifique diferenças de arredondamento;
4. confirme se existe uma transação non-dominant responsável pelo balanceamento;
5. verifique se o AT modifica valores antes ou depois da execução da AR;
6. identifique investidores descartados por valor zero, data ou elegibilidade;
7. confirme se existem valores `NULL`.

### Possíveis causas

- rounding sem tratamento do residual;
- universo de investidores diferente entre cálculo e validação;
- regra aplicada à transaction template errada;
- valor alterado pelo VBA após a alocação;
- lógica de rebook não rebalanceada;
- local amount e LE amount calculados com escalas diferentes.

### Evidência de encerramento

- soma dos investidores igual ao total, dentro da tolerância aprovada;
- débito e crédito balanceados;
- relatório comparativo antes/depois anexado.

---

## Playbook 2 — Investidor esperado não recebeu alocação

### Verificações

1. confirme que o investidor pertence à Legal Entity correta;
2. confirme status e vigência na data da transação;
3. valide commitment, closing date, unfunded commitment ou outra base usada;
4. verifique filtros da AR e do processo chamador;
5. confirme permissões/domínio;
6. compare a execução com outra data;
7. verifique se a regra é static e se o investidor está na tabela de percentuais.

### Possíveis causas

- closing date posterior à data usada pela regra;
- commitment zerado ou inexistente;
- investidor fora do universo do fundo/vehicle;
- static rule desatualizada;
- filtro por Deal/Position ou Transaction Type;
- parâmetro de data incorreto fornecido pelo Batch/AT.

---

## Playbook 3 — Investidor indevido recebeu alocação

### Verificações

1. liste todo o InvestorSet retornado;
2. determine a condição que deveria excluir o investidor;
3. confira closing date e período de participação;
4. valide se a regra usada é `By Commitment (No Date)` quando deveria considerar data;
5. verifique se o consumidor substituiu a regra esperada;
6. confirme se o investidor está indevidamente presente em uma static allocation table.

### Ação segura

Não aplique correção manual apenas no batch sem entender a causa. O mesmo defeito pode afetar outras execuções.

---

## Playbook 4 — Percentuais estão incorretos, mas somam 100%

### Verificações

- identifique a base matemática da regra;
- capture valores da base para cada investidor;
- recalcule os ratios fora do Investran;
- confirme a data usada para consultar a base;
- procure overrides de management fee ou configurações específicas do investidor;
- valide se o cálculo usa commitment, called capital, invested capital, cash balance ou investment cost.

### Diagnóstico

Se os ratios reproduzidos com a mesma base forem iguais, a AR pode estar correta e a expectativa funcional pode estar errada. Confirme a regra de negócio com o cliente.

---

## Playbook 5 — Allocation Rule funciona no ARM, mas falha no Active Template

### Verificações

1. confirme o Allocation Rule ID atribuído pelo AT;
2. procure alterações em `Application.Context.AllocationRule`;
3. confira se a regra muda por `JEIndex` ou `TXIndex`;
4. valide os valores do `Application.Context` imediatamente antes da execução;
5. confirme se o AT usa `User Provided` e preenche o `InvestorSet` manualmente;
6. compare parâmetros e datas entre ARM e ATM;
7. valide Driver Reports e Auxiliary Reports.

### Causa provável

A diferença geralmente está no contexto fornecido pelo consumidor, não necessariamente na regra.

---

## Playbook 6 — Valores NULL para todos os Investor IDs em GP Legal Entity

O guia de troubleshooting do ATM documenta um cenário em que uma transação de GP Legal Entity, não Draft, usa uma Allocation Rule diferente de `No Allocation` ou `Non-Dominant` e termina com valores `NULL` para todos os Investor IDs.

### Procedimento documentado

1. execute o AT em Simulation Mode;
2. coloque breakpoint em `Application_AfterTransaction`;
3. verifique se o código está alocando a partir do primeiro elemento do InvestorSet, descrito como “unallocated investor”;
4. altere a lógica para alocar a partir dos investidores associados à GP Legal Entity;
5. repita a simulação e valide o InvestorSet.

---

## Playbook 7 — Rebook produziu distribuição diferente da esperada

### Verificações

1. identifique a regra original e a Rebook Allocation Rule;
2. confirme start date, end date e subsequent close date;
3. valide quais saldos foram incluídos por GL Account, Transaction Type, Deal, Position, Investor e Effective Date;
4. confirme se atributos não transportados, como Lot ou Income Security, são relevantes para a expectativa;
5. compare reversão e novo lançamento;
6. valide rounding da non-dominant transaction.

O material conceitual informa que o Subsequent Close AT pode reverter saldos e rebooká-los usando uma regra parametrizada, frequentemente `By Commitment & Closing Date`.

---

## Playbook 8 — Resultado muda conforme a data

Isso pode ser comportamento esperado para Dynamic Allocation Rules.

### Verificações

- qual data a regra utiliza: Effective Date, GL Date, closing date ou data de corte específica;
- commitments vigentes em cada data;
- investor closings;
- investment period;
- investment cost “as of GL Date”;
- mudanças em cash balance ou unfunded commitment.

### Conclusão

Documente explicitamente a data de referência da regra. Não trate variação temporal como defeito sem confirmar a regra de negócio.

---

## Playbook 9 — Management fee incorreta

### Verificações

1. determine se o fundo está dentro ou fora do investment period;
2. confirme a base esperada:
   - dentro do período: commitment;
   - fora do período: invested capital, conforme o documento conceitual;
3. confirme taxa no fundo;
4. confirme taxas específicas ou overrides por investidor;
5. valide datas de vigência;
6. confirme se existe custom management fee allocation rule.

---

## Playbook 10 — Usuário não consegue criar ou editar AR

### Verificações

- o usuário possui `ARM Admin`?
- possui apenas `ARM User`?
- está conectado ao banco/ambiente correto?
- a regra é de sistema ou possui restrição de edição?
- existem controles específicos do cliente?

O material recebido estabelece que `ARM Admin` permite criar, editar, executar e excluir; `ARM User` permite executar.

---

## Checklist rápido de diagnóstico

```text
[ ] Regra e ID confirmados
[ ] Ambiente confirmado
[ ] Legal Entity confirmada
[ ] Batch/JE/Transaction identificados
[ ] Datas capturadas
[ ] Amount e LEAmount capturados
[ ] InvestorSet exportado
[ ] Base de cálculo identificada
[ ] Soma e rounding validados
[ ] Componente chamador revisado
[ ] Cenário reproduzido em teste
[ ] Causa raiz registrada
```

## Informações que ainda dependem de KT

- localização exata dos logs do ARM;
- recursos de breakpoint/debug disponíveis na versão instalada;
- método oficial de export/import de AR;
- mecanismo de versionamento;
- processo interno de aprovação e deploy;
- rollback técnico suportado no ambiente.
