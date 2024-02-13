import React from "react";
import ReactDOM from "react-dom/client";

import Tutoriais from './routes/Tutoriais/Tutoriais.jsx'
import { ErrorPage } from "./routes/ErrorPage/ErrorPage.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import DetalhesTutoriais from "./routes/Tutoriais/DetalhesTutoriais.jsx";
import Home from "./routes/Home/Home.jsx";
import Favoritos from "./routes/Favoritos/Favoritos.jsx";
import { FavoritosProvider } from './Context/FavoritosContext';
import SobreMim from "./routes/SobreMim/SobreMim.jsx";



const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <FavoritosProvider>
        <App />
      </FavoritosProvider>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/dev-link/",
        element: <Home />,
      },
      {
        path: "*",
        element: <Home />,
      },
      {
        path: "/dev-link/tutoriais",
        element: <Tutoriais />,
      },
      {
        path: "/dev-link/favoritos",
        element: <Favoritos />,
      },
      {
        path: "/dev-link/tutoriais/:id/",
        element: <DetalhesTutoriais />,
      },
      {
        path: "/dev-link/sobremim",
        element: <SobreMim />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>
);
