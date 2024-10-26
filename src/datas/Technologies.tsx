import React from "react";
import { ETechnologies } from "../models/Project";

import {
  FaNodeJs,
  FaCss3Alt,
  FaJava,
  FaPython,
  FaReact,
  FaHtml5,
} from "react-icons/fa";
import { RiCompasses2Fill, RiJavascriptLine } from "react-icons/ri";
import {
  SiFlutter,
  SiThreedotjs,
  SiPostgresql,
  SiBlender,
} from "react-icons/si";
import { TbBrandTypescript } from "react-icons/tb";

const iconCommonProps = { size: 22 };

const TechnologyToIcon: { [key in ETechnologies]: React.ReactElement } = {
  [ETechnologies.NodeJS]: <FaNodeJs {...iconCommonProps} color="#3C873A" />,
  [ETechnologies.TS]: (
    <TbBrandTypescript {...iconCommonProps} color="#3178C6" />
  ),
  [ETechnologies.JS]: <RiJavascriptLine {...iconCommonProps} color="#F0DB4F" />,
  [ETechnologies.HTML]: <FaHtml5 {...iconCommonProps} color="#E34F26" />,
  [ETechnologies.CSS]: <FaCss3Alt {...iconCommonProps} color="#2965F1" />,
  [ETechnologies.ThreeJS]: <SiThreedotjs {...iconCommonProps} />,
  [ETechnologies.Blender]: <SiBlender {...iconCommonProps} color="#F5793A" />,
  [ETechnologies.AndroidStudio]: (
    <RiCompasses2Fill {...iconCommonProps} color="#328afc" />
  ),
  [ETechnologies.Java]: <FaJava {...iconCommonProps} color="#ED8B00" />,
  [ETechnologies.Flutter]: <SiFlutter {...iconCommonProps} color="#21a2ed" />,
  [ETechnologies.Python]: <FaPython {...iconCommonProps} color="#e8bc42" />,
  [ETechnologies.PostgreSQL]: (
    <SiPostgresql {...iconCommonProps} color="#3776AB" />
  ),
  [ETechnologies.React]: <FaReact {...iconCommonProps} color="#61DBFB" />,
};

export default TechnologyToIcon;
