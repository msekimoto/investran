# Trilha de aprendizado do Investran

Esta trilha organiza a documentação na ordem mais útil para alguém que precisa entender o sistema antes de sustentá-lo. Ela começa pelo negócio, passa pelo modelo de dados e termina nos componentes técnicos.

## Nível 1 - domínio funcional

1. [Entidades e relacionamentos](dominio/01-entidades-e-relacionamentos.md)
2. [Fundos, investidores e investimentos](dominio/02-fundos-investidores-investimentos.md)
3. [Ciclo contábil e batches](dominio/03-ciclo-contabil-e-batches.md)

Ao concluir este nível, você deve conseguir explicar:

- diferença entre entidade mestre e entidade contextual (`Specific*`);
- como Legal Entity, Vehicle e Investor representam a participação em um fundo;
- como Deal e Position representam o lado dos investimentos;
- como Commitment, transações e allocations se relacionam;
- como um evento de negócio termina em lançamentos contábeis.

## Nível 2 - arquitetura da aplicação

1. [Arquitetura lógica e componentes](arquitetura/01-arquitetura-logica.md)
2. [Application Server, workers e scheduler](arquitetura/02-application-server.md)
3. [Fluxos ponta a ponta](arquitetura/03-fluxos-ponta-a-ponta.md)

Ao concluir este nível, você deve conseguir localizar uma falha em uma das camadas: interface, aplicação, processamento assíncrono, reporting, integração ou banco.

## Nível 3 - reporting

1. [Arquitetura de reporting](reporting/01-arquitetura-reporting.md)
2. [Report Wizard, Crystal e consumidores](07-report-wizard-e-crystal.md)
3. [Runbook de falha de reporting](../runbooks/falha-reporting.md)

## Nível 4 - integrações

1. [API e SDK em profundidade](integracoes/01-api-e-sdk.md)
2. [Data Import e interfaces](10-data-import-e-interfaces.md)
3. [Segurança e SSO](11-configuracoes-seguranca-sso.md)

## Nível 5 - automação e sustentação

1. [Active Templates](active-templates/README.md)
2. [Allocation Rules](allocation-rules/README.md)
3. [Batches, jobs e scheduler](06-batches-jobs-scheduler.md)
4. [Business Events](14-business-events.md)
5. [Troubleshooting](13-troubleshooting.md)

## Exercício de validação

Escolha um processo real da organização e desenhe o caminho completo:

```text
Entrada/usuário
  → componente funcional
  → entidades consultadas
  → regra/report/template executado
  → serviço/scheduler
  → batch/transações/allocations
  → report/interface de saída
  → reconciliação
```

Se qualquer etapa não puder ser preenchida, ela é uma pendência objetiva de KT.
