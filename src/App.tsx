import style from "./App.module.css";
import { useEffect, useState } from "react";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

import Environment from "./components/Environment";
import Computer from "./components/Computer";
import RubiksCubeComponent from "./components/RubiksCube";

import {
  RCdim,
  RCsizeCube,
  RCposition,
  RCfocusedPosition,
  RCfocusedRotationY,
  orbitProps,
  RCrotationY,
  cameraPosition,
} from "./config";

function App() {
  const [target, setTarget] = useState<"desk" | "rubiksCube" | "computer">(
    "desk"
  );

  useEffect(() => {
    const onKeyUp = (event: KeyboardEvent) => {
      event.key === "Escape" && setTarget("desk");
    };
    window.addEventListener("keyup", onKeyUp);
    onKeyUp;
  }, []);

  return (
    <div className={style["canvas-container"]}>
      <Canvas>
        <PerspectiveCamera makeDefault fov={90} position={cameraPosition} />
        <axesHelper args={[10]} />
        <Environment />
        <Computer />
        <RubiksCubeComponent
          dim={RCdim}
          cubesSize={RCsizeCube}
          envPosition={RCposition}
          envRotationY={RCrotationY}
          focusedPosition={RCfocusedPosition}
          focusedRotationY={RCfocusedRotationY}
          isFocused={target === "rubiksCube"}
          focusMe={() => setTarget("rubiksCube")}
        />
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          minAzimuthAngle={orbitProps[target].minAzimuthAngle}
          maxAzimuthAngle={orbitProps[target].maxAzimuthAngle}
          minPolarAngle={orbitProps[target].minPolarAngle}
          maxPolarAngle={orbitProps[target].maxPolarAngle}
          maxDistance={orbitProps[target].distance}
          minDistance={orbitProps[target].distance}
          target={orbitProps[target].target}
        />
        <ambientLight intensity={-1} />
      </Canvas>
    </div>
  );
}

export default App;
