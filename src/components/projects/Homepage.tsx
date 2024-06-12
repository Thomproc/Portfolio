import style from "./Homepage.module.css";
import Card from "./Card";

import { projects } from "../../datas/Projects";

export default function Homepage() {
  return (
    <div className={style["screen"]}>
      <div className={style["projects-container"]}>
        {projects.map((project, index) => {
          return <Card key={index} project={project} />;
        })}
      </div>
    </div>
  );
}
