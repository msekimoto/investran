# Runbook - Falha de reporting

Use este runbook para Report Wizard, Crystal Reports, Web Reporting Services, Data Exchange ou automações que consomem reports RW.

## 1. Registrar o incidente

Colete:

- ambiente, horário UTC, impacto e quantidade de usuários;
- book, report e versão/data da última alteração;
- consumidor: RW, Crystal, WRS, Data Exchange, AT, AR, BE ou aplicação;
- usuário/Contact e entidade relacionada, sem credenciais;
- parâmetros e formato de saída sanitizados;
- mensagem, status/fault e screenshot;
- duração, linhas esperadas/obtidas e correlation/process ID;
- última execução bem-sucedida.

## 2. Classificar antes de agir

| Sintoma | Categoria inicial |
|---|---|
| report não aparece | publicação ou segurança |
| aparece, mas parâmetro não tem opções | relacionamento, security level ou filtro WRS |
| retorna vazio | dado, parâmetro, filtro ou segurança |
| totais/linhas incorretos | definição RW, cardinalidade, período ou mudança de dados |
| lento/timeout | volume, RW engine, serialização, concorrência ou SQL |
| RW funciona, Crystal falha | provider, datasource, schema, parâmetros ou subreport |
| RW funciona, WRS falha | IIS/TLS, configuração WRS, identidade ou formato |
| funciona com admin, não com usuário | autorização; não encerrar como resolvido |
| execução pode ter terminado após timeout | estado incerto; reconciliar antes de retry |

## 3. Isolar por camada

1. Execute o RW base, com o mesmo usuário e parâmetros.
2. Reduza o conjunto de dados sem mudar a lógica.
3. Compare com a última versão boa e um conjunto conhecido.
4. Se o RW estiver correto, teste a próxima camada isoladamente.
5. Não faça retry automático de processamento caro sem saber se a execução anterior terminou.

### Report Wizard

- confirmar book/report e versão;
- validar nomes, IDs, tipos e formatos dos parâmetros;
- conferir columns, filters, aggregation, hierarchy, moeda e time period;
- comparar linhas e totais;
- verificar logs e SQL blocking.

### Crystal Reports

- confirmar provider e datasource;
- validar Add Command e parâmetros associados;
- executar **Verify Database** depois de mudança de schema;
- revisar campos remapeados, joins, command flags e subreports;
- testar shell e drivers separadamente.

### Web Reporting Services

- validar DNS, porta, TLS, certificado, site e app pool;
- testar `ServiceVersion`;
- confirmar `CompanyID` e conexão configurada;
- usar `GetBooksAndReports` para verificar a publicação;
- usar `GetReportParameters` antes da execução;
- conferir Contact, e-mail principal, `WebServicesEnabled`, relacionamento, security level e WRS filter;
- diferenciar execução por usuário SQL de execução por Contact;
- em HTML paginado, validar `reportProcessId`, `totalPages` e `pageNumber`;
- em PDF, confirmar conteúdo binário e `Content-Type`.

## 4. Decisões seguras

- **Report ausente para todos:** verificar publicação e disponibilidade antes de alterar segurança individual.
- **Ausente para um usuário:** comparar relacionamento/security level com um usuário equivalente.
- **Dados excessivos:** interromper a distribuição e tratar como possível incidente de segurança.
- **Timeout:** verificar se a execução concluiu e medir onde o tempo foi gasto; não apenas aumentar o limite.
- **Divergência financeira:** suspender publicação/consumo, preservar evidências e reconciliar com a fonte.
- **Mudança recente:** preferir rollback da definição aprovada quando o impacto for alto e a causa não estiver clara.

## 5. Validação da correção

1. Repetir o cenário original.
2. Validar totais, cardinalidade, sinais, moeda e data.
3. Testar pelo menos um caso positivo e um negativo de segurança.
4. Testar todos os formatos e consumidores afetados.
5. Comparar duração e volume com o baseline.
6. Registrar causa raiz, ação, evidência e prevenção.

## 6. Escalonamento

Encaminhe com o pacote de evidências:

- para infraestrutura: DNS, TLS, IIS, app pool, rede ou certificado;
- para DBA: blocking, plano, indisponibilidade ou degradação do banco;
- para desenvolvimento: threading STA, provider, serialização ou contrato da integração;
- para funcional/reporting: filtros, parâmetros, totals, shell/driver e regra de negócio;
- para segurança: exposição indevida ou divergência de entitlement/relacionamento;
- para FIS: defeito reproduzível no produto padrão, com versão e passos mínimos.

## Referências

- [Arquitetura de reporting](../docs/reporting/01-arquitetura-reporting.md)
- [Report Wizard - desenvolvimento e operação](../docs/reporting/02-report-wizard-desenvolvimento-operacao.md)
- [Web Reporting Services](../docs/reporting/03-web-reporting-services.md)
