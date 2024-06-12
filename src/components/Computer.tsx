import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { Html } from "@react-three/drei";
import style from "./Computer.module.css";
import { orbitProps, computerPosition } from "../config";
import Homepage from "./projects/Homepage";

export default function Commputer({
  scale,
  position,
  isFocused,
  focusMe,
}: {
  scale: number;
  position: [number, number, number];
  isFocused: boolean;
  focusMe: () => boolean;
}) {
  const computer = useLoader(GLTFLoader, "/computer.glb");
  return (
    <group>
      <group
        onClick={() => !isFocused && focusMe()}
        scale={scale}
        position={position}
      >
        <primitive object={computer.scene} />

        {/* Écran de l'ordinateur dans l'environnement 3D */}
        {!isFocused && (
          <Html
            className={style["computer"]}
            distanceFactor={1}
            occlude="blending"
            position={[0, 0, -0.035]}
            transform
            onClick={focusMe}
            zIndexRange={[computerPosition[2]]}
          >
            <Homepage />
          </Html>
        )}
      </group>

      {/* Page web */}
      {isFocused && (
        <Html
          className={style["computer-focused"]}
          position-y={orbitProps.computer.target.y}
          center
        >
          <Homepage />
        </Html>
      )}
    </group>
  );
}
