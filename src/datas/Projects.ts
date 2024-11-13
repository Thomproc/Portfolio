import {
  Project,
  ECategories,
  EContext,
  ETypes,
  ETechnologies,
} from "../models/Project";

const fuelToday: Project = {
  name: "Fuel Today",
  context: EContext.M2,
  date: new Date(2024, 4, 8),
  type: ETypes.Mobile,
  technologies: [ETechnologies.AndroidStudio, ETechnologies.Java],
  mainImagePath: "./Images/Projects/fuel_today/fuel_today.png",
  carouselImages: [
    "portfolio.png",
    "homepage.png",
    "skills.png",
    "project.png",
    "modal.png",
    "contact.png",
    "rubiksCube.png",
  ],
  abstract:
    "Application mobile permettant de filtrer les stations-service à proximité afin de trouver celle au meilleur prix.",
  description: `FuelToday est une application mobile développée dans le cadre de mes études en utilisant Android Studio et Java. 
                Cette application permet aux utilisateurs de trouver des stations-service à proximité en fonction de leur localisation, grâce à l’utilisation du GPS intégré au téléphone. En définissant un rayon de recherche personnalisé, l’application effectue une requête vers une API gratuite pour récupérer les informations sur les stations-service environnantes.`,
  github: "https://github.com/Thomproc/fuelToday",
};

const jupiTerror: Project = {
  name: "Jupi-Terror",
  context: EContext.M1,
  date: new Date(2022, 2, 27),
  type: ETypes.Web,
  technologies: [
    ETechnologies.NodeJS,
    ETechnologies.HTML,
    ETechnologies.CSS,
    ETechnologies.JS,
    ETechnologies.ThreeJS,
    ETechnologies.Blender,
  ],
  mainImagePath: "./Images/Projects/jupiTerror/jupiTerror.png",
  carouselImages: [
    "jupiTerror.png",
    "homepage.png",
    "spaceship_upgrade1.png",
    "spaceship_upgrade2.png",
    "gameover.png",
    "victory.png",
  ],
  abstract:
    "Jeu web qui est une copie du célèbre Space Invaders... mais en 3D !",
  description: `
  Dans le cadre de ma première année de Master, j'ai été amené à concevoir un clone du jeu Space Invaders en 3D dans le respect du cahier des charges. Pour cela j'ai respecté le cahier des charges fourni par l'encadrant qui incluait l'utilisation de primitives 3D animées, d'effets post-processing, la création de plusieurs niveaux, une "IA" pour les ennemis, l'utilisation de sons et plusieurs angles de vues possibles (vue d'ensemble statique ou point de vue du vaisseau).`,
  github: "https://github.com/Thomproc/Space_invaders_threeJS",
  website: "https://Thomproc.github.io",
};

const twitter: Project = {
  name: "Twitter",
  context: EContext.M1,
  date: new Date(2023, 4, 8),
  type: ETypes.Web,
  technologies: [ETechnologies.Python],
  mainImagePath: "./Images/Projects/twitter/twitter.png",
  carouselImages: [
    "portfolio.png",
    "homepage.png",
    "skills.png",
    "project.png",
    "modal.png",
    "contact.png",
    "rubiksCube.png",
  ],
  abstract:
    "Amélioration de l'analyseur de tweets pré-existant afin d'afiner la détection d'entitées liées au tourisme (lieux, activités).",
  description: `
  Ce projet a été réalisé durant 3 mois afin d'aider un Doctorant en informatique. Le but était de détecter dans les tweets des lieux touristiques et des concepts associés au tourisme tels que des activités. 
  Pour ce faire, j'ai dû me familiariser avec une première version existante du projet afin de l'améliorer ainsi que découvrir les étapes intervenants dans le traitement automatique du langage.
  Une fois ce domaine découvert, je me suis formé à l'utilisation de la bibliothèque spaCy (Python) permettant justement l'analyse des tweets et donc l'extraction des entités souhaitées par application de règles de grammaires que j'ai préconçues.`,
};

