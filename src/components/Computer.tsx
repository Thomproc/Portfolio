import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { Html } from "@react-three/drei";
import { computerPosition } from "../config";
import Homepage from "./website/Homepage";
import styles from "./Computer.module.css";

export default function Computer({
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
    <group
      onClick={() => !isFocused && focusMe()}
      scale={scale}
      position={position}
    >
      <primitive object={computer.scene} />
      <Html
        className={isFocused ? styles["computer-focused"] : styles["computer"]}
        distanceFactor={isFocused ? undefined : 1}
        occlude={isFocused ? undefined : "blending"}
        zIndexRange={isFocused ? undefined : [computerPosition[2]]}
        position={isFocused ? [0, 0, 0] : [0, 0, -0.037]}
        transform
        onClick={focusMe}
      >
        <Homepage />
      </Html>
    </group>
  );
}
