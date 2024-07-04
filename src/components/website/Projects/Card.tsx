import { Project } from "../../../models/Project";
import styles from "./Card.module.css";

export default function Card({ project }: { project: Project }) {
  return (
    <div className={styles["grid-item"]}>
      <img src={"projects_images/" + project.image} alt={project.image} />
      <div className={styles["grid-item-text"]}>{project.name}</div>
    </div>
  );
}
