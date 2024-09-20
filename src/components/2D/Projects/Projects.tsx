import { useState } from "react";
import { projects } from "../../../datas/Projects";
import { ECategories, Project } from "../../../models/Project";
import Card from "./Card";
import styles from "./Projects.module.css";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<ECategories | null>(
    null
  );
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className={styles.container}>
      <h1>Projets</h1>
      <div className={styles.projects}>
        <div className={styles["category-picker"]}>
          <button
            className={!selectedCategory ? styles["active-category"] : ""}
            onClick={() => setSelectedCategory(null)}
          >
            Tous
          </button>
          <button
            className={
              selectedCategory === ECategories.Scolaire
                ? styles["active-category"]
                : ""
            }
            onClick={() => setSelectedCategory(ECategories.Scolaire)}
          >
            Scolaire
          </button>
          <button
            className={
              selectedCategory === ECategories.Personnel
                ? styles["active-category"]
                : ""
            }
            onClick={() => setSelectedCategory(ECategories.Personnel)}
          >
            Personnel
          </button>
        </div>
        <div className={styles["cards-container"]}>
          {selectedCategory
            ? projects[selectedCategory].map((project, index) => {
                return (
                  <Card
                    key={index}
                    project={project}
                    handleClick={setSelectedProject}
                  />
                );
              })
            : Object.entries(projects).map(([category, projectsInCategory]) => {
                if (!projectsInCategory.length) {
                  return;
                }

                return projectsInCategory.map((project, index) => {
                  return (
                    <Card
                      key={index}
                      project={project}
                      handleClick={setSelectedProject}
                    />
                  );
                });
              })}
        </div>

        {/* <CardProject project={selectedProject || projects.Personnel[0]} /> */}
      </div>
    </div>
  );
}
