import styles from "./Skills.module.css";
import { TSkill } from "../../../datas/Skills";

export default function SubBlob({ skill }: { skill: TSkill }) {
  const rotation = Math.random() * 360 + "deg";
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
        return (
          <div key={index}>
            <div
              className={styles["animated-blob1"]}
              style={
                {
                  "--rotationStart": rotation,
                } as any
              }
            />
            <div
              className={styles["animated-blob2"]}
              style={
                {
                  "--rotationStart": rotation,
                } as any
              }
            />
            <SubBlob skill={subSkill} />;
          </div>
        );
      })}
    </div>
  );
}
