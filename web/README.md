# Etapa 09 — localStorage e componentização

## Problema

O estado some ao recarregar a página (F5). Além disso, a `page.tsx` concentra lista, estado e lógica de persistência — difícil de manter e testar.

## Solução

Esta branch extrai persistência para `lib/storage.ts` (chave `agendamentos-d3x`), encapsula estado no hook `useAppointments` (carrega no `useEffect` com guard SSR, salva quando `appointments` muda) e renderiza a lista via `<AppointmentList />`. A página vira orquestrador fino.

> **Nota:** `localStorage` só é acessado dentro de `useEffect` — evita erro de hydration no Next.js.

## Arquivos principais

- `hooks/useAppointments.ts` — estado + carregar/salvar no localStorage
- `lib/storage.ts` — `loadAppointments()` / `saveAppointments()`
- `components/AppointmentList.tsx` — `.map()` de `AppointmentCard`
- `app/page.tsx` — usa hook + lista; botão hardcoded temporário

## Como rodar

```bash
cd web
npm install
npm run dev
```

Clique em "Agendar", recarregue a página (F5) — os dados persistem.

## Checkpoint

- [ ] Clicar "Agendar" adiciona card "Novo Cliente"
- [ ] F5 mantém a lista (localStorage)
- [ ] Pasta `vanilla/` removida (histórico preservado em feat/01–08)

## Próxima etapa

`feat/10-next-modal` — formulário real no modal em vez do botão hardcoded.

## Desafios extras

Não implementados nesta etapa — explore por conta própria:

- Excluir agendamento da lista
- Editar agendamento existente
- Filtrar lista por data
