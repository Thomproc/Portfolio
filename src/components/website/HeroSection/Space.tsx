import styles from "./Space.module.css";
import Satellite from "./Satellite";

export default function Space() {
  return (
    <div className={styles["space"]}>
      <div className={styles["wrapper"]}>
        <div className={styles["ripple-container"]} />
        <div className={styles.image} />

        <div className={styles.satellites}>
          <Satellite
            offset="-3%"
            color="#4bb2d1"
            diameter="25%"
            duration="11s"
            image_path="./hero_images/React.png"
          />
          <Satellite
            offset="-54%"
            color="#6f9b81"
            diameter="24%"
            duration="17s"
            image_path="./hero_images/NodeJS.png"
          />
          <Satellite
            offset="-100%"
            color="#304C89"
            diameter="18%"
            duration="9s"
            image_path="./hero_images/Flutter.png"
          />
        </div>
      </div>
    </div>
  );
}
