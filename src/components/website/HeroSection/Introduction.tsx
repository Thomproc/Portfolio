import styles from "./Introduction.module.css";

export default function Introduction() {
  return (
    <div className={styles["introduction"]}>
      <div>
        <div className={styles["introduction-name"]}>Procureur Thomas</div>
        {/* <div className={styles["roller-container"]}> */}
        <div className={"text-primary"}>
          Développeur d'applications Web et Mobile
        </div>
      </div>
      {/* <div className={styles["roller"]}>
          <div>créatif</div>
          <div> passionné</div>
          <div>curieux</div>
          <div>investi</div>
        </div> */}
      {/* <br /> En recherche permanente de projets innovants, stimulants et
  enrichissants ! */}
      {/* </div> */}
    </div>
  );
}
