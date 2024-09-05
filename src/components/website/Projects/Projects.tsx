import { useState } from "react";
import styles from "./Projects.module.css";
import { projects } from "../../../datas/Projects";
import Card from "./Card";
import CardProject from "../Basics/CardProject";
import { Project } from "../../../models/Project";

export default function Projects() {
  const [modalProject, setModalProject] = useState<Project | null>(null);

  return (
    <>
      <h1>Projets</h1>
      <div className={styles["projects"]}>
        {Object.entries(projects).map(([category, projectsInCategory]) => {
          if (projectsInCategory.length === 0) {
            return;
          }
          return (
            <div key={category}>
              <h2>{category}</h2>
              <div className={styles["row"]}>
                {projectsInCategory.map((project, index) => {
                  return (
                    <Card
                      key={index}
                      project={project}
                      handleClick={setModalProject}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}

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
            <CardProject project={modalProject} />
          </div>
        ) : (
          <div className={styles["modal-off"]} />
        )}
      </div>
    </>
  );
}
