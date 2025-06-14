import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { MainProvider } from "./context/MainContext.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import Particle from "./components/Particle.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <MainProvider>
        <Particle />
        <App />
      </MainProvider>
    </ThemeProvider>
  </StrictMode>
);
