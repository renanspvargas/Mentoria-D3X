# Etapa 03 — Lista dinâmica com JavaScript

## Problema

Gerenciar muitos elementos com `getElementById` individual vira bagunça — cada card novo exigiria referências separadas no HTML. Além disso, o modal abre mas não salva nada: precisamos de uma fonte de dados em memória e uma função que redesenha a lista inteira.

## Solução

Esta branch introduz um array `appointments` em memória, remove os cards duplicados do HTML e centraliza a renderização em `renderAppointments()`. Ao submeter o formulário, um novo objeto é criado, adicionado ao array, a lista é re-renderizada e o modal fecha.

## Arquivos principais

- `index.html` — container `#appointments-list` vazio; cards gerados pelo JS
- `app.js` — array de dados, `renderAppointments()` e handler de submit
- `styles.css` — estilos herdados das etapas anteriores

## Como rodar

Abra `vanilla/index.html` no navegador. Clique em "Agendar", preencha o formulário e salve.

## Checkpoint

- [ ] Ao carregar, os 3 agendamentos mock aparecem na lista
- [ ] Adicionar agendamento pelo modal cria um card novo sem editar HTML
- [ ] Formulário limpa e modal fecha após salvar

## Próxima etapa

`feat/04-js-localstorage` — persistir agendamentos no `localStorage` para sobreviver ao F5.

## Para o Next

- O array `appointments` vira `useState` na `feat/08`
- `renderAppointments()` com `.map()` é o equivalente ao JSX com componentes
- `crypto.randomUUID()` para IDs será mantido no Next
