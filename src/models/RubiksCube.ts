import { TCube } from "./Cube";

export default class RubiksCube {
  private nbCubes: number; // Rubik's cube de : n X n X n
  private sizeCube: number; // Taille d'un cube du rubik's cube
  private cubeColors: string[] = [
    "blue",
    "green",
    "yellow",
    "grey",
    "orange",
    "red",
  ];
  private offsetToCenter: number;
  private cubes: TCube[] = [];
  private selectedCube: TCube | null = null;

  constructor({ nbCubes, sizeCube }: { nbCubes: number; sizeCube: number }) {
    this.nbCubes = nbCubes;
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
          position: [
            (indexCube % this.nbCubes) * this.sizeCube - this.offsetToCenter,
            indexCrown * this.sizeCube - this.offsetToCenter,
            Math.floor(indexCube / this.nbCubes) * this.sizeCube -
              this.offsetToCenter,
          ],
          rotation: [0, 0, 0],
          size: this.sizeCube,
        });
      }
    }
  }

  getCubes() {
    return this.cubes;
  }

  getColors() {
    return this.cubeColors;
  }

  getSelectedCube() {
    return this.selectedCube;
  }

  rotateUp() {
    if (this.selectedCube !== null) {
      this.selectedCube.rotation[0] += 10;
    }
  }

  private cubesToRotate(): TCube[] {
    const cubes: TCube[] = [];
    this.cubes.forEach((element) => {});
    return cubes;
  }
}
