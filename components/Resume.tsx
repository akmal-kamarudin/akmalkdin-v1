import React from "react";
import { IoMdArrowDown } from "react-icons/io";

const Resume = () => {
  return (
    <div className="flex flex-col items-center text-center justify-center pt-32 w-full">
      <h1 className="font-semibold text-xl lg:text-2xl">Resume</h1>
      <p className="font-normal text-lg text-justify mt-4 lg:text-xl md:w-7/12">
        If you&#39;d like to get a better sense of my qualifications, feel free
        to check out my resume. Don&#39;t hesitate to take a look!{" "}
        <span className="inline-flex animate-wiggle">📝</span>
      </p>
      <IoMdArrowDown className="mt-8 text-2xl xl:text-3xl animate-bounce" />
      <a
        href="https://drive.google.com/file/d/1NgFZx2s5xn7rRhwBoXNZDkY029MT0Uvr/view?usp=sharing"
        target="_blank"
      >
        <button className="btn btn-primary mt-2">Download Resume</button>
      </a>
    </div>
  );
};

export default Resume;
