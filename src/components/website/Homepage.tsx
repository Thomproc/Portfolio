import { useEffect } from "react";
import { colors } from "../../datas/ColorTheme";
import styles from "./Homepage.module.css";
import Projects from "./Projects";
import HeroSection from "./HeroSection/HeroSection";

export default function Homepage() {
  useEffect(() => {
    Object.entries(colors).forEach(([key, value]) => {
      document.documentElement.style.setProperty(`--${key}`, value);
    });
  }, []); // Permet de rendre accessible les variables de couleurs du typeScript au sein des CSS

  return (
    <div className={styles.homepage}>
      <HeroSection />
      {/* <Projects /> */}
    </div>
  );
}
