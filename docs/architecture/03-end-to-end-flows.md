# End-to-end flows

## Active Template to batch

```mermaid
sequenceDiagram
    participant U as User/Schedule
    participant S as Scheduler
    participant E as ATM Engine
    participant RW as Driver/Aux Reports
    participant ST as Staging
    participant DB as Investran Master
    U->>S: request Active Template + parameters
    S->>E: start execution
    E->>RW: run reports
    RW-->>E: rows and values
    E->>E: apply mappings/VBA/templates
    E->>ST: create temporary batches
    ST-->>U: preview and log
    U->>ST: approve commit
    ST->>DB: transfer batches
```

## Interactive or scheduled report

```mermaid
sequenceDiagram
    participant C as Client/Web/Scheduler
    participant RW as Report Wizard Engine
    participant DB as Investran/Reporting DB
    participant CR as Crystal/OLE DB
    participant O as Output
    C->>RW: report + parameters + security context
    RW->>DB: metadata and data
    DB-->>RW: dataset
    alt native RW output
        RW-->>O: table/file
    else associated Crystal
        RW->>CR: dataset or RW reference
        CR-->>O: rendered layout
    end
```

## Read/write API

```mermaid
sequenceDiagram
    participant A as Client application
    participant API as Investran API/WCF
    participant SEC as Authentication/Team Security
    participant SVC as Service Contract
    participant DB as Investran
    A->>API: DTO request
    API->>SEC: authenticate and authorize
    SEC-->>API: principal/context
    API->>SVC: Load/Query/Publish/Remove
    SVC->>DB: operation
    DB-->>SVC: entity/result/version
    SVC-->>A: DTO or fault
```

## Support use

For every organizational process, copy the closest flow and add real names, IDs, validations, logs, and owners. The goal is to identify the exact arrow where execution stopped or produced incorrect data.
