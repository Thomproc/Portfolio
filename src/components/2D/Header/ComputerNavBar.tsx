import styles from "./ComputerNavBar.module.css";
import { Routes2DRefs, ERoutes2D } from "../../../RouterConfig";
import SwitchEnvironment from "./SwitchEnvironment";

export default function ComputerNavBar() {
  return (
    <>
      <SwitchEnvironment />
      <div className={styles.mainNavItem}>
        {/* <div className={styles.progress} /> */}
        {(Object.values(ERoutes2D) as Array<ERoutes2D>).map((value, index) => (
          <div
            key={index}
            onClick={(_event) => {
              Routes2DRefs[value].current?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
          >
            {value}
          </div>
        ))}
      </div>
    </>
  );
}
