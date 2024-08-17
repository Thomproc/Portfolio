import { useState } from "react";
import styles from "./Skills.module.css";
import { skills, TSkill } from "../../../datas/Skills";

let key = 0;
export default function Blobs({
  handleClick,
  skill,
  index,
}: {
  handleClick: (value: boolean[]) => void;
  skill: TSkill;
  index: number;
}) {
  const [skillsClicked, setSkillsClicked] = useState<boolean[]>(
    new Array(skills.length).fill(false)
  );
  const buildBlob = (
    skill: TSkill,
    depth: number,
    rootIndex: number
  ): JSX.Element[] => {
    let childrenJSX: JSX.Element[] = [];
    if (skill.children) {
      skill.children.map((subSkill) => {
        const newChildren = buildBlob(subSkill, depth + 1, rootIndex);
        childrenJSX = childrenJSX.concat(newChildren);
      });
    }

    key += 1;

    if (depth === 0) {
      childrenJSX.push(
        <div
          key={key}
          className={styles["main-blob"]}
          onClick={() => {
            const newArray = [...skillsClicked];
            newArray[rootIndex] = !newArray[rootIndex];
            handleClick(newArray);
            setSkillsClicked(newArray);
          }}
        />
      );
      return childrenJSX;
    }

    childrenJSX.push(
      <div
        key={key}
        className={`
          ${styles["sub-blob"]}
          ${skillsClicked[rootIndex] && styles["reveal"]}`}
        style={
          {
            "--offsetX": (Math.cos(key * 300) * 150).toString() + "%",
            "--offsetY": (Math.sin(key * 300) * 150).toString() + "%",
          } as any
        }
      />
    );
    return childrenJSX;
  };

  return (
    <div className={styles["blob-container"]}>{buildBlob(skill, 0, index)}</div>
  );
}
