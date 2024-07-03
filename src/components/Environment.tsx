import { MeshReflectorMaterial } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { colors } from "../datas/ColorTheme";
import {
  deskReflectorPosition,
  deskReflectorRotationX,
  envRotationY,
  envScale,
  floorPositionY,
  floorRotationX,
} from "../config";

export default function Environment() {
  const desk = useLoader(GLTFLoader, "./desk.glb");
  desk.scene.traverse(function (node) {
    if (node.isObject3D) {
      node.castShadow = true;
      node.receiveShadow = true;
    }
  });
  const floor = useLoader(GLTFLoader, "./floor.glb");
  floor.scene.traverse(function (node) {
    if (node.isObject3D) {
      node.receiveShadow = true;
    }
  });

  return (
    <>
      <fog attach="fog" args={[colors.fog, 0, 1000]} />
      <group scale={envScale} rotation-y={envRotationY}>
        <primitive object={desk.scene} />
        <primitive object={floor.scene} />
        <mesh
          rotation-x={deskReflectorRotationX}
          position={deskReflectorPosition}
        >
          <planeGeometry args={[0.6, 1.3]} />
          <MeshReflectorMaterial
            color={colors.deskReflector}
            mirror={0.2}
            blur={[400, 100]}
            resolution={1024}
            mixBlur={1}
            opacity={2}
            depthScale={1.1}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.25}
            roughness={1}
          />
        </mesh>
        <mesh rotation-x={floorRotationX} position-y={floorPositionY}>
          <planeGeometry args={[50, 50]} />
          <meshLambertMaterial color={colors.floor} />
        </mesh>
      </group>
    </>
  );
}
