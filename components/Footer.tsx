import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col items-center text-center justify-center inset-x-0 bottom-0 mt-auto">
      <div className="grow h-32"></div>
      <p className="font-light text-base px-8 py-4 lg:text-lg ">
        &copy;{new Date().getFullYear()} &bull; Developed by Akmal Kamarudin
      </p>
    </div>
  );
};

export default Footer;
