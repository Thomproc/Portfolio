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
      <img src={"Projects_images/" + project.image} alt={project.image} />
      <div className={styles["project-name"]}>{project.name}</div>
    </div>
  );
}
