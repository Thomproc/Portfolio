import styles from "./ModalProject.module.css";
import { Modal } from "@mui/material";
import { ETypes, Project } from "../../../models/Project";
import BtnCTA from "../Components/Buttons/BtnCTA";
import BtnCTA2 from "../Components/Buttons/BtnCTA2";
import TechnologiesChips from "../Components/TechnologiesChips";
import { ComputerOutlined, PhoneAndroidOutlined } from "@mui/icons-material";

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
              <div className={styles.datas + " label"}>
                {selectedProject.type === ETypes.Web ? (
                  <ComputerOutlined />
                ) : (
                  <PhoneAndroidOutlined />
                )}

                <div>
                  <i>
                    {selectedProject.context +
                      " - " +
                      selectedProject.date.toLocaleDateString()}
                  </i>
                </div>
              </div>
              <img
                src={"./Images/Projects/" + selectedProject.image}
                alt={selectedProject.image}
              />

              <h1>{selectedProject.name}</h1>
              <span className="paragraph">{selectedProject.abstract}</span>
              <div className={styles.buttons}>
                <BtnCTA text={"Dépôt Github"} />
                <BtnCTA2 text={"Voir en ligne"} />
              </div>
            </div>
            <div className={styles.content}>
              <div className={styles.header}>
                <h2>Présentation</h2>
                <TechnologiesChips project={selectedProject} />
              </div>
              <span className="paragraph">{selectedProject.description}</span>
            </div>
            <div className={styles.carousel}>
              <div className={styles.leftArrow}>
                <img src="./Designs/ArrowLeft.svg" alt="left arrow" />
              </div>
              <div className={styles.rightArrow}>
                <img src="./Designs/ArrowRight.svg" alt="right arrow" />
              </div>
            </div>
          </>
        )}
      </div>
    </Modal>
  );
}
