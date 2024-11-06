import {
  CodeRounded,
  StorageRounded,
  IntegrationInstructionsOutlined,
  ExtensionOutlined,
  ShapeLineOutlined,
  AndroidOutlined,
  OnDeviceTrainingOutlined,
  ViewInArOutlined,
  // AnimationRounded,
} from "@mui/icons-material";

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
  color: string;
  area: string;
  direction: EDirection;
  categories: {
    name: string;
    icon: React.ElementType;
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
        icon: CodeRounded,
        content: ["Python", "C", "Java"],
      },
      {
        name: "Base de Données",
        icon: StorageRounded,
        content: ["SQLite", "PostgreSQL"],
      },
      {
        name: "Design patterns",
        icon: IntegrationInstructionsOutlined,
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
        icon: CodeRounded,
        content: ["JavaScript", "TypeScript", "HTML", "CSS"],
      },
      {
        name: "Frameworks",
        icon: ExtensionOutlined,
        content: ["React"],
      },
      {
        name: "Maquettes",
        icon: ShapeLineOutlined,
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
        icon: AndroidOutlined,
        content: ["Android Studio (Java)"],
      },
      {
        name: "Hybride",
        icon: OnDeviceTrainingOutlined,
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
        icon: ViewInArOutlined,
        content: ["Logiciel de modélisation et animation 3D"],
      },
      // {
      //   name: "Spline",
      //   icon: AnimationRounded,
      //   content: ["Outil de design et animations 3D interactives"],
      // },
    ],
  },
];
