import { useCallback, useEffect, useRef, useState } from "react";
import { Context } from "./datas/Context";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, SpotLight } from "@react-three/drei";

import Environment from "./components/Environment";
import Computer from "./components/Computer";
import RubiksCubeComponent from "./components/RubiksCube";

import {
  RCdim,
  RCsizeCube,
  RCrotationSpeed,
  RCposition,
  RCfocusedPosition,
  RCfocusedRotationY,
  RCrotationY,
  computerPosition,
  computerScale,
  cameraPosition,
  orbitProps,
} from "./config";

function App() {
  const [target, setTarget] = useState<"desk" | "rubiksCube" | "computer">(
    "computer"
  );
  const [cameraIsRotating, setCameraIsRotating] = useState(false);
  const [computerCameraDistance, setComputerCameraDistance] = useState(
    orbitProps.computer.distance
  );
  const rotationTimeout = useRef<NodeJS.Timeout | null>(null);

  const switchTarget = useCallback(
    (newTarget: "desk" | "rubiksCube" | "computer"): boolean => {
      if (cameraIsRotating) {
        return false;
      }
      target === "desk" && setTarget(newTarget);
      return target === "desk";
    },
    [target, cameraIsRotating]
  );

  const handleControlStart = useCallback(() => {
    if (rotationTimeout.current) {
      clearTimeout(rotationTimeout.current);
    }
    rotationTimeout.current = setTimeout(() => {
      setCameraIsRotating(true);
    }, 250);
  }, []);

  const handleControlEnd = useCallback(() => {
    if (rotationTimeout.current) {
      clearTimeout(rotationTimeout.current);
    }
    setCameraIsRotating(false);
  }, []);

  useEffect(() => {
    const onKeyUp = (event: KeyboardEvent) => {
      event.key === "Escape" && setTarget("desk");
    };
    window.addEventListener("keyup", onKeyUp);
    return () => window.removeEventListener("keyup", onKeyUp);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setComputerCameraDistance(orbitProps.computer.distance());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    console.log("App monté avec valeur du contexte : chacale !");
  }, []);
  return (
    <Canvas shadows>
      <PerspectiveCamera makeDefault fov={90} position={cameraPosition} />
      <axesHelper args={[10]} />
      <Environment />

      <RubiksCubeComponent
        dim={RCdim}
        cubesSize={RCsizeCube}
        rotationSpeed={RCrotationSpeed}
        envPosition={RCposition}
        envRotationY={RCrotationY}
        focusedPosition={RCfocusedPosition}
        focusedRotationY={RCfocusedRotationY}
        isFocused={target === "rubiksCube"}
        focusMe={() => switchTarget("rubiksCube")}
        cameraIsRotating={cameraIsRotating}
      />

      <Context.Provider value="chacale !">
        <Computer
          position={computerPosition}
          scale={computerScale}
          isFocused={target === "computer"}
          focusMe={() => switchTarget("computer")}
        />
      </Context.Provider>
      <OrbitControls
        regress
        onStart={handleControlStart}
        onEnd={handleControlEnd}
        enablePan={false}
        enableZoom={false}
        minAzimuthAngle={orbitProps[target].minAzimuthAngle}
        maxAzimuthAngle={orbitProps[target].maxAzimuthAngle}
        minPolarAngle={orbitProps[target].minPolarAngle}
        maxPolarAngle={orbitProps[target].maxPolarAngle}
        maxDistance={
          target === "computer"
            ? computerCameraDistance
            : orbitProps[target].distance
        }
        minDistance={
          target === "computer"
            ? computerCameraDistance
            : orbitProps[target].distance
        }
        target={orbitProps[target].target}
      />
      <ambientLight intensity={0.8} />
      <SpotLight
        castShadow
        intensity={1}
        distance={0}
        position={[0, 70, 0]}
        angle={Math.PI / 5}
        penumbra={0.5}
        decay={0.1}
      />
    </Canvas>
  );
}

export default App;
