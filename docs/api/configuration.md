# Configuração e implantação

## Configurações obrigatórias

| Chave | Finalidade | Segredo? |
|---|---|---:|
| `BaseUrl` | URL pública/raiz usada pelo OAuth e Swagger | Não |
| `WebServicesUri` | endpoint do Investran Web Services | Específica do ambiente |
| `ServicePrincipalName` | SPN para autenticação Windows | Específica do ambiente |
| `EndPointIdentity` | identidade DNS do endpoint WCF | Específica do ambiente |
| `Server` | servidor do banco do Investran fornecido ao ApplicationScope | Específica do ambiente |
| `Database` | nome do banco de dados do Investran | Específica do ambiente |
| `WindowsCredentialKey` | chave do gerenciador de credenciais exigida pelo construtor atual | Referência sensível |
| `ByPassCredentialManager` | habilita credenciais em texto puro somente para desenvolvimento | Não, mas é perigosa |
| `InvestranVaultCredentials` | referência no cofre para a identidade normal de serviço | Referência sensível |
| `InvestranVaultImpersonateCredentials` | referência no cofre para a identidade de impersonation | Referência sensível |
| `investran-username-bypass` | usuário de bypass para desenvolvimento | Sim |
| `investran-password-bypass` | senha de bypass para desenvolvimento | Sim |

Também existem configurações relacionadas ao RabbitMQ para envio de batches: servidor, porta, usuário, senha, nomes da fila e do exchange.

## Inicialização do serviço

O componente de autenticação registra o Investran Web Services em `WebServicesUri`, configura as identidades de endpoint DNS/SPN e habilita os métodos de autenticação por usuário/senha e Windows. Em seguida, cria um escopo de aplicação para `Server` e `Database`.

Se qualquer configuração obrigatória de conexão estiver vazia, a inicialização lança `Missing WebConfig Parameters`.

## Swagger e OAuth

O Swagger publica a versão `v1`, inclui os comentários XML gerados e configura um fluxo OAuth2 do tipo application apontando para:

```text
${BaseUrl}/auth/connect/token
```

Garanta que `BaseUrl` represente a URL HTTPS acessível externamente quando a API estiver atrás de proxy ou load balancer.

## Observações sobre IIS e hospedagem

O repositório contém artefatos tanto da Web API/OWIN clássica do ASP.NET quanto de gerações mais recentes de projeto e hospedagem. Antes do deploy, confirme qual caminho de inicialização e qual target framework são usados pelo build/pacote real. O código inclui:

- `Global.asax` e controllers de `System.Web.Http`;
- inicialização OWIN e integração com IdentityServer;
- referências de hospedagem/`Program` no estilo ASP.NET Core;
- empacotamento com instalador WiX.

Documente o processo de build e implantação suportado em cada ambiente, em vez de assumir que todos os arquivos de inicialização estão ativos.

## Higiene de configuração

O repositório contém valores de configuração que devem ser tratados como segredos ou dados de infraestrutura interna. Antes do uso em produção:

1. rotacione credenciais e client secrets expostos;
2. remova segredos do histórico do Git quando exigido pela política;
3. substitua client secrets e referências de certificados do IdentityServer gravados no código por configuração externa;
4. mantenha `ByPassCredentialManager=false` fora do desenvolvimento;
5. restrinja o CORS, evitando combinar origem curinga com credenciais;
6. exija HTTPS para emissão de tokens;
7. não versione certificados de assinatura nem chaves privadas;
8. adicione verificação automatizada de segredos.

Este guia não reproduz credenciais nem valores específicos de ambiente encontrados no código-fonte.
