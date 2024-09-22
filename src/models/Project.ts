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

export type Project = {
  name: string;
  // context: string;
  abstract: string;
  type: ETypes;
  // date: Date;
  technologies: ETechnologies[];
  description: string;
  image: string;
  github?: string;
  website?: string;
};
