import styles from "./SkillCard.module.css";
import { TSkill } from "../../../datas/Skills";
export default function SkillCard({ skill }: { skill: TSkill }) {
  return (
    <div
      className={styles["card"]}
      style={
        {
          "--color": skill.color,
          "--area": skill.area,
          "--nbCategories": skill.categories.length,
        } as any
      }
    >
      <h2>{skill.name}</h2>
      <div
        className={
          skill.direction === "horizontal"
            ? styles["main-row"]
            : styles["main-column"]
        }
      >
        {skill.categories.map((category, index) => (
          <div key={index} className={styles["column"]}>
            <div>
              <div className="label">ICONE</div>
              <h3>{category.name}</h3>
            </div>
            <div className={styles["content"]}>
              {category.content.map((content, index) => (
                <span key={index}>{content}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
