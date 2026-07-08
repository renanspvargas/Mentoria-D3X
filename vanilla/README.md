# Etapa 04 — Persistência com localStorage

## Problema

Os dados ficam apenas em memória: ao recarregar a página (F5), todos os agendamentos adicionados pelo usuário desaparecem. Precisamos de uma forma simples de persistir dados no navegador sem backend.

## Solução

Esta branch adiciona `loadAppointments()` e `saveAppointments()` usando `localStorage` com a chave `agendamentos-d3x`. Ao iniciar, carrega do storage; se vazio, faz seed com os 3 agendamentos mock. Após cada adição, salva automaticamente.

## Arquivos principais

- `app.js` — funções `loadAppointments()` / `saveAppointments()` e integração no fluxo
- `index.html` — sem alterações estruturais
- `styles.css` — sem alterações

## Como rodar

Abra `vanilla/index.html` no navegador. Adicione um agendamento, recarregue a página (F5) e verifique que os dados permanecem.

## Checkpoint

- [ ] Primeira visita mostra os 3 agendamentos mock
- [ ] Adicionar agendamento e recarregar (F5) mantém todos os dados
- [ ] Dados visíveis em DevTools → Application → Local Storage

## Próxima etapa

`feat/05-react-conceito` — demonstrar componentes React reutilizáveis via CDN, sem alterar o vanilla.

## Para o Next

- `localStorage` será reimplementado com hook na `feat/09`
- O padrão load/save vira sincronização de estado com efeito colateral
- Chave `agendamentos-d3x` pode ser reutilizada para compatibilidade
