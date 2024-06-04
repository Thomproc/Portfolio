import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Group, Vector3 } from "three";
import { useFrame, useThree } from "@react-three/fiber";
import { animated, useSpring } from "@react-spring/three";

import Cube from "./Cube";
import RubiksCube from "../models/RubiksCube";

export default function RubiksCubeComponent({
  dim,
  cubesSize,
  envPosition,
  envRotationY,
  focusedPosition,
  focusedRotationY,
  isFocused,
  focusMe,
}: {
  dim: number;
  cubesSize: number;
  envPosition: [number, number, number];
  envRotationY: number;
  focusedPosition: [number, number, number];
  focusedRotationY: number;
  isFocused: boolean;
  focusMe: () => void;
}) {
  const rubiksCube: RubiksCube = useMemo(() => {
    return new RubiksCube({
      nbCubes: dim,
      sizeCube: cubesSize < 1 ? 1 : cubesSize,
      rotationSpeed: 5,
    });
  }, [dim, envPosition, cubesSize]);

  const [selectedCubeId, setSelectedCubeId] = useState<number | null>(null);
  const [animation, setAnimation] = useState({
    playing: false,
    axis: "",
    direction: 1, // Mettre une valeur de 1 (ou -1) pour que l'animation de rotation se fasse dans le sens anti horaire (ou horaire )
  });
  const [wrongKey, setWrongKey] = useState(false);

  const RC = useRef<Group>(null);
  const faceToRotate = useRef<Group>(null);
  const { camera } = useThree();

  // Permet :
  // - d'empêcher un problème d'animation si on selectionne un autre cube lorsqu'elle est lancée
  // - de sélectionner le Rubik's Cube
  const setSelectedCubeWrapper = useCallback(
    (meshId: number | null) => {
      !animation.playing && setSelectedCubeId(meshId);
      !isFocused && focusMe();
    },
    [animation.playing, isFocused]
  );

  // Gestion des événements clavier pour faire tourner le cube
  useEffect(() => {
    const prepareCubesToRotate = (
      onSameAxisRotation: (
        meshPosition: Vector3,
        selectedMeshPosition: Vector3
      ) => boolean
    ) => {
      // Ajout des cubes à tourner dans le groupe "faceToRotate"
      const selectedMesh = RC.current?.getObjectByName(
        selectedCubeId!.toString()
      );
      if (selectedMesh && faceToRotate.current) {
        faceToRotate.current.rotation.set(0, 0, 0);
        // On récupère dans "faceToRotate"tous les cubes que l'on souhaite tourner
        let i = 1; // On saute le premier élément qui est le groupe "faceToRotate"
        while (i < RC.current!.children.length) {
          const mesh = RC.current!.children[i];
          if (onSameAxisRotation(mesh.position, selectedMesh.position)) {
            faceToRotate.current?.attach(mesh);
            i--;
          }
          i++;
        }
      }
    };

    const getAxes = () => {
      const cameraPosition = new Vector3(0, 0, 0);
      camera.getWorldPosition(cameraPosition);
      RC.current!.worldToLocal(cameraPosition);

      const absX = Math.abs(cameraPosition.x);
      const absZ = Math.abs(cameraPosition.z);

      if (absX > absZ) {
        return {
          main: {
            name: "x",
            func: rubiksCube.onSameX,
            mainDirection: cameraPosition.x >= 0 ? -1 : 1,
          },
          horizontal: {
            name: "z",
            func: rubiksCube.onSameZ,
            mainDirection: cameraPosition.x >= 0 ? 1 : -1,
          },
        };
      }
      return {
        main: {
          name: "z",
          func: rubiksCube.onSameZ,
          mainDirection: cameraPosition.z >= 0 ? -1 : 1,
        },
        horizontal: {
          name: "x",
          func: rubiksCube.onSameX,
          mainDirection: cameraPosition.z >= 0 ? -1 : 1,
        },
      };
    };
    const handleKeyUp = (event: KeyboardEvent) => {
      if (selectedCubeId === null || animation.playing) {
        return;
      }

      const axes = getAxes();
      const lowerKey = event.key.toLowerCase();

      // Rotation autour de l'axe verticale
      if (lowerKey === "d" || lowerKey === "q") {
        prepareCubesToRotate(rubiksCube.onSameY);
        setAnimation({
          axis: "y",
          playing: true,
          direction: event.key === "d" ? 1 : -1,
        });
        setWrongKey(false);
      }
      // Rotation autour de l'axe horizontal à la vue de la caméra
      else if (lowerKey === "z" || lowerKey === "s") {
        prepareCubesToRotate(axes!.horizontal.func);
        setAnimation({
          axis: axes!.horizontal.name,
          playing: true,
          direction:
            event.key === "z"
              ? axes!.horizontal.mainDirection
              : -1 * axes!.horizontal.mainDirection,
        });
        setWrongKey(false);
      }
      // Rotation autour de l'axe parallèle à la vue de la caméra
      else if (lowerKey === "e" || lowerKey === "a") {
        prepareCubesToRotate(axes!.main.func);
        setAnimation({
          axis: axes!.main.name,
          playing: true,
          direction:
            event.key === "e"
              ? axes!.main.mainDirection
              : -1 * axes!.main.mainDirection,
        });
        setWrongKey(false);
      }
      // Mauvaise touche
      else {
        setWrongKey(true);
      }
    };
    document.addEventListener("keyup", handleKeyUp, {
      once: true,
    });
    return () => {
      setWrongKey(false);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [selectedCubeId, animation.playing, wrongKey]);

  useEffect(() => {
    !isFocused && setSelectedCubeId(null);
  }, [isFocused]);

  // Animation de la rotation des cubes
  useFrame((_state, delta) => {
    if (animation.playing && faceToRotate.current) {
      let animationEnded: boolean = false;
      switch (animation.axis) {
        case "x":
          faceToRotate.current.rotation.x +=
            rubiksCube.getRotationSpeed() * delta * animation.direction;
          if (
            faceToRotate.current.rotation.x * animation.direction >=
            Math.PI / 2
          ) {
            faceToRotate.current.rotation.x =
              (Math.PI / 2) * animation.direction;
            animationEnded = true;
          }
          break;
        case "y":
          faceToRotate.current.rotation.y +=
            rubiksCube.getRotationSpeed() * delta * animation.direction;
          if (
            faceToRotate.current.rotation.y * animation.direction >=
            Math.PI / 2
          ) {
            faceToRotate.current.rotation.y =
              (Math.PI / 2) * animation.direction;
            animationEnded = true;
          }
          break;
        case "z":
          faceToRotate.current.rotation.z +=
            rubiksCube.getRotationSpeed() * delta * animation.direction;
          if (
            faceToRotate.current.rotation.z * animation.direction >=
            Math.PI / 2
          ) {
            faceToRotate.current.rotation.z =
              (Math.PI / 2) * animation.direction;
            animationEnded = true;
          }
          break;
        default:
          break;
      }

      if (animationEnded) {
        let i = 0;
        while (i < faceToRotate.current.children.length) {
          const mesh = faceToRotate.current.children[i];
          RC.current?.attach(mesh);
        }
        setAnimation({ playing: false, axis: "", direction: 1 });
      }
    }
  });

  const { animPosition, animRotationY } = useSpring({
    animPosition: isFocused ? focusedPosition : envPosition,
    animRotationY: isFocused ? focusedRotationY : envRotationY,
    config: { mass: 1, tension: 170, friction: 26 },
  });

  return (
    <animated.group ref={RC} position={animPosition} rotation-y={animRotationY}>
      <group ref={faceToRotate} />
      {rubiksCube.getCubes().map((cube) => (
        <Cube
          key={cube.id}
          cube={cube}
          colors={rubiksCube.getColors()}
          setSelectedCube={setSelectedCubeWrapper}
          isSelected={cube.id === selectedCubeId}
        />
      ))}
    </animated.group>
  );
}
