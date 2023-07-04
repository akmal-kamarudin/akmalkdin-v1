"use client";
import React from "react";

const About = () => {
  return (
    <div className="flex flex-col items-start text-justify justify-start pt-16 w-full">
      <h1 className="font-semibold text-xl lg:text-2xl">About Me</h1>
      <p className="font-normal text-lg mt-4 lg:text-xl">
        I&#39;m a{" "}
        <span className="font-medium text-sky-500">Software Developer </span>
        based in Malaysia, with a focus on frontend web development. However, I
        am also actively working towards becoming a full stack developer.
        Despite starting my career as a Biomedical Engineer in the healthcare
        industry, my passion for the world of technology has pushed me towards
        pursuing a new professional path.
      </p>
      <p className="font-normal text-lg mt-4 lg:text-xl">
        I&#39;ve dedicated myself to self-learning and continuous improvement,
        rekindling my coding skills from my university years and enrolled in a
        reputable online course by TalentLabs, specializing in frontend web
        development. Currently, I am refining my backend web development skills
        with the aim of building a robust full stack web application, utilizing
        various tech stack.
      </p>
      <p className="font-normal text-lg mt-4 lg:text-xl">
        With my comprehensive skill set and drive, I am excited to contribute to
        the dynamic and innovative field of software engineering.
      </p>
    </div>
  );
};

export default About;
