import styles from "./HeroSection.module.css";
import Background from "./Background";
import Introduction from "./Introduction";
import Space from "./Space";

export default function HeroSection() {
  return (
    <div className={styles["hero-section"]}>
      <Background />
      <Introduction />
      <Space />
    </div>
  );
}
