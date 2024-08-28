import styles from "./NavBar.module.css";
import { ERoutes } from "../../../components/website/RouterConfig";
import { useLocation, useNavigate } from "react-router-dom";

export default function NavBar({
  changeFocus,
}: {
  changeFocus: (value: "computer" | "rubiksCube" | "desk") => boolean;
}) {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className={styles.center}>
      <div className={styles.navContainer}>
        <div
          className={styles.navItem}
          onClick={(_event) => changeFocus("desk")}
        >
          MOI
        </div>
        <div className={styles.navBar}>
          <div
            className={
              location.pathname === ERoutes.HOME
                ? "text-primary"
                : styles.navItem
            }
            onClick={(_event) => {
              navigate(ERoutes.HOME);
            }}
          >
            Accueil
          </div>
          <div
            className={
              location.pathname === ERoutes.SKILLS
                ? "text-primary"
                : styles.navItem
            }
            onClick={(_event) => {
              navigate(ERoutes.SKILLS);
            }}
          >
            Compétences
          </div>
          <div
            className={
              location.pathname === ERoutes.PROJECTS
                ? "text-primary"
                : styles.navItem
            }
            onClick={(_event) => {
              navigate(ERoutes.PROJECTS);
            }}
          >
            Projets
          </div>
          <div
            className={
              location.pathname === ERoutes.CONTACT
                ? "text-primary"
                : styles.navItem
            }
            onClick={(_event) => {
              navigate(ERoutes.CONTACT);
            }}
          >
            Contact
          </div>
        </div>
        <div className={styles.navItem}>
          <a href={"./Hero_images/photo.jpeg"} download={"CV_Procureur_Thomas"}>
            CV
          </a>
        </div>
      </div>
    </div>
  );
}
