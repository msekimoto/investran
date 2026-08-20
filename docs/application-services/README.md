# Application Server e Services

O Investran Application Server hospeda processamentos assíncronos e pesados que não devem depender da sessão interativa do usuário. Ele usa serviços de agendamento, dispatcher e workers especializados para Active Templates, Data Import, Data Exchange, OLE DB e reporting.

Esta seção explica o conjunto documentado de services, para que cada um serve e como operá-los com segurança.

## Guias

1. [Arquitetura e catálogo de services](catalogo-services.md)
2. [Operação, configuração e monitoramento](operacao-monitoramento.md)
3. [Troubleshooting e restart seguro](troubleshooting-restart.md)
4. [Resumo anterior: Application Server, workers e scheduler](../arquitetura/02-application-server.md)

## Resposta rápida: quais services existem?

O Service Manager documentado permite adicionar estas famílias de scheduler service:

| Ação no Service Manager | Finalidade |
|---|---|
| Add ATM | Active Template Manager |
| Add Data Import | Data Import no Investran Web |
| Add DX Sync | Data Exchange Synchronization |
| Add DX Workflow | Data Exchange Workflow |
| Add OLE DB | Investran OLE DB Provider |
| Add RS | Reporting Services |
| Add RS Word | processamento de documentos Word dos pacotes de Reporting Services |
| Add RW | Report Wizard e Crystal no Investran Web, além de integrações relacionadas |

Business Events possui arquitetura e conta de serviço próprias e não aparece como botão `Add` nessa lista. Além disso, o manual cita os componentes compartilhados `FTI Process Scheduler` e `FTI Process Dispatcher`.

> Os nomes exibidos no Windows Services (`services.msc`) podem incluir prefixo, versão, database ou nome atribuído à instância. Não use a tabela como inventário de produção: confirme `Service Name`, `Display Name`, executável, conta e ambiente em cada servidor.

## O que não deve ser confundido

- **Service Manager:** ferramenta administrativa do Investran para criar/configurar instâncias.
- **Windows service:** processo registrado no Service Control Manager do Windows.
- **Scheduling Service:** procura trabalhos pendentes conforme polling interval.
- **Dispatcher:** encaminha o trabalho para o worker adequado.
- **Worker/Executor:** processo que executa a atividade concreta.
- **Job/process:** unidade funcional solicitada por usuário ou integração.
- **IIS/SQL/MSMQ/MSDTC:** dependências de plataforma; não são todos services próprios do Investran.

## KT prioritário

- inventário real de Windows services por servidor e ambiente;
- mapeamento entre Display Name, Service Name e módulo;
- conta de logon e cofre/rotação de senha;
- Master, Staging, porta, UNC e demais dependências;
- polling, concorrência e capacidade;
- caminhos de log e alertas;
- dependências e ordem de start/stop;
- verificação de jobs ativos antes de restart;
- recuperação de processo órfão ou fila parada;
- procedimento após restore, clone, upgrade ou troca de senha.
