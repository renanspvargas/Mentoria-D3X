# Etapa 05 — Conceito de componentes React

## Problema

Na `feat/01`, cada card era HTML copiado e colado — mudar o layout exigia editar 3 blocos iguais. Configurar React do zero é complexo, e gerenciar rotas de páginas diferentes manualmente é difícil. Precisamos entender o conceito de componente antes de migrar para um framework completo.

## Solução

Esta branch adiciona `react-conceito.html`: React via CDN (sem build), com componente `AppointmentCard` que recebe dados via **props** e renderiza 3 itens com `.map()`. O vanilla completo (`index.html` / `app.js`) permanece intacto como referência.

### HTML repetido vs componente

Na feat/01, três `<article>` idênticos diferiam só nos textos. No React, `AppointmentCard` é definido uma vez e reutilizado — as props (`clientName`, `service`, `date`, `time`) são os "buracos" preenchidos por cada item do array.

## Arquivos principais

- `react-conceito.html` — React + ReactDOM via CDN, componente `AppointmentCard` e renderização com `.map()`
- `index.html` / `app.js` — vanilla completo (inalterado)
- `styles.css` — estilos compartilhados

## Como rodar

Abra `vanilla/react-conceito.html` no navegador (requer internet para carregar React via CDN).

## Checkpoint

- [ ] Abrir `react-conceito.html` e ver 3 cards renderizados por componente
- [ ] `index.html` continua funcionando com modal e localStorage

## Próxima etapa

`feat/06-next-lista-estatica` — migrar para Next.js com lista estática e Tailwind.

## Para o Next

- `AppointmentCard` vira arquivo `.tsx` na `feat/07`
- Props ganham tipagem TypeScript (`Appointment`)
- CDN e Babel são substituídos por `create-next-app` com build integrado
- `.map()` no JSX da `page.tsx` segue o mesmo padrão desta demo
