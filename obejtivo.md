### 1. Overview do Projeto: Sistema de Agendamento Profissional
O objetivo é construir uma aplicação de **gerenciamento de agendamentos**, voltada para profissionais que dependem de reuniões ou consultas, como clínicas médicas e escritórios de advocacia. 

*   **Problema Central:** Profissionais precisam de uma forma simples para que clientes vejam disponibilidade e solicitem horários.
*   **Funcionalidades Iniciais:** Uma página única contendo uma lista de agendamentos e um botão para abrir um "popup" (modal) onde o usuário insere informações básicas e observações.
*   **Visão de Futuro:** O sistema deverá evoluir para incluir um **dashboard** com métricas de rendimento (ex: taxa de "no-show" ou faltas) e, eventualmente, integração com IA para análise de dados.
*   **Pilha Tecnológica Alvo:** Next.js (baseado em React), TypeScript e futuramente persistência de dados (Supabase).

### 2. Estrutura de Branches no Git
O uso de branches permitirá que o código sirva como uma "máquina do tempo", onde cada etapa resolve um problema específico da etapa anterior. A estrutura sugerida é:

*   `main`: Contém a versão estável mais recente (no final, será o projeto Next.js).
*   `feat/01-html-css-estatico`: O "esqueleto" e a "pintura" da casa.
*   `feat/02-js-dinamico`: A "fiação elétrica" para interatividade básica.
*   `feat/03-react-componentizado`: A solução para o problema de repetição de código.
*   `feat/04-nextjs-framework`: A estrutura profissional e final da aplicação.

### 3. Detalhes de Cada Etapa (Problema vs. Solução)

#### Etapa 1: `feat/01-html-css-estatico`
*   **O que vai na branch:** Apenas arquivos `.html` e `.css`. O foco é criar um **Card de Agendamento** com nome, horário e serviço.
*   **O Problema:** O site é apenas um documento estático. Se eu quiser adicionar um novo agendamento, preciso editar o código manualmente.
*   **Aprendizado:** Sintaxe de tags, seletores CSS e o conceito de "paredes" e "pintura" do sistema.

#### Etapa 2: `feat/02-js-dinamico`
*   **O que vai na branch:** Adição de um arquivo `.js`. Implementação de um evento de clique no botão de "Agendar" para mostrar um alerta ou abrir um modal simples.
*   **O Problema:** Se tivermos muitos cards, o código para gerenciar cada botão individualmente via `document.getElementById` torna-se uma "bagunça" de variáveis (o problema das 1 milhão de variáveis do Facebook).
*   **Aprendizado:** Lógica de programação, manipulação do DOM e a necessidade de ferramentas que gerenciem o estado da interface.

#### Etapa 3: `feat/03-react-componentizado`
*   **O que vai na branch:** Introdução do React (pode ser via CDN ou uma estrutura simples). O card vira um **componente** reutilizável.
*   **O Problema:** Configurar o ambiente React do zero é complexo, e gerenciar rotas de páginas diferentes (ex: página do médico vs. página do paciente) manualmente é difícil.
*   **Aprendizado:** Criação de componentes, uso de `props` para passar dados e a vantagem de não precisar copiar e colar código HTML.

#### Etapa 4: `feat/04-nextjs-framework` (Foco Final)
*   **O que vai na branch:** Migração definitiva para o **Next.js** usando a estrutura de pastas `app/` (App Router) e arquivos `.tsx`.
*   **O Problema:** Precisamos de uma estrutura que já venha com roteamento, otimização de imagens e que seja o padrão de mercado para facilitar a busca de informações e tutoriais.
*   **Aprendizado:** Estrutura de pastas do Next.js, TypeScript básico para evitar erros de digitação e o comando `npm run dev` para rodar o servidor local.