# Planejamento — Trilha Mentoria D3X

Documento consolidado com decisões de arquitetura, roadmap e convenções do projeto.

## Visão geral

Sistema de **agendamentos** para profissionais (clínicas, escritórios, etc.). Este repositório é a **referência da mentoria**; os alunos podem clonar e seguir as branches como máquina do tempo, ou criar repositório próprio espelhando a mesma estrutura.

## Frontend — Trilha feat/01–12

| Módulo | Branch | Foco |
|--------|--------|------|
| 01 | `feat/01-html-css-estatico` | HTML/CSS estático |
| 02 | `feat/02-js-modal-abrir` | Modal com JS |
| 03 | `feat/03-js-lista-dinamica` | Lista dinâmica |
| 04 | `feat/04-js-localstorage` | localStorage (vanilla) |
| 05 | `feat/05-react-conceito` | React via CDN |
| 06 | `feat/06-next-lista-estatica` | Next.js lista estática |
| 07 | `feat/07-next-componente` | AppointmentCard tipado |
| 08 | `feat/08-next-estado` | useState dinâmico |
| 09 | `feat/09-next-localstorage` | localStorage + hook + componentização |
| 10 | `feat/10-next-modal` | Modal com formulário |
| 11 | `feat/11-next-validacao` | Validação de campos |
| 12 | `feat/12-next-calendario` | react-day-picker |

**Foco atual:** feat/09–12 (localStorage, componentização, modal, validação, calendário).

## Remoção do vanilla

A pasta `vanilla/` é **removida na feat/09**. Branches `feat/01`–`feat/08` preservam o histórico — alunos acessam com `git checkout feat/01-html-css-estatico` … `feat/08-next-estado`.

A partir da feat/09, o repositório contém apenas `web/` (Next.js).

## Componentização

- **Hooks** (`useAppointments`) encapsulam estado e persistência.
- **Componentes** (`AppointmentList`, `AppointmentCard`, `AppointmentModal`) isolam UI.
- **`page.tsx`** é orquestrador fino — conecta hook, lista e modal.

## Backend (futuro)

- **Repo separado** com NestJS.
- **Sem** Next.js API Routes — API e frontend desacoplados.
- **Numeração alinhada:** módulo N no web = mesmo conceito no backend (API inicia ~módulo 10).

## Persistência backend (gradual)

1. Sem ORM — SQL direto ou arquivo
2. Prisma + migrations (quando fizer sentido)

## Docker

`docker-compose` **apenas** para Postgres local. Não containeriza web nem API nesta fase.

## Deploy

- **Agora:** desenvolvimento local (`npm run dev`).
- **Futuro:** VPS + Docker Compose no fim da trilha.

## Contrato de dados

O tipo `Appointment` em `web/types/appointment.ts` será espelhado na API futuramente:

```ts
type Appointment = {
  id: string;
  clientName: string;
  service: string;
  date: string;      // YYYY-MM-DD
  time: string;      // HH:MM
  notes?: string;
};
```

## Módulos planejados (web 13+ / API 10+)

| Módulo | Web | API |
|--------|-----|-----|
| 13 | Rotas (App Router) | — |
| 14 | Dashboard / métricas | Endpoints CRUD |
| 15 | Área privada / auth | JWT / guards |
| 10+ | — | NestJS módulos alinhados |

## Aula atual — prioridades

1. **feat/09** — prioridade da aula: localStorage + componentização.
2. **feat/10–12** — material de exploração autônoma (modal, validação, calendário).

## Desafios extras (não implementados)

Documentados nos READMEs para os alunos explorarem:

- Excluir agendamento
- Editar agendamento existente
- Filtrar lista por data
