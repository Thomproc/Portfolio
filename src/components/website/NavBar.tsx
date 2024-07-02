import { useContext, useEffect, useState } from "react";
import styles from "./NavBar.module.css";
import { Context } from "../../datas/Context";

export default function NavBar() {
  const context = useContext(Context);
  useEffect(() => {
    console.log("NavItem monté avec la valeur du contexte :", context);
  }, [context]);

  const [selectedItem, setSelectedItem] = useState<
    "Accueil" | "Projets" | "Competences" | "Contact"
  >("Accueil");
  return (
    <div className={styles.navContainer}>
      <div className={styles.navBar}>
        <div
          className={
            selectedItem === "Accueil" ? styles.navItemSelected : styles.navItem
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
            selectedItem === "Projets" ? styles.navItemSelected : styles.navItem
          }
          onClick={(_event) => setSelectedItem("Projets")}
        >
          Projets
        </div>
        <div
          className={
            selectedItem === "Contact" ? styles.navItemSelected : styles.navItem
          }
          onClick={(_event) => setSelectedItem("Contact")}
        >
          Contact
        </div>
        {/* <Context.Consumer> */}
        {/* {(value) => ( */}
        <div
          className={styles.navItem}
          onClick={(_event) => {
            console.log(context);
          }}
        >
          MOIIIIIIIII ;)
        </div>
        {/* )} */}
        {/* </Context.Consumer> */}
      </div>
    </div>
  );
}
