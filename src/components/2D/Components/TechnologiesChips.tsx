import styles from "./TechnologiesChips.module.css";
import { Project } from "../../../models/Project";
import TechnologyToIcon from "../../../datas/Technologies";
import { Tooltip } from "@mui/material";
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
      {onlyIcons
        ? project.technologies.map((techName, index) => {
            const TechIcon = TechnologyToIcon[techName];
            return (
              <Tooltip key={index} title={techName}>
                <div
                  className={[
                    styles.technology,
                    onlyIcons && styles["icon"],
                  ].join(" ")}
                >
                  {TechIcon}
                </div>
              </Tooltip>
            );
          })
        : project.technologies.map((techName, index) => {
            const TechIcon = TechnologyToIcon[techName];
            return (
              <div key={index} className={styles.technology}>
                {TechIcon}
                {techName}
              </div>
            );
          })}
    </div>
  );
}
