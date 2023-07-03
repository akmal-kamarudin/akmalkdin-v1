import React from "react";
import tools from "../lib/Tools";

const Skills = () => {
  const renderTools = tools.map((tool, index) => {
    return (
      <div key={index} className="flex flex-col items-center w-28">
        <div
          className={`flex items-center justify-center text-4xl text-zinc-500 transition-all ease-in-out duration-200 hover:scale-125
          ${tool.title === "React" && "hover:text-[#61dbfb] hover:rotate-180"}
          ${
            tool.title === "TypeScript" &&
            "hover:text-[#007acc] hover:animate-wiggle"
          } 
          ${tool.title === "Next.js" && "hover:text-black hover:animate-pulse"}
          ${
            tool.title === "Node.js" &&
            "hover:text-[#68a063] hover:animate-twirl"
          }
          ${
            tool.title === "Express.js" &&
            "hover:text-black hover:animate-wiggle"
          }
          ${
            tool.title === "Tailwind-CSS" &&
            "hover:text-[#38bdf8] hover:rotate-180"
          }
          ${tool.title === "MySQL" && "hover:text-[#005c83]"}
          ${
            tool.title === "PostgreSQL" &&
            "hover:text-[#336791] hover:animate-wiggle"
          }
          ${tool.title === "Git" && "hover:text-[#e74b27]"}
          ${tool.title === "Github" && "hover:text-black hover:animate-twirl"}
          ${
            tool.title === "Docker" &&
            "hover:text-[#0db7ed] hover:animate-wiggle"
          }
          ${tool.title === "Vercel" && "hover:text-black hover:animate-flip"}
          ${tool.title === "Figma" && "hover:text-[#f24e1e]"}
          ${tool.title === "Linux" && "hover:text-black hover:animate-wiggle"}
          `}
        >
          {tool.icon}
        </div>
        <p className="font-base text-base pt-2 lg:text-lg">{tool.title}</p>
      </div>
    );
  });

  return (
    <div className="flex flex-col items-start text-center justify-start pt-16 w-full">
      <div className="text-justify">
        <h1 className="font-semibold text-xl text-start lg:text-2xl">Skills</h1>
        <p className="font-normal text-lg mt-4 lg:text-xl">
          These are my current tech stack for the moment and I&#39;m always
          thrilled to utilize any new cutting-edge technologies and add them to
          the list.
        </p>
      </div>
      <div className="flex flex-row justify-center">
        <div className="flex flex-row flex-wrap place-content-center md:w-4/5 gap-8 py-8">
          {renderTools}
        </div>
      </div>
    </div>
  );
};

export default Skills;
