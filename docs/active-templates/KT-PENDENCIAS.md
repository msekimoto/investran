# Active Templates — Pendências para Knowledge Transfer

Este checklist contém informações que não são suportadas pelo manual do Investran 6.2 SR3 ou que podem variar conforme ambiente e versão.

## Ambientes e acessos

- [ ] URLs, servidores e bancos de DEV, QA/UAT e PROD.
- [ ] Como confirmar visualmente o ambiente conectado.
- [ ] Perfis e grupos necessários para abrir, editar, simular, executar e promover ATs.
- [ ] Quem concede acesso e qual é o processo de solicitação.

## Localização e inventário

- [ ] Convenção de nomes dos ATs da Goldman Sachs.
- [ ] Como pesquisar por nome, ID, Batch Type ou processo funcional.
- [ ] Inventário dos ATs mais usados ou com maior volume de chamados.
- [ ] ATs legados que não devem ser alterados sem aprovação específica.

## Desenvolvimento

- [ ] Versão atual do Investran e do Active Template Manager.
- [ ] Onde o código VBA é mantido e como é salvo.
- [ ] Se existe exportação do código para controle de versão.
- [ ] Bibliotecas, referências e componentes adicionais usados nos ATs.
- [ ] Convenções internas de código, comentários e tratamento de erro.
- [ ] Como localizar IDs de Allocation Rules e outros metadados no ambiente atual.

## Debugging

- [ ] Demonstração prática de Simulation Mode.
- [ ] Como habilitar e localizar o Debug Log.
- [ ] Como usar breakpoints e inspecionar variáveis na versão atual.
- [ ] Onde ficam logs locais e logs do servidor.
- [ ] Como correlacionar chamado, usuário, execução, Process ID e batch gerado.
- [ ] Como reproduzir um incidente com segurança.

## Testes

- [ ] Massa de teste recomendada.
- [ ] AT seguro para treinamento prático.
- [ ] Como limpar resultados de simulação e Staging.
- [ ] Quando é permitido commit em DEV/QA.
- [ ] Evidências exigidas para aprovação.
- [ ] Quem realiza validação funcional ou contábil.

## Scheduler e Staging

- [ ] Nome e localização do Scheduler Service.
- [ ] Como verificar se o serviço está ativo.
- [ ] Como reiniciar o serviço e quem tem autorização.
- [ ] Banco de Staging de cada ambiente.
- [ ] Como consultar processos pendentes, falhos ou presos.
- [ ] Política de limpeza do Staging.
- [ ] Procedimento para batches gerados, mas não commitados.

## Publicação

- [ ] Ferramenta usada atualmente para exportar/importar ATs.
- [ ] Procedimento completo de DEV → QA/UAT → PROD.
- [ ] Se o ARM & ATM Export-Import Console ainda é utilizado.
- [ ] Objetos exportados junto com o AT.
- [ ] Dependências que precisam ser promovidas separadamente.
- [ ] Ordem correta de publicação.
- [ ] Aprovações, tickets e janelas de mudança.
- [ ] Smoke test obrigatório após publicação.

## Versionamento e rollback

- [ ] Como é feito o backup da versão anterior.
- [ ] Onde os exports são armazenados.
- [ ] Convenção de nome e versão dos pacotes.
- [ ] Passo a passo real de rollback.
- [ ] Como tratar um batch incorreto já commitado.
- [ ] Quem aprova reversões contábeis.

## Incidentes conhecidos

Para cada incidente relevante, registrar:

- sintoma;
- AT afetado;
- ambiente;
- causa raiz;
- como foi diagnosticado;
- correção aplicada;
- validação realizada;
- prevenção;
- ticket ou referência.

## Sessões práticas obrigatórias

- [ ] Localizar e abrir um AT existente.
- [ ] Identificar todos os seus parâmetros e reports.
- [ ] Alterar uma cópia segura em DEV.
- [ ] Depurar VBA.
- [ ] Executar Simulation Mode.
- [ ] Executar pelo Scheduler Engine.
- [ ] Ler log e abrir Preview.
- [ ] Promover um AT entre ambientes.
- [ ] Executar rollback de treinamento.
- [ ] Investigar um incidente real já encerrado.
