import styles from "./Presentation.module.css";
export default function Presentation() {
  return (
    <>
      <div className={styles.presentation}>
        <div>
          <h2>Hey, je suis Thomas !</h2>
          <br />
          Passioné par le développement d'applications qui vous seront utiles,
          curieux afin d'évoluer en permanence, et enfin soucieux de la qualité
          de mes produits et de la satisfaction client, j'espère que mes
          services seront à la hauteur de vos attentes.
          <br />
          <br />
          <h2>Pourquoi la programmation ?</h2>
          <br />
          La programmation m'apporte satisfaction puisqu'elle permet
          l'expression de ma créativité et la réalisation de projets complexes
          avec pour seuls outils mes phalanges distales (émoji main squelette).
        </div>
      </div>
      {/* <div className={styles.astronaut}>
        <img src="./astronaut.jpg" alt="astronaute" />
      </div> */}
    </>
  );
}
