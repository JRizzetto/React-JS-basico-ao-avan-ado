import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import HomeOne from "./routes/HomeOne.jsx";
import Contact from "./routes/Contact.jsx";

// 2 - Criando provider
import { CounterContexProvider } from "./context/CounterContext.jsx";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Navigate,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomeOne />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CounterContexProvider>
      <RouterProvider router={router} />
    </CounterContexProvider>
  </StrictMode>
);
