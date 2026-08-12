# Arquitetura lógica e componentes

## Visão em camadas

```mermaid
flowchart TB
    U[Usuários e sistemas externos]

    subgraph UX[Experiência e canais]
        WEB[Investran Web]
        DESK[Accounting / Report Wizard / Reporting Services]
        DX[Data Exchange / aplicações customizadas]
    end

    subgraph WS[Web e serviços]
        IIS[Web Server / IIS]
        WAS[Web Application Server]
        REST[REST Controllers]
        SOAP[SOAP/WCF Web Services]
        SEC[Autenticação / Team Security / SSO]
    end

    subgraph APP[Processamento de aplicação]
        SCH[Scheduling Service]
        DSP[Dispatcher]
        ATM[Active Templates]
        ARM[Allocation Rules]
        RW[Report Engine / OLE DB]
        RS[Reporting Services]
        BE[Business Events]
        DI[Data Import]
    end

    subgraph DATA[Dados]
        MASTER[(Investran Master)]
        STAGING[(Investran Staging)]
        RDB[(Reporting / WRS Admin quando aplicável)]
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

## Responsabilidade por camada

| Camada | Responsabilidade | Evidência de suporte |
|---|---|---|
| Canais | interação e execução | usuário, URL, parâmetros, screenshot |
| Web/IIS | hosting, autenticação e APIs | IIS/app pool, HTTP, certificado, web logs |
| Web Application | regras e service contracts | application logs, fault, correlation |
| Application Server | processamento assíncrono/pesado | scheduler, dispatcher, worker e execution ID |
| Reporting | consultas e saídas | report, parâmetros, engine/provider e duração |
| Dados | persistência e staging | IDs, status, blocking, jobs e integridade |

## Como localizar uma falha

```mermaid
flowchart LR
    S[Sintoma] --> Q1{Só um usuário?}
    Q1 -- Sim --> A[Permissão, contexto ou parâmetros]
    Q1 -- Não --> Q2{Canal web indisponível?}
    Q2 -- Sim --> W[IIS, app pool, SSO, certificado]
    Q2 -- Não --> Q3{Execução assíncrona?}
    Q3 -- Sim --> P[Scheduler, dispatcher, worker, staging]
    Q3 -- Não --> Q4{Consulta/relatório?}
    Q4 -- Sim --> R[RW, Crystal/OLE DB, SQL, volume]
    Q4 -- Não --> D[API, regra funcional ou banco]
```

## Limitação

O desenho combina os componentes documentados pela FIS. A topologia física pode consolidar Web Server e Web Application Server ou distribuir componentes em várias instâncias. O inventário do ambiente deve mapear cada bloco para hostname, serviço, URL, conta e monitoramento reais.

## Fontes

- *Internal_Inv7_INV_Architecture_7.pdf*, Deployment, Web Components, Application Server e Reporting.
- *Internal_Inv7_INV_Implementation.pdf*, server setup e scheduler services.
