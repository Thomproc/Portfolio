import styles from "./Space.module.css";
import Satellite from "./Satellite";

export default function Space() {
  return (
    <div className={styles["space"]}>
      <div className={styles["wrapper"]}>
        <div className={styles["ripple-container"]} />
        <img src="./projects_images/photo.jpeg" alt="Photo" />
        <Satellite offset="-3%" color="#CE8147" width="16%" duration="11s" />
        <Satellite offset="-23%" color="#565656" width="13%" duration="17s" />
        <Satellite offset="-38%" color="#05B2DC" width="11%" duration="26s" />
        <Satellite offset="-52%" color="#00CC99" width="20%" duration="22s" />
        <Satellite offset="-100%" color="#304C89" width="18%" duration="5s" />
      </div>
    </div>
  );
}
