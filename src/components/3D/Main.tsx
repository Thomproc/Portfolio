import { useCallback, useEffect, useRef, useState } from "react";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, SpotLight } from "@react-three/drei";

import Environment from "./Environment";
import Computer from "./Computer";
import RubiksCubeComponent from "./RubiksCube";

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
} from "../../config";
import colors from "../../Themes/ColorTheme";

export default function Main() {
  const [target, setTarget] = useState<"desk" | "rubiksCube">("desk");
  const [cameraIsRotating, setCameraIsRotating] = useState(false);

  const rotationTimeout = useRef<NodeJS.Timeout | null>(null);

  const switchTarget = useCallback(
    (newTarget: "desk" | "rubiksCube"): boolean => {
      if (cameraIsRotating) {
        return false;
      }
      setTarget(newTarget);
      return target === "desk";
    },
    [target, cameraIsRotating],
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

  return (
    <Canvas shadows>
      <color attach="background" args={[colors.background3D]} />
      <Environment />

      <PerspectiveCamera makeDefault fov={90} position={cameraPosition} />
      {/* <axesHelper args={[20]} /> */}

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

      <Computer position={computerPosition} scale={computerScale} />
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
        maxDistance={orbitProps[target].distance}
        minDistance={orbitProps[target].distance}
        target={orbitProps[target].target}
      />
      <ambientLight intensity={1} />
      <SpotLight
        castShadow
        intensity={1.3}
        distance={0}
        position={[0, 300, 0]}
        angle={Math.PI / 3}
        penumbra={1}
        decay={0}
      />
    </Canvas>
  );
}
