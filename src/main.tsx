import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./assets/scss/main.scss";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Main from "./pages/logements/Main";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/a-propos",
        element: <About />,
    },
    {
        path: "/logement/:id",
        element: <Main />,
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
