import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import Contact from "./routes/Contact.jsx";

// 1 - Configurando router
import { createBrowserRouter, RouterProvider, Route, Navigate } from "react-router-dom";

// 3 - Componente base
import HomeOne from "./routes/HomeOne.jsx";

// 2 - Página de erro
import ErrorPage from "./routes/ErrorPage.jsx";

// 7 - Rota dinâmica
import Product from "./routes/Product.jsx";

// 8 - Nested route
import InfoOne from "./routes/InfoOne.jsx";

// 9 - Search
import Search from "./routes/Search.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    // 3 - COmponente base
    children: [
      {
        path: "/",
        element: <HomeOne />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      // 7 Rota dinâmica
      {
        path: "products/:id",
        element: <Product />,
      },
      // 8 - Nested route
      {
        path: "/products/:id/info",
        element: <InfoOne />
      },
      // 9 - Search
      {
        path: "search",
        element: <Search />
      },
      // 10 - Redirect
      {
        path: "teste",
        element: <Navigate to="/"/>
      }
    ],
  },
  // {
  //   path: "contact",
  //   element: <Contact />,
  // },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
