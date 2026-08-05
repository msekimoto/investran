# Manutenção e limitações conhecidas

## Grupos de recursos suportados

A superfície REST atual cobre:

- Legal Entities;
- Investors e Specific Investors;
- Direct/Fund Deals e Specific Deals;
- Positions e Specific Positions;
- Specific Vehicles;
- contatos Organization e Individual;
- definições de UDF;
- lookups comuns e dados de segurança;
- batches, journal entries, transactions, alocações e transições de status.

Ela não é uma exposição REST genérica de todos os serviços do SDK do Investran. Adicionar um DTO ou serviço nativo não cria automaticamente um endpoint REST.

## Limitações atuais identificadas no código

### Versionamento

As rotas são descritas no Swagger como `v1`, mas as URLs não incluem um segmento de versão. Alterações no contrato podem, portanto, quebrar clientes existentes se a compatibilidade não for administrada deliberadamente.

### Contratos de resposta

Diversos endpoints devolvem DTOs nativos do Investran, em vez de modelos de resposta estáveis da API. Atualizações do SDK/MR podem alterar a serialização ou a estrutura dos objetos internos.

### Contrato de erro

A maioria das falhas de validação subsequentes se transforma em HTTP 500 com texto simples da exceção. Os clientes não conseguem distinguir com segurança erros de validação, autorização, conflito, recurso inexistente e infraestrutura.

### Métodos assíncronos

As actions dos controllers são declaradas como `async`, mas normalmente executam chamadas síncronas ao SDK. Elas não tornam o processamento subsequente assíncrono, exceto no endpoint específico da fila.

### Observabilidade da fila

O endpoint da fila está oculto no Swagger, e este repositório não contém endpoint REST para consultar status, cancelar ou repetir uma solicitação.

### Ambiguidade de rotas

A pesquisa de Investor por nome e por vehicle usa templates de rota equivalentes e sem constraints.

### Divergência na documentação de autenticação

O código contém uma mistura de gerações de IdentityServer e hospedagem. Antes de alterar autenticação ou inicialização, valide qual pacote é realmente implantado.

### Exposição de segurança

Há segredos e dados de infraestrutura interna em configurações versionadas. Rotacione-os e mova-os para configuração externa; não os copie para documentação nem exemplos.

## Checklist para alterações seguras

1. Identifique a rota REST, o modelo de requisição, o domínio e o contrato do serviço nativo.
2. Confirme a compatibilidade das versões do SDK e do Investran.
3. Sempre que possível, adicione contratos próprios de request e response.
4. Defina os status HTTP e o schema de erro.
5. Teste autorização e Team Security.
6. Teste o CRUD ou ciclo de vida do batch em ambiente descartável.
7. Valide transacionalidade, retry e idempotência.
8. Atualize os comentários XML do Swagger e este catálogo de endpoints.
9. Adicione logs sem segredos nem payloads sensíveis.
10. Execute testes de regressão com dados representativos do Investran.

## Melhorias recomendadas

- contrato OpenAPI versionado no repositório;
- versionamento da API;
- respostas de erro tipadas usando Problem Details;
- constraints de rota e nomenclatura consistente dos recursos;
- semântica consistente para `201 Created`, `204 No Content` e `404 Not Found`;
- validação das requisições antes das chamadas ao SDK;
- correlation IDs propagados pela fila e pelo WCF;
- endpoints de health/readiness para API, cofre e Investran Web Services;
- endpoint de consulta de status da solicitação na fila;
- testes de integração automatizados;
- verificação de segredos e configuração externa dos clientes OAuth.
