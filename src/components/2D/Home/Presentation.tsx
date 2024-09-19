import styles from "./Presentation.module.css";
export default function Presentation() {
  return (
    <>
      <div className={styles["presentation-container"]}>
        <div className={styles["presentation"]}>
          <div className={styles["description"]}>
            {/* <h2>Hey, je suis Thomas !</h2>
            Passioné par le développement d'applications qui vous seront utiles,
            curieux afin d'évoluer en permanence, et enfin soucieux de la
            qualité de mes produits et de la satisfaction client, j'espère que
            mes services seront à la hauteur de vos attentes. */}
            <h2>Hey, ce que je propose !</h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Earum provident
            dolorem commodi pariatur laborum similique sint, harum provident
            dolorem commodi pariatur laborum similique sint, harum sequi magni
            excepturi, deserunt delectus vel, odit porro?
            {/* <br />
            <br />
            <h2>Pourquoi la programmation ?</h2>
            <br />
            La programmation m'apporte satisfaction puisqu'elle permet
            l'expression de ma créativité et la réalisation de projets complexes
            avec pour seuls outils mes phalanges distales (émoji main
            squelette). */}
          </div>
          {/* <br />
          <br /> */}
          {/* <div className={styles["propositions"]}>
            <img src="./Icons/service.svg" />
            <img src="./Icons/handshake.svg" />
            <img src="./Icons/euro.svg" />
            <div>
              <li>Site web</li>
              <li>Application mobile</li>
              <li>Logiciel métier</li>
            </div>
            <div>
              <li>Application personnalisée</li>
              <li>Suivie de l'avancement du projet</li>
            </div>
            <div>
              <div className={styles["price"]}>
                100<sup>€</sup>
                <sub>/ Jour</sub>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}
