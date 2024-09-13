import styles from "./Skills.module.css";
import { TSkill } from "../../../datas/Skills";

export default function SubBlob({ skill }: { skill: TSkill }) {
  return (
    <div
      className={`
        ${styles["sub-blob"]} 
        ${styles["reveal"]}
        `}
      style={
        {
          "--offsetX": skill.offsetX,
          "--offsetY": skill.offsetY,
        } as any
      }
    >
      {skill.children?.map((subSkill, index) => {
        return <SubBlob key={index} skill={subSkill} />;
      })}
    </div>
  );
}
