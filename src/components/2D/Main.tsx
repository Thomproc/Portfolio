import { useEffect } from "react";
import styles from "./Main.module.css";
import { colors } from "../../datas/ColorTheme";

import { Routes2DRefs, ERoutes2D } from "../../RouterConfig";

import Homepage from "./Home/Homepage";
import Projects from "./Projects/Projects";
import Footer from "./Footer/Footer";
import Skills from "./Skills/Skills";

export default function Main() {
  useEffect(() => {
    Object.entries(colors).forEach(([key, value]) => {
      document.documentElement.style.setProperty(`--${key}`, value);
    });
  }, []); // Permet de rendre accessible les variables de couleurs du typeScript au sein des CSS

  return (
    <>
      <div className={styles.content}>
        <section ref={Routes2DRefs[ERoutes2D.HOME]}>
          <Homepage />
        </section>
        <section ref={Routes2DRefs[ERoutes2D.PROJECTS]}>
          <Projects />
        </section>
        <section ref={Routes2DRefs[ERoutes2D.SKILLS]}>
          <Skills />
        </section>
      </div>
      <section ref={Routes2DRefs[ERoutes2D.CONTACT]}>
        <Footer />
      </section>
    </>
  );
}
