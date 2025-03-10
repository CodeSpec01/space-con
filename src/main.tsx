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
import Privacy from "./components/Privacy.tsx";
import NotFound from "./components/NotFound.tsx";
import EventsPage from "./components/EventsPage.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<App />} />
        <Route path="privacy-policy" element={<Privacy />} />
        <Route path="events" element={<EventsPage />} />
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
