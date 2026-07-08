# Etapa 10 — Modal de agendamento

## Problema

Adicionar via botão com dados hardcoded não é UX real — o usuário precisa preencher nome, serviço, data, horário e observações.

## Solução

Esta branch cria `AppointmentModal` com `<dialog>` nativo (`showModal()` / `close()`), formulário controlado com `useState`, e submit que monta `Appointment` com `crypto.randomUUID()` e chama `addAppointment` do hook. A `page.tsx` remove o handler hardcoded.

## Arquivos principais

- `components/AppointmentModal.tsx` — dialog nativo + formulário
- `app/page.tsx` — botão "Agendar" abre modal via componente
- `hooks/useAppointments.ts` — `addAppointment()` chamado no submit

## Como rodar

```bash
cd web
npm install
npm run dev
```

Clique em "Agendar", preencha o formulário e salve — card aparece e persiste (feat/09).

## Checkpoint

- [ ] Modal abre ao clicar "Agendar"
- [ ] Preencher e salvar adiciona card na lista
- [ ] F5 mantém o agendamento (localStorage da feat/09)
- [ ] Cancelar ou ✕ fecha o modal sem salvar

## Próxima etapa

`feat/11-next-validacao` — validar campos obrigatórios antes de salvar.

## Desafios extras

- Excluir agendamento da lista
- Editar agendamento existente
- Filtrar lista por data
