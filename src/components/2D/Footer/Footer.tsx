import styles from "./Footer.module.css";
import Contact from "./Contact";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles["img-container"]}>
        <img src="./Images/Footer/background.png" alt="BackgroundFooter" />
      </div>
      <Contact />
      {/* <div className={styles["credit"]}>
        <i>
          <u>
            <a href="https://www.freepik.com">Designed by freepik</a>
          </u>
        </i>
        <br />
        3D Models :
        <li>
          <i>
            <u>
              <a href="https://skfb.ly/oDPCS">Desktop</a>
            </u>
          </i>
        </li>
      </div> */}
    </div>
  );
}
