import styles from "./Presentation.module.css";
export default function Presentation() {
  return (
    <>
      <div className={styles["presentation-container"]}>
        <div className={styles["presentation"]}>
          <div className={styles["propositions"]}>
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
              <li>100€ / Jour</li>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
