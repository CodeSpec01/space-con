import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout.tsx";
import Admin from "./components/Admin.tsx";
import Privacy from "./components/Privacy.tsx";
import NotFound from "./components/NotFound.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<App />} />
        <Route path="space-con-secret-admin-panel" element={<Admin />} />
        <Route path="privacy-policy" element={<Privacy />} />
      </Route>
      <Route path="/*" element={<NotFound />} />
    </>
  )
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
