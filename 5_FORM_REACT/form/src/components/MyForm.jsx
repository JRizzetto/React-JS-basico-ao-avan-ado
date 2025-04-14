import "./Myform.css";

import { useState } from "react";

const Myform = ({ userName, userEmail }) => {
  {
    /* 3 - Criação de form */
  }
  const [name, setName] = useState(userName);
  const [email, setEmail] = useState(userEmail);

  const [bio, setBio] = useState("");

  const [role, setRole] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  // 5 - envio de form
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, bio, role);

    // Validação
    // Envio

    // 7 - Limpar form
    setName("");
    setEmail("");
    setBio("");
    setRole("");
  };

  return (
    <div>
      {/* 1 - Criação de form */}
      {/* 5 - Envio de formulário */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            placeholder="Digite o seu nome"
            onChange={handleName}
            // 6 - COntrolled input
            value={name || ""}
          />
        </div>
        {/* 2 - Label envolvendo input */}
        <label>
          <span>E-mail:</span>
          <input
            type="text"
            name="email"
            placeholder="Digite o seu e-mail"
            onChange={(e) => setEmail(e.target.value)}
            // 6 - COntrolled input
            value={email || ""}
          />
        </label>
        {/* 8 - Textare */}
        <label>
          <span>Função no sistema</span>
          <select
            name="role"
            onChange={(e) => setRole(e.target.value)}
            value={role}
          >
            <option value="user">Usuário</option>
            <option value="editor">Editor</option>
            <option value="admin">Admin</option>

          </select>
        </label>
        <label>
          <span>Bio:</span>
          <textarea
            name="bio"
            placeholder="Descrição do usuário"
            onChange={(e) => setBio(e.target.value)}
            value={bio}
          ></textarea>
        </label>
        {/* 9 - select */}

        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default Myform;
