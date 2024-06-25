import styles from "./Projects.module.css";
import { projects } from "../../datas/Projects";
import Card from "./Card";
export default function Projects() {
  return (
    <div className={styles["container"]}>
      Projets
      <ul>Scolaires</ul>
      <div className={styles["row"]}>
        {projects.scolaire.map((project, index) => {
          return <Card key={index} project={project} />;
        })}
      </div>
      <ul>Personnels</ul>
      <div className={styles["row"]}>
        {projects.personnel.map((project, index) => {
          return <Card key={index} project={project} />;
        })}
      </div>
    </div>
  );
}
