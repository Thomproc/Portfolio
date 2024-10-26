import { IconType } from "react-icons";
import { FaNodeJs } from "react-icons/fa";

export enum ECategories {
  Professionnel = "Professionnel",
  Scolaire = "Scolaire",
  Personnel = "Personnel",
}

export enum ETypes {
  Mobile = "Mobile",
  Web = "Web",
}

export enum EContext {
  M1 = "M1 Informatique",
  M2 = "M2 Informatique",
  Licence = "Licence Informatique",
  Personnel = "Intérêt Personnel",
  Freelance = "Freelance",
}

export enum ETechnologies {
  NodeJS = "NodeJS",
  TS = "TypeScript",
  JS = "JS",
  HTML = "HTML",
  CSS = "CSS",
  ThreeJS = "ThreeJS",
  Blender = "Blender",
  AndroidStudio = "AndroidStudio",
  Java = "Java",
  Flutter = "Flutter",
  Python = "Python",
  PostgreSQL = "PostgreSQL",
  React = "React",
}

export const technologiesIcons: { [key in ETechnologies]: IconType } = {
  [ETechnologies.NodeJS]: FaNodeJs,
  [ETechnologies.TS]: FaNodeJs,
  [ETechnologies.JS]: FaNodeJs,
  [ETechnologies.HTML]: FaNodeJs,
  [ETechnologies.CSS]: FaNodeJs,
  [ETechnologies.ThreeJS]: FaNodeJs,
  [ETechnologies.Blender]: FaNodeJs,
  [ETechnologies.AndroidStudio]: FaNodeJs,
  [ETechnologies.Java]: FaNodeJs,
  [ETechnologies.Flutter]: FaNodeJs,
  [ETechnologies.Python]: FaNodeJs,
  [ETechnologies.PostgreSQL]: FaNodeJs,
  [ETechnologies.React]: FaNodeJs,
};

type Technology = {
  name: ETechnologies;
  icon: IconType;
};

export type Project = {
  name: string;
  context: EContext;
  abstract: string;
  type: ETypes;
  date: Date;
  technologies: Technology[];
  description: string;
  image: string;
  github?: string;
  website?: string;
};
