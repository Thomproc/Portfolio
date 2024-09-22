import { ETypes, Project } from "../../../models/Project";
import styles from "./Card.module.css";
import {
  ComputerOutlined,
  PhoneAndroidOutlined,
  ArrowRightOutlined,
} from "@mui/icons-material";

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
          <div className={styles["title"]}>
            <div>
              {project.type === ETypes.Web ? (
                <ComputerOutlined />
              ) : (
                <PhoneAndroidOutlined />
              )}
            </div>
            {project.name}
          </div>
          <div className={styles["technologies"]}>
            {project.technologies.map((tech, index) => (
              <div key={index}>{tech}</div>
            ))}
          </div>
        </div>
        <div className={styles["description"]}>
          {project.abstract}
          <div className={styles["web-buttons"]}>
            {/* {project.github && <button> Voir sur GitHub</button>} */}
            <button> Voir sur GitHub</button>
            {project.website && <button> Voir en ligne</button>}
          </div>
          <div className={styles["see-more"]}>
            <button>En savoir plus</button>
            <ArrowRightOutlined />
          </div>
        </div>
      </div>
    </div>
  );
}
