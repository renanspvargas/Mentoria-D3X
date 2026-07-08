# Etapa 11 — Validação de formulário

## Problema

O formulário aceita dados inválidos — campos vazios ou horário mal formatado são salvos sem feedback ao usuário.

## Solução

Esta branch adiciona `validate-appointment.ts` com regras mínimas (campos obrigatórios, `time` no formato `HH:MM`) e integra erros por campo no `AppointmentModal`. Submit inválido bloqueia o salvamento e exibe mensagens abaixo dos inputs.

## Arquivos principais

- `lib/validate-appointment.ts` — `validateAppointment()` e `hasErrors()`
- `components/AppointmentModal.tsx` — estado de erros, borda vermelha, mensagens

## Como rodar

```bash
cd web
npm install
npm run dev
```

Tente salvar com campos vazios — erros aparecem. Preencha corretamente — salva e persiste.

## Checkpoint

- [ ] Submit vazio mostra erros em nome, serviço, data e horário
- [ ] Horário inválido mostra mensagem de formato
- [ ] Dados válidos salvam normalmente e persistem (feat/09)

## Próxima etapa

`feat/12-next-calendario` — substituir input de data por `react-day-picker`.

## Desafios extras

- Excluir agendamento da lista
- Editar agendamento existente
- Filtrar lista por data
