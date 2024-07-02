import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

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
    <group scale={50} rotation={[0, Math.PI / 2, 0]}>
      {/* <group castShadow receiveShadow rotation={[0, Math.PI / 2, 0]}> */}
      {/* <group castShadow receiveShadow> */}
      <primitive object={desk.scene} />
      {/* </group> */}
      <primitive object={floor.scene} />
    </group>
  );
}
