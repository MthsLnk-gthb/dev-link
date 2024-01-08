import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Tutoriais from './routes/Tutoriais/Tutoriais.jsx'
import Blog from "./routes/Blog/Blog.jsx";
import { ErrorPage } from "./routes/ErrorPage/ErrorPage.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import DetalhesTutoriais from "./routes/Tutoriais/DetalhesTutoriais.jsx";
import Home from "./routes/Home/Home.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/tutoriais",
        element: <Tutoriais />
      },
      {
        path: "/tutoriais/:id/",
        element: <DetalhesTutoriais/>
      },
      {
        path: "/blog",
        element: <Blog />,
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
