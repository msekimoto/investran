# Logical architecture and components

## Layered view

```mermaid
flowchart TB
    U[Users and external systems]
    subgraph UX[Experience and channels]
        WEB[Investran Web]
        DESK[Accounting / Report Wizard / Reporting Services]
        DX[Data Exchange / custom applications]
    end
    subgraph WS[Web and services]
        IIS[Web Server / IIS]
        WAS[Web Application Server]
        REST[REST Controllers]
        SOAP[SOAP/WCF Web Services]
        SEC[Authentication / Team Security / SSO]
    end
    subgraph APP[Application processing]
        SCH[Scheduling Service]
        DSP[Dispatcher]
        ATM[Active Templates]
        ARM[Allocation Rules]
        RW[Report Engine / OLE DB]
        RS[Reporting Services]
        BE[Business Events]
        DI[Data Import]
    end
    subgraph DATA[Data]
        MASTER[(Investran Master)]
        STAGING[(Investran Staging)]
        RDB[(Reporting / WRS Admin when applicable)]
    end
    U --> UX
    WEB --> IIS --> WAS
    WAS --> REST & SOAP & SEC
    DESK --> MASTER
    DX --> SOAP
    WAS --> APP
    SCH --> DSP --> ATM & ARM & RW & RS & BE & DI
    APP --> MASTER & STAGING & RDB
```

## Responsibility by layer

| Layer | Responsibility | Support evidence |
|---|---|---|
| Channels | Interaction and execution | User, URL, parameters, screenshot |
| Web/IIS | Hosting, authentication, and APIs | IIS/app pool, HTTP, certificate, web logs |
| Web Application | Rules and service contracts | Application logs, fault, correlation |
| Application Server | Heavy/asynchronous processing | Scheduler, dispatcher, worker, execution ID |
| Reporting | Queries and outputs | Report, parameters, engine/provider, duration |
| Data | Persistence and staging | IDs, status, blocking, jobs, integrity |

## How to locate a failure

```mermaid
flowchart LR
    S[Symptom] --> Q1{One user only?}
    Q1 -- Yes --> A[Permission, context, or parameters]
    Q1 -- No --> Q2{Web channel unavailable?}
    Q2 -- Yes --> W[IIS, app pool, SSO, certificate]
    Q2 -- No --> Q3{Asynchronous execution?}
    Q3 -- Yes --> P[Scheduler, dispatcher, worker, staging]
    Q3 -- No --> Q4{Query/report?}
    Q4 -- Yes --> R[RW, Crystal/OLE DB, SQL, volume]
    Q4 -- No --> D[API, business rule, or database]
```

## Limitation

The diagram combines FIS-documented components. Physical topology may combine the Web Server and Web Application Server or distribute components across several instances. The environment inventory must map each block to its real hostname, service, URL, account, and monitoring.

## Sources

- *Internal_Inv7_INV_Architecture_7.pdf*, Deployment, Web Components, Application Server, and Reporting.
- *Internal_Inv7_INV_Implementation.pdf*, server setup and scheduler services.
