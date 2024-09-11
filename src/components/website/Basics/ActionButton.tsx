import styles from "./ActionButton.module.css";
import ERoutes from "../RouterConfig";

export default function ActionButton({
  text,
  color,
  textColor,
  btnWidth,
  targetTab,
  targetLink,
}: {
  text: string;
  color: string;
  textColor: string;
  btnWidth: String;
  targetTab?: ERoutes;
  targetLink?: string;
} & (
  | { targetTab: ERoutes; targetLink?: never }
  | { targetLink: string; targetTab?: never }
)) {
  return (
    <button
      data-text={text}
      style={
        {
          "--textColor": textColor,
          "--color": color,
          "--width": btnWidth,
        } as any
      }
      className={styles["action-button"]}
      onClick={() => {
        if (targetTab) {
          const element = document.getElementById(targetTab);
          element?.scrollIntoView({ behavior: "smooth" });
        } else if (targetLink) {
          window.open(targetLink, "_blank");
        }
      }}
    />
  );
}
