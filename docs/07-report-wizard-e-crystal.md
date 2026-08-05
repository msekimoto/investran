# Report Wizard e Crystal Reports

Consulte também o [mapa da arquitetura de reporting](reporting/01-arquitetura-reporting.md), que mostra consumidores e dependências do Report Wizard.

## Report Wizard

O material disponível cobre componentes programáticos da InvDev Library: Login, Connection, Metadata, Report, Book, Column, Column Definition, Column Filter, Parameter Set, Time Period, RWReport e RWConnection. Na sustentação, trate um report como contrato: parâmetros, filtros, colunas, tipos, agregações, ordenação, acesso e consumidor downstream.

## Crystal + RW

Um Crystal Report pode usar um Report Wizard report validado como fonte por meio do RW OLE DB Provider. A associação pode ser direta (RW processa e entrega ao viewer) ou externa (Crystal/OLE DB conduzem o processamento). O RW precisa existir e estar validado antes da associação.

## Checklist de alteração

- identificar consumidores humanos e técnicos (AT/AR/BE/outro report/API);
- salvar/exportar versão anterior;
- documentar parâmetros obrigatórios, defaults e formato;
- validar cardinalidade e totais com conjunto conhecido;
- verificar segurança e pasta;
- testar execução interativa e agendada;
- para Crystal, testar associação, provider, subreports e passagem de parâmetros;
- medir duração/volume e comparar baseline;
- publicar junto das dependências.

## Performance

Comece por filtros, volume retornado, joins, colunas calculadas, parâmetros, hierarquias e chamadas repetidas/subreports. Capture duração, usuário, report, parâmetros, linha retornada e carga concorrente. Não aplicar índice ou alterar SQL sem plano e validação do DBA.

## Troubleshooting

1. Reproduzir com mesmo usuário/parâmetros.
2. Separar falha RW, Crystal/viewer, OLE DB, scheduler ou autorização.
3. Executar o RW base isoladamente.
4. Validar nomes/tipos de parâmetros e acesso a reports/pastas.
5. Revisar logs do web/application/scheduler.
6. Comparar versão publicada e dependências.

## KT pendente

- catálogo de reports críticos, owners e consumidores;
- baseline de performance e janelas de maior carga;
- processo real de publicação/distribuição;
- pastas, convenções e reports usados por AT/AR/BE.

## Fontes

- *Internal_Inv7_INV_RW_Dev_Guide_7.pdf*, páginas 3-6 e componentes da InvDev Library.
- *Crystal Reports Guidebook.pdf*, páginas 1-37.
- *Internal_Inv7_INV_WRS_Install-Admin_7.pdf*, seção Reports.
