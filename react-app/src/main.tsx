import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Portfolio from "./pages/PortofolioPage.js";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <Portfolio />
  </StrictMode>
);
