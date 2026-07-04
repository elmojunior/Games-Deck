# Games Deck 🎮

> *"A ânsia de ter e o tédio de possuir."*
> — Adaptado do pensamento de Arthur Schopenhauer

**Games Deck** é uma biblioteca de jogos pessoal com visual e experiência de loja virtual. O projeto foi desenvolvido sob a premissa de que a atratividade visual de uma loja (com banners dinâmicos, trailers, notícias de atualizações e avaliações) engaja o jogador muito mais do que as listas minimalistas e estáticas das bibliotecas tradicionais. 

O projeto funciona inteiramente no lado do cliente (client-side), sem frameworks, sem dependências externas, sem CDNs, utilizando apenas **HTML, CSS e JavaScript puros** (com exceção do consumo de dados públicos da API da Steam).

🔗 **Acesse agora:** [https://elmojunior.github.io/Games-Deck/gamesdeck.html](https://elmojunior.github.io/Games-Deck/gamesdeck.html)

---

## 🧠 O Conceito Psicológico: Loja vs. Biblioteca

Muitas vezes, jogadores relatam passar horas navegando por lojas virtuais de jogos (como Steam, PlayStation Store ou eShop) apenas para, ao abrir suas próprias bibliotecas com centenas de títulos, sentirem apatia ou tédio — o famoso fenômeno do *"tenho centenas de jogos e nada para jogar"*.

Esse comportamento pode ser interpretado sob a ótica de alguns conceitos psicológicos e de experiência do usuário:

*   **Dopamina e a Antecipação:** De acordo com estudos de neurobiologia, a liberação de dopamina (o neurotransmissor do prazer e motivação) pode atingir seu pico durante a *antecipação* e a busca pelo objeto de desejo (a navegação na loja, a leitura de reviews, a visualização de trailers), e não necessariamente após a aquisição.
*   **Aparato Visual Stimulus-Rich (Rico em Estímulos):** As lojas são meticulosamente projetadas para manter o usuário engajado. Elas apresentam trailers em reprodução automática, capturas de tela vibrantes, listas de novidades, atualizações recentes dos desenvolvedores e o termômetro social das análises de outros usuários.
*   **O Efeito de Contraste da Biblioteca:** Ao migrar para a biblioteca, o jogador costuma se deparar com uma interface puramente utilitária (uma lista textual ou uma grade simples de capas). O contraste visual abrupto pode reduzir drasticamente o apelo estético do jogo que antes parecia fascinante.

O **Games Deck** propõe um experimento de design: e se a sua biblioteca particular usasse as mesmas técnicas de apresentação visual de uma loja? Ao trazer trailers, notícias recentes, análises dinâmicas e design baseado no Material Design 3, o projeto tenta resgatar a sensação de entusiasmo do momento da descoberta, motivando o jogador a de fato usufruir dos jogos que já possui.

---

## ✨ Funcionalidades Principais

*   **Estética de Loja (Store-Like):** Exibição dos seus jogos com artes detalhadas, capturas de tela, gameplays/trailers e descrições ricas.
*   **Integração com Dados Públicos da Steam:** Puxa automaticamente novidades, categorias de notícias, atualizações e informações atualizadas diretamente dos servidores públicos da Steam (via requisições client-side).
*   **Feed de Notícias Dinâmico:** Seção dedicada com notícias organizadas por abas (atualizações, correções, eventos) com paginação por rolagem infinita.
*   **Material Design 3:** Interface moderna, responsiva, com suporte nativo a temas Claro (Light) e Escuro (Dark).
*   **Arquitetura Single-Page Application (SPA):** Navegação fluida baseada em rotas por hash (`#home`, `#biblioteca`, `#jogo`, etc.) sem recarregamento de página.
*   **Privacidade e Autonomia:** Seus dados são salvos localmente no navegador (`localStorage`), sem necessidade de servidores externos ou bancos de dados proprietários.

---

## 🛠️ Stack Tecnológica

O projeto adota uma filosofia de desenvolvimento estrita de **zero dependências externas** e **zero compilação**:

*   **Estrutura:** HTML5 Semântico.
*   **Estilização:** CSS3 puro, fazendo uso intensivo de *CSS Custom Properties* (variáveis), CSS Grid, Flexbox e transições fluidas de estado.
*   **Lógica:** JavaScript Vanilla (ES6+) para gerenciamento de estado local, consumo de APIs e renderização dinâmica da UI.
*   **Fontes e Ícones:** Fontes Roboto locais e ícones/favicons embutidos em SVG direto no documento para garantir funcionamento offline total sem dependência de servidores de fontes (como Google Fonts) ou CDNs de ícones.

---

## 🚀 Como Executar Localmente

Como o projeto é construído apenas com tecnologias web nativas, você não precisa instalar o Node.js, NPM ou configurar servidores complexos:

1. Faça o clone deste repositório:
   ```bash
   git clone https://github.com/elmojunior/Games-Deck.git
   ```
2. Entre no diretório do projeto:
   ```bash
   cd Games-Deck
   ```
3. Abra o arquivo `gamesdeck.html` diretamente em qualquer navegador moderno de sua preferência.

---

## 📄 Licença

Este projeto é distribuído sob a licença **GPL-3.0 (GNU General Public License v3.0)**. Consulte o arquivo [LICENSE](file:///c:/Users/User/Desenvolvimento/Games-Deck/LICENSE) para obter mais informações sobre os termos de uso e redistribuição.
