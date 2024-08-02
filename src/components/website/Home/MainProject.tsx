import { projects } from "../../../datas/Projects";
import CardProject from "../Basics/CardProject";
import styles from "./MainProject.module.css";

export default function MainProject() {
  return (
    <div className={styles["main-project"]}>
      <h1>Projet du moment</h1>
      <CardProject mainProject={projects.scolaire[0]} />
    </div>
  );
}
