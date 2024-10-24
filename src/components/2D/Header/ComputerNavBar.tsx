import { useLocation, useNavigate } from "react-router-dom";
import styles from "./ComputerNavBar.module.css";
import { Routes2DRefs, ERoutes2D, EMainsRoutes } from "../../../RouterConfig";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

export default function ComputerNavBar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <div
        className={styles.secondaryNavItem}
        onClick={(_event) => {
          if (location.pathname === EMainsRoutes.MAIN2D) {
            navigate(EMainsRoutes.MAIN3D);
            return;
          }
          navigate(EMainsRoutes.MAIN2D);
        }}
      >
        {location.pathname === EMainsRoutes.MAIN2D
          ? "Mon univers..."
          : "Mon environnement..."}
      </div>
      <div className={styles.mainNavItem}>
        {/* <div className={styles.progress} /> */}

        <div
          onClick={(_event) => {
            Routes2DRefs[ERoutes2D.HOME].current?.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
          }}
        >
          Accueil
        </div>
        <div
          onClick={(_event) => {
            Routes2DRefs[ERoutes2D.PROJECTS].current?.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
          }}
        >
          Projets
        </div>
        <div
          onClick={(_event) => {
            Routes2DRefs[ERoutes2D.SKILLS].current?.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
          }}
        >
          Compétences
        </div>
        <div
          onClick={(_event) => {
            Routes2DRefs[ERoutes2D.CONTACT].current?.scrollIntoView({
              behavior: "smooth",
              block: "end",
            });
          }}
        >
          Contact
        </div>
      </div>
      <div className={styles.secondaryNavItem}>
        <a href={"./CV.pdf"} download={"CV_Procureur_Thomas"}>
          CV
          <FileDownloadOutlinedIcon />
        </a>
      </div>
      {/* <TemporaryDrawer /> */}
    </>
  );
}
