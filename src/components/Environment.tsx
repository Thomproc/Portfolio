import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export default function Environment() {
  const office = useLoader(GLTFLoader, "/office.glb");
  return (
    <group scale={50} rotation={[0, Math.PI / 2, 0]}>
      <primitive object={office.scene} />
    </group>
  );
}
