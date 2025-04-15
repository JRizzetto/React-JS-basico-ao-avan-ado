import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    setStatusMessage("Verificando...");
  
    try {
      const response = await fetch(
        `http://localhost:3001/users?email=${username}&password=${password}`
      );
      const data = await response.json();
  
      if (data.length > 0) {
        setStatusMessage("✅ Login realizado com sucesso!");
      } else {
        setStatusMessage("❌ Usuário ou senha inválidos.");
      }
    } catch (error) {
      setStatusMessage("⚠️ Erro ao conectar com o servidor.");
    }
  };
  

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Acesse o sistema</h1>
        <div className="input-field">
          <input
            type="email"
            placeholder="E-mail"
            onChange={(e) => setUsername(e.target.value)}
          />
          <FaUser className="icon" />
        </div>
        <div className="input-field">
          <input
            type="password"
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
          />
          <FaLock className="icon" />
        </div>

        <div className="recall-forget">
          <label>
            <input type="checkbox" />
            Lembre de mim
          </label>
          <a href="#">Esqueceu a senha?</a>
        </div>

        <button>Entrar</button>
        {statusMessage && <p className="status">{statusMessage}</p>}

        <div className="signup-link">
          <p>
            Não tem uma conta? <a href="#">Registrar</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
