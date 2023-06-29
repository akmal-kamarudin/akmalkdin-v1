import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail, SiGithub, SiLinkedin } from "react-icons/si";

const ContactMe = () => {
  return (
    <div className="flex flex-col items-center text-center justify-center inset-x-0 bottom-0 mt-auto">
      <p className="font-light text-base px-8 pt-8 pb-4 lg:text-lg ">
        Contact Me
      </p>
      <div className="flex flex-row">
        <a
          href="https://github.com/akmal-kamarudin"
          target="_blank"
          className="px-2"
        >
          <SiGithub className="text-2xl xl:text-3xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/akmal-kamarudin19/"
          target="_blank"
          className="px-2"
        >
          <SiLinkedin className="text-2xl xl:text-3xl" />
        </a>
        <a href="#" target="_blank" className="px-2">
          <SiGmail className="text-2xl xl:text-3xl" />
        </a>
      </div>
    </div>
  );
};

export default ContactMe;
