import styles from "./Introduction.module.css";
import BtnCTA from "../../Components/Buttons/BtnCTA";
import ERoutes2D from "../../../../RouterConfig";

export default function Introduction() {
  return (
    <div className={styles["introduction"]}>
      <div>
        <div className={styles["space"]}>
          <div className={styles["title"]}>Procureur Thomas</div>
          <div className={styles["sub-title"]}>
            Développeur d'applications Web et Mobile
          </div>
        </div>
        <BtnCTA text={"Me contacter"} targetRoute={ERoutes2D.CONTACT} />
      </div>
    </div>
  );
}
