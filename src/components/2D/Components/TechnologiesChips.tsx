import styles from "./TechnologiesChips.module.css";
import { Project } from "../../../models/Project";
import TechnologyToIcon from "../../../datas/Technologies";
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
      {project.technologies.map((techName, index) => {
        const TechIcon = TechnologyToIcon[techName];
        return (
          <div
            key={index}
            className={[styles.technology, onlyIcons && styles["icon"]].join(
              " ",
            )}
          >
            {TechIcon}
            {!onlyIcons && techName}
          </div>
        );
      })}
    </div>
  );
}
