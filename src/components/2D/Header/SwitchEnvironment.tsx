import styles from "./SwitchEnvironment.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { EMainsRoutes } from "../../../RouterConfig";
import {
  RocketLaunchOutlined,
  FolderSpecialOutlined,
} from "@mui/icons-material";

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
              <RocketLaunchOutlined />
            </div>
            Univers
          </>
        ) : (
          <>
            <div className={styles["slider-button-right"]}>
              <FolderSpecialOutlined />
            </div>
            Portfolio
          </>
        )}
      </div>
    </label>
  );
}
