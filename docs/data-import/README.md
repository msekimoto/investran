# Data Import

O Data Import permite incluir e atualizar dados do Investran a partir de planilhas Excel, com validação, agendamento, acompanhamento e reconciliação. O manual também indica acesso programático pelo SDK para cargas automatizadas.

Esta seção organiza o conhecimento necessário para preparar arquivos, configurar mappings, executar jobs e prestar suporte ao processo.

## Guias

1. [Guia prático de Data Import](guia-pratico-data-import.md)
2. [Templates, entidades e mappings](templates-entidades-mappings.md)
3. [Troubleshooting e recuperação](troubleshooting.md)
4. [Resumo anterior: Data Import e interfaces](../10-data-import-e-interfaces.md)

## Fluxo resumido

```mermaid
flowchart LR
    X[Arquivo XLSX] --> J[Import Job]
    J --> M[Spreadsheet Mapping]
    M --> V[Validation]
    V -->|Aprovado| L[Load]
    V -->|Erro| F[Feedback e correção]
    L --> R[Reconciliation Reports]
    R --> A[Aprovação e evidências]
```

## Limites documentados

- somente `.XLSX` do Excel 2007 ou superior;
- tamanho máximo de 100 MB na versão do manual;
- licenças e entitlements variam conforme dados de mercado, portfólio ou transações;
- transações podem ser incluídas, mas não atualizadas pelo Data Import documentado;
- Team Security domains e entitlements não são importados;
- para UDFs, são importados valores de UDFs já existentes.

Confirme esses limites na versão instalada antes de transformar qualquer um deles em regra operacional.

## KT prioritário

- templates oficiais e customizados usados no ambiente;
- entidades, volumes, frequência e janela de cada carga;
- origem, owner e classificação dos arquivos;
- mappings, IDs e regras de referência entre abas;
- licenças, usuários, domínios e entitlements;
- Application Server, Data Import Service, Master e Staging;
- convenção de nomes, retenção e segurança dos arquivos;
- reconciliação funcional e técnica;
- procedimento de cancelamento, retry e tratamento de carga parcial;
- automações via SDK e integrações externas.
