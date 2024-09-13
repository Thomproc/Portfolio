import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main2D from "./components/2D/Main.tsx";
import Main3D from "./components/3D/Main.tsx";
import { EMainsRoutes } from "./RouterConfig.ts";
import NavBar from "./components/2D/Header/NavBar.tsx";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path={EMainsRoutes.MAIN2D} element={<Main2D />} />
        <Route path={EMainsRoutes.MAIN3D} element={<Main3D />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
