import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export default function Commputer() {
  const computer = useLoader(GLTFLoader, "/computer.glb");
  return (
    <group scale={40} position={[-0.5, 0, -7]} rotation={[0, -Math.PI / 2, 0]}>
      <primitive object={computer.scene}></primitive>
    </group>
  );
}
