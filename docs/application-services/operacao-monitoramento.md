# Application Services - operação, configuração e monitoramento

## Contas envolvidas

O Application Server documentado pode usar até três identidades, além da conta específica de Business Events:

- **Startup Account:** executa o Process Scheduler e serve de identidade padrão para serviços;
- **Database Account:** configura/acessa Master e Staging;
- **Scheduler Account:** usada pelos schedulers para conexão e execução;
- **Business Event service account:** usada pela arquitetura de BE.

Um mesmo usuário pode acumular papéis, mas isso aumenta impacto de bloqueio ou troca de senha. Prefira contas técnicas identificáveis, sem uso interativo rotineiro e com direitos mínimos suportados.

## Configuração comum

Os dialogs dos services repetem quatro grupos:

### Database Configuration

- autenticação Windows/current user ou SQL, quando suportada;
- Investran Master server/database;
- Staging server/database, quando o módulo utiliza staging.

O manual antigo exige nome de servidor, não IP, porta ou alias, em várias configurações. Valide DNS e essa restrição na versão atual.

### Scheduler Configuration

- identidade do Scheduler Account;
- polling interval;
- maximum parallel processes;
- categorias separadas, como Execution/Commit ou Generation/Delivery;
- trace temporário para análise.

### Recursos externos

- porta e firewall para OLE DB;
- SPN/Kerberos;
- shared folder UNC;
- Processing Location de Reporting Services;
- Word/Office e impressora padrão;
- email, fax ou filesystem para delivery.

### Persistência

Os mappings dos scheduler services são gravados no `Config.xml` da pasta de instalação `Investran Servers`, segundo o manual. O arquivo pode sobreviver a upgrade e conter configurações de múltiplas versões.

Trate-o como configuração sensível: backup controlado, acesso restrito, comparação após upgrade e proibição de publicação quando houver servidores, usuários ou credenciais.

## Polling interval

Determina a frequência com que o scheduler procura novo trabalho.

- muito baixo: mais consultas e overhead;
- muito alto: maior latência antes de iniciar jobs;
- alterar não corrige worker lento ou fila bloqueada;
- documente unidade, default, valor atual e justificativa.

O manual usa 10 segundos como default em alguns serviços, mas esse número não deve ser aplicado cegamente a todos os módulos/ambientes.

## Maximum Parallel Processes

Controla concorrência, não velocidade individual.

Antes de aumentar:

- meça CPU, memória, I/O e waits no SQL;
- verifique licenças e limites do módulo;
- avalie locks e contenção no Staging/Master;
- confirme capacidade de filesystem, Office e destinos;
- execute teste de volume;
- defina retorno ao valor anterior.

Os manuais antigos citam até três processos por processador em vários módulos e valor 1 para DX Workflow. São referências históricas, não sizing do ambiente atual.

## Operação pelo Service Manager

Para iniciar/parar uma instância:

1. abra o Service Manager no Application Server correto;
2. confirme ambiente/database da linha selecionada;
3. verifique jobs/processos ativos;
4. selecione a instância;
5. use `Start` ou `Stop`;
6. valide o estado no Windows e no módulo funcional;
7. acompanhe logs e consumo de novos jobs.

O guia também documenta `net start "Scheduler Service Name"` e `net stop "Scheduler Service Name"`. Use o **Service Name/Display Name real**, não um nome presumido. O console do Service Manager pode não atualizar imediatamente após comando externo.

## Health check diário

- services críticos no estado esperado;
- Startup Type correto;
- contas não bloqueadas e senhas não próximas da expiração;
- fila sem crescimento anormal;
- jobs mais antigos dentro do SLA;
- ausência de loops de retry;
- Master/Staging acessíveis;
- espaço de banco, transaction log, temp e Processing Location;
- Event Viewer sem novos erros de Scheduler/Dispatcher;
- logs sendo gravados e retenção funcionando;
- outputs recentes gerados com sucesso.

## Monitoramento por camada

| Camada | O que observar |
|---|---|
| Windows service | state, start mode, logon failure e restart count |
| Scheduler | polling, oldest pending job e jobs consumidos |
| Dispatcher | criação de workers e falhas de handoff |
| Worker | duração, CPU/memória, erro e output |
| SQL | conectividade, locks, waits, espaço e crescimento |
| Staging | backlog, jobs órfãos e retenção |
| Filesystem | espaço, permissões, path length e arquivos presos |
| Funcional | batch/report/import concluído e reconciliado |

`Running` no Windows não prova saúde funcional. Um service pode estar iniciado e incapaz de consumir trabalho por senha, banco, fila, mapping ou dependência externa.

## Smoke tests por serviço

| Service | Teste funcional mínimo |
|---|---|
| ATM | executar Test AT ou AT controlado com Preview |
| Data Import | validar arquivo pequeno sem load |
| DX Sync | executar/observar sincronização controlada |
| DX Workflow | processar item não financeiro de teste, quando disponível |
| OLE DB | testar datasource e consulta de baixo custo |
| RS | gerar pacote simples sem delivery externo |
| RS Word | gerar pacote contendo documento Word de teste |
| RW | executar report simples no Investran Web |
| Business Events | executar BE controlado sem impacto ou conforme runbook |

## Após upgrade, restore ou clone

- abrir Service Manager e revisar todos os mappings;
- confirmar Master e Staging de destino;
- impedir conexão acidental com produção;
- revisar contas, SPNs, portas e shares;
- conferir `Config.xml` retido de versão anterior;
- reiniciar somente depois da revisão;
- executar smoke test de cada service instalado;
- registrar versão dos binários e configuração aprovada.

O Administrator's Guide alerta que, após restore/overwrite de database, o Application Server precisa ser reconfigurado pelo Service Manager; caso contrário, tabelas podem continuar apontando para nomes antigos de Staging server/database.

## KT operacional

Peça uma sessão prática para:

1. abrir o Service Manager em cada ambiente;
2. relacionar cada linha a um Windows service;
3. mostrar contas e destinos sem expor senha;
4. localizar logs e Event Viewer;
5. encontrar um job ativo e seu worker;
6. demonstrar stop/start seguro em ambiente não produtivo;
7. executar smoke test por módulo;
8. simular senha inválida ou dependência indisponível;
9. restaurar o estado e validar backlog;
10. atualizar o inventário e o runbook.
