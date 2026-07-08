# Etapa 06 — Lista estática no Next.js

## Problema

Precisamos de uma estrutura profissional com roteamento, padrão de mercado e ferramentas integradas (TypeScript, lint, build). O vanilla funciona, mas não escala para um produto real com múltiplas páginas e deploy.

## Solução

Esta branch cria o projeto Next.js em `web/` com App Router, TypeScript e Tailwind. A `page.tsx` exibe a mesma lista de 3 agendamentos mock do vanilla, com markup JSX e classes utilitárias Tailwind no lugar de CSS puro.

### CSS puro vs Tailwind

| Vanilla (`styles.css`) | Next.js (Tailwind) |
|------------------------|-------------------|
| `.appointment-card { padding: 1.25rem; ... }` | `className="rounded-xl border p-5 shadow-sm"` |
| Arquivo CSS separado | Classes inline no JSX |
| Reutilização via seletores | Reutilização via composição de classes |

## Arquivos principais

- `app/page.tsx` — lista estática de 3 agendamentos
- `app/layout.tsx` — layout raiz e metadados
- `app/globals.css` — import do Tailwind e estilos base
- `package.json` — dependências e scripts

## Como rodar

```bash
cd web
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000). Se a porta estiver ocupada: `npm run dev -- -p 3001`.

## Checkpoint

- [ ] `localhost:3000` mostra título "Agendamentos" e 3 cards
- [ ] Visual consistente com a versão vanilla (cards com borda e sombra)
- [ ] Botão "Agendar" visível (sem ação ainda)

## Próxima etapa

`feat/07-next-componente` — extrair card para `AppointmentCard.tsx` com tipagem TypeScript.

## Para o Next

- JSX repetido na page será refatorado em componente na próxima etapa
- `formatDateTime` pode ser extraído para util compartilhado
- Botão "Agendar" ganhará `useState` na `feat/08`
