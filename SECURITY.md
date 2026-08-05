# Segurança da informação

Este repositório deve permanecer privado e sujeito às políticas corporativas aplicáveis.

## Não versionar

- senhas, tokens, chaves privadas, connection strings ou certificados com chave privada;
- nomes de usuário privilegiados e segredos de contas de serviço;
- dumps de banco, arquivos de produção ou dados financeiros/pessoais;
- logs sem sanitização;
- documentos originais da FIS/SunGard ou do cliente sem autorização expressa;
- URLs internas, IPs e nomes de servidores quando a política exigir classificação superior.

Documente **onde** o segredo é gerenciado e quem pode conceder acesso, nunca o valor. Antes de anexar evidências, remova IDs, nomes, e-mails, valores, caminhos sensíveis e dados de clientes.

## Mudanças críticas

Procedimentos SQL, reinícios, reprocessamentos, deploys e alterações de segurança exigem ticket, aprovação, backup/evidência e plano de retorno conforme o processo vigente. Exemplos nesta base são orientação; não constituem autorização de execução.

