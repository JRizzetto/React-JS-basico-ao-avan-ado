import "./App.css";
import ParentComponent from "./components/ParentComponent";
import PostItens from "./components/PostItens";
import UseForm from "./components/UseForm";

function App() {
  return (
    <div>
      <title>Hora de Cordar - Home</title>
      <meta name="description" content="Aprenda programação com Matheus" />
      <h1>1 - Actions </h1>
      <UseForm />
      <h1>2 - ref como props</h1>
      <ParentComponent />
      <h1>3 - use para carregamento de dados</h1>
      <PostItens />
    </div>
  );
}

export default App;
