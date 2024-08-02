import { useNavigate } from "react-router-dom";
import styles from "./ActionButton.module.css";
import ERoutes from "../RouterConfig";

export default function ActionButton({
  text,
  color,
  textColor,
  btnWidth,
  target,
}: {
  text: string;
  color: string;
  textColor: string;
  btnWidth: String;
  target: ERoutes;
}) {
  const navigate = useNavigate();

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
      className={styles["my-button"]}
      onClick={() => navigate(target)}
    />
  );
}
