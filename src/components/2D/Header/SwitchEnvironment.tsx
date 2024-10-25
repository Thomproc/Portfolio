import styles from "./SwitchEnvironment.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { EMainsRoutes } from "../../../RouterConfig";
import { ArrowForward } from "@mui/icons-material";

export default function SwitchEnvironment() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <label className={styles.switch}>
      <input
        type="checkbox"
        onClick={(_event) => {
          if (location.pathname === EMainsRoutes.MAIN2D) {
            navigate(EMainsRoutes.MAIN3D);
            return;
          }
          navigate(EMainsRoutes.MAIN2D);
        }}
      />
      <div className={styles["slider"]}>
        {location.pathname === EMainsRoutes.MAIN2D ? (
          <>
            <div className={styles["slider-button-left"]}>
              <ArrowForward />
            </div>
            Univers
          </>
        ) : (
          <>
            <div className={styles["slider-button-right"]}>
              <ArrowForward />
            </div>
            Portfolio
          </>
        )}
      </div>
    </label>
  );
}
