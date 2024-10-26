import styles from "./TechnologiesChips.module.css";
import { Project } from "../../../models/Project";
export default function TechnologiesChips({
  project,
  wrap,
  onlyIcons,
}: {
  project: Project;
  wrap?: boolean;
  onlyIcons?: boolean;
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
        <div key={index} className={styles.technology}>
          <tech.icon size={30} />
          {!onlyIcons && tech.name}
        </div>
      ))}
    </div>
  );
}
