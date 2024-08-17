export type TSkill = { name: string; children?: TSkill[] };
export const skills: TSkill[] = [
  {
    name: "Backend",
    children: [
      {
        name: "Langages",
        children: [
          {
            name: "Python",
          },
        ],
      },
      {
        name: "BDD",
        children: [],
      },
      {
        name: "Design patterns",
        children: [],
      },
    ],
  },
  {
    name: "Frontend",
    children: [
      {
        name: "Langages",
        children: [],
      },
      {
        name: "Frameworks",
        children: [],
      },
    ],
  },
  {
    name: "Mobile",
    children: [
      {
        name: "Android",
        children: [],
      },
      {
        name: "Hybride",
        children: [],
      },
    ],
  },
  {
    name: "3D",
    children: [
      {
        name: "Blender",
      },
      {
        name: "Unity",
      },
    ],
  },
  {
    name: "Méthode de travail",
    children: [
      {
        name: "Git",
      },
      {
        name: "Agile",
      },
    ],
  },
];
