import style from "./App.module.css";

import { Vector3 } from "three";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

import Environment from "./components/Environment";
import Computer from "./components/Computer";
import RubiksCubeComponent from "./components/RubiksCube";
import { useCallback, useState } from "react";

const cameraPosition = new Vector3(0, 20, 25);
const cameraTarget = new Vector3(0, 5, 0);

const RCdim = 3;
const RCsizeCube = 1.8;
const RCposition: [number, number, number] = [
  23,
  (RCdim * RCsizeCube) / 2,
  -10,
];
const RCrotation: [number, number, number] = [0, -Math.PI / 3.5, 0];

const RCfocusedPosition: [number, number, number] = [0, 10, 20];
const RCfocusedRotation: [number, number, number] = [0, 0, 0];

function App() {
  const [isFocused, setIsFocused] = useState(true);

  const setParentIsFocused = useCallback(
    (value: boolean) => setIsFocused(value),
    []
  );
  return (
    <div className={style["canvas-container"]}>
      <Canvas>
        <PerspectiveCamera makeDefault fov={90} position={cameraPosition} />
        <axesHelper args={[10]} />

        <Environment />
        <Computer />
        <RubiksCubeComponent
          dim={RCdim}
          sizeCube={RCsizeCube}
          envPosition={RCposition}
          envRotation={RCrotation}
          focusedPosition={RCfocusedPosition}
          focusedRotation={RCfocusedRotation}
          setParentIsFocused={setParentIsFocused}
        />

        <ambientLight intensity={-1} />
        <OrbitControls
          enabled={isFocused}
          enableZoom={false}
          position={cameraPosition}
          minAzimuthAngle={-Math.PI / 3}
          maxAzimuthAngle={Math.PI / 3}
          minPolarAngle={-Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
          target={cameraTarget}
        />
      </Canvas>
    </div>
  );
}

export default App;
