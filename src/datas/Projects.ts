import { Project, ETypes, ETechnologies } from "../models/Project";

const fuelToday: Project = {
  name: "Fuel Today",
  context: "M2 Informatique",
  date: new Date(2022, 0, 1),
  type: ETypes.Mobile,
  technologies: [ETechnologies.AndroidStudio, ETechnologies.Java],
  image: "fuel_today.png",
  description:
    "Application mobile Android utilisant le GPS du téléphone et une API du gouvernement afin de rechercher une station service selon les préférences utilisateurs (carburant, service(s) disponible(s), distance). Une fois la station désirée choisie, vous serez automatiquement redirigé vers Google Maps pour vous y rendre !",
  github: "Aucun...",
};

const jupiTerror: Project = {
  name: "Jupi-Terror",
  context: "M1 Informatique",
  date: new Date(2022, 0, 1),
  type: ETypes.Web,
  technologies: [
    ETechnologies.NodeJS,
    ETechnologies.HTML,
    ETechnologies.CSS,
    ETechnologies.JS,
    ETechnologies.ThreeJS,
    ETechnologies.Blender,
  ],
  image: "jupiTerror.png",
  description:
    "Space Invaders revisté par mes soins et jouable dans un navigateur web.",
  github: "Aucun...",
};

export const projects: {
  [key in "scolaire" | "personnel" | "professionnel"]: Project[];
} = {
  scolaire: [jupiTerror, fuelToday],
  personnel: [],
  professionnel: [],
};
