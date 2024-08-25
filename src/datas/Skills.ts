export type TSkill = {
  name: string;
  offsetX: string;
  offsetY: string;
  children?: TSkill[];
};

export const skills: TSkill[] = [
  {
    name: "Backend",
    offsetX: "50%",
    offsetY: "0%",

    children: [
      {
        name: "Langages",
        offsetX: "0%",
        offsetY: "200%",
        children: [
          {
            name: "Python",
            offsetX: "0%",
            offsetY: "220%",
          },
          {
            name: "L2",
            offsetX: "200%",
            offsetY: "150%",
          },
          {
            name: "L3",
            offsetX: "-200%",
            offsetY: "150%",
          },
        ],
      },
      {
        name: "BDD",
        offsetX: "180%",
        offsetY: "-100%",

        children: [],
      },
      {
        name: "Design patterns",
        offsetX: "-180%",
        offsetY: "-100%",

        children: [],
      },
    ],
  },
  {
    name: "Frontend",
    offsetX: "15%",
    offsetY: "30%",

    children: [
      {
        name: "Langages",
        offsetX: "180%",
        offsetY: "100%",

        children: [],
      },
      {
        name: "Frameworks",
        offsetX: "-180%",
        offsetY: "100%",

        children: [],
      },
    ],
  },
  {
    name: "Mobile",
    offsetX: "90%",
    offsetY: "30%",

    children: [
      {
        name: "Android",
        offsetX: "180%",
        offsetY: "-100%",

        children: [],
      },
      {
        name: "Hybride",
        offsetX: "-180%",
        offsetY: "100%",

        children: [],
      },
    ],
  },
  {
    name: "3D",
    offsetX: "85%",
    offsetY: "80%",

    children: [
      {
        name: "Blender",
        offsetX: "-180%",
        offsetY: "-100%",
      },
      {
        name: "Unity",
        offsetX: "180%",
        offsetY: "100%",
      },
    ],
  },
  {
    name: "Méthode de travail",
    offsetX: "25%",
    offsetY: "80%",

    children: [
      {
        name: "Git",
        offsetX: "-200%",
        offsetY: "0%",
      },
      {
        name: "Agile",
        offsetX: "200%",
        offsetY: "0%",
      },
    ],
  },
];
