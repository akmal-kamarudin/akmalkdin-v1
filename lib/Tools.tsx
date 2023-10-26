import React from "react";
import {
  SiSpringboot,
  SiTypescript,
  SiAngular,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiPostgresql,
  SiGithub,
  SiDocker,
  SiVercel,
  SiFigma,
  SiLinux,
  SiMysql,
  SiGit,
} from "react-icons/si";

export type Tool = {
  title: string;
  icon: React.ReactNode;
};

const Tools: Tool[] = [
  {
    title: "Java SpringBoot",
    icon: <SiSpringboot />,
  },
  {
    title: "TypeScript",
    icon: <SiTypescript />,
  },
  {
    title: "AngularJS",
    icon: <SiAngular />,
  },
  {
    title: "ReactJS",
    icon: <SiReact />,
  },
  {
    title: "NextJS",
    icon: <SiNextdotjs />,
  },
  {
    title: "NodeJS",
    icon: <SiNodedotjs />,
  },
  {
    title: "ExpressJS",
    icon: <SiExpress />,
  },
  {
    title: "Tailwind-CSS",
    icon: <SiTailwindcss />,
  },
  {
    title: "MySQL",
    icon: <SiMysql />,
  },
  {
    title: "PostgreSQL",
    icon: <SiPostgresql />,
  },
  {
    title: "Git",
    icon: <SiGit />,
  },
  {
    title: "Github",
    icon: <SiGithub />,
  },
  {
    title: "Docker",
    icon: <SiDocker />,
  },
  {
    title: "Vercel",
    icon: <SiVercel />,
  },
  {
    title: "Figma",
    icon: <SiFigma />,
  },
  {
    title: "Linux",
    icon: <SiLinux />,
  },
];

export default Tools;
