import styles from "./Skills.module.css";
import { skills } from "../../../datas/Skills";
import Blob from "./Blob";
import Text from "./Text";
import { useState } from "react";

export default function Skills() {
  const [skillsClicked, setSkillsClicked] = useState<number | null>();

  return (
    <div className={styles.skills}>
      {skills.map((skill, index) => {
        return (
          <div key={index} className={styles["skill-container"]}>
            {/* Blobs liquides */}
            <div className={styles["blob-container"]}>
              <Blob
                skill={skill}
                revealChildren={skillsClicked === index}
                revealText={() =>
                  index === skillsClicked
                    ? setSkillsClicked(null)
                    : setSkillsClicked(index)
                }
                rootBlob
              />
            </div>

            {/* Text des blobs */}
            <Text
              skill={skill}
              revealChildren={skillsClicked === index}
              rootText
            />
          </div>
        );
      })}
    </div>
  );
}
