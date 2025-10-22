# IndieVerse 🎮

![Website](https://img.shields.io/badge/Website-Live-brightgreen)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)
![HTML5](https://img.shields.io/badge/HTML5-orange)
![CSS3](https://img.shields.io/badge/CSS3-blue)
![Mobile Friendly](https://img.shields.io/badge/Responsivo-Mobile%20First-lightgrey)
![Status](https://img.shields.io/badge/Status-Em%20Desenvolvimento-blueviolet)

**IndieVerse** é uma enciclopédia interativa focada em jogos indie. O site apresenta informações detalhadas sobre vários títulos, incluindo descrição, história, jogabilidade, prêmios, curiosidades e trailer em vídeo. Você pode facilmente navegar entre diferentes jogos usando a barra de pesquisa.

---

## 🌟 Funcionalidades

- Catálogo de **7 jogos indie** atualmente, com mais jogos planejados para o futuro.
- **Pesquisa interativa** para mudar de jogo rapidamente.
- **Responsivo**: Mobile first, funcionando perfeitamente em smartphones, tablets e desktops.
- Estrutura de dados **orientada a objetos**:
  - A classe `Game` armazena todas as informações de cada jogo via construtor.
  - Instâncias de jogos são armazenadas em um **array no script principal**.
- **Dois modals**:
  1. Modal principal com **4 tabs**:
     - Sobre
     - Jogabilidade
     - Prêmios
     - Curiosidades
  2. Modal dedicado apenas ao **trailer do jogo** com o uso de <iframes>.
- Criado com **HTML, CSS e JavaScript puro**.
- Layout pensado para **usabilidade e estética moderna**.

---

## 📁 Estrutura principal do projeto

- src/
  - assets/
    - imgs/ (logos, personagens, backgrounds, plataformas)
    - js/
      - games.js — classe Game e instâncias
      - script.js — lógica principal (search, atualizar UI, modals) e array de jogos
      - mobile.js — comportamento do menu e abas mobile
    - styles/
      - style.css — estilos principais (mobile-first)
      - reset.css, fonts.css
- index.html

---

## 🖼️ Imagens do Projeto

**Página principal do jogo:**
![IndieVerse Screenshot 1](/src/assets/imgs/project-imgs/main-interface.jpg)

**Modal de informações do jogo:**
![IndieVerse Screenshot 2](/src/assets/imgs/project-imgs/info-modal.jpg)

**Modal do trailer do jogo:**
![IndieVerse Screenshot 3](/src/assets/imgs/project-imgs/video-modal.jpg)

---

## 🚀 Tecnologias Utilizadas

- HTML5
- CSS3 (Mobile First, Flexbox)
- JavaScript (ES6, Programação Orientada a Objetos)

---

## 📌 Observações

- Landing page ainda em desenvolvimento.

- Novos jogos serão adicionados futuramente ao catálogo.

- A navegação e a responsividade são focadas principalmente para dispositivos móveis, garantindo uma experiência otimizada em smartphones.

---

## 📎 Deploy

![Confira o projeto!](https://erick-camposdev.github.io/IndieVerse/)

---

## 👨‍💻 FEITO POR: ERICK CAMPOS
