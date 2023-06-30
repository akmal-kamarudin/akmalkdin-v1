import React from "react";
import { SiGmail, SiGithub, SiLinkedin } from "react-icons/si";

const ContactMe = () => {
  return (
    <div className="flex flex-col items-start text-center justify-start pt-16 w-full">
      <div className="text-justify">
        <h1 className="font-semibold text-2xl md:text-3xl">Contact Me</h1>
        <p className="font-normal text-lg mt-4 md:text-xl">
          You can connect with me on these social media platforms or drop an
          email for any enquiries.
        </p>
      </div>
      <div className="flex flex-col py-4">
        <div className="flex flex-row m-2">
          <a
            href="https://www.linkedin.com/in/akmal-kamarudin19/"
            target="_blank"
            className="flex flex-row"
          >
            <SiLinkedin className="text-2xl xl:text-3xl" />
            <p className="font-medium text-lg md:text-xl ml-3">
              akmal-kamarudin19
            </p>
          </a>
        </div>

        <div className="flex flex-row m-2">
          <a
            href="https://github.com/akmal-kamarudin"
            target="_blank"
            className="flex flex-row items-center"
          >
            <SiGithub className="text-2xl xl:text-3xl" />
            <p className="font-medium text-lg md:text-xl ml-3">
              akmal-kamarudin
            </p>
          </a>
        </div>

        <div className="flex flex-row m-2">
          <a
            href="mailto:akmal.kamarudin19@gmail.com"
            target="_blank"
            className="flex flex-row items-center"
          >
            <SiGmail className="text-2xl xl:text-3xl" />
            <p className="font-medium text-lg md:text-xl ml-3">
              akmal.kamarudin19@gmail.com
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
