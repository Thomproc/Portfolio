import { Project } from "../../../models/Project";
import styles from "./Card.module.css";
import { ArrowRightOutlined } from "@mui/icons-material";
import Header from "./Header";

export default function Card({
  project,
  handleClick,
}: {
  project: Project;
  handleClick: (value: Project | null) => void;
}) {
  return (
    <div className={styles["project"]} onClick={() => handleClick(project)}>
      <img src={"./Images/Projects/" + project.image} alt={project.image} />
      <div className={styles["foreground"]}>
        <Header project={project} />
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
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(project.website, "_blank");
                }}
              >
                Voir en ligne
              </button>
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
