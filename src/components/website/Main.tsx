import { useEffect } from "react";
import styles from "./Main.module.css";
import { colors } from "../../datas/ColorTheme";

import ERoutes from "./RouterConfig";
import NavBar from "./Header/NavBar";
import Homepage from "./Home/Homepage";
import Projects from "./Projects/Projects";
import Footer from "./Footer/Footer";
import Skills from "./Skills/Skills";
import Contact from "./Contact/Contact";

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
      <NavBar changeFocus={changeFocus} />
      <div className={styles.content}>
        <Homepage />
        <Skills />
        <Projects />
      </div>
      <Footer />
    </div>
  );
}
