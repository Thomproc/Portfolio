import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { Html } from "@react-three/drei";
import { computerPosition } from "../config";
import styles from "./Computer.module.css";
import Main from "./website/Main";

export default function Computer({
  scale,
  position,
  isFocused,
  changeFocus,
}: {
  scale: number;
  position: [number, number, number];
  isFocused: boolean;
  changeFocus: (value: "computer" | "rubiksCube" | "desk") => boolean;
}) {
  const computer = useLoader(GLTFLoader, "/computer.glb");
  computer.scene.traverse(function (node) {
    if (node.isObject3D) {
      node.castShadow = true;
    }
  });

  return (
    <group
      onClick={() => !isFocused && changeFocus("computer")}
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
        onClick={() => changeFocus("computer")}
      >
        <Main changeFocus={changeFocus} />
      </Html>
    </group>
  );
}
