# Mentoria D3X — Sistema de Agendamentos

Repositório de referência para a mentoria D3X: evolução progressiva de um sistema de agendamentos, do HTML/CSS estático até Next.js com estado.

## Sobre o projeto

Aplicação para profissionais (clínicas, escritórios, etc.) gerenciarem agendamentos de clientes — lista de consultas, modal de cadastro e persistência de dados.

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

**Planejadas (ciclo futuro):** `feat/09` localStorage no Next, `feat/10` modal, `feat/11` validação, `feat/12` calendário.

## Como usar (alunos)

1. Clone este repositório ou crie o seu próprio no GitHub seguindo as mesmas branches.
2. `git checkout feat/01-html-css-estatico` (ou qualquer branch da tabela).
3. Leia o `README.md` da pasta da etapa (`vanilla/` ou `web/`).
4. Compare branches com `git diff feat/01-html-css-estatico..feat/02-js-modal-abrir`.

## Estrutura

```
├── vanilla/     # HTML, CSS e JS puro (feat/01–05)
├── web/         # Projeto Next.js (feat/06–08)
└── obejtivo.md  # Documento original da mentoria
```
