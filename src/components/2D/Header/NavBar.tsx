import { useLocation, useNavigate } from "react-router-dom";
import styles from "./NavBar.module.css";
import { Routes2DRefs, ERoutes2D, EMainsRoutes } from "../../../RouterConfig";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

export default function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className={styles.container}>
      <div
        className={styles.navItem}
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
      <div className={styles.navBar}>
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
      <a
        href={"./CV.pdf"}
        download={"CV_Procureur_Thomas"}
        className={styles.navItem}
      >
        CV
        <FileDownloadOutlinedIcon />
      </a>
    </div>
  );
}
