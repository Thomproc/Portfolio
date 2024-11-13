import { Project } from "../../../models/Project";
import styles from "./Card.module.css";
import buttonStyles from "../Components/Buttons/Buttons.module.css";
import { ArrowRightOutlined } from "@mui/icons-material";
import TechnologiesChips from "../Components/TechnologiesChips";

export default function Card({
  project,
  handleClick,
}: {
  project: Project;
  handleClick: (value: Project | null) => void;
}) {
  return (
    <div className={styles["project"]} onClick={() => handleClick(project)}>
      <img
        src={project.mainImagePath}
        alt={project.mainImagePath.split("/").pop()}
      />
      <div className={styles["foreground"]}>
        <div className={styles.header}>
          <h3>{project.name}</h3>
          <TechnologiesChips project={project} onlyIcons />
        </div>
        <span className={styles["description"] + " paragraph"}>
          {project.abstract}
          <div className={styles["web-buttons"]}>
            {project.github && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(project.github, "_blank");
                }}
              >
                Voir sur GitHub
              </button>
            )}

            {project.website && (
              <div className={buttonStyles["cta2"]}>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(project.website, "_blank");
                  }}
                >
                  Voir en ligne
                </button>
              </div>
            )}
          </div>
          <div className={styles["see-more"] + " label"}>
            <i>En savoir plus</i>
            <ArrowRightOutlined />
          </div>
        </span>
      </div>
    </div>
  );
}
