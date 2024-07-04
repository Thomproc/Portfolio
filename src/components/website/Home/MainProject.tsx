import { colors } from "../../../datas/ColorTheme";
import { projects } from "../../../datas/Projects";
import ActionButton from "../Basics/ActionButton";
import styles from "./MainProject.module.css";

const mainProject = projects.scolaire[0];
export default function MainProject() {
  return (
    <div className={styles["main-project"]}>
      <h1>Projet du moment</h1>
      <div className={styles.container}>
        <div className={styles.presentation}>
          <div>
            <h2>
              {mainProject.name} - {mainProject.technologies}
            </h2>
            {mainProject.description}
          </div>
          <div>
            &#128073; Lien vers le dépôt GitHub : {mainProject.github}
            <div className={styles.buttons}>
              <ActionButton
                text="En savoir plus"
                color={colors.secondary}
                textColor={colors.textColor}
                btnWidth="80%"
              />
              <ActionButton
                text="Voir mes projets"
                color={colors.primary}
                textColor={colors.background2D}
                btnWidth="80%"
              />
            </div>
          </div>
        </div>
        <img
          src={"./projects_images/" + mainProject.image}
          alt={mainProject.name}
        />
      </div>
    </div>
  );
}
