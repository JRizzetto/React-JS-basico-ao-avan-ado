import "./App.css";

// 2 - css de componente
import MyComponents from "./components/MyComponents";
import Title from "./components/Title";

function App() {
  // 4 - inline style dinâmico
  const n = 15;

  // 5 - classes dinâmicas
  const redTitle = true;

  return (
    <div>
      {/* 1 - CSS Global */}
      <h1>CSS no React</h1>
      {/* 2 - css de componente  */}
      <MyComponents />
      <p>Pegou csss de outro lugar</p>
      {/* 3 - inline style  */}
      <p
        style={{ color: "blue", padding: "25px", borderTop: "1px dotted blue" }}
      >
        Esse elemento tem estilos inline
      </p>
      {/* 4 - inline style dinâmico */}
      <h2 style={n > 20 ? { color: "purple" } : { color: "magenta" }}>
        CSS dinâmico
      </h2>
      {/* 5 - classes dinâmicas */}
      <h2 className={redTitle ? "red-title" : "title"}>
        Este título vai ter uma classe
      </h2>
      {/* 6 - CSS módulos */}
      <Title />
    </div>
  );
}

export default App;
