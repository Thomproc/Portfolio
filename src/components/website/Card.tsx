import { Project } from "../../models/Project";
import style from "./Card.module.css";

export default function Card({ project }: { project: Project }) {
  return (
    <div className={style["grid-item"]}>
      <img src={"projects_images/" + project.image} alt={project.image} />
      <div className={style["grid-item-text"]}>{project.name}</div>
    </div>
  );
}
