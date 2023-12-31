import React from "react";
import tools from "../lib/Tools";
import MotionItems from "./MotionItems";

const Skills = () => {
  const renderTools = tools.map((tool, index) => {
    return (
      <MotionItems key={index} itemKey={index}>
        <div className="flex flex-col items-center text-center w-28">
          <div
            className={`flex items-center justify-center text-4xl text-slate-500 dark:text-slate-300 transition-all ease-in-out duration-200 hover:scale-125
          ${
            tool.title === "Java SpringBoot" &&
            "hover:text-[#62b43c] hover:animate-twirl dark:hover:text-[#62b43c]"
          }
          ${
            tool.title === "TypeScript" &&
            "hover:text-[#007acc] hover:animate-wiggle dark:hover:text-[#007acc]"
          }
          ${
            tool.title === "AngularJS" &&
            "hover:text-[#e61237] hover:animate-flip dark:hover:text-[#e61237]"
          }
          ${
            tool.title === "ReactJS" &&
            "hover:text-[#61dbfb] hover:rotate-180 dark:hover:text-[#61dbfb]"
          } 
          ${
            tool.title === "NextJS" &&
            "hover:text-black hover:animate-pulse dark:hover:text-black"
          }
          ${
            tool.title === "NodeJS" &&
            "hover:text-[#68a063] hover:animate-twirl dark:hover:text-[#68a063]"
          }
          ${
            tool.title === "ExpressJS" &&
            "hover:text-black hover:animate-wiggle dark:hover:text-black"
          }
          ${
            tool.title === "Tailwind-CSS" &&
            "hover:text-[#38bdf8] hover:rotate-180 dark:hover:text-[#38bdf8]"
          }
          ${
            tool.title === "MySQL" &&
            "hover:text-[#005c83] dark:hover:text-[#005c83]"
          }
          ${
            tool.title === "PostgreSQL" &&
            "hover:text-[#336791] hover:animate-wiggle dark:hover:text-[#336791]"
          }
          ${
            tool.title === "Git" &&
            "hover:text-[#e74b27] dark:hover:text-[#e74b27]"
          }
          ${
            tool.title === "Github" &&
            "hover:text-black hover:animate-twirl dark:hover:text-black"
          }
          ${
            tool.title === "Docker" &&
            "hover:text-[#0db7ed] hover:animate-wiggle dark:hover:text-[#0db7ed]"
          }
          ${
            tool.title === "Vercel" &&
            "hover:text-black hover:animate-flip dark:hover:text-black"
          }
          ${
            tool.title === "Figma" &&
            "hover:text-[#f24e1e] dark:hover:text-[#f24e1e]"
          }
          ${
            tool.title === "Linux" &&
            "hover:text-black hover:animate-wiggle dark:hover:text-black"
          }
          `}
          >
            {tool.icon}
          </div>
          <p className="font-base text-base pt-2 lg:text-lg">{tool.title}</p>
        </div>
      </MotionItems>
    );
  });

  return (
    <div className="flex flex-col items-start text-justify justify-start pt-16 w-full">
      <h1 className="font-semibold text-xl lg:text-2xl">Skills</h1>
      <p className="font-normal text-lg mt-4 lg:text-xl">
        These are my current tech stack for the moment and I&#39;m always
        thrilled to utilize any new cutting-edge technologies and add them to
        the list.
      </p>
      <div className="flex flex-row justify-center">
        <div className="flex flex-row flex-wrap place-content-center md:w-4/5 gap-8 py-8">
          {renderTools}
        </div>
      </div>
    </div>
  );
};

export default Skills;
