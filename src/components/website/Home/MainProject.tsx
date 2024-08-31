import { projects } from "../../../datas/Projects";
import CardProject from "../Basics/CardProject";

export default function MainProject() {
  return (
    <>
      <h1>Projet du moment</h1>
      <CardProject project={projects.Scolaire[0]} displayedInHomePage />
    </>
  );
}
