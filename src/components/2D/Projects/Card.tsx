import { Project } from "../../../models/Project";
import styles from "./Card.module.css";

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
        <div className={styles["header"]}>
          <div className={styles["title"]}>{project.name}</div>
          <div className={styles["technologies"]}>
            {project.technologies.map((tech, index) => (
              <div key={index}>{tech.split(".")[0]}</div>
            ))}
          </div>
        </div>
        <div className={styles["description"]}>{project.description}</div>
      </div>
    </div>
  );
}
