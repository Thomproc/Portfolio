import styles from "./TechnologiesChips.module.css";
import { Project } from "../../../models/Project";
export default function TechnologiesChips({
  project,
  wrap,
}: {
  project: Project;
  wrap?: boolean;
}) {
  return (
    <div
      className={[
        wrap && styles["technologies-wrap"],
        styles["technologies"],
        "label",
      ].join(" ")}
    >
      {project.technologies.map((tech, index) => (
        <div key={index}>{tech}</div>
      ))}
    </div>
  );
}
