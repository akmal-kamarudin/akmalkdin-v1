import React from "react";
import Cards from "./Cards";
import projects from "@/lib/ProjectList";

const Projects = () => {
  const renderProjects = projects.map((items, index) => {
    return (
      <div key={index} className="flex flex-col items-center w-full">
        <Cards projects={items} />
      </div>
    );
  });

  return (
    <>
      <div className="flex flex-col items-start text-center justify-start pt-16 w-full">
        <div className="text-justify">
          <h1 className="font-semibold text-2xl md:text-3xl">Projects</h1>
          <p className="font-normal text-lg mt-4 md:text-xl">
            These projects serve as an avenue for me to explore different
            aspects of software development and showcase my abilities. Each
            project represents a unique challenge and an opportunity for me to
            learn and grow.
          </p>
        </div>
        <div>{renderProjects}</div>
      </div>
    </>
  );
};

export default Projects;
