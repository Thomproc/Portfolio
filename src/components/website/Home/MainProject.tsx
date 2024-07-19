import { colors } from "../../../datas/ColorTheme";
import { projects } from "../../../datas/Projects";
import ActionButton from "../Basics/ActionButton";
import styles from "./MainProject.module.css";

const mainProject = projects.scolaire[0];

export default function MainProject() {
  return (
    <div className={styles["main-project"]}>
      <h1>Projet du moment</h1>
      <div className={styles["name_and_technologies"]}>
        <h2>{mainProject.name} </h2>
        <div className={styles["technologies"]}>
          {mainProject.technologies.map((tech, index) => (
            <img src={"./Logos/" + tech} alt={tech} key={index} />
          ))}
        </div>
      </div>
      {/* <i>
        <u>{mainProject.date.toDateString()}</u>
      </i> */}
      <div className={styles["presentation_and_image"]}>
        <div className={styles.presentation}>
          {mainProject.description}
          <div>
            &#128073; Lien vers le dépôt GitHub :{" "}
            <a href={mainProject.github} target="_blank">
              {mainProject.github}
            </a>
            <div className={styles.buttons}>
              <ActionButton
                text="Voir en ligne"
                color={colors.secondary}
                textColor={colors.textColor}
                btnWidth="35%"
              />
              <ActionButton
                text="Voir mes projets"
                color={colors.primary}
                textColor={colors.background2D}
                btnWidth="35%"
              />
            </div>
          </div>
        </div>
        <div className={styles["image-container"]}>
          <img
            src={"./Projects_images/" + mainProject.image}
            alt={mainProject.name}
          />
        </div>
      </div>
    </div>
  );
}
