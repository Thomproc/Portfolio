import { useEffect } from "react";
import styles from "./Main.module.css";
import { colors } from "../../datas/ColorTheme";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ERoutes from "./RouterConfig";
import NavBar from "./Header/NavBar";
import Homepage from "./Home/Homepage";
import Projects from "./Projects/Projects";
import Footer from "./Footer/Footer";

export default function Main({
  changeFocus,
}: {
  changeFocus: (value: "computer" | "rubiksCube" | "desk") => boolean;
}) {
  useEffect(() => {
    Object.entries(colors).forEach(([key, value]) => {
      document.documentElement.style.setProperty(`--${key}`, value);
    });
  }, []); // Permet de rendre accessible les variables de couleurs du typeScript au sein des CSS

  return (
    <div className={styles.shadow}>
      <Router>
        <NavBar changeFocus={changeFocus} />
        <div className={styles.content}>
          <Routes>
            <Route path={ERoutes.HOME} element={<Homepage />} />
            <Route
              path={ERoutes.SKILLS}
              element={<div>NOTHING YET ! ;)</div>}
            />
            <Route path={ERoutes.PROJECTS} element={<Projects />} />
            <Route
              path={ERoutes.CONTACT}
              element={<div>NOTHING YET ! ;)</div>}
            />
          </Routes>
        </div>
      </Router>
      <Footer />
    </div>
  );
}
