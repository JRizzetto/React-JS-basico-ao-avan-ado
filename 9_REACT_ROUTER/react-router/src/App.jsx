import "./App.css";

import { Outlet } from "react-router-dom";

// 5 - Link entrer páginas
import Navbar from "./components/Navbar";
import SearchForm from "./components/SearchForm";

function App() {

  return (
    <div>
      <Navbar />
      <SearchForm />
      <Outlet />
      <p>Footer</p>
    </div>
  );
}

export default App;
