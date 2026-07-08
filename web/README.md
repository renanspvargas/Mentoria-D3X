# Etapa 12 — Calendário com react-day-picker

## Problema

O `<input type="date">` nativo é limitado — visual inconsistente entre navegadores e pouca flexibilidade de UX.

## Solução

Esta branch substitui o input de data por `DayPicker` do `react-day-picker`, com `date-fns` para formatar a seleção como `YYYY-MM-DD` (compatível com `Appointment.date`). Estilos importados em `globals.css`.

## Arquivos principais

- `components/AppointmentModal.tsx` — `DayPicker` no lugar do input de data
- `app/globals.css` — `@import "react-day-picker/style.css"`
- `package.json` — `react-day-picker` e `date-fns`

## Como rodar

```bash
cd web
npm install
npm run dev
```

Abra o modal, selecione uma data no calendário, preencha os demais campos e salve.

## Checkpoint

- [ ] Calendário renderiza no modal
- [ ] Selecionar data preenche o campo corretamente
- [ ] Agendamento salva com data no formato `YYYY-MM-DD`
- [ ] `npm run build` passa sem erros

## Próximas etapas planejadas

- `feat/13` — rotas com App Router
- `feat/14` — dashboard com métricas
- Backend NestJS em repositório separado (módulo 10+)

## Desafios extras

- Excluir agendamento da lista
- Editar agendamento existente
- Filtrar lista por data
