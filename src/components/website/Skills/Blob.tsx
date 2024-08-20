import styles from "./Skills.module.css";
import { TSkill } from "../../../datas/Skills";

export default function Blob({
  skill,
  revealChildren,
  revealText,
  rootBlob,
}: {
  skill: TSkill;
  revealChildren: boolean;
  revealText?: () => void;
  rootBlob?: boolean;
}) {
  return (
    <div
      className={`
        ${rootBlob ? styles["main-blob"] : styles["sub-blob"]} 
        ${!rootBlob && revealChildren && styles["reveal"]}
        `}
      style={
        {
          "--offsetX": skill.offsetX,
          "--offsetY": skill.offsetY,
        } as any
      }
      onClick={(event) => {
        if (!rootBlob) {
          event.stopPropagation();
          return;
        }
        revealText!();
      }}
    >
      {skill.children?.map((subSkill, index) => {
        return (
          <Blob key={index} skill={subSkill} revealChildren={revealChildren} />
        );
      })}
    </div>
  );
}
