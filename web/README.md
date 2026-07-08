# Etapa 07 — Componente AppointmentCard

## Problema

O JSX repetido na `page.tsx` fica difícil de manter — cada alteração visual no card exige editar o mesmo bloco várias vezes. Precisamos isolar o card em um componente reutilizável com props tipadas.

## Solução

Esta branch introduz o type `Appointment` em `types/appointment.ts`, o componente `AppointmentCard` com props tipadas, e extrai os dados mock para `lib/mock-appointments.ts`. A `page.tsx` fica enxuta: importa o array e renderiza com `.map()`.

## Arquivos principais

- `types/appointment.ts` — type `Appointment` com campos tipados
- `components/AppointmentCard.tsx` — componente visual do card
- `lib/mock-appointments.ts` — 3 agendamentos mock consistentes
- `app/page.tsx` — lista usando `.map()` e `<AppointmentCard />`

## Como rodar

```bash
cd web
npm install
npm run dev
```

## Checkpoint

- [ ] `page.tsx` enxuta — sem JSX de card repetido
- [ ] `AppointmentCard` isolado e reutilizável
- [ ] TypeScript valida props do componente

## Próxima etapa

`feat/08-next-estado` — adicionar `useState` e botão que insere agendamento na lista.

## Para o Next

- `"use client"` será necessário na `feat/08` para `useState`
- Mock hardcoded vira estado inicial do `useState`
- Modal e formulário virão nas branches 10–11
