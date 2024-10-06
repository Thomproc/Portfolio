import React from "react";

export enum ERoutes2D {
  HOME = "home",
  PROJECTS = "projects",
  SKILLS = "skills",
  CONTACT = "contact",
  PROJECT = "/project",
}

export enum EMainsRoutes {
  MAIN2D = "/",
  MAIN3D = "/univers",
}

export const Routes2DRefs = {
  [ERoutes2D.HOME]: React.createRef<HTMLDivElement>(),
  [ERoutes2D.PROJECTS]: React.createRef<HTMLDivElement>(),
  [ERoutes2D.SKILLS]: React.createRef<HTMLDivElement>(),
  [ERoutes2D.CONTACT]: React.createRef<HTMLDivElement>(),
};

export default ERoutes2D;
