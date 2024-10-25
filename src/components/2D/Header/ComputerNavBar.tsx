import { useLocation, useNavigate } from "react-router-dom";
import styles from "./ComputerNavBar.module.css";
import { Routes2DRefs, ERoutes2D, EMainsRoutes } from "../../../RouterConfig";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

export default function ComputerNavBar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <div className={styles.switch}>
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
            {/* <span> */}
            {location.pathname === EMainsRoutes.MAIN2D
              ? "Univers"
              : "Portfolio"}
            {/* </span> */}
          </div>
        </label>
      </div>
      <div className={styles.mainNavItem}>
        {/* <div className={styles.progress} /> */}
        {(Object.values(ERoutes2D) as Array<ERoutes2D>).map((value, index) => (
          <div
            key={index}
            onClick={(_event) => {
              Routes2DRefs[value].current?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
          >
            {value}
          </div>
        ))}
      </div>
      {/* <div
        className={styles.secondaryNavItem}
        onClick={(_event) => window.open("./CV.pdf", "_blank")}
      > */}
      <div className={styles.cv}>
        CV
        <FileDownloadOutlinedIcon />
      </div>
      {/* </div> */}
    </>
  );
}
