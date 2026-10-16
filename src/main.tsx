import "./index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";

import App from "./App.tsx";
import { WebFooter, WebHeader } from "./components";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <WebHeader />
      <App />
      <WebFooter />
    </BrowserRouter>
  </StrictMode>,
);
