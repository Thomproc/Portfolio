import { useState } from "react";
import { TSkill } from "../../../datas/Skills";
import styles from "./Skills.module.css";

export default function Text({
  skill,
  revealChildren,
  rootText,
}: {
  skill: TSkill;
  revealChildren: boolean;
  rootText?: boolean;
}) {
  return (
    <div
      className={`
        ${rootText ? styles["main-skill"] : styles["sub-skill"]} 
        ${!rootText && revealChildren && styles["reveal"]}
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
        return (
          <Text
            key={index}
            skill={subSkill}
            // revealAnimation={(revealAnimation || rootText) && revealChildren}
            revealChildren={revealChildren}
          />
        );
      })}
    </div>
  );
}
