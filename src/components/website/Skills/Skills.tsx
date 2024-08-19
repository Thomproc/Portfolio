import styles from "./Skills.module.css";
import { skills } from "../../../datas/Skills";
import Blob from "./Blob";
import Text from "./Text";
import { useCallback, useState } from "react";

export default function Skills() {
  const [skillsClicked, setSkillsClicked] = useState<boolean[]>(
    new Array(skills.length).fill(false)
  );

  const handleClick = useCallback((skillIndex: number) => {
    setSkillsClicked((prevState) => {
      const newState: boolean[] = [...prevState];
      newState[skillIndex] = !newState[skillIndex];
      return newState;
    });
  }, []);

  return (
    <div className={styles.skills}>
      {skills.map((skill, index) => {
        return (
          <div key={index} className={styles["skill-container"]}>
            {/* Blobs liquides */}
            <div className={styles["blob-container"]}>
              <Blob
                skill={skill}
                rootBlob
                revealText={() => handleClick(index)}
              />
            </div>

            {/* Text des blobs */}
            <Text
              skill={skill}
              revealChildren={skillsClicked[index]}
              rootText
            />
          </div>
        );
      })}
    </div>
  );
}

// import styles from "./Skills.module.css";
// import { skills } from "../../../datas/Skills";
// import { useState } from "react";

// export default function Skills() {
//   const [skillsClicked, setSkillsClicked] = useState<boolean[]>(
//     new Array(Object.entries(skills).length).fill(false)
//   );
//   return (
//     <div
//       className={styles.skills}
//       style={{ "--offsetX": "150%", "--offsetY": "0" } as any}
//     >
//       {Object.entries(skills).map(
//         ([skillCategory, skillsInCategory], indexLvl0) => (
//           <div key={indexLvl0} className={styles["skill-container"]}>
//             {Array.isArray(skillsInCategory)
//               ? skillsInCategory.map((skill, indexLvl1) => (
//                   <div key={indexLvl1}>
//                     {/* Blob lvl 1 */}
//                     <div
//                       className={
//                         styles["sub-blob"] +
//                         " " +
//                         (skillsClicked[indexLvl0] ? styles["reveal"] : "")
//                       }
//                     />

//                     {/* Text lvl 1 */}
//                     <div
//                       className={
//                         styles["skill-lvl-1"] +
//                         " " +
//                         (skillsClicked[indexLvl0] ? styles["reveal"] : "")
//                       }
//                     >
//                       {skill}
//                     </div>
//                   </div>
//                 ))
//               : Object.entries(skillsInCategory).map(
//                   ([skill, value], indexLvl1) => (
//                     <div key={indexLvl1}>
//                       {/* Blob lvl 1 */}
//                       <div
//                         className={
//                           styles["sub-blob"] +
//                           " " +
//                           (skillsClicked[indexLvl0] ? styles["reveal"] : "")
//                         }
//                       />

//                       {/* Text lvl 1 */}
//                       <div
//                         className={
//                           styles["skill-lvl-1"] +
//                           " " +
//                           (skillsClicked[indexLvl0] ? styles["reveal"] : "")
//                         }
//                       >
//                         {skill}
//                       </div>
//                     </div>
//                   )
//                 )}

//             {/* Blob lvl 0 */}
//             {/* <div className={styles["blob-container"]}> */}
//             <div
//               className={styles["main-blob"]}
//               onClick={() => {
//                 const newArray = [...skillsClicked];
//                 newArray[indexLvl0] = !newArray[indexLvl0];
//                 setSkillsClicked(newArray);
//               }}
//             />
//             {/* </div> */}

//             {/* Text lvl 0 */}
//             <div className={styles["skill-lvl-0"]}>{skillCategory}</div>
//           </div>
//         )

//         // <div key={indexLvl0} className={styles["skill-container"]}>
//         //   {/* Blobs liquides */}

//         //

//         // </div>
//       )}
//     </div>
//   );
// }
