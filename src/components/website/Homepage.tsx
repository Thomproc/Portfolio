import { useEffect } from "react";
import { cssColors } from "../../datas/ColorTheme";
import styles from "./Homepage.module.css";
import Projects from "./Projects";
import NavBar from "./NavBar";
import HeroSection from "./HeroSection/HeroSection";

export default function Homepage() {
  useEffect(() => {
    Object.entries(cssColors).forEach(([key, value]) => {
      document.documentElement.style.setProperty(`--${key}`, value);
    });
  }, []); // Permet de rendre accessible les variables de couleurs du typeScript au sein des CSS

  return (
    <div className={styles.homepage}>
      {/* <NavBar /> */}
      <HeroSection />
      {/* <Projects /> */}
    </div>
  );
}
