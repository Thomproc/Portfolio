import { Project } from "../models/Project";
const fuelToday = {
  name: "Fuel Today",
  context: "M2 Informatique",
  technologies: ["Java", "XML", "Android Studio"],
  image: "fuel_today.png",
  description:
    "Application mobile utilisant le GPS du téléphone et une API du gouvernement afin de rechercher une station service selon les préférences utilisateurs (carburant, service(s) disponible(s), distance). Une fois la station désirée choisie, vous serez automatiquement redirigé vers Google Maps pour vous y rendre !",
  github: "Aucun...",
};

const jupiTerror = {
  name: "Jupi-Terror",
  context: "M1 Informatique",
  technologies: [
    "Java Script",
    "HTML",
    "CSS",
    "Node JS",
    "Three JS",
    "Blender",
  ],
  image: "jupiTerror.png",
  description:
    "Space Invaders revisté par mes soins et jouable dans un navigateur web.",
  github: "Aucun...",
};

export const projects: {
  [key in "scolaire" | "personnel" | "professionnel"]: Project[];
} = {
  scolaire: [fuelToday, jupiTerror],
  personnel: [],
  professionnel: [],
};
