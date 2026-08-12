# Visão geral e mapa de componentes

## O que é o Investran 7

O Investran é uma suíte para administração de investimentos e contabilidade, com clientes desktop, aplicações web, mecanismos de reporting, serviços de aplicação, automação e APIs. A documentação disponível descreve uma arquitetura em camadas e extensível, com componentes HTML5/Angular/JavaScript no web, controladores REST, serviços SOAP/WCF e mecanismos customizáveis.

## Mapa operacional

| Componente | Responsabilidade | Dependências principais | Falha normalmente aparece em |
|---|---|---|---|
| Accounting/Web | Entrada e consulta de dados, batches e segurança | banco, IIS, serviços | login, tela, validação ou persistência |
| ATM/AT | Geração automatizada de batches | RW, VBA, ATM Engine, staging, scheduler | execução, staging ou commit |
| ARM/AR | Cálculo de alocações | RW, VBA, dados por investor | percentuais/valores incorretos |
| Report Wizard | Recuperação e transformação de dados | metadata, banco, engine RW | parâmetros, timeout ou resultado |
| Crystal Reports | Layout sobre dados RW | RW OLE DB Provider/associação | conexão, parâmetros ou renderização |
| Application Server | Schedulers, ATM, BE, Data Import e reporting | contas de serviço, MSMQ, certificados, banco | serviço parado, fila ou log do servidor |
| WRS | Execução de RW por Data Exchange/custom apps | IIS/SSL, WRS Admin DB, Team Security | autenticação, publicação ou saída |
| Investran API/SDK | Integração por DTOs e serviços WCF | endpoints, autenticação, versão de assemblies | fault/exception, contrato ou conexão |
| Data Import | Importação XLSX e automação via SDK | serviço, licença, entitlement, template | job rejeitado, parcial ou reconciliation |
| Business Events | Processos funcionais automatizados | template, web deployment, app service, RW | status do template, logs web/app ou batch |

## Fluxos que precisam estar dominados

1. Usuário/integração autentica e obtém autorização por Team Security.
2. A aplicação consulta ou altera dados no Master; processos temporários podem usar Staging.
3. Schedulers e serviços executam ATM, reporting, Data Import e Business Events.
4. Relatórios ou driver reports alimentam regras, templates e saídas.
5. Resultado é validado, reconciliado e, quando aplicável, transferido/commitado para o Investran.

## Aprofundamento

- [Entidades e relacionamentos](dominio/01-entidades-e-relacionamentos.md)
- [Ciclo contábil e batches](dominio/03-ciclo-contabil-e-batches.md)
- [Arquitetura lógica](arquitetura/01-arquitetura-logica.md)
- [Fluxos ponta a ponta](arquitetura/03-fluxos-ponta-a-ponta.md)

## KT pendente - ambiente atendido

- versão e maintenance release atuais;
- módulos licenciados e efetivamente utilizados;
- lista de customizações versus componentes FIS padrão;
- fluxos críticos, volumes, SLAs e horários de corte;
- owners funcionais/técnicos e matriz de escalonamento.

## Fontes

- *Internal_Inv7_INV_Datasheet.pdf*, páginas 1-4.
- *Internal_Inv7_INV_Architecture_7.pdf*, páginas 3-14.
- *Internal_Inv7_INV_Implementation.pdf*, páginas 3-5.
