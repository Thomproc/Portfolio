import { useState, useMemo } from "react";
import { Color, MeshBasicMaterial } from "three";
import { RoundedBoxGeometry } from "three-stdlib";
import { TCube } from "../models/Cube";

export default function Cube({
  cube,
  colors,
  isSelected,
  setSelectedCube,
}: {
  cube: TCube;
  colors: string[];
  setSelectedCube: (meshId: number | null) => void;
  isSelected: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);

  const colorsGeometry = useMemo(() => {
    return new RoundedBoxGeometry(
      cube.size,
      cube.size,
      cube.size,
      4,
      cube.cornerRadius
    );
  }, [cube.size, cube.cornerRadius]);

  const materials = useMemo(() => {
    return colors.map((colorName) => {
      const basicFaceColor: Color = new Color(colorName);
      const hoveredCubeColor: Color = basicFaceColor
        .clone()
        .offsetHSL(0, 0, 0.1);
      const faceColor: Color =
        isHovered || isSelected ? hoveredCubeColor : basicFaceColor;

      return new MeshBasicMaterial({ color: faceColor });
    });
  }, [colors, isHovered, isSelected]);

  return (
    <group
      name={cube.id.toString()}
      position={cube.initialPosition}
      onClick={(event) => {
        event.stopPropagation();
        setSelectedCube(isSelected ? null : cube.id);
      }}
      onPointerEnter={(event) => {
        event.stopPropagation();
        setIsHovered(true);
      }}
      onPointerOut={(event) => {
        event.stopPropagation();
        setIsHovered(false);
      }}
    >
      <mesh>
        <boxGeometry
          args={[cube.size - 0.02, cube.size - 0.02, cube.size - 0.02]}
        />
        <meshBasicMaterial color="#EEEEEE" />
      </mesh>
      {/* Mesh pour une face stylisée */}
      <mesh geometry={colorsGeometry} material={materials} />
      {/* <Edges color="white" lineWidth={5} scale={1.005} /> */}
    </group>
  );
}
