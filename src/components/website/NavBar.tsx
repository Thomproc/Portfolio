import { useState } from "react";
import styles from "./NavBar.module.css";

export default function NavBar({
  changeFocus,
}: {
  changeFocus: (value: "computer" | "rubiksCube" | "desk") => boolean;
}) {
  const [selectedItem, setSelectedItem] = useState<
    "Accueil" | "Projets" | "Competences" | "Contact"
  >("Accueil");

  return (
    <div className={styles.center}>
      <div className={styles.navContainer}>
        <div
          className={styles.navItem}
          onClick={(_event) => changeFocus("desk")}
        >
          MOI
        </div>
        <div className={styles.navBar}>
          <div
            className={
              selectedItem === "Accueil"
                ? styles.navItemSelected
                : styles.navItem
            }
            onClick={(_event) => setSelectedItem("Accueil")}
          >
            Accueil
          </div>
          <div
            className={
              selectedItem === "Competences"
                ? styles.navItemSelected
                : styles.navItem
            }
            onClick={(_event) => setSelectedItem("Competences")}
          >
            Compétences
          </div>
          <div
            className={
              selectedItem === "Projets"
                ? styles.navItemSelected
                : styles.navItem
            }
            onClick={(_event) => setSelectedItem("Projets")}
          >
            Projets
          </div>
          <div
            className={
              selectedItem === "Contact"
                ? styles.navItemSelected
                : styles.navItem
            }
            onClick={(_event) => setSelectedItem("Contact")}
          >
            Contact
          </div>
        </div>
        <div
          className={styles.navItem}
          onClick={(_event) => changeFocus("desk")}
        >
          CV
        </div>
      </div>
    </div>
  );
}
