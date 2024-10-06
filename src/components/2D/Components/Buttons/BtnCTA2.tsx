import styles from "./Buttons.module.css";
export default function BtnCTA2({ text }: { text: string }) {
  return <button className={styles["cta2"]}>{text}</button>;
}
