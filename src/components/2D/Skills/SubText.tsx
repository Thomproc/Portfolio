import { TSkill } from "../../../datas/Skills";
import styles from "./Skills.module.css";

export default function SubText({ skill }: { skill: TSkill }) {
  return (
    <div
      className={`
        ${styles["sub-skill"]} 
        ${styles["reveal"]}
        `}
      style={
        {
          "--offsetX": skill.offsetX,
          "--offsetY": skill.offsetY,
        } as any
      }
    >
      {skill.name}
      {skill.children?.map((subSkill, index) => {
        return <SubText key={index} skill={subSkill} />;
      })}
    </div>
  );
}
