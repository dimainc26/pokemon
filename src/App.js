import "./App.css";
import { HomePage } from "./views/HomePage";
import { AllPage } from "./views/AllPage";
import { NotFoundPage } from "./views/404";
import { Card } from "./components/Card";

import axios from "axios";
import { WarMode } from "./views/WarMode";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/war",
    element: <WarMode />,
  },
  {
    path: "/list",
    element: <AllPage />,
  },
]);

function App() {
  return (
    <div>
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
