# Notas internas — Mentoria D3X

Branch `docs/planejamento` — referência interna da mentoria.

> **Uso:** registrar decisões e próximos passos discutidos. **Não é material para alunos.** Instruções públicas ficam no `README.md` da `main` e nos READMEs de cada branch de código.

---

## Metodologia das aulas

- Formato **problema → solução** em cada etapa.
- Branches lineares como **máquina do tempo** (1 tijolo por branch, ~15–25 min ao vivo).
- Aula flui rápido: mostrar branch pronta, explicar diff, reimplementar só o trecho central.
- Tarefas para casa são opcionais, conforme andamento da turma.
- React nas etapas iniciais: **mínimo possível** (ponte conceitual, sem projeto React separado).

## Dois modelos de Git

| | Repo de referência (nosso) | Repo dos alunos |
|--|---------------------------|-----------------|
| Propósito | Material consultável por branch | Prática real |
| Fluxo | Branches lineares, sem merge obrigatório na `main` | `main` + feature branches + PR quando fizer sentido |
| Orientação | `git checkout feat/XX` para ver cada etapa | Subir no GitHub para revisão de dúvidas |

## Decisões de estrutura (frontend)

- **`vanilla/` removido na `feat/09`** — código já convertido para Next; histórico preservado em `feat/01`–`feat/08`.
- Projeto Next permanece em **`web/`** (não mover para raiz por enquanto).
- **`feat/09`–`12` implementadas** — localStorage, componentização, modal, validação, calendário (`react-day-picker`).
- Prioridade didática na aula: **localStorage + componentização** (`useAppointments`, componentes extraídos).
- `feat/10`–`12` servem como material pronto para aluno avançado explorar sozinho.
- Desafios extras **documentados, não implementados**: excluir, editar, filtrar por data.

## Componentização (padrão adotado)

- `page.tsx` = orquestrador fino
- Hooks encapsulam estado e persistência (`useAppointments`)
- Componentes isolam UI (`AppointmentCard`, `AppointmentList`, `AppointmentModal`)
- `lib/` para storage, validação, mocks
- TypeScript desde o início (Next defaults); demo JS→TS só se fizer sentido, sem aprofundar

## Backend — decisões (futuro)

- **NestJS em repositório separado** — não usar Next.js API Routes como backend principal.
- **Numeração alinhada:** módulo N = mesmo número em web e API (API pode iniciar na ~10).
- Evolução gradual, como no front:
  1. API em memória
  2. Persistência simples (SQL direto ou arquivo)
  3. Prisma + migrations
- **`Appointment`** copiado entre web e API até Prisma virar fonte da verdade.
- **Docker Compose:** apenas Postgres local para testes — não containerizar web/api nesta fase.
- Deploy: **só local** por agora; no fim da trilha, guiar para **VPS** (provavelmente Docker Compose completo).

## Próximas features — web (a implementar)

| Módulo | Branch sugerida | Notas |
|--------|-----------------|-------|
| 13 | `feat/13-next-rotas` | App Router, múltiplas páginas, `Link` |
| 14 | `feat/14-next-layout` | Nav/header compartilhado no `layout.tsx` |
| 15 | `feat/15-next-dashboard` | Métricas básicas (total, do dia); preparar campo `status` para no-show futuro |
| 16 | `feat/16-next-area-privada` | Auth simples (token/senha) antes de auth real |
| 17 | `feat/17-next-crud` | Editar/excluir — pode ser desafio do aluno avançado |
| 18 | `feat/18-consome-api` | `fetch` para NestJS; `.env.example` com `NEXT_PUBLIC_API_URL` |

## Próximas features — API (repo separado, a criar)

| Módulo | Branch sugerida | Notas |
|--------|-----------------|-------|
| 10 | `feat/10-api-hello` | Health check, estrutura NestJS |
| 11 | `feat/11-api-crud-memoria` | CRUD appointments em array |
| 12 | `feat/12-api-persistencia` | SQL/arquivo, sem ORM |
| 13 | `feat/13-api-cors` | CORS explícito para web local |
| 14 | `feat/14-api-prisma` | Schema + primeira migration |
| 15 | `feat/15-api-docker` | `docker-compose.yml` só Postgres |

## Convenções mantidas

- Commits: `feat(XX): descrição` em português
- README por branch em `web/README.md` (template: Problema, Solução, Arquivos, Como rodar, Checkpoint, Próxima etapa)
- Erros comuns no README: só adicionar quando aparecerem na turma
- Portas locais sugeridas: web `3000`, api `3001`

## Pendências / lembretes

- [ ] Criar repo `mentoria-d3x-api` quando iniciar backend
- [ ] Atualizar `obejtivo.md` quando fechar próximo ciclo
- [ ] Tabela web↔API nos READMEs quando API existir (evitar branches incompatíveis)
