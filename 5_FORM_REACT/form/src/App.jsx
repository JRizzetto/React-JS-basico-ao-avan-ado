import "./App.css";
import Myform from "./components/Myform";

function App() {
  return (
    <div className="App">
      <h1>Form em React</h1>
      <Myform userName="Jefferson" userEmail="jefferson.rizzetto@gmail.com" />
    </div>
  );
}

export default App;
