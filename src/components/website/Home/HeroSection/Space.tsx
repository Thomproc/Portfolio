import styles from "./Space.module.css";
import Satellite from "./Satellite";

export default function Space() {
  return (
    <div className={styles["space"]}>
      <div className={styles["wrapper"]}>
        <div className={styles["ripple-container"]} />
        <div className={styles.image} />
        <div id="satellites" className={styles.satellites}>
          <Satellite
            offset="-2%"
            color="#4bb2d1"
            diameter="15%"
            rotation="24deg"
            duration="8s"
            image_path="./Logos/React.png"
          />
          <Satellite
            offset="-25%"
            color="#898730"
            diameter="18%"
            rotation="24deg"
            duration="9s"
            image_path="./Logos/JS.png"
          />
          <Satellite
            offset="-45%"
            color="#A72F2F"
            diameter="18%"
            rotation="24deg"
            duration="10s"
            image_path="./Logos/HTML.png"
          />
          <Satellite
            offset="-69%"
            color="#1B3263"
            diameter="18%"
            rotation="24deg"
            duration="11s"
            image_path="./Logos/CSS.png"
          />

          <Satellite
            offset="-12%"
            color="#304C89"
            diameter="15%"
            rotation="-24deg"
            duration="8.5s"
            image_path="./Logos/Flutter.png"
          />
          <Satellite
            offset="-37%"
            color="#894603"
            diameter="16%"
            rotation="-24deg"
            duration="9.5s"
            image_path="./Logos/Blender.png"
          />
          <Satellite
            offset="-58%"
            color="#B6E2F3"
            diameter="18%"
            rotation="-24deg"
            duration="10.5s"
            image_path="./Logos/AndroidStudio.png"
          />
          <Satellite
            offset="-82%"
            color="#6f9b81"
            diameter="19%"
            rotation="-24deg"
            duration="11.5s"
            image_path="./Logos/NodeJS.png"
          />
        </div>
      </div>
    </div>
  );
}
