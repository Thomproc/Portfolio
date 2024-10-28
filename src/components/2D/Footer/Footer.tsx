import styles from "./Footer.module.css";
import Contact from "./Contact";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles["img-container"]}>
        <img src="./Images/bg_footer.png" alt="BackgroundFooter" />
      </div>
      <Contact />
      {/* Créditer les modèles et icones / images, [space beween], réseaux sociaux,
      mail
      <br />
      <a href="https://www.freepik.com/free-vector/gradient-black-background-with-wavy-lines_19852128.htm#from_view=detail_alsolike">
        Image by freepik : background hero section
      </a>
      <a href="https://www.freepik.com/free-vector/gradient-geometric-background_11906703.htm#from_view=detail_alsolike">
        Image by freepik : bg footer
      </a>
      <a href="https://www.freepik.com/free-vector/solar-system-vector_2800654.htm#from_view=detail_alsolike">Image by rawpixel.com on Freepik</a>
      <a href="https://www.freepik.com/free-ai-image/astronaut-with-cup-coffee-his-hand-vector-illustration_89228083.htm?log-in=email#fromView=image_search_similar&page=1&position=0&uuid=09c68fe7-c813-4e37-90ee-1a1970e7adaa">
        Image by flatart on Freepik : astronaut stylé
      </a> */}
    </div>
  );
}
