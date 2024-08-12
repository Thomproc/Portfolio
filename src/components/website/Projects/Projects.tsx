import { useState } from "react";
import styles from "./Projects.module.css";
import { projects } from "../../../datas/Projects";
import Card from "./Card";
import CardProject from "../Basics/CardProject";
import { Project } from "../../../models/Project";

export default function Projects() {
  const [modalProject, setModalProject] = useState<Project | null>(null);

  return (
    <div className={styles["projects"]}>
      {/* <ul>Professionnel</ul>
      <div className={styles["row"]}>
        {projects.professionnel.map((project, index) => {
          return <Card key={index} project={project} />;
        })}
      </div> */}

      <h1>Scolaires</h1>
      <div className={styles["row"]}>
        {projects.scolaire.map((project, index) => {
          return (
            <Card key={index} project={project} handleClick={setModalProject} />
          );
        })}
      </div>
      <h1>Personnels</h1>
      <div className={styles["row"]}>
        {projects.personnel.map((project, index) => {
          return (
            <Card key={index} project={project} handleClick={setModalProject} />
          );
        })}
      </div>

      <div
        className={
          modalProject
            ? styles["modal-on-background"]
            : styles["modal-off-background"]
        }
        onClick={() => setModalProject(null)}
      />

      {modalProject ? (
        <div className={styles["modal-on"]}>
          <CardProject mainProject={modalProject} />
        </div>
      ) : (
        <div className={styles["modal-off"]} />
      )}
    </div>
  );
}
