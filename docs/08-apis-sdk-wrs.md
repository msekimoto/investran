# APIs, SDK e Web Reporting Services

Para object model, DTOs, fetch options, versionamento e General Ledger API, consulte [API e SDK em profundidade](integracoes/01-api-e-sdk.md).

## Investran API/SDK

A documentação de 2017 descreve uma API orientada a serviços baseada em C#/.NET 4.5, WCF e DTOs serializáveis em SOAP/XML/JSON. Os contratos expõem operações como Load, Publish e Remove, consultas LINQ, fetch options/lazy loading, transações ACID, versionamento, auditoria, arquivos e General Ledger (incluindo inserção de batch).

## Checklist de integração

- registrar consumidor, endpoint, contrato, versão dos assemblies e conta;
- documentar autenticação, autorização/Team Security e certificado sem expor segredos;
- guardar exemplos sanitizados de request/response/fault;
- definir timeout, retry, idempotência e correlação;
- validar compatibilidade de DTO/contrato antes de upgrade;
- monitorar latência, taxa de erro e volume;
- reconciliar writes com o Investran e impedir duplicidade.

## WRS

Web Reporting Services permite executar reports RW em tempo real via Data Exchange e aplicações customizadas. O guia descreve IIS/SSL, WRS Admin database, usuário WRS, conexões, security levels, contacts e publicação de reports. A documentação recomenda restringir inbound no firewall aos consumidores autorizados.

## Diagnóstico

1. Determinar se é DNS/rede/TLS, autenticação, autorização, binding WCF, contrato ou dado.
2. Capturar endpoint, operação, horário, correlation ID e fault sanitizado.
3. Confirmar saúde de IIS/app pool/service e validade do certificado.
4. Testar leitura segura antes de operação mutável.
5. Conferir compatibilidade entre cliente, servidor e assemblies.
6. Em write, verificar resultado antes de retry.

## KT pendente

- inventário de endpoints e consumidores Goldman;
- protocolos e autenticação atuais;
- política de retry/idempotência;
- dashboards, logs, certificados e owners;
- contratos customizados e compatibilidade exigida.

## Fontes

- *INV_API_Training_Guide_7.pdf*, páginas 3-9 e capítulos subsequentes.
- *Internal_Inv7_INV_SDK_Datasheet_7.pdf* e *Internal_Inv7_INV_SDK_Implementation_7.pdf*.
- *Internal_Inv7_InWRS_API_Guide.pdf*.
- *Internal_Inv7_INV_WRS_Install-Admin_7.pdf*, páginas 3-6 e seção Reports.
