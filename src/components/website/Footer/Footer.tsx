import Contact from "../Contact/Contact";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.container}>
      <Contact />
      Footer, réseaux sociaux, mail, etc...
    </div>
  );
}
