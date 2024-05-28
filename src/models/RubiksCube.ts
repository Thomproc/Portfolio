import { Vector3 } from "three";
import { TCube } from "./Cube";

export default class RubiksCube {
  private nbCubes: number; // Rubik's cube de : n X n X n
  private position: [number, number, number];
  private sizeCube: number; // Taille d'un cube du rubik's cube
  private cubeColors: string[] = [
    "blue",
    "green",
    "purple",
    "grey",
    "orange",
    "red",
  ];
  private rotationSpeed: number = 5;
  private offsetToCenter: number;
  private cubes: TCube[] = [];

  constructor({
    nbCubes,
    position,
    sizeCube = 1,
  }: {
    nbCubes: number;
    position: [number, number, number];
    sizeCube: number;
  }) {
    this.nbCubes = nbCubes;
    this.position = position;
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
          cornerRadius: 0.13,
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
