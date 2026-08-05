# Configurações, segurança e SSO

## Camadas de configuração

- parâmetros de sistema no banco/aplicação;
- IIS, web.config e ferramentas de configuração;
- mappings de serviços no Application Server;
- Team Security, licenças e security levels;
- contas de serviço;
- certificados e protocolos de autenticação;
- parâmetros específicos de reports, AT, AR, imports e integrações.

Toda configuração deve registrar ambiente, valor mascarado quando sensível, origem/default, motivo, data, owner, impacto e rollback.

## SSO

O guia interno descreve WS-Federation e SAML2 no Investran Web. Entradas incluem issuer/Sign-On URI, certificado/thumbprint, IdP e identificador único. Para SAML2, a conta do serviço web precisa de acesso apropriado à chave privada. Mudanças podem exigir reciclagem/restart do IIS conforme o procedimento aprovado.

O próprio guia alerta que seu conteúdo pode estar obsoleto. Não use comandos antigos de criação de certificado ou edição manual de `web.config` sem validação de Segurança/IAM/FIS.

## Diagnóstico de acesso

1. Separar autenticação de autorização.
2. Confirmar usuário, URL/site, horário, IdP e mensagem.
3. Verificar validade/cadeia/subject/SAN/permissão do certificado.
4. Revisar logs do IdP, IIS/Investran Web e Windows.
5. Confirmar claim/UPN e associação ao usuário/Team Security.
6. Testar conta controlada e evitar ampliar permissões como workaround.

## KT pendente

- IdP/protocolo/claims atuais;
- owners IAM e fluxo de certificado;
- contas de serviço, vault e política de rotação;
- matriz de Team Security/licenças;
- parâmetros customizados e diferenças entre ambientes.

## Fontes

- *Internal_Investran SSO Guide.docx*.
- *Internal_Inv7_INV_Administrators_7.pdf*, seções SSO, security e service accounts.
- *Internal_Inv7_INV_Implementation.pdf*, certificados, licenças e Team Security.

