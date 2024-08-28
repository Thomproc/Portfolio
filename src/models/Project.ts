export enum ECategories {
  Professionnel = "Professionnel",
  Scolaire = "Scolaire",
  Personnel = "Personnel",
}

export enum ETypes {
  Mobile = "Mobile",
  Web = "Web",
}

export enum ETechnologies {
  NodeJS = "NodeJS.png",
  TS = "TS.png",
  JS = "JS.png",
  HTML = "HTML.png",
  CSS = "CSS.png",
  ThreeJS = "ThreeJS.png",
  Blender = "Blender.png",
  AndroidStudio = "AndroidStudio.png",
  Java = "Java.png",
}

export type Project = {
  name: string;
  context: string;
  type: ETypes;
  date: Date;
  technologies: ETechnologies[];
  description: string;
  image: string;
  github?: string;
};
