import styles from "./Satellite.module.css";

export default function Satellite({
  offset,
  color,
  diameter,
  duration,
  image_path,
}: {
  offset: string;
  color: string;
  diameter: string;
  duration: string;
  image_path: string;
}) {
  return (
    <div
      className={styles.container}
      style={
        {
          "--offset": offset,
          "--color": color,
          "--diameter": diameter,
          "--duration": duration,
        } as any
      }
    >
      <div className={styles["satellite"]}>
        <img src={image_path} alt={image_path} />
      </div>
      <div className={styles.orbit} />
    </div>
  );
}
