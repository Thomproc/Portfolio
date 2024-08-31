import { Project, ECategories, ETypes, ETechnologies } from "../models/Project";

const fuelToday: Project = {
  name: "Fuel Today",
  // context: "M2 Informatique",
  // date: new Date(2022, 0, 1),
  // type: ETypes.Mobile,
  technologies: [ETechnologies.AndroidStudio, ETechnologies.Java],
  image: "fuel_today.png",
  description: `FuelToday est une application mobile développée dans le cadre de mes études en utilisant Android Studio et Java. 
                Cette application permet aux utilisateurs de trouver des stations-service à proximité en fonction de leur localisation, grâce à l’utilisation du GPS intégré au téléphone. En définissant un rayon de recherche personnalisé, l’application effectue une requête vers une API gratuite pour récupérer les informations sur les stations-service environnantes.`,
  // "Application mobile Android utilisant le GPS du téléphone et une API du gouvernement afin de rechercher une station service selon les préférences utilisateurs (carburant, service(s) disponible(s), distance). Une fois la station désirée choisie, vous serez automatiquement redirigé vers Google Maps pour vous y rendre !",
};

const jupiTerror: Project = {
  name: "Jupi-Terror",
  // context: "M1 Informatique",
  // date: new Date(2022, 0, 1),
  // type: ETypes.Web,
  technologies: [
    ETechnologies.NodeJS,
    ETechnologies.HTML,
    ETechnologies.CSS,
    ETechnologies.JS,
    ETechnologies.ThreeJS,
    ETechnologies.Blender,
  ],
  image: "jupiTerror.png",
  description: `
  Dans le cadre de ma première année de Master, j'ai dû concevoir un clone du jeu Space Invaders en 3D. Pour cela j'ai respecté le cahier des charges fournit par l'encadrant qui incluait l'utilisation de primitives 3D animées, d'effets post-processing, la création de plusieurs niveaux, une "IA" pour les ennemis, l'utilisation de sons et plusieurs angles de vues possibles (vue d'ensemble statique ou point de vue du vaisseau).`,
  github: "https://github.com/Thomproc/Space_invaders_threeJS",
  website: "https://Thomproc.github.io",
};

const twitter: Project = {
  name: "Twitter",
  // context: "M1 Informatique",
  // date: new Date(2022, 0, 1),
  // type: ETypes.Web,
  technologies: [ETechnologies.Python],
  image: "twitter.png",
  description: `
  Ce projet a été réalisé durant 3 mois afin d'aider un Doctorant en informatique. Le but était de détecter dans les tweets des lieux touristiques et des concepts associés au tourisme tels que des activités. 
  Pour ce faire, j'ai dû me familiariser avec une première version existante du projet afin de l'améliorer ainsi que découvrir les étapes intervenants dans le traitement automatique du langage.
  Une fois ce domaine découvert, je me suis formé à l'utilisation de la bibliothèque spaCy (Python) permettant justement l'analyse des tweets et donc l'extraction des entités souhaitées par application de règles de grammaires que j'ai préconçues.`,
};

const scene_iso: Project = {
  name: "Scène isométrique",
  // context: "M1 Informatique",
  // date: new Date(2022, 0, 1),
  // type: ETypes.Web,
  technologies: [ETechnologies.Python],
  image: "scene_iso.png",
  description: `
  Ce projet consiste à imaginer puis implémenter une interface permettant à l'utilisateur de placer / supprimer des cubes sur une scène en vue isométrique. Il pourra aussi ajouter / enlever une couleur à une face, appliquer / enlever une "texture" à un cube, faire tourner la scène, enregistrer / ouvrir une scène créée. 
  L'ensemble du projet a été réalisé en python (librairie Tkinter) avec une approche orientée objet.`,
};

const gestion_comptes: Project = {
  name: "Comptabilité",
  // context: "M1 Informatique",
  // date: new Date(2022, 0, 1),
  // type: ETypes.Web,
  technologies: [ETechnologies.Flutter, ETechnologies.PostgreSQL],
  image: "compte.jpg",
  description: `
  Cette application mobile gère la répartition des dépenses entre deux utilisateurs afin de déterminer celui qui doit rembourser l'autre. 
  Elle permet d'ajouter, modifier, supprimer et consulter des transactions tout en calculant automatiquement la balance des comptes. 
  Une fonctionnalité de visualisation graphique montre la répartition des dépenses par catégorie (alimentation, transport, loisirs, etc.), offrant une vue d'ensemble claire des finances. 
  Les données sont stockées de manière sécurisée grâce au service cloud Heroku avec PostgreSQL.`,
};

const portfolio: Project = {
  name: "Portfolio",
  // context: "M1 Informatique",
  // date: new Date(2022, 0, 1),
  // type: ETypes.Web,
  technologies: [
    ETechnologies.NodeJS,
    ETechnologies.React,
    ETechnologies.HTML,
    ETechnologies.CSS,
    ETechnologies.TS,
  ],
  image: "portfolio.png",
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
