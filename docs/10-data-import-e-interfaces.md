# Data Import e interfaces

Esta página orienta a entrada no módulo de importação. O material detalhado está nos guias específicos de Data Import e no troubleshooting do processo.

## Material detalhado

- [Data Import](data-import/README.md): visão geral, limites e fluxos de suporte.
- [Guia prático de Data Import](data-import/guia-pratico-data-import.md): execução, mapeamento e rotina operacional.
- [Templates, entidades e mappings](data-import/templates-entidades-mappings.md): mapeamentos e regras por entidade.
- [Troubleshooting de Data Import](data-import/troubleshooting.md): diagnóstico de rejeições e carga parcial.

## Fluxo de suporte recomendado

1. confirmar entidade, template e entitlement;
2. validar mapping, chaves e UDFs;
3. testar uma amostra em ambiente controlado;
4. registrar job, arquivo, usuário e checksum;
5. monitorar status e linhas rejeitadas;
6. reconciliar conta/quantidade/entidade após a carga;
7. arquivar evidência e repetir somente quando a idempotência for garantida.

## Decisão rápida

| Questão | Guia melhor |
|---|---|
| O job rejeita linhas ou falha no mapeamento | [Troubleshooting de Data Import](data-import/troubleshooting.md) |
| Preciso preparar o arquivo e os templates | [Templates, entidades e mappings](data-import/templates-entidades-mappings.md) |
| Quero entender o processo geral | [Data Import](data-import/README.md) |

## KT pendente

- templates oficiais e customizados;
- entidades por frequência e volume;
- owner da interface e rotina de reconciliação;
- regras de retry, cancelamento e carga parcial.

