import styles from "./Buttons.module.css";
export default function BtnCTA({ text }: { text: string }) {
  return <button className={styles["cta"]}>{text}</button>;
}
