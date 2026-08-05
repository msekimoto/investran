# Troubleshooting

## Método padrão

1. **Definir impacto:** usuários, entidades, ambiente, processo, cutoff e severidade.
2. **Fixar a linha do tempo:** início, última execução boa e mudanças recentes.
3. **Capturar identificadores:** BatchID, job/execution ID, report, AT/AR/BE, usuário e correlation ID.
4. **Preservar evidência:** logs, status, parâmetros sanitizados e screenshot.
5. **Separar camadas:** cliente/web → IIS/API → scheduler/service → banco → integração externa.
6. **Comparar:** ambiente/usuário/caso que funciona.
7. **Formar hipótese testável:** um teste reversível por vez.
8. **Validar funcionalmente:** sucesso técnico não garante resultado financeiro correto.
9. **Documentar causa, correção, prevenção e monitoramento.**

## Sintoma → primeiras verificações

| Sintoma | Verificações iniciais |
|---|---|
| Login/SSO falha | URL, IdP, certificado, IIS, claims, Team Security |
| Job parado/Ready | scheduler/service, conta/senha, fila, dependência, logs |
| AT não gera batch | versão/status, driver reports, VBA, scheduler, staging |
| AR gera valores errados | vigência, tipo, report, população, fórmula, arredondamento |
| Report falha/lento | parâmetros, acesso, volume, RW base, Crystal/OLE DB, SQL |
| Import rejeitado | template/mapping, mandatory fields, entitlement, service, erro por linha |
| API fault | rede/TLS, binding, auth, contrato/DTO, versão e dados |
| Business Event falha | template ativo/versão, deployment service, logs web/app, output parcial |

## Pare e escale quando

- houver risco de duplicação, corrupção ou impacto financeiro;
- a ação exigir SQL mutável, alteração de segurança ou restore;
- não for possível determinar se o processo escreveu parcialmente;
- o workaround ampliar acesso ou desligar controle;
- o resultado não puder ser reconciliado.

Use os [runbooks](../runbooks/incidente.md) e complete a matriz de escalonamento no KT.

