import { useState, useMemo } from "react";
import { Color, MeshLambertMaterial } from "three";
import { RoundedBoxGeometry } from "three-stdlib";
import { TCube } from "../../models/Cube";
import { Edges } from "@react-three/drei";

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

      return new MeshLambertMaterial({ color: faceColor });
    });
  }, [colors, isHovered, isSelected]);

  return (
    <group name={cube.id.toString()} position={cube.initialPosition}>
      <mesh
        castShadow
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
        <boxGeometry
          args={[
            cube.size - cube.size / 200,
            cube.size - cube.size / 200,
            cube.size - cube.size / 200,
          ]}
        />
        <meshLambertMaterial color="#EEEEEE" />
        <Edges color="black" lineWidth={0.3} scale={1.005} />
      </mesh>
      <mesh geometry={colorsGeometry} material={materials} />
    </group>
  );
}
