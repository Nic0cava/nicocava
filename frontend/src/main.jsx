import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// Instead of mounting to #root, we mount to the Jinja-injected element
const rootElement = document.getElementById("react-root");

// Optional: read Jinja values injected into data attributes
const username = rootElement?.dataset?.username;

createRoot(rootElement).render(
  <StrictMode>
    <App username={username} />
  </StrictMode>
);
