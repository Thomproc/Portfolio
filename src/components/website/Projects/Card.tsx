import { Project } from "../../../models/Project";
import styles from "./Card.module.css";

export default function Card({
  project,
  handleClick,
}: {
  project: Project;
  handleClick: (value: String | null) => void;
}) {
  return (
    <div
      className={styles["grid-item"]}
      onClick={() => handleClick(project.name)}
    >
      <img src={"Projects_images/" + project.image} alt={project.image} />
      <div className={styles["grid-item-text"]}>{project.name}</div>
    </div>
  );
}
