# Etapa 08 — Lista dinâmica com useState

## Problema

A lista estática não reflete mudanças do usuário — o botão "Agendar" não faz nada. Precisamos de **estado** no React: quando os dados mudam, a interface re-renderiza automaticamente sem manipular o DOM manualmente.

## Solução

Esta branch adiciona `"use client"` na `page.tsx` (necessário para hooks no App Router), `useState<Appointment[]>` inicializado com o mock, e um handler no botão "Agendar" que adiciona um agendamento hardcoded via `setAppointments`. Demonstra re-render automático ao mudar estado.

> **Nota:** `"use client"` marca o componente como Client Component — obrigatório para usar `useState`, `useEffect` e event handlers no Next.js App Router.

## Arquivos principais

- `app/page.tsx` — `"use client"`, `useState` e botão com `onClick`
- `components/AppointmentCard.tsx` — sem alterações (recebe props do estado)
- `lib/mock-appointments.ts` — valor inicial do estado

## Como rodar

```bash
cd web
npm install
npm run dev
```

Clique em "Agendar" — um novo card aparece na lista sem recarregar a página.

## Checkpoint

- [ ] Clicar "Agendar" adiciona card "Novo Cliente" na lista
- [ ] Lista atualiza instantaneamente (sem F5)
- [ ] Estado reseta ao recarregar a página (persistência vem na feat/09)

## Próxima etapa

`feat/09-next-localstorage` — persistir estado com `localStorage` ou hook customizado.

## Para o Next

- Modal com formulário na `feat/10`
- Validação de campos na `feat/11`
- O padrão `setAppointments(prev => [...prev, novo])` será usado no submit do modal
