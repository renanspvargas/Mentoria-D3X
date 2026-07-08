# Etapa 02 — Modal com JavaScript

## Problema

O site ainda é estático: o botão "Agendar" não faz nada. Para dar o primeiro passo de interatividade, precisamos responder a eventos do usuário (clique) e manipular elementos da página — neste caso, abrir e fechar um formulário em modal.

## Solução

Esta branch adiciona um `<dialog>` com formulário (nome, serviço, data, horário, observações) e o arquivo `app.js` com funções `openModal()` e `closeModal()` ligadas aos botões "Agendar", "Fechar" e "Cancelar". O submit ainda não salva dados.

## Arquivos principais

- `index.html` — estrutura do modal e campos do formulário
- `app.js` — event listeners para abrir/fechar o modal
- `styles.css` — estilos do overlay, modal centralizado e formulário

## Como rodar

Abra `vanilla/index.html` no navegador. Clique em "Agendar" para abrir o modal.

## Checkpoint

- [ ] Clicar "Agendar" abre o modal com o formulário
- [ ] Clicar "Cancelar", "×" ou fora do modal fecha o modal
- [ ] Os 3 cards estáticos continuam visíveis na lista

## Próxima etapa

`feat/03-js-lista-dinamica` — ao submeter o formulário, criar um novo card na lista via JavaScript.

## Para o Next

- O modal será recriado com `<dialog>` nativo na `feat/10`
- Event listeners viram handlers React (`onClick`)
- O formulário controlado substituirá `getElementById` individual
