import styles from "./Buttons.module.css";
import ERoutes2D, { Routes2DRefs } from "../../../../RouterConfig";

export default function BtnCTA({
  secondaryStyle,
  text,
  targetRoute,
  targetLink,
}: {
  secondaryStyle?: boolean;
  text: string;
  targetRoute?: ERoutes2D;
  targetLink?: string;
}) {
  return (
    <button
      className={secondaryStyle ? styles["cta2"] : styles["cta"]}
      onClick={() => {
        if (targetRoute) {
          Routes2DRefs[targetRoute].current?.scrollIntoView({
            behavior: "smooth",
          });
        } else if (targetLink) {
          window.open(targetLink, "_blank");
        }
      }}
    >
      {text}
    </button>
  );
}
