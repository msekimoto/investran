# Arquitetura e ambientes

## Componentes descritos pela FIS

A topologia documentada pode conter SQL Server com bases Master e Staging, Web Server, Web Application Server, Application Server, workstations/clientes, Reporting/Report Wizard Engine, Business Events, MSMQ, IIS, certificados X.509 e serviços scheduler. Nem todos precisam existir como servidores separados no ambiente real.

## Dependências críticas

- **SQL Server:** dados, segurança, maintenance jobs, backup/restore e, quando configurado, replicação.
- **Application Server:** Process Scheduler/Dispatcher e serviços ATM, Data Import, OLE DB, RS, RS Word e RW.
- **Web/IIS:** Investran Web, autenticação, logs, SSO e deployment de Business Events.
- **MSMQ/MSDTC:** mensageria e transações distribuídas em fluxos que atravessam componentes.
- **Certificados:** comunicação e autenticação; validade, store, permissões e identidade devem ser controladas.
- **Contas de serviço:** executam IIS, Business Events e schedulers; mudança/expiração de senha é causa recorrente de falha.

## Inventário a preencher por ambiente

| Item | DEV | UAT | PROD |
|---|---|---|---|
| Versão/MR | KT pendente | KT pendente | KT pendente |
| SQL Server / Master / Staging | KT pendente | KT pendente | KT pendente |
| Web Server / URL | KT pendente | KT pendente | KT pendente |
| Web Application Server | KT pendente | KT pendente | KT pendente |
| Application Server | KT pendente | KT pendente | KT pendente |
| Serviços instalados | KT pendente | KT pendente | KT pendente |
| Scheduler/service account | KT pendente | KT pendente | KT pendente |
| Local dos logs | KT pendente | KT pendente | KT pendente |
| Certificados e validade | KT pendente | KT pendente | KT pendente |
| Monitoramento/alertas | KT pendente | KT pendente | KT pendente |

## Diagrama mínimo esperado

Documentar clientes/integrações → load balancer/IIS → web/app services → SQL/MSMQ, além dos schedulers e destinos de arquivos. Para cada seta, registrar protocolo, porta, autenticação, owner e efeito da indisponibilidade.

## Cuidados

- não assumir que o diagrama de 2014 representa produção atual;
- não reiniciar um servidor para corrigir apenas um serviço sem avaliar jobs em execução;
- após restore/clone, revisar nomes de banco, contas, URLs, serviços e integrações para evitar conexão acidental com produção.

## Fontes

- *Internal_Inv7_INV_Architecture_7.pdf*, páginas 3-14.
- *Internal_Inv7_INV_Implementation.pdf*, páginas 3-5 e seções de setup.
- *Internal_Inv7_INV_Administrators_7.pdf*, seções SQL, Web e Application Server.

