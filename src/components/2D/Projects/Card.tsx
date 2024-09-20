import { useState } from "react";
import { Project } from "../../../models/Project";
import AmazingCardEffect from "../Basics/AmazingCardEffect/AmazingCardEffect";
import styles from "./Card.module.css";

export default function Card({
  project,
  handleClick,
}: {
  project: Project;
  handleClick: (value: Project | null) => void;
}) {
  const [pointerPosition, setPointerPosition] = useState<{
    x: number;
    y: number;
    fromCenter: number;
  }>({ x: 0, y: 0, fromCenter: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLImageElement>) => {
    const { clientX, clientY } = e;

    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();

    const mouseY = clientY - top;
    const mouseX = clientX - left;

    setPointerPosition({
      x: mouseX,
      y: mouseY,
      fromCenter:
        Math.sqrt((mouseX - width / 2) ** 2 + (mouseY - height / 2) ** 2) /
          Math.sqrt(width ** 2 + height ** 2) +
        0.1,
    });
  };

  const handleMouseLeave = () => {
    setPointerPosition((prevState) => ({
      x: prevState.x,
      y: prevState.y,
      fromCenter: 0.1,
    }));
  };

  return (
    <AmazingCardEffect>
      <div
        className={styles["project"]}
        onClick={() => handleClick(project)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={styles.glare}
          style={{
            background: `radial-gradient(farthest-corner circle at ${pointerPosition.x}px ${pointerPosition.y}px, #ffffff5e, #96969640 40%, #24242464 110%)`,
            opacity: pointerPosition.fromCenter * 0.7,
          }}
        />
        <div
          className={styles.shinning}
          style={{
            backgroundPositionX: `${
              Math.sqrt(pointerPosition.x ** 2 + pointerPosition.y ** 2) * 1.5
            }px`,
            opacity: pointerPosition.fromCenter,
          }}
        />

        <img src={"./Images/Projects/" + project.image} alt={project.image} />

        <div className={styles["foreground"]}>
          <div className={styles.header}>
            <div className={styles["title"]}>{project.name}</div>
            <div className={styles["technologies"]}>
              {project.technologies.map((tech, index) => (
                <div key={index}>{tech.split(".")[0]}</div>
              ))}
            </div>
          </div>
          <div className={styles["description"]}>{project.description}</div>
        </div>
      </div>
    </AmazingCardEffect>
  );
}