const scene_iso: Project = {
  name: "Scène isométrique",
  context: EContext.Licence,
  date: new Date(2021, 11, 24),
  type: ETypes.Web,
  technologies: [ETechnologies.Python],
  mainImagePath: "./Images/Projects/scene_iso/scene_iso.png",
  carouselImages: [
    "scene_iso.png",
    "homepage.png",
    "customTexture.png",
    "customColor.png",
  ],
  abstract:
    "Création d'une interface 2D avec une illusion de 3D sur laquelle il est possible de placer et customiser des cubes.",
  description: `
  Ce projet consistait à imaginer puis implémenter une interface permettant à l'utilisateur de placer / supprimer des cubes sur une scène en vue isométrique. Il pourra aussi ajouter / enlever une couleur à une face, appliquer / enlever une "texture" à un cube, faire tourner la scène, sauvegarder / ouvrir une scène qu'il a composer. 
  L'ensemble du projet a été réalisé en python (librairie Tkinter) avec une approche orientée objet.`,
  github: "https://github.com/Thomproc/Scene_iso_github",
};

const gestion_comptes: Project = {
  name: "Comptabilité",
  context: EContext.Personnel,
  date: new Date(2022, 4, 12),
  type: ETypes.Mobile,
  technologies: [ETechnologies.Flutter, ETechnologies.PostgreSQL],
  mainImagePath: "./Images/Projects/compte/compte.jpg",
  carouselImages: [
    "portfolio.png",
    "homepage.png",
    "skills.png",
    "project.png",
    "modal.png",
    "contact.png",
    "rubiksCube.png",
  ],
  abstract:
    "Une application mobile pour visualiser la répartition des dépenses entre deux utilisateurs.",
  description: `
  Cette application mobile gère la répartition des dépenses entre deux utilisateurs afin de déterminer celui qui doit rembourser l'autre. 
  Elle permet d'ajouter, modifier, supprimer et consulter des transactions tout en calculant automatiquement la balance des comptes. 
  Une fonctionnalité de visualisation graphique montre la répartition des dépenses par catégorie (alimentation, transport, loisirs, etc.), offrant une vue d'ensemble claire des finances. 
  Les données sont stockées de manière sécurisée grâce au service cloud Heroku avec PostgreSQL.`,
};

const portfolio: Project = {
  name: "Portfolio",
  context: EContext.Personnel,
  date: new Date(2024, 10, 7),
  type: ETypes.Web,
  technologies: [
    ETechnologies.NodeJS,
    ETechnologies.React,
    ETechnologies.HTML,
    ETechnologies.CSS,
    ETechnologies.TS,
  ],
  mainImagePath: "./Images/Projects/portfolio/portfolio.png",
  carouselImages: [
    "portfolio.png",
    "homepage.png",
    "skills.png",
    "project.png",
    "modal.png",
    "contact.png",
    "rubiksCube.png",
  ],
  abstract:
    "Le portfolio du dev, c'est comme le CV d'un RH : il doit être parfait, mais on sait tous qu'il n’y a pas de vrai contrôle qualité !",
  description: `
  J'ai développé un portfolio en ligne pour mettre en valeur mes compétences et mes projets, dans le cadre de mon lancement en tant que freelance.
  Ce dernier permet aux visiteurs de découvrir mes réalisations et mes compétences techniques à travers une interface moderne et intuitive.
  Ce projet reflète mon expertise en développement web et mon engagement à offrir des services professionnels de qualité.
  `,
};

export const projects: {
  [key in ECategories]: Project[];
} = {
  [ECategories.Scolaire]: [fuelToday, jupiTerror, twitter, scene_iso],
  [ECategories.Personnel]: [portfolio, gestion_comptes],
  [ECategories.Professionnel]: [],
};
