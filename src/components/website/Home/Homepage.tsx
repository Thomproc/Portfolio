import { useEffect } from "react";
import styles from "./Homepage.module.css";
import { colors } from "../../../datas/ColorTheme";
import HeroSection from "./HeroSection/HeroSection";
import MainProject from "./MainProject";

export default function Homepage() {
  useEffect(() => {
    Object.entries(colors).forEach(([key, value]) => {
      document.documentElement.style.setProperty(`--${key}`, value);
    });
  }, []); // Permet de rendre accessible les variables de couleurs du typeScript au sein des CSS

  return (
    <div className={styles.homepage}>
      <HeroSection />
      <MainProject />
    </div>
  );
}
