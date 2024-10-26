import styles from "./ModalProject.module.css";
import { IconButton, Modal } from "@mui/material";
import { ETypes, Project } from "../../../../models/Project";
import BtnCTA from "../../Components/Buttons/BtnCTA";
import TechnologiesChips from "../../Components/TechnologiesChips";
import Carousel from "./Carousel";
import {
  ComputerRounded,
  PhoneAndroidRounded,
  ArrowBackRounded,
} from "@mui/icons-material";

export default function ModalProject({
  selectedProject,
  setSelectedProject,
}: {
  selectedProject: Project | null;
  setSelectedProject: (value: Project | null) => void;
}) {
  return (
    <Modal open={!!selectedProject} onClose={() => setSelectedProject(null)}>
      <div className={styles.modal}>
        {selectedProject && (
          <>
            <div className={styles.banner}>
              <IconButton
                sx={{ position: "absolute", top: 4, left: 4 }}
                onClick={() => setSelectedProject(null)}
              >
                <ArrowBackRounded />
              </IconButton>

              <img
                src={"./Images/Projects/" + selectedProject.image}
                alt={selectedProject.image}
              />

              <h1>{selectedProject.name}</h1>
              <span className="paragraph">{selectedProject.abstract}</span>
              <div className={styles.buttons}>
                {selectedProject.github && (
                  <BtnCTA
                    text={"Dépôt Github"}
                    targetLink={selectedProject.github}
                  />
                )}
                {selectedProject.website && (
                  <BtnCTA
                    secondaryStyle
                    text={"Voir en ligne"}
                    targetLink={selectedProject.website}
                  />
                )}
              </div>
            </div>
            <div className={styles.content}>
              <div className={styles["technologies-container"]}>
                <div className={styles["technologies-title"]}>
                  <h3>Technologies</h3>
                </div>
                <TechnologiesChips project={selectedProject} wrap />
              </div>
              <div className={styles.title}>
                <div className={styles.datas + " label"}>
                  {selectedProject.type === ETypes.Web ? (
                    <ComputerRounded />
                  ) : (
                    <PhoneAndroidRounded />
                  )}
                  <i>
                    {selectedProject.context +
                      " - " +
                      selectedProject.date.toLocaleDateString()}
                  </i>
                </div>
                <h2>Présentation</h2>
              </div>
              <span className="paragraph">{selectedProject.description}</span>
            </div>
            <Carousel project={selectedProject} />
          </>
        )}
      </div>
    </Modal>
  );
}
