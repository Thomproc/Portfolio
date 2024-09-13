import { useNavigate } from "react-router-dom";
import styles from "./NavBar.module.css";
import { Routes2DRefs, ERoutes2D, EMainsRoutes } from "../../../RouterConfig";
import { useState } from "react";

enum EEnvironnement {
  SITE = "SITE",
  WORLD = "WORLD",
}
export default function NavBar() {
  const navigate = useNavigate();
  const [environnement, setEnvironnement] = useState<EEnvironnement>(
    EEnvironnement.SITE
  );
  return (
    <div className={styles.center}>
      <div className={styles.navContainer}>
        <div
          className={styles.navItem}
          onClick={(_event) => {
            if (environnement === EEnvironnement.SITE) {
              setEnvironnement(EEnvironnement.WORLD);
              navigate(EMainsRoutes.MAIN3D);
              return;
            }
            setEnvironnement(EEnvironnement.SITE);
            navigate(EMainsRoutes.MAIN2D);
          }}
        >
          {environnement === EEnvironnement.SITE
            ? "Mon univers..."
            : "Mon environnement..."}
        </div>
        <div className={styles.navBar}>
          <div
            // className={
            // Mise en valeur de l'item en orange selon le pourcentage de scrollage
            // location.pathname === ERoutes2D.HOME
            //   ? "text-primary"
            //   : styles.navItem
            // }
            onClick={(_event) => {
              Routes2DRefs[ERoutes2D.HOME].current?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Accueil
          </div>
          <div
            // className={
            // Mise en valeur de l'item en orange selon le pourcentage de scrollage
            // location.pathname === ERoutes2D.PROJECTS
            //   ? "text-primary"
            //   : styles.navItem
            // }
            onClick={(_event) => {
              Routes2DRefs[ERoutes2D.PROJECTS].current?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Projets
          </div>
          <div
            // className={
            // Mise en valeur de l'item en orange selon le pourcentage de scrollage
            // location.pathname === ERoutes2D.SKILLS
            //   ? "text-primary"
            //   : styles.navItem
            // }
            onClick={(_event) => {
              Routes2DRefs[ERoutes2D.SKILLS].current?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Compétences
          </div>
          <div
            // className={
            // Mise en valeur de l'item en orange selon le pourcentage de scrollage
            // location.pathname === ERoutes2D.CONTACT
            //   ? "text-primary"
            //   : styles.navItem
            // }
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
          <img src="./Icons/download.svg" alt="download SVG" />
        </a>
      </div>
    </div>
  );
}
