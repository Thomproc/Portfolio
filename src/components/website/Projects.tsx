import style from "./Projects.module.css";
import { projects } from "../../datas/Projects";
import Card from "./Card";
export default function Projects() {
  return (
    <>
      Projets
      <ul>Scolaires</ul>
      <div className={style["grid"]}>
        {projects.scolaire.map((project, index) => {
          return <Card key={index} project={project} />;
        })}
      </div>
      <ul>Personnels</ul>
      <div className={style["grid"]}>
        {projects.personnel.map((project, index) => {
          return <Card key={index} project={project} />;
        })}
      </div>
    </>
  );
}
