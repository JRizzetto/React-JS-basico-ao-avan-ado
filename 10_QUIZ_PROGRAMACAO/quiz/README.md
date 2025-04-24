# Quiz de Programação

Este é um projeto de **quiz interativo de programação** desenvolvido em React, com o bundler Vite, como parte do curso *Hora de Acordar* com o Matheus Battisti.

## 🔍 Sobre o Projeto

O quiz começa com uma tela inicial, em seguida o usuário escolhe a categoria entre **HTML**, **CSS** ou **JavaScript**. Cada pergunta possui:

- 4 alternativas
- 1 dica (opcional)
- 1 opção de excluir a pergunta (mas só pode escolher entre dica ou excluir)

No final, o usuário vê sua pontuação e pode reiniciar o jogo com uma nova categoria.

## 🛠️ Tecnologias Utilizadas

- [React 19](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- Context API do React
- CSS Modules

## 🧠 Funcionalidades

- Navegação entre estágios do quiz com base no estado global (Context)
- Contador de acertos
- Sistema de pontuação final
- Botão de reiniciar com nova categoria

## 🚀 Como rodar o projeto localmente

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/quiz
   cd quiz

2. Instale as dependências:
npm install

3. Inicie o servidor de desenvolvimento:
npm run dev

4. Acesse http://localhost:5173 no navegador.

🌐 Deploy
Projeto disponível em: quiz-programacao-gamma.vercel.app