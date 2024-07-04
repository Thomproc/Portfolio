import styles from "./ActionButton.module.css";

export default function ActionButton({
  text,
  color,
  textColor,
  btnWidth,
}: {
  text: string;
  color: string;
  textColor: string;
  btnWidth: String;
}) {
  return (
    <div className={styles.container}>
      <button
        data-text={text}
        style={
          {
            "--textColor": textColor,
            "--color": color,
            "--width": btnWidth,
          } as any
        }
        className={styles["my-button"]}
      />
    </div>
  );
}
