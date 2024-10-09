import styles from "./Skills.module.css";
import SkillCard from "./SkillCard";
import { skills, ESkillsColors } from "../../../datas/Skills";

export default function Skills() {
  return (
    <div className={styles["skills"]}>
      <div
        className={styles["title"]}
        style={
          {
            "--color1": ESkillsColors.MOBILE,
            "--color2": ESkillsColors.BACKEND,
            "--color3": ESkillsColors.FRONTEND,
            "--color4": ESkillsColors.THREED,
          } as any
        }
      >
        <h1>Compétences</h1>
      </div>
      {skills.map((skill, index) => (
        <SkillCard key={index} skill={skill} />
      ))}
    </div>
  );
}
