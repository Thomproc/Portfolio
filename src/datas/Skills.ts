export type TSkill = {
  name: string;
  offsetX: string;
  offsetY: string;
  children?: TSkill[];
};

export const skills: TSkill[] = [
  {
    name: "Backend",
    offsetX: "0",
    offsetY: "0",

    children: [
      {
        name: "Langages",
        offsetX: "100%",
        offsetY: "150%",
        children: [
          {
            name: "Python",
            offsetX: "10em",
            offsetY: "5em",
          },
        ],
      },
      {
        name: "BDD",
        offsetX: "-12em",
        offsetY: "-2em",

        children: [],
      },
      {
        name: "Design patterns",
        offsetX: "5em",
        offsetY: "-13em",

        children: [],
      },
    ],
  },
  {
    name: "Frontend",
    offsetX: "25em",
    offsetY: "0em",

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
    offsetX: "25em",
    offsetY: "0em",

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
    offsetX: "25em",
    offsetY: "0em",

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
    offsetX: "25em",
    offsetY: "0em",

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
