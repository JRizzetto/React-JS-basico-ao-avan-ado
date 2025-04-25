# ⏳ Countdown - Contador Regressivo Personalizado

Este é um projeto feito com **React** que permite ao usuário criar uma contagem regressiva personalizada para qualquer data importante, como aniversários, virada de ano, eventos especiais e muito mais!

## 📸 Visão Geral

O usuário pode:

- Definir um **título** para o evento.
- Escolher uma **data futura**.
- Selecionar uma **imagem de fundo**.
- Alterar a **cor do tema** da contagem.

A aplicação então exibe uma tela estilizada mostrando **quanto tempo falta** até o evento chegar, com base nas configurações feitas.

---

## 🔧 Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [React Router DOM](https://reactrouter.com/)
- `useState`, `useContext`, `Navigate`
- `react-dom/client`

---

## 🧭 Como Funciona

### Página 1 - Monte sua contagem regressiva

Aqui o usuário personaliza sua contagem:

- Título do evento
- Data do evento
- Imagem de fundo (background)
- Cor do tema (ex: azul, vermelho, etc.)

### Página 2 - Visualização da contagem regressiva

Apresenta:

- Tempo restante (dias, horas, minutos, segundos)
- Título do evento
- Fundo personalizado
- Cor temática

---

## ▶️ Como Rodar o Projeto

1. Clone este repositório:

   ```bash
   git clone https://github.com/seu-usuario/countdown.git

   ```

2. Acesse o diretório:
   cd countdown

3. Instale as dependências:
   npm install

4. Inicie o projeto:
   npm run dev

src/
├── assets/
├── components/
├── context/
├── hooks/
├── houkes/
└── App.jsx
