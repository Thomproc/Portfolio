import styles from "./Footer.module.css";
import Contact from "./Contact";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles["img-container"]}>
        <img src="./Images/Footer/background.png" alt="BackgroundFooter" />
      </div>
      <Contact />
      <span>
        <i>
          <u>
            <a href="https://www.freepik.com/free-vector/gradient-black-background-with-wavy-lines_19852128.htm#from_view=detail_alsolike">
              Image by freepik : background hero section
            </a>
          </u>
        </i>
        <br />
        <i>
          <u>
            <a href="https://www.freepik.com/free-vector/gradient-geometric-background_11906703.htm#from_view=detail_alsolike">
              Image by freepik : background footer
            </a>
          </u>
        </i>
      </span>
    </div>
  );
}
