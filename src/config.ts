import { Vector3 } from "three";

// Rubik's Cube
export const RCdim = 3; // Rubik's cube de : n X n X n
export const RCsizeCube = 1.8; // Taille d'un cube du rubik's cube : ne peut pas être inférieure à 1
export const RCrotationSpeed = 7; // Vitesse de rotation de la face du rubik's cube
// Propriétés du rubik's cube dans l'environnement
export const RCposition: [number, number, number] = [
  23,
  (RCdim * RCsizeCube) / 2,
  -10,
];
export const RCrotationY = -Math.PI / 3.5;
// Proprités du rubik's cube lorsqu'il est observé
export const RCfocusedPosition: [number, number, number] = [0, 10, 20];
export const RCfocusedRotationY = 0;

// Ordinateur
export const computerPosition: [number, number, number] = [0, 15, -8];
export const computerScale = 40;

//Environnement
export const envScale = 50;
export const envRotationY = Math.PI / 2;

export const floorRotationX = -Math.PI / 2;
export const floorPositionY = -0.9;

export const deskReflectorRotationX = -Math.PI / 2;
export const deskReflectorPosition: [number, number, number] = [0.15, 0.001, 0];

// Camera
export const cameraPosition = new Vector3(0, 20, 25);
export let orbitProps = {
  desk: {
    minAzimuthAngle: -Math.PI / 3,
    maxAzimuthAngle: Math.PI / 3,
    minPolarAngle: Math.PI / 4,
    maxPolarAngle: (5 * Math.PI) / 8,
    distance: 30,
    target: new Vector3(0, 10, 0),
  },
  rubiksCube: {
    minAzimuthAngle: -Infinity,
    maxAzimuthAngle: Infinity,
    minPolarAngle: Math.PI / 4,
    maxPolarAngle: (3 * Math.PI) / 4,
    distance: 10,
    target: new Vector3().fromArray(RCfocusedPosition),
  },
};
