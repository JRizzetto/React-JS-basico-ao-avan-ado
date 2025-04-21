import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import Contact from "./routes/Contact.jsx";

// 1 - Configurando router
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

// 2 - Página de erro
import ErrorPage from "./routes/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
