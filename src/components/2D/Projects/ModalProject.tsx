import styles from "./ModalProject.module.css";
import { Modal } from "@mui/material";
import { ETypes, Project } from "../../../models/Project";
import BtnCTA from "../Components/Buttons/BtnCTA";
import TechnologiesChips from "../Components/TechnologiesChips";
import {
  ComputerRounded,
  PhoneAndroidRounded,
  ArrowBackRounded,
  ArrowForwardRounded,
} from "@mui/icons-material";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

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
                  <ComputerRounded />
                ) : (
                  <PhoneAndroidRounded />
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
              <div className={styles.header}>
                <h2>Présentation</h2>
                <TechnologiesChips project={selectedProject} />
              </div>
              <span className="paragraph">{selectedProject.description}</span>
            </div>
            <div className={styles.carousel}>
              <div className={styles.leftArrow}>
                <ArrowBackRounded />
              </div>
              <div className={styles.rightArrow}>
                <ArrowForwardRounded />
              </div>
            </div>
          </>
        )}
      </div>
    </Modal>
  );
}
