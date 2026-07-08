# Mentoria D3X — Sistema de Agendamentos

Repositório de referência para a mentoria D3X: evolução progressiva de um sistema de agendamentos, do HTML/CSS estático até Next.js com estado, persistência, modal e calendário.

## Sobre o projeto

Aplicação para profissionais (clínicas, escritórios, etc.) gerenciarem agendamentos de clientes — lista de consultas, modal de cadastro e persistência de dados.

> **Branch `main`:** ponto de entrada do repositório. O código mais recente está em `feat/12-next-calendario`.

## Branches (máquina do tempo)

Cada branch contém **todo o código anterior + o tijolo novo**. Use `git checkout` para ver cada etapa:

| Branch | Descrição |
|--------|-----------|
| `main` | Setup inicial do repositório |
| `feat/01-html-css-estatico` | Página estática com 3 cards de agendamento |
| `feat/02-js-modal-abrir` | Modal abre/fecha com JavaScript |
| `feat/03-js-lista-dinamica` | Lista renderizada dinamicamente via JS |
| `feat/04-js-localstorage` | Persistência com localStorage |
| `feat/05-react-conceito` | Componentes React via CDN (conceito) |
| `feat/06-next-lista-estatica` | Lista estática no Next.js + Tailwind |
| `feat/07-next-componente` | `AppointmentCard` tipado com TypeScript |
| `feat/08-next-estado` | Lista dinâmica com `useState` |
| `feat/09-next-localstorage` | localStorage + hook + componentização |
| `feat/10-next-modal` | Modal com formulário (`<dialog>`) |
| `feat/11-next-validacao` | Validação de campos obrigatórios |
| `feat/12-next-calendario` | Seleção de data com `react-day-picker` |

> A pasta `vanilla/` existia nas branches `feat/01`–`feat/08`. A partir da `feat/09` o repositório contém apenas `web/`. Para ver o código vanilla: `git checkout feat/01-html-css-estatico` … `feat/08-next-estado`.

## Como usar (alunos)

1. Clone este repositório ou crie o seu próprio no GitHub seguindo as mesmas branches.
2. `git checkout feat/12-next-calendario` para ver a versão mais recente (ou qualquer branch da tabela).
3. Leia o `README.md` da pasta da etapa (`vanilla/` nas branches 01–08, ou `web/` nas branches 06+).
4. Compare branches com `git diff feat/11-next-validacao..feat/12-next-calendario`.

### Rodar o Next.js

```bash
git checkout feat/12-next-calendario
cd web
npm install
npm run dev
```

## Estrutura (a partir da feat/09)

```
├── web/         # Projeto Next.js (feat/06+)
└── obejtivo.md  # Documento original da mentoria
```

## Roadmap interno

Decisões de arquitetura e próximas features ficam na branch `docs/planejamento` ([`docs/PLANEJAMENTO.md`](docs/PLANEJAMENTO.md)) — **referência da mentoria**, não material para alunos.

**Próximos módulos planejados:**

- `feat/13` — rotas com App Router
- `feat/14` — dashboard com métricas
- `feat/15` — área privada / autenticação
- Backend NestJS em repositório separado (módulo 10+)
