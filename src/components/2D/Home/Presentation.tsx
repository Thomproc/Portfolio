import styles from "./Presentation.module.css";
export default function Presentation() {
  return (
    <>
      <div className={styles["presentation-container"]}>
        <div className={styles["presentation"]}>
          <div className={styles["description"]}>
            <div className={styles["title"]}>Hey, je suis Thomas !</div>
            <span>
              Passioné par le développement d'applications qui vous seront
              utiles, curieux afin d'évoluer en permanence, et enfin soucieux de
              la qualité de mes produits et de la satisfaction client, j'espère
              que mes services seront à la hauteur de vos attentes.
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
