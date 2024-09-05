import styles from "./NavBar.module.css";
import { ERoutes } from "../../../components/website/RouterConfig";

export default function NavBar({
  changeFocus,
  refs,
}: {
  changeFocus: (value: "computer" | "rubiksCube" | "desk") => boolean;
  refs: {
    [key in ERoutes]: React.RefObject<HTMLDivElement>;
  };
}) {
  return (
    <div className={styles.center}>
      <div className={styles.navContainer}>
        <div
          className={styles.navItem}
          onClick={(_event) => changeFocus("desk")}
        >
          Mon univers...
        </div>
        <div className={styles.navBar}>
          <div
            className={
              // Mise en valeur de l'item en orange selon le pourcentage de scrollage
              location.pathname === ERoutes.HOME
                ? "text-primary"
                : styles.navItem
            }
            onClick={(_event) => {
              refs[ERoutes.HOME].current?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Accueil
          </div>
          <div
            className={
              // Mise en valeur de l'item en orange selon le pourcentage de scrollage
              location.pathname === ERoutes.SKILLS
                ? "text-primary"
                : styles.navItem
            }
            onClick={(_event) => {
              refs[ERoutes.SKILLS].current?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Compétences
          </div>
          <div
            className={
              // Mise en valeur de l'item en orange selon le pourcentage de scrollage
              location.pathname === ERoutes.PROJECTS
                ? "text-primary"
                : styles.navItem
            }
            onClick={(_event) => {
              refs[ERoutes.PROJECTS].current?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Projets
          </div>
          <div
            className={
              // Mise en valeur de l'item en orange selon le pourcentage de scrollage
              location.pathname === ERoutes.CONTACT
                ? "text-primary"
                : styles.navItem
            }
            onClick={(_event) => {
              refs[ERoutes.CONTACT].current?.scrollIntoView({
                behavior: "smooth",
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
          <img src="./Icons/download.svg" alt="download SVG" />
        </a>
      </div>
    </div>
  );
}
