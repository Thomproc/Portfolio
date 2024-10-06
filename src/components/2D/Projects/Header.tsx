import styles from "./Header.module.css";
import { ETypes, Project } from "../../../models/Project";
import { ComputerOutlined, PhoneAndroidOutlined } from "@mui/icons-material";
import TechnologiesChips from "../Components/TechnologiesChips";
export default function Header({ project }: { project: Project }) {
  return (
    <div className={styles["header"]}>
      <div className={styles["title"]}>
        {project.type === ETypes.Web ? (
          <ComputerOutlined />
        ) : (
          <PhoneAndroidOutlined />
        )}
        <h3>{project.name}</h3>
      </div>
      <TechnologiesChips project={project} />
    </div>
  );
}
