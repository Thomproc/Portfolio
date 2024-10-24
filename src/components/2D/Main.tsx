import "../../Themes/Typographies.css";
import styles from "./Main.module.css";

import { ERoutes2D, Routes2DRefs } from "../../RouterConfig";

import Footer from "./Footer/Footer";
import Homepage from "./Home/Homepage";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";

export default function Main() {
  return (
    <>
      <div className={styles.content}>
        <section ref={Routes2DRefs[ERoutes2D.HOME]}>
          <Homepage in3DWorld={false} />
        </section>
        <section ref={Routes2DRefs[ERoutes2D.SKILLS]}>
          <Skills />
        </section>
        <section ref={Routes2DRefs[ERoutes2D.PROJECTS]}>
          <Projects />
        </section>
      </div>
      <section ref={Routes2DRefs[ERoutes2D.CONTACT]}>
        <Footer />
      </section>
    </>
  );
}
