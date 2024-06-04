import { Vector3 } from "three";
import { TCube } from "./Cube";

export default class RubiksCube {
  private dim: number;
  private cubesSize: number;
  private cubeColors: string[] = [
    "#1a5aa8",
    "#45a81a",
    "#841286",
    "#777777",
    "#9d6b00",
    "#a92f2f",
  ];
  private rotationSpeed: number;
  private offsetToCenter: number;
  private cubes: TCube[] = [];

  constructor({
    nbCubes,
    sizeCube,
    rotationSpeed,
  }: {
    nbCubes: number;
    sizeCube: number;
    rotationSpeed: number;
  }) {
    this.rotationSpeed = rotationSpeed;
    this.dim = nbCubes;
    this.cubesSize = sizeCube;
    this.offsetToCenter = ((this.dim - 1) * this.cubesSize) / 2;

    for (let indexCrown = 0; indexCrown < this.dim; indexCrown++) {
      for (let indexCube = 0; indexCube < this.dim * this.dim; indexCube++) {
        this.cubes.push({
          id: indexCrown * this.dim * this.dim + indexCube,
          size: this.cubesSize,
          cornerRadius: this.cubesSize / 10,
          initialPosition: [
            (indexCube % this.dim) * this.cubesSize - this.offsetToCenter,
            indexCrown * this.cubesSize - this.offsetToCenter,
            Math.floor(indexCube / this.dim) * this.cubesSize -
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
