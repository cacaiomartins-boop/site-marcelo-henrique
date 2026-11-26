import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

// Só na prévia (desenvolvimento): a cada edição recarrega a página inteira, para a tela de abertura
// tocar de novo. Sem isso, o Vite troca só o trecho editado e a abertura "some" depois de cada edição.
if (import.meta.hot) {
  import.meta.hot.on("vite:beforeUpdate", () => window.location.reload());
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
