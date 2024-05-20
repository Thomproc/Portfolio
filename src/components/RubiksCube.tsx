import { OrbitControls } from "@react-three/drei";
import Cube from "./Cube";
import RubiksCube from "../models/RubiksCube";
import { useEffect, useMemo, useState } from "react";

export default function RubiksCubeComponent() {
  const [selectedCube, setSelectedCube] = useState<number | null>(null);
  const [arrowUp, setArrowUp] = useState(false);

  const rubiksCube: RubiksCube = useMemo(
    () =>
      new RubiksCube({
        nbCubes: 2,
        sizeCube: 1,
      }),
    []
  );

  const up = (e: KeyboardEvent) => {
    switch (e.key) {
      case "ArrowUp":
        rubiksCube.rotateUp();
        setArrowUp(!arrowUp);
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    document.addEventListener("keyup", up);

    return () => {
      document.removeEventListener("keyup", up);
    };
  }, []);

  return (
    <>
      {rubiksCube.getCubes().map((cube) => (
        <Cube
          key={cube.id}
          cube={cube}
          colors={rubiksCube.getColors()}
          isSelected={cube.id == selectedCube}
          setSelectedCube={setSelectedCube}
        />
      ))}
      <OrbitControls />
    </>
  );
}
