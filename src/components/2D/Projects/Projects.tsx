import { useState } from "react";
import styles from "./Projects.module.css";
import { projects } from "../../../datas/Projects";
import Card from "./Card";
import CardProject from "../Basics/CardProject";
import { Project } from "../../../models/Project";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
                      handleClick={setSelectedProject}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}

        <CardProject project={selectedProject || projects.Personnel[0]} />
      </div>
    </>
  );
}
