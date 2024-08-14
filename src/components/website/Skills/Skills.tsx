import styles from "./Skills.module.css";
import { skills } from "../../../datas/Skills";
import { useState } from "react";

export default function Skills() {
  const [skillsClicked, setSkillsClicked] = useState<boolean[]>(
    new Array(Object.entries(skills).length).fill(false)
  );
  return (
    <div
      className={styles.skills}
      style={{ "--offsetX": "150%", "--offsetY": "0" } as any}
    >
      {Object.entries(skills).map(
        ([skillCategory, skillsInCategory], indexLvl0) => (
          <div key={indexLvl0} className={styles["skill-container"]}>
            {/* Blobs liquides */}
            <div className={styles["blob-container"]}>
              <div
                className={
                  styles["sub-blob"] +
                  " " +
                  (skillsClicked[indexLvl0] ? styles["reveal"] : "")
                }
              />
              <div
                className={styles["main-blob"]}
                onClick={() => {
                  const newArray = [...skillsClicked];
                  newArray[indexLvl0] = !newArray[indexLvl0];
                  setSkillsClicked(newArray);
                }}
              />
            </div>

            {/* Text des blobs */}
            <div className={styles["skill-lvl-0"]}>{skillCategory}</div>
            {Array.isArray(skillsInCategory) ? (
              skillsInCategory.map((skill, indexLvl1) => (
                <div
                  key={indexLvl1}
                  className={
                    styles["skill-lvl-1"] +
                    " " +
                    (skillsClicked[indexLvl0] ? styles["reveal"] : "")
                  }
                >
                  {skill}
                </div>
              ))
            ) : (
              <div />
            )}
          </div>
        )
      )}
    </div>
  );
}
