import { useState } from "react";
import styles from "./Projects.module.css";
import { projects } from "../../../datas/Projects";
import Card from "./Card";
import CardProject from "../Basics/CardProject";

export default function Projects() {
  const [open, setOpen] = useState<String | null>(null);

  return (
    <div className={styles["container"]}>
      {/* <ul>Professionnel</ul>
      <div className={styles["row"]}>
        {projects.professionnel.map((project, index) => {
          return <Card key={index} project={project} />;
        })}
      </div> */}

      <ul>Scolaires</ul>
      <div className={styles["row"]}>
        {projects.scolaire.map((project, index) => {
          return <Card key={index} project={project} handleClick={setOpen} />;
        })}
      </div>
      <ul>Personnels</ul>
      <div className={styles["row"]}>
        {projects.personnel.map((project, index) => {
          return <Card key={index} project={project} handleClick={setOpen} />;
        })}
      </div>

      <div className={open ? styles["modal-on"] : styles["modal-off"]}>
        <CardProject mainProject={projects.scolaire[0]} />
      </div>
    </div>
  );
}
