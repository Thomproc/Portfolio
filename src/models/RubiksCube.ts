import { Vector3 } from "three";
import { TCube } from "./Cube";

export default class RubiksCube {
  private nbCubes: number; // Rubik's cube de : n X n X n
  private position: [number, number, number];
  private rotation: [number, number, number];
  private sizeCube: number; // Taille d'un cube du rubik's cube
  private cubeColors: string[] = [
    "#1a5aa8",
    "#45a81a",
    "#841286",
    "#777777",
    "#9d6b00",
    "#a92f2f",
  ];
  private rotationSpeed: number = 5;
  private offsetToCenter: number;
  private cubes: TCube[] = [];

  constructor({
    nbCubes,
    position,
    rotation,
    sizeCube,
  }: {
    nbCubes: number;
    position: [number, number, number];
    rotation: [number, number, number];
    sizeCube: number;
  }) {
    this.nbCubes = nbCubes;
    this.position = position;
    this.rotation = rotation;
    this.sizeCube = sizeCube;
    this.offsetToCenter = ((this.nbCubes - 1) * this.sizeCube) / 2;

    for (let indexCrown = 0; indexCrown < this.nbCubes; indexCrown++) {
      for (
        let indexCube = 0;
        indexCube < this.nbCubes * this.nbCubes;
        indexCube++
      ) {
        this.cubes.push({
          id: indexCrown * this.nbCubes * this.nbCubes + indexCube,
          size: this.sizeCube,
          cornerRadius: this.sizeCube / 10,
          initialPosition: [
            (indexCube % this.nbCubes) * this.sizeCube - this.offsetToCenter,
            indexCrown * this.sizeCube - this.offsetToCenter,
            Math.floor(indexCube / this.nbCubes) * this.sizeCube -
              this.offsetToCenter,
          ],
        });
      }
    }
  }

  getCubes() {
    return this.cubes;
  }

  getCubeById(cubeId: number) {
    return this.cubes[cubeId];
  }

  getColors() {
    return this.cubeColors;
  }

  getRotationSpeed() {
    return this.rotationSpeed;
  }

  getPosition() {
    return this.position;
  }

  getRotation() {
    return this.rotation;
  }

  onSameX(meshPosition: Vector3, selectedMeshPosition: Vector3) {
    return (
      Math.round(meshPosition.x * 10) ===
      Math.round(selectedMeshPosition.x * 10)
    );
  }

  onSameY(meshPosition: Vector3, selectedMeshPosition: Vector3) {
    return (
      Math.round(meshPosition.y * 10) ===
      Math.round(selectedMeshPosition.y * 10)
    );
  }

  onSameZ(meshPosition: Vector3, selectedMeshPosition: Vector3) {
    return (
      Math.round(meshPosition.z * 10) ===
      Math.round(selectedMeshPosition.z * 10)
    );
  }
}
