"use client";
import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section id="home">
      <div className="flex flex-col items-center text-center justify-center pt-20 px-8 lg:flex-row lg:px-16 xl:px-32">
        <div className="flex justify-end lg:w-1/6 2xl:justify-start">
          <Image
            className="rounded-full shadow-xl dark:shadow-cyan-600/20"
            src="/images/profilephoto.jpeg"
            alt="profile"
            width={220}
            height={220}
          />
        </div>
        <div className="text-justify lg:pl-8 lg:w-5/6 2xl:pl-4">
          <h1 className="font-semibold text-4xl text-center mt-8 md:text-start lg:text-5xl">
            Hi, I&#39;m Akmal! 👋🏽
          </h1>
          <p className="font-normal text-lg mt-4 md:text-xl">
            I&#39;m a <span className="text-teal-600">Software Developer </span>
            based in Malaysia. My forte is probably on the Front-end but I am
            working my way in becoming a Full stack Developer. I am passionate
            about delivering cutting-edge solutions and shaping the future of
            software development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

// font-bold text-4xl text-center mt-6 md:text-left md:text-7xl
