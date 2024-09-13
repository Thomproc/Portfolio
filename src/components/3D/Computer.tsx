import styles from "./Computer.module.css";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { Html } from "@react-three/drei";
import { computerPosition } from "../../config";
import Homepage from "../2D/Home/Homepage";

export default function Computer({
  scale,
  position,
}: {
  scale: number;
  position: [number, number, number];
}) {
  const computer = useLoader(GLTFLoader, "/computer.glb");
  computer.scene.traverse(function (node) {
    if (node.isObject3D) {
      node.castShadow = true;
    }
  });

  return (
    <group
      // onClick={() => navigate(EMainsRoutes.MAIN2D)}
      scale={scale}
      position={position}
    >
      <primitive object={computer.scene} />
      <Html
        className={styles["computer"]}
        distanceFactor={1}
        occlude={"blending"}
        zIndexRange={[computerPosition[2]]}
        position={[0, 0, -0.037]}
        transform
        // onClick={() => navigate(EMainsRoutes.MAIN2D)}
      >
        <Homepage />
      </Html>
    </group>
  );
}
