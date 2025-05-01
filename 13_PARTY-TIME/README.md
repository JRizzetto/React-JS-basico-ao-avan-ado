# 🎉 Party Organizer - Fullstack Application

Este projeto é uma aplicação completa (frontend + backend) para gerenciamento de festas e serviços. É possível cadastrar eventos, associar serviços a eles (como fotografia, buffet, decoração, etc), visualizar detalhes e gerenciar tudo por meio de uma interface simples e moderna.

---

## 📁 Estrutura do Projeto

project-root/ ├── backend/ │ ├── controllers/ │ │ ├── partyController.js │ │ └── serviceController.js │ ├── db/ │ │ ├── conn.js │ │ └── servicesmock.json │ ├── models/ │ │ ├── Party.js │ │ └── Service.js │ ├── routes/ │ │ ├── party.js │ │ ├── service.js │ │ └── router.js │ └── app.js │ └── frontend/ └── src/ ├── axios/ ├── components/ ├── hook/ ├── routes/ ├── App.jsx └── index.jsx


---

## 🧠 Tecnologias Utilizadas

### Backend
- Node.js
- Express
- Mongoose
- MongoDB Atlas
- Nodemon
- CORS

### Frontend
- React
- Axios
- React Router DOM

---

## 🚀 Como executar o projeto

### Pré-requisitos

- Node.js e npm instalados
- MongoDB Atlas configurado (ou Mongo local)
- Gerenciador de pacotes (npm ou yarn)

### Backend

1. Acesse a pasta `backend`:
   ```bash
   cd backend

2. Instale as dependências:
    npm install

3. Configure a conexão com o MongoDB em db/conn.js (se desejar alterar):
    mongoose.connect('mongodb+srv://<user>:<senha>@<seu-cluster>.mongodb.net/<dbname>');

4. Inicie o servidor:
    npm start

O backend rodará na porta 3000.

Frontend

1. Acesse a pasta frontend:
    cd frontend

2. Instale as dependências:
    npm install

3. Inicie a aplicação React:
    npm run dev

O frontend estará disponível na porta 5173 (Vite).

🔧 Funcionalidades
Cadastro de festas (title, author, description, budget, image, serviços);

Cadastro de serviços independentes;

Associação de serviços a festas;

Validação de dados;

Comunicação frontend-backend com Axios;

API RESTful com rotas organizadas por controllers;

Armazenamento em banco de dados MongoDB na nuvem (MongoDB Atlas).

📷 Imagens e Demonstração
Se tiver prints ou um link para vídeo/hospedagem, adicione aqui para enriquecer o README.

📌 Observações
Este projeto foi desenvolvido para fins de estudo e demonstração de uma aplicação MERN-like (Mongo, Express, React, Node).

Ainda podem ser adicionadas melhorias como autenticação, upload de imagens, deploy completo, etc.

🧑‍💻 Autor
Jefferson Rizzetto
