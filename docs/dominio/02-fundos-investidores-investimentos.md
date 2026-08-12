# Fundos, investidores e investimentos

## Duas perspectivas do mesmo sistema

Para entender o Investran, separe o domínio em dois lados conectados pela contabilidade.

```mermaid
flowchart LR
    subgraph CAP[Capital e participação]
        I[Investor]
        SI[Specific Investor]
        V[Vehicle / Specific Vehicle]
        C[Commitment]
        I --> SI --> V --> C
    end

    LE[Legal Entity / Fund]

    subgraph INV[Investimentos do fundo]
        D[Deal / Specific Deal]
        P[Position / Specific Position]
        S[Security / Lot / Pool]
        D --> P --> S
    end

    CAP --> LE --> INV
    LE --> B[Accounting: batches e transactions]
```

O lado esquerdo responde **quem fornece capital e por qual estrutura**. O lado direito responde **onde o fundo investe e quais posições mantém**. Batches e transactions registram os eventos que alteram esses dois lados.

## Commitment

Commitment é o compromisso de capital assumido pela participação investidora. No suporte, diferencie:

- commitment total;
- capital já chamado/funded;
- unfunded commitment;
- transferências ou alterações de compromisso;
- data de vigência/closing;
- moeda e contexto da Legal Entity/Vehicle.

A fórmula simplificada `unfunded = commitment - capital chamado` ajuda no raciocínio, mas não deve substituir regras, transações e reports oficiais da instalação.

## Allocation

Allocation distribui um valor ou quantidade de uma transaction entre investidores. Ela pode ser:

- estática ou dinâmica;
- Top Down ou Bottom Up;
- baseada em commitment, saldo, custo ou outra medida;
- calculada por regra de sistema ou customizada no ARM.

```mermaid
flowchart LR
    T[Transaction total] --> AR[Allocation Rule]
    DATA[Commitments / saldos / datas / hierarquias] --> AR
    AR --> A1[Investor Allocation A]
    AR --> A2[Investor Allocation B]
    AR --> A3[Investor Allocation C]
    A1 & A2 & A3 --> R[Reconciliação: soma, moeda e arredondamento]
```

## Exemplo conceitual

Uma Legal Entity possui dois Specific Investors. Uma capital call gera um batch. Cada journal entry possui transactions de débito/crédito. A Allocation Rule consulta a base apropriada e cria Investor Allocations para dividir a transaction entre os dois investidores. O Report Wizard pode então recuperar tanto o total da Legal Entity quanto o detalhe por investor.

## Relações que precisam ser confirmadas no KT

- estrutura Legal Entity → Vehicle → Specific Investor usada pela organização;
- tipos de Deal/Position adotados;
- onde commitment e unfunded são considerados fonte oficial;
- regras de vigência, closing e transferências;
- hierarquias e UDFs que alteram seleção/alocação;
- reports oficiais de reconciliação por entidade.
