import styles from "./Introduction.module.css";
import ActionButton from "../../Basics/ActionButton";
import { colors } from "../../../../datas/ColorTheme";
import ERoutes from "../../RouterConfig";

export default function Introduction() {
  return (
    <div className={styles["introduction"]}>
      <div>
        <div className={styles["introduction-name"]}>Procureur Thomas</div>
        <div className={"text-primary"}>
          Développeur d'applications Web et Mobile
        </div>
        <ActionButton
          text="Contactez-moi !"
          color={colors.primary}
          textColor={colors.background2D}
          btnWidth="50%"
          targetTab={ERoutes.CONTACT}
        />
      </div>
    </div>
  );
}
