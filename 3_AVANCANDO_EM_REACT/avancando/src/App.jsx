import "./App.css";

// 2 - Imagem em assets
import night from "./assets/night.jpg";

// 3 - useState
import Data from "./components/data";

// 4 - Rederização de lista
import ListRender from "./components/ListRender";

// 7 - Render condicional
import ConditionalRender from "./components/ConditionalRender";

// 8 - Props
import ShowUserName from "./components/ShowUserName";

// 9 - Desustruturando props
import CarDetails from "./components/CarDetails";

// 11 - Renderirzação de listas com componentes
const cars = [
  { id: 1, brand: "Ferrari", color: "Amarelo", km: 0 },
  { id: 2, brand: "KIA", color: "Branco", km: 200000 },
  { id: 3, brand: "Renault", color: "Azul", km: 32000 },
];

/* 12 - Fragment */
import Fragment from "./components/Fragment";

// 13 - Children
import Container from "./components/Container";

// 14 - FUncao prop
import ExecuteFunction from "./components/ExecuteFunction";
import { useState } from "react";
import Message from "./components/Message";
import ChangeMessage from "./components/ChangeMessage";

// 15 - State Lift 

function App() {
  // 14 - FUncao prop
  function showMessage() {
    console.log("Evento do container pai");
  }

  // 15 - State lisft
  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <>
      <div className="App" style={{ paddingBottom: "500px" }}>
        <h1>Avancando no React</h1>
        {/*1 - Imagem em public*/}
        <img src="/img.jpg" alt="ALguma imagem" />
        {/* 2 - Imagem em assets */}
        <img src={night} alt="" />
        {/* 3 - useState */}
        <Data />
        {/* 4 - Rederização de lista */}
        <ListRender />
        {/* 7 - Conditional Render */}
        <ConditionalRender />
        {/* 8 - Props */}
        <ShowUserName name="Matheus" />
        {/* 9 - Desustruturando props */}
        <CarDetails brand="VW" km={999} color="Vermelho" />
        {/* 10 - Reaproveitamento de componentes */}
        <CarDetails brand="Fiat" km={500} color="Preto" />
        <CarDetails brand="Civic" km={2000} color="Azul" />
        {/* 11 - Renderirzação de listas com componentes */}
        {cars.map((car) => (
          <CarDetails
            key={car.id}
            brand={car.brand}
            color={car.color}
            km={car.km}
          />
        ))}
        {/* 12 - Fragment */}
        <Fragment />
        {/* 13 - Children */}
        <Container>
          <p>Alguma coisa</p>
        </Container>
        <ExecuteFunction myFunction={showMessage} />
        {/* 15 - State Lift  */}
        < Message msg={message}/>
        <ChangeMessage handleMessage={handleMessage}/>
      </div>
    </>
  );
}

export default App;
