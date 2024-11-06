import styles from "./ComputerNavBar.module.css";
import { Routes2DRefs, ERoutes2D, Routes2DIcons } from "../../../RouterConfig";
import SwitchEnvironment from "./SwitchEnvironment";

export default function ComputerNavBar({
  withoutIcons,
  withoutItems,
}: {
  withoutIcons?: boolean;
  withoutItems?: boolean;
}) {
  return (
    <>
      <SwitchEnvironment />
      <div className={styles.mainNavItems}>
        {!withoutItems ? (
          (Object.values(ERoutes2D) as Array<ERoutes2D>).map((value, index) => {
            const ItemIcon = Routes2DIcons[value];
            return (
              <div
                key={index}
                className={styles[`item-${index}`]}
                onClick={(_event) => {
                  Routes2DRefs[value].current?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
              >
                <div>{!withoutIcons && <ItemIcon />}</div>
                {value}
              </div>
            );
          })
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
