import { useState } from "react";
import styles from "./Skills.module.css";
import { TSkill } from "../../../datas/Skills";

export default function Blob({
  skill,
  revealAnimation,
  rootBlob,
  revealText,
}: {
  skill: TSkill;
  revealAnimation?: boolean;
  rootBlob?: boolean;
  rootIndex?: number;
  revealText?: () => void;
}) {
  const [revealChildren, setRevealChildren] = useState<boolean>(false);

  return (
    <div
      className={`
        ${rootBlob ? styles["main-blob"] : styles["sub-blob"]} 
        ${revealAnimation && styles["reveal"]}
        `}
      style={
        {
          "--offsetX": skill.offsetX,
          "--offsetY": skill.offsetY,
        } as any
      }
      onClick={(event) => {
        revealAnimation && event.stopPropagation();
        if (!rootBlob) {
          return;
        }
        setRevealChildren((prevState) => !prevState);
        revealText!();
      }}
    >
      {skill.children?.map((subSkill, index) => {
        return (
          <Blob
            key={index}
            skill={subSkill}
            // revealAnimation={(revealAnimation || rootBlob) && revealChildren}
            revealAnimation={rootBlob ? revealChildren : revealAnimation}
          />
        );
      })}
    </div>
  );
}
