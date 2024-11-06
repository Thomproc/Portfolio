import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { EMainsRoutes } from "./RouterConfig.ts";
import { useEffect } from "react";
import colors from "./Themes/ColorTheme.ts";
import theme from "./Themes/MUITheme.ts";
import { CircularProgress, ThemeProvider } from "@mui/material";
import NavBar from "./components/2D/Header/NavBar.tsx";
import Main2D from "./components/2D/Main.tsx";
import Main3D from "./components/3D/Main.tsx";

function App() {
  useEffect(() => {
    Object.entries(colors).forEach(([key, value]) => {
      document.documentElement.style.setProperty(`--${key}`, value);
    });
  }, []); // Permet de rendre accessible les variables de couleurs du typeScript au sein des CSS

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <NavBar />
        <Routes>
          <Route
            path={EMainsRoutes.MAIN2D}
            element={
              <React.Suspense
                fallback={
                  <div className={"loader"}>
                    <CircularProgress color="inherit" />
                  </div>
                }
              >
                <Main2D />
              </React.Suspense>
            }
          />
          <Route
            path={EMainsRoutes.MAIN3D}
            element={
              <React.Suspense
                fallback={
                  <div className={"loader"}>
                    <CircularProgress color="inherit" />
                  </div>
                }
              >
                <Main3D />
              </React.Suspense>
            }
          />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
