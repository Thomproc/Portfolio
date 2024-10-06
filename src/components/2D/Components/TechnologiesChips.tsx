import styles from "./TechnologiesChips.module.css";
import { Project } from "../../../models/Project";
export default function TechnologiesChips({ project }: { project: Project }) {
  return (
    <div className={styles["technologies"] + " label"}>
      {project.technologies.map((tech, index) => (
        <div key={index}>{tech}</div>
      ))}
    </div>
  );
}
