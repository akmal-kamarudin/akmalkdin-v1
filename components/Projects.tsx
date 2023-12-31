import React from "react";
import Cards from "./Cards";
import projects from "@/lib/ProjectList";
import MotionItems from "./MotionItems";

const Projects = () => {
  const renderProjects = projects.map((items, index) => {
    return (
      <MotionItems key={index} itemKey={index}>
        <div className="flex flex-col items-center w-full">
          <Cards projects={items} />
        </div>
      </MotionItems>
    );
  });

  return (
    <>
      <div className="flex flex-col items-start text-justify justify-start pt-16 w-full">
        <h1 className="font-semibold text-xl lg:text-2xl">Projects</h1>
        <p className="font-normal text-lg my-4 lg:text-xl">
          Each project that I&#39;m involved on represents a unique challenge
          and an opportunity for me to learn and grow. These projects serve as
          an avenue for me to explore different aspects of software development
          and showcase my abilities.
        </p>
        <div>{renderProjects}</div>
      </div>
    </>
  );
};

export default Projects;
