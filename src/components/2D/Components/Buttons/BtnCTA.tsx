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
} & (
  | {
      targetLink: string | never;
      targetRoute?: ERoutes2D | never;
    }
  | {
      targetLink?: never;
      targetRoute?: ERoutes2D;
    }
)) {
  return (
    <div className={secondaryStyle ? styles["cta2"] : ""}>
      <button
        className={!secondaryStyle ? styles["cta"] : ""}
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
    </div>
  );
}
