import React from "react";
import Image from "next/image";
import Cards from "./Cards";
import projectList from "@/lib/projectList";

const Projects = () => {
  const renderProjects = projectList.map((project, index) => {
    return (
      <div key={index} className="flex flex-col items-center w-full">
        <Cards project={project} />
      </div>
    );
  });

  return (
    <>
      <div className="flex flex-col items-start text-center justify-start pt-16 w-full">
        <div className="text-start">
          <h1 className="font-semibold text-2xl md:text-3xl">Projects</h1>
          <p className="font-normal text-lg mt-4 md:text-xl">
            I&#39;ve been fortunate to have the opportunity to work with some
            remarkable companies blablabla..
          </p>
          <div className="">{renderProjects}</div>
        </div>
      </div>
    </>
  );
};

export default Projects;
