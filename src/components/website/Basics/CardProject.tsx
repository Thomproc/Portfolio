import ERoutes from "../RouterConfig";
import { Project } from "../../../models/Project";
import ActionButton from "./ActionButton";
import { colors } from "../../../datas/ColorTheme";
import styles from "./CardProject.module.css";

export default function CardProject({ mainProject }: { mainProject: Project }) {
  return (
    <div className={styles["card"]}>
      <div className={styles["foreground-style"]}>
        <div className={styles["top-section"]}>
          <div className={styles["title"]}>
            <div className={styles["folder-effect"]} />
            <h2>{mainProject.name} </h2>
          </div>

          <div className={styles["technologies"]}>
            {mainProject.technologies.map((tech, index) => (
              <img src={"./Logos/" + tech} alt={tech} key={index} />
            ))}
          </div>
        </div>

        <div className={styles["presentation_and_image"]}>
          <div className={styles["presentation"]}>
            {mainProject.description}
            <div>
              &#128073; Lien vers le dépôt GitHub :{" "}
              <a href={mainProject.github} target="_blank">
                {mainProject.github}
              </a>
              <div className={styles["buttons"]}>
                <ActionButton
                  text="Voir en ligne"
                  color={colors.secondary}
                  textColor={colors.textColor}
                  btnWidth="35%"
                  target={ERoutes.PROJECTS}
                />
                <ActionButton
                  text="Voir mes projets"
                  color={colors.primary}
                  textColor={colors.background2D}
                  btnWidth="35%"
                  target={ERoutes.PROJECTS}
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
    </div>
  );
}
