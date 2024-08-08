import styles from "./Homepage.module.css";
import HeroSection from "./HeroSection/HeroSection";
import MainProject from "./MainProject";

export default function Homepage() {
  return (
    <div className={styles.homepage}>
      <HeroSection />
      <MainProject />
    </div>
  );
}
