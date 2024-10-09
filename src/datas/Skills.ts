export enum ESkills {
  BACKEND = "Backend",
  FRONTEND = "Frontend",
  MOBILE = "Mobile",
  THREED = "3D",
}

export enum ESkillsAreas {
  BACKEND = "backend",
  FRONTEND = "frontend",
  MOBILE = "mobile",
  THREED = "threeD",
}

export enum ESkillsColors {
  BACKEND = "#3198ff",
  FRONTEND = "#e385d8",
  MOBILE = "#5d9f53",
  THREED = "#c78030",
}

export enum EDirection {
  VERTICAL = "vertical",
  HORIZONTAL = "horizontal",
}

export type TSkill = {
  name: string;
  color: String;
  area: String;
  direction: EDirection;
  categories: {
    name: string;
    content: string[];
  }[];
};

export const skills: TSkill[] = [
  {
    name: ESkills.BACKEND,
    color: ESkillsColors.BACKEND,
    area: ESkillsAreas.BACKEND,
    direction: EDirection.HORIZONTAL,
    categories: [
      {
        name: "Langages",
        content: ["Python", "C", "Java"],
      },
      {
        name: "Base de Données",
        content: ["SQLite", "PostgreSQL"],
      },
      {
        name: "Design patterns",
        content: ["Modèles Vues Contrôleur", "Object Relationnal Mapping"],
      },
    ],
  },
  {
    name: ESkills.FRONTEND,
    color: ESkillsColors.FRONTEND,
    area: ESkillsAreas.FRONTEND,
    direction: EDirection.HORIZONTAL,
    categories: [
      {
        name: "Langages",
        content: ["JavaScript", "TypeScript", "HTML", "CSS"],
      },
      {
        name: "Frameworks",
        content: ["React"],
      },
      {
        name: "Maquettes",
        content: ["Figma"],
      },
    ],
  },
  {
    name: ESkills.MOBILE,
    color: ESkillsColors.MOBILE,
    area: ESkillsAreas.MOBILE,
    direction: EDirection.VERTICAL,

    categories: [
      {
        name: "Android",
        content: ["Android Studio (Java)"],
      },
      {
        name: "Hybride",
        content: ["Flutter (Dart)"],
      },
    ],
  },
  {
    name: ESkills.THREED,
    color: ESkillsColors.THREED,
    area: ESkillsAreas.THREED,
    direction: EDirection.HORIZONTAL,
    categories: [
      {
        name: "Blender",
        content: ["Logiciel de création ...."],
      },
      {
        name: "Spline",
        content: ["Logiciel de création ...."],
      },
    ],
  },
];
