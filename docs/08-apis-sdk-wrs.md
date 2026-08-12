# APIs, SDK e Web Reporting Services

Para object model, DTOs, fetch options, versionamento e General Ledger API, consulte [API e SDK em profundidade](integracoes/01-api-e-sdk.md).

## Investran API/SDK

A documentação de 2017 descreve uma API orientada a serviços baseada em C#/.NET 4.5, WCF e DTOs serializáveis em SOAP/XML/JSON. Os contratos expõem operações como `Load`, `Publish` e `Remove`, consultas LINQ, fetch options/lazy loading, transações ACID, versionamento, auditoria, arquivos e General Ledger, incluindo inserção de batch.

## Checklist de integração

- registrar consumidor, endpoint, contrato, versão dos assemblies e conta;
- documentar autenticação, autorização/Team Security e certificado sem expor segredos;
- guardar exemplos sanitizados de request, response e fault;
- definir timeout, retry, idempotência e correlação;
- validar compatibilidade de DTO/contrato antes de upgrade;
- monitorar latência, taxa de erro e volume;
- reconciliar writes com o Investran e impedir duplicidade.

## Web Reporting Services

O WRS permite executar reports RW em tempo real pelo Data Exchange ou por aplicações customizadas usando uma interface SOAP legada. Ele envolve IIS/SSL, configuração de empresa e `CompanyID`, banco administrativo, conta de serviço, Contacts, relacionamentos, security levels, WRS filters, publicação e saídas XML/HTML/PDF.

Consulte os guias específicos:

- [Arquitetura de reporting](reporting/01-arquitetura-reporting.md)
- [Report Wizard - desenvolvimento e operação](reporting/02-report-wizard-desenvolvimento-operacao.md)
- [Web Reporting Services - arquitetura, segurança e suporte](reporting/03-web-reporting-services.md)
- [Runbook - Falha de reporting](../runbooks/falha-reporting.md)

## Diagnóstico de integração

1. Determine se a falha está em DNS/rede/TLS, autenticação, autorização, binding WCF/SOAP, contrato ou dado.
2. Capture endpoint, operação, horário, correlation ID e fault sanitizado.
3. Confirme saúde do IIS, app pool ou serviço e validade do certificado.
4. Teste uma leitura segura antes de operação mutável.
5. Confira compatibilidade entre cliente, servidor e assemblies.
6. Em escrita, verifique o resultado antes de qualquer retry.
7. No WRS, isole o report RW antes de investigar transporte ou formato.

## KT pendente

- inventário de endpoints e consumidores da organização;
- protocolos e autenticação atuais;
- política de retry/idempotência;
- dashboards, logs, certificados e owners;
- contratos customizados e compatibilidade exigida;
- topologia, contas, `CompanyID` e versões atuais do WRS.

## Fontes

- *INV_API_Training_Guide_7.pdf*.
- *Internal_Inv7_INV_SDK_Datasheet_7.pdf* e *Internal_Inv7_INV_SDK_Implementation_7.pdf*.
- *Internal_Inv7_InWRS_API_Guide.pdf*.
- *Internal_Inv7_INV_WRS_Install-Admin_7.pdf*.
