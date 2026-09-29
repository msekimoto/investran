# Configuration, security, and SSO

## Configuration layers

- System parameters in the database/application.
- IIS, `web.config`, and configuration tools.
- Service mappings in the Application Server.
- Team Security, licenses, and security levels.
- Service accounts.
- Certificates and authentication protocols.
- Parameters specific to reports, AT, AR, imports, and integrations.

Every configuration must record its environment, masked value when sensitive, source/default, reason, date, owner, impact, and rollback.

## SSO

The internal guide describes WS-Federation and SAML2 in Investran Web. Inputs include issuer/Sign-On URI, certificate/thumbprint, IdP, and unique identifier. For SAML2, the web-service account needs appropriate private-key access. Changes may require an IIS recycle/restart under the approved procedure.

The guide itself warns that it may be obsolete. Do not use old certificate-creation commands or manually edit `web.config` without validation from Security, IAM, and FIS.

## Access diagnosis

1. Separate authentication from authorization.
2. Confirm the user, URL/site, time, IdP, and message.
3. Check certificate validity, chain, subject/SAN, and permission.
4. Review IdP, IIS/Investran Web, and Windows logs.
5. Confirm claim/UPN and mapping to the user/Team Security.
6. Test with a controlled account; do not expand permissions as a workaround.

## KT pending

- Current IdP/protocol/claims.
- IAM owners and certificate workflow.
- Service accounts, vault, and rotation policy.
- Team Security/license matrix.
- Customized parameters and differences across environments.

## Sources

- *Internal_Investran SSO Guide.docx*.
- *Internal_Inv7_INV_Administrators_7.pdf*, SSO, security, and service-account sections.
- *Internal_Inv7_INV_Implementation.pdf*, certificates, licenses, and Team Security.
