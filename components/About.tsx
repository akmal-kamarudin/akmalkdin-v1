"use client";
import React from "react";

const About = () => {
  return (
    <div className="flex flex-col items-start text-center justify-start pt-16 w-full">
      <div className="text-justify">
        <h1 className="font-semibold text-2xl text-start lg:text-3xl">
          About Me
        </h1>
        <p className="font-normal text-lg mt-4 lg:text-xl">
          I&#39;m a{" "}
          <span className="font-medium text-sky-500">Software Developer </span>
          based in Malaysia, with a focus on front-end development. However, I
          am also actively working towards becoming a full stack developer.
        </p>
        <p className="font-normal text-lg mt-4 lg:text-xl">
          With my comprehensive skill set and drive, I am excited to contribute
          to the dynamic and innovative field of software engineering.
        </p>
      </div>
    </div>
  );
};

export default About;
