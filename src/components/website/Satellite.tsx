import styles from "./Satellite.module.css";

export default function Satellite({
  offset,
  color,
  width,
  duration,
}: {
  offset: string;
  color: string;
  width: string;
  duration: string;
}) {
  return (
    <div
      className={styles.container}
      style={
        {
          "--offset": offset,
          "--color": color,
          "--width": width,
          "--duration": duration,
        } as any
      }
    >
      <div className={styles["satellite"]} />
      <div className={styles.orbit} />
    </div>
  );
}
