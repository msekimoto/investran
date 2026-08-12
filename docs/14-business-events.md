# Business Events e Partner Transfer

## Business Events

Templates são publicados pelo Investran Web. Para template recém-adicionado que nunca executou corretamente, confirmar versão compatível com a maintenance release e status `Active`. O material interno orienta reiniciar o serviço de deployment web após ativação; confirme impacto e procedimento atual antes de fazê-lo.

As notas disponíveis indicam logs em dois lados:

- Web Server: pasta de logs da instalação, arquivo com nome do BE e data;
- Application Server: perfil da conta do BE, em `AppData\Local\Business Events\Logs`, com GUID/nome/data.

Os caminhos exatos variam e precisam ser inventariados.

## Partner Transfer (PT BE)

O PT BE administra transferência de ownership dentro/entre entidades de uma Fund Family, por percentual ou commitment amount. O guia diferencia método com effective dates históricos e método não-effective-date agregado na transfer date. Ele gera reversões do transferor e rebooking para transferee(s), usando driver reports e configurações/hierarquias de exclusão.

### Pré-checks essenciais

- investors/vehicles e relações configurados;
- transações finalizadas até a transfer date;
- hierarquias de accounts/transaction types excluídos revisadas;
- metodologia, parâmetros e percentuais aprovados;
- reports de saldos pré-transferência reconciliados;
- impacto de memo transaction types e UDFs entendido.

### Pós-checks

- batch gerado, status e lock;
- reversão + rebooking por investor/deal;
- totais, moedas, quantidades, GL/effective dates;
- UDFs e campos incluídos/excluídos conforme versão;
- saldos antes/depois e aprovação funcional.

## Alerta

O guia menciona desbloqueio via exclusão de footprint em SQL. Isso é uma ação invasiva e **não é um runbook autorizado**. Só deve ser considerada com procedimento oficial vigente, aprovação, backup e FIS/DBA quando aplicável.

## KT pendente

- BEs usados pela organização e respectivas versões;
- parâmetros, hierarquias e reports customizados;
- reprocessamento e tratamento de footprint;
- owners funcionais e casos de reconciliação.

## Fontes

- *GFT Business Events Troubleshooting Guide.docx*.
- *PT BE Guidebook_2018.06.29.docx*.
- *Internal_Inv7_Partner.Transfer.Instructions.pdf*.
- *Internal_Inv7_INV_Maint_Process.pdf*, seção Business Event deployment checklists.

