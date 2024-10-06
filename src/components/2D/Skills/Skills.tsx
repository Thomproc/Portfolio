import { useState } from "react";
import styles from "./Skills.module.css";
import { skills, TSkill } from "../../../datas/Skills";
import SubBlob from "./SubBlob";
import SubText from "./SubText";

export default function Skills() {
  const [rootSkill, setRootSkill] = useState<TSkill | null>(null);
  const [showRootSkillsPicker, setShowRootSkillsPicker] =
    useState<boolean>(false);
  return (
    <>
      <div className={styles.title}>
        <img
          src="./Astro_skills.png"
          alt="astronaute compétences"
          className={styles.icon}
        />
        <h1>Compétences</h1>
      </div>
      <div className={styles.skills}>
        <div className={styles["skill-container"]}>
          {/* Blobs liquides */}
          <div className={styles["blob-container"]}>
            <div className={styles["animated-blob1"]} />
            <div className={styles["animated-blob2"]} />
            <div className={styles["main-blob"]}>
              {rootSkill !== null &&
                rootSkill.children?.map((subSkill) => (
                  <SubBlob
                    key={rootSkill.name + subSkill.name}
                    skill={subSkill}
                  />
                ))}
            </div>
          </div>

          {/* Text des blobs */}
          <div
            className={`
                ${styles["main-skill"]}
                `}
            onMouseEnter={() => {
              setShowRootSkillsPicker(true);
            }}
            onMouseLeave={() => {
              setShowRootSkillsPicker(false);
            }}
          >
            {rootSkill !== null &&
              rootSkill.children?.map((subSkill) => (
                <SubText
                  key={rootSkill.name + subSkill.name}
                  skill={subSkill}
                />
              ))}
            {rootSkill && !showRootSkillsPicker ? (
              <div className={"text-accent"}> {rootSkill.name}</div>
            ) : (
              <div className={styles["picker"]}>
                <div className={styles.title}>Compétences</div>
                {skills.map((root, index) => (
                  <div
                    key={index}
                    className={`
                      ${styles["root-skill"]}
                      ${rootSkill === skills[index] && "text-accent"}
                      `}
                    onClick={() => setRootSkill(skills[index])}
                    style={
                      {
                        "--offsetX": root.offsetX,
                        "--offsetY": root.offsetY,
                      } as any
                    }
                  >
                    {root.name}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
