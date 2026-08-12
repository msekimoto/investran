# Deploy, maintenance release e upgrade

## Princípios das fontes

Maintenance packages são cumulativos e devem ser validados pelo hash fornecido. A FIS recomenda aplicar primeiro em teste e manter componentes compatíveis. A ordem documentada começa pelo banco; customizações podem exigir repackage/recompile conforme release notes.

## Sequência de decisão

1. Confirmar versão origem/destino, compatibilidade e release notes.
2. Inventariar customizações, integrações, AT/AR/reports/BE e assemblies SDK.
3. Definir janela, aprovações, comunicação e critérios de abortar.
4. Validar pacote/checksum e pré-requisitos.
5. Realizar backup coerente de Master/Staging e testar retorno aplicável.
6. Parar usuários/processos conforme plano.
7. Atualizar banco antes de servers/workstations, seguindo o runbook da versão.
8. Importar pacotes de sistema necessários.
9. Reiniciar/reativar componentes de forma controlada.
10. Executar smoke, regressão e reconciliação funcional.

## Rollback

Rollback não deve significar apenas reinstalar binário anterior: pode exigir restore coordenado de bancos, aplicações, pacotes e configurações. Defina o ponto sem retorno antes da janela e não produza novas transações durante uma recuperação incompatível.

## Artefatos

As fontes descrevem `.CAB` para Active Templates/Allocation Rules e `.IED` para packages de Reporting Services/Report Wizard/Crystal. Business Event templates têm procedimento próprio. Confirme formatos e ferramentas da versão instalada.

## KT pendente

- processo interno de change/release e responsáveis;
- versão atual, histórico de MRs/hotfixes e baseline;
- lista de customizações que precisam recompilar;
- testes de regressão e rollback já praticado;
- janelas e comunicação com FIS/infra/DBA.

## Fontes

- *Internal_Inv7_INV_Maint_Process.pdf*, páginas 3-15.
- *Internal_Inv7_Investran Upgrade User Guide.pdf*, páginas 1-75.
- *Internal_Inv7_INV_Release_Notes_7.pdf*, páginas 1-40.

