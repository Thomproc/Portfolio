import styles from "./HeroSection.module.css";
import Introduction from "./Introduction";
import Space from "./Space";

export default function HeroSection() {
  return (
    <div className={styles["hero-section"]}>
      <Introduction />
      <Space />
    </div>
  );
}
