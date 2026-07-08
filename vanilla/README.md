# Etapa 01 — HTML e CSS estático

## Problema

O site é apenas um documento estático. Para adicionar um novo agendamento, é preciso editar o HTML manualmente — copiar um card inteiro e alterar nome, serviço e horário. Isso não escala e não permite que o usuário final interaja com a página.

## Solução

Esta branch introduz a estrutura visual base: uma página com título "Agendamentos", três cards estáticos com dados mock e um botão "Agendar" (ainda sem ação). O layout usa CSS puro com container centralizado, cards com borda e sombra, e tipografia legível.

## Arquivos principais

- `index.html` — estrutura da página e os 3 cards de agendamento
- `styles.css` — layout, tipografia e estilos dos cards e botão

## Como rodar

Abra `vanilla/index.html` diretamente no navegador (duplo clique ou arraste para uma aba).

## Checkpoint

- [ ] Abrir `index.html` no navegador e ver 3 cards estilizados com nome, serviço e data/horário
- [ ] Botão "Agendar" visível no topo (sem ação ainda)

## Próxima etapa

`feat/02-js-modal-abrir` — adicionar JavaScript para abrir e fechar um modal ao clicar em "Agendar".

## Para o Next

- A estrutura de cards será replicada em JSX na `feat/06`
- Classes CSS virão a ser substituídas por utilitários Tailwind
- O botão "Agendar" ganhará interatividade antes da migração
