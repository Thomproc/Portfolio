import styles from "./ActionButton.module.css";
import { ERoutes2D, Routes2DRefs } from "../../../RouterConfig";

export default function ActionButton({
  text,
  color,
  textColor,
  btnWidth,
  targetRoute,
  targetLink,
}: {
  text: string;
  color: string;
  textColor: string;
  btnWidth: String;
  targetRoute?: ERoutes2D;
  targetLink?: string;
} & (
  | { targetRoute: ERoutes2D; targetLink?: never }
  | { targetLink: string; targetRoute?: never }
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
        if (targetRoute) {
          Routes2DRefs[targetRoute].current?.scrollIntoView({
            behavior: "smooth",
          });
        } else if (targetLink) {
          window.open(targetLink, "_blank");
        }
      }}
    />
  );
}
