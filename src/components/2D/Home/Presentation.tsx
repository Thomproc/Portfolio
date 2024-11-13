import styles from "./Presentation.module.css";
export default function Presentation() {
  return (
    <>
      <div className={styles["presentation-container"]}>
        <div className={styles["presentation"]}>
          <div className={styles["description"]}>
            <div className={styles["title"]}>Hey, je suis Thomas !</div>
            <span>
              Curieux et passioné par le développement d'applications, la
              programmation m'apporte satisfaction puisqu'elle permet
              l'expression de ma créativité et la réalisation de projets
              complexes avec pour seuls outils mes phalanges distales !
              <br />
              <span style={{ fontSize: "1.5em" }}>&#128075;</span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
