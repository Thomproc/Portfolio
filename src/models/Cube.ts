// const colors = ["blue", "green", "yellow", "grey", "orange", "red"];
// export default class Cube {
//   private id: number;
//   private position: [number, number, number];
//   private size: number;
//   constructor({
//     id,
//     position,
//     size,
//   }: {
//     id: number;
//     position: [number, number, number];
//     size: number;
//   }) {
//     this.id = id;
//     this.position = position;
//     this.size = size;
//   }

//   getId() {
//     return this.id;
//   }

//   getPosition() {
//     return this.position;
//   }

//   getSize() {
//     return this.size;
//   }

//   getColors() {
//     return colors;
//   }
// }

export type TCube = {
  id: number;
  position: [number, number, number];
  rotation: [number, number, number];
  size: number;
};
