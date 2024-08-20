export type TSkill = {
  name: string;
  offsetX: string;
  offsetY: string;
  children?: TSkill[];
};

export const skills: TSkill[] = [
  {
    name: "Backend",
    offsetX: "0%",
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
    offsetX: "0%",
    offsetY: "0%",

    children: [
      {
        name: "Langages",
        offsetX: "25em",
        offsetY: "0em",

        children: [],
      },
      {
        name: "Frameworks",
        offsetX: "25em",
        offsetY: "0em",

        children: [],
      },
    ],
  },
  {
    name: "Mobile",
    offsetX: "0%",
    offsetY: "0%",

    children: [
      {
        name: "Android",
        offsetX: "25em",
        offsetY: "0em",

        children: [],
      },
      {
        name: "Hybride",
        offsetX: "25em",
        offsetY: "0em",

        children: [],
      },
    ],
  },
  {
    name: "3D",
    offsetX: "0%",
    offsetY: "0%",

    children: [
      {
        name: "Blender",
        offsetX: "25em",
        offsetY: "0em",
      },
      {
        name: "Unity",
        offsetX: "25em",
        offsetY: "0em",
      },
    ],
  },
  {
    name: "Méthode de travail",
    offsetX: "0%",
    offsetY: "0%",

    children: [
      {
        name: "Git",
        offsetX: "25em",
        offsetY: "0em",
      },
      {
        name: "Agile",
        offsetX: "25em",
        offsetY: "0em",
      },
    ],
  },
];
