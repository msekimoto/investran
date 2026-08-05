# Banco de dados

## Escopo

As fontes descrevem SQL Server, bases Master e Staging, contas do Investran, segurança, criptografia, maintenance jobs, backup/restore, validações, limpeza, reindexação e ferramentas de performance. O schema é produto FIS: alterações diretas devem ser exceção aprovada.

## Operação segura

- usar acesso mínimo e consultas read-only para diagnóstico;
- sempre indicar ambiente e database no ticket/script;
- validar estimativa/plano antes de consulta pesada;
- não executar DML/DDL ou stored procedure mutável em produção sem aprovação, backup e rollback;
- não limpar staging enquanto ATM/BE/import estiver ativo;
- após restore, revisar usuários, serviços, nomes, URLs e integrações.

## Manutenção documentada

O Administrator's Guide cita agenda diária/semanal/mensal para Investran Maintenance Job, limpeza de staging/audit/common repository/web reporting logs, batch/contact/portfolio validation, reindexação/defragmentação e remoção permanente. A agenda real e os parâmetros devem ser confirmados com DBA.

## Performance

Coletar janela, sintomas, duração, bloqueios, wait types, CPU, memória, I/O, crescimento, concorrência e plano de execução. Correlacionar SQL Server com workstation/application server. O guia cita SQLdiag, Performance Monitor e SQL Profiler; use ferramentas aprovadas atualmente.

## Backup/restore

Documentar frequência, retenção, criptografia, local, owner e último teste de restore. Backup existente não prova recuperabilidade. Em mudança, registrar ponto de retorno de Master e Staging coerentes.

## KT pendente

- diagrama de bases, replicação e reporting DBs;
- jobs SQL e owners;
- consultas aprovadas e tabelas customizadas;
- política de backup/restore, RPO/RTO e último teste;
- runbooks de blocking, growth, corruption e failover.

## Fontes

- *Internal_Inv7_INV_Administrators_7.pdf*, páginas 3-5 e capítulos SQL/backup/performance.
- *Internal_Inv7_INV_Implementation.pdf*, páginas 3-4 e Database Setup.
- *Internal_Inv7_INV_Maint_Process.pdf*, páginas 5-6.

