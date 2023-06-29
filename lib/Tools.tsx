import React from "react";
import {
  SiReact,
  SiTypescript,
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
    title: "React",
    icon: <SiReact />,
  },
  {
    title: "TypeScript",
    icon: <SiTypescript />,
  },
  {
    title: "Next.js",
    icon: <SiNextdotjs />,
  },
  {
    title: "Node.js",
    icon: <SiNodedotjs />,
  },
  {
    title: "Express.js",
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
