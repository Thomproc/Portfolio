import { useState } from "react";
// import { useFrame } from "@react-three/fiber";
import { Color } from "three";
import { Edges } from "@react-three/drei";
import { TCube } from "../models/Cube";

export default function Cube({
  cube,
  colors,
  isSelected,
  setSelectedCube,
}: {
  cube: TCube;
  colors: string[];
  setSelectedCube: (cube: number | null) => void;
  isSelected: boolean;
}) {
  // const meshRef = useRef<Mesh>(new Mesh());
  const [hoveredFaceIndex, setHoveredFaceIndex] = useState(-1);

  const [selectedFaceIndex, setSelectedFaceIndex] = useState(-1);

  //   useFrame((_state, delta) => (meshRef.current.rotation.x += delta));

  return (
    <mesh
      // ref={meshRef}
      position={cube.position}
      rotation={cube.rotation}
      onClick={(event) => {
        setSelectedFaceIndex(event.face!.materialIndex);
        event.stopPropagation();
        setSelectedCube(cube.id);
      }}
      onPointerMove={(event) => {
        event.stopPropagation();
        setHoveredFaceIndex(event.face!.materialIndex);
      }}
      onPointerOut={(event) => {
        event.stopPropagation();
        setHoveredFaceIndex(-1);
      }}
    >
      <boxGeometry args={[cube.size, cube.size, cube.size]} />

      {colors.map((colorName, index) => {
        const basicFaceColor: Color = new Color(colorName);
        const hoveredCubeColor: Color = basicFaceColor
          .clone()
          .offsetHSL(0, 0, 0.1);
        const hoveredFaceColor = basicFaceColor.clone().offsetHSL(0, 0, 0.25);
        let faceColor: Color = basicFaceColor;
        if (hoveredFaceIndex !== -1) {
          faceColor =
            index === hoveredFaceIndex ? hoveredFaceColor : hoveredCubeColor;
        } else if (isSelected) {
          faceColor =
            index === selectedFaceIndex ? hoveredFaceColor : hoveredCubeColor;
        }

        return (
          <meshBasicMaterial
            key={index}
            attach={`material-${index}`}
            color={faceColor}
          />
        );
      })}

      <Edges color="black" lineWidth={2} scale={1.005} />
    </mesh>
  );
}
