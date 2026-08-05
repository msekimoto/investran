# Fluxos ponta a ponta

## Active Template até o batch

```mermaid
sequenceDiagram
    participant U as Usuário/Agenda
    participant S as Scheduler
    participant E as ATM Engine
    participant RW as Driver/Aux Reports
    participant ST as Staging
    participant DB as Investran Master

    U->>S: solicita Active Template + parâmetros
    S->>E: inicia execução
    E->>RW: executa reports
    RW-->>E: linhas e valores
    E->>E: aplica mappings/VBA/templates
    E->>ST: gera batches temporários
    ST-->>U: preview e log
    U->>ST: aprova commit
    ST->>DB: transfere batches
```

## Report interativo ou agendado

```mermaid
sequenceDiagram
    participant C as Cliente/Web/Scheduler
    participant RW as Report Wizard Engine
    participant DB as Investran/Reporting DB
    participant CR as Crystal/OLE DB
    participant O as Saída

    C->>RW: report + parâmetros + contexto de segurança
    RW->>DB: metadata e dados
    DB-->>RW: dataset
    alt saída nativa RW
        RW-->>O: tabela/arquivo
    else Crystal associado
        RW->>CR: dataset ou referência RW
        CR-->>O: layout renderizado
    end
```

## API de leitura/escrita

```mermaid
sequenceDiagram
    participant A as Aplicação cliente
    participant API as Investran API/WCF
    participant SEC as Autenticação/Team Security
    participant SVC as Service Contract
    participant DB as Investran

    A->>API: request DTO
    API->>SEC: autentica e autoriza
    SEC-->>API: principal/contexto
    API->>SVC: Load/Query/Publish/Remove
    SVC->>DB: operação
    DB-->>SVC: entidade/resultado/versão
    SVC-->>A: DTO ou fault
```

## Uso no suporte

Para cada processo Goldman, copie o fluxo mais próximo e acrescente nomes reais, IDs, validações, logs e owners. O objetivo é conseguir apontar exatamente em qual seta a execução parou ou produziu dado incorreto.
