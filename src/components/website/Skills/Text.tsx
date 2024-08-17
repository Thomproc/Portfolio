import { TSkill } from "../../../datas/Skills";
import styles from "./Skills.module.css";

let key = 100;
export default function Text({
  skillsClicked,
  skill,
  index,
}: {
  skillsClicked: boolean;
  skill: TSkill;
  index: number;
}) {
  const buildText = (
    skill: TSkill,
    depth: number,
    rootIndex: number
  ): JSX.Element[] => {
    let childrenJSX: JSX.Element[] = [];
    if (skill.children) {
      skill.children.map((subSkill) => {
        const newChildren = buildText(subSkill, depth + 1, rootIndex);
        childrenJSX = childrenJSX.concat(newChildren);
      });
    }

    key += 1;
    console.log(skill.name, key);
    if (depth === 0) {
      childrenJSX.push(
        <div key={key} className={styles["skill-lvl-0"]}>
          {skill.name}
        </div>
      );
      return childrenJSX;
    }

    childrenJSX.push(
      <div
        key={key}
        className={`
            ${styles["skill-lvl-1"]} 
            ${skillsClicked && styles["reveal"]}
        `}
        style={
          {
            "--offsetX": (Math.cos(key * 300) * 150).toString() + "%",
            "--offsetY": (Math.sin(key * 300) * 150).toString() + "%",
          } as any
        }
      >
        {skill.name}
      </div>
    );
    return childrenJSX;
  };
  return buildText(skill, 0, index);
}
