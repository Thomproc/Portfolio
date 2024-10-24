import React from "react";
import {
  HomeOutlined,
  InsightsOutlined,
  BusinessCenterOutlined,
  EmailOutlined,
} from "@mui/icons-material";

export enum ERoutes2D {
  HOME = "Accueil",
  SKILLS = "Compétences",
  PROJECTS = "Projets",
  CONTACT = "Contact",
}

export enum EMainsRoutes {
  MAIN2D = "/",
  MAIN3D = "/univers",
}

export const Routes2DRefs = {
  [ERoutes2D.HOME]: React.createRef<HTMLDivElement>(),
  [ERoutes2D.SKILLS]: React.createRef<HTMLDivElement>(),
  [ERoutes2D.PROJECTS]: React.createRef<HTMLDivElement>(),
  [ERoutes2D.CONTACT]: React.createRef<HTMLDivElement>(),
};

export const Routes2DIcons = {
  [ERoutes2D.HOME]: HomeOutlined,
  [ERoutes2D.SKILLS]: InsightsOutlined,
  [ERoutes2D.PROJECTS]: BusinessCenterOutlined,
  [ERoutes2D.CONTACT]: EmailOutlined,
};

export default ERoutes2D;
