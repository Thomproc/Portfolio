import { useEffect, useRef } from "react";
import styles from "./Main.module.css";
import { colors } from "../../datas/ColorTheme";

import ERoutes from "./RouterConfig";
import NavBar from "./Header/NavBar";
import Homepage from "./Home/Homepage";
import Projects from "./Projects/Projects";
import Footer from "./Footer/Footer";
import Skills from "./Skills/Skills";

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

  const homePageRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  return (
    <div className={styles.shadow}>
      <NavBar
        changeFocus={changeFocus}
        refs={{
          [ERoutes.HOME]: homePageRef,
          [ERoutes.SKILLS]: skillsRef,
          [ERoutes.PROJECTS]: projectsRef,
          [ERoutes.CONTACT]: contactRef,
        }}
      />
      <div className={styles.content}>
        <div id={ERoutes.HOME} ref={homePageRef}>
          <Homepage />
        </div>
        <div id={ERoutes.PROJECTS} ref={projectsRef}>
          <Projects />
        </div>
        <div id={ERoutes.SKILLS} ref={skillsRef}>
          <Skills />
        </div>
      </div>
      <div id={ERoutes.CONTACT} ref={contactRef}>
        <Footer />
      </div>
    </div>
  );
}
