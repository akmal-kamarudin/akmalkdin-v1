"use client";
import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section id="home">
      <div className="flex flex-col items-center text-center justify-center pt-8 lg:flex-row w-full">
        <div className="flex justify-end lg:w-2/12 lg:justify-start">
          <Image
            className="rounded-full shadow-xl dark:shadow-sky-700/30"
            src="/images/profilephoto.jpeg"
            alt="profile"
            width={150}
            height={150}
          />
        </div>
        <div className="text-justify lg:pl-4 lg:w-10/12 2xl:pl-2">
          <h1 className="font-semibold text-4xl text-center mt-8 md:text-start lg:text-5xl">
            Hi, I&#39;m Akmal!
            <span className="inline-flex animate-wiggle">👋🏽</span>
          </h1>
          <p className="font-normal text-lg mt-4 md:text-xl">
            I&#39;m a <span className="text-sky-500">Software Developer </span>
            based in Malaysia. My forte is on the Front-end but I am working my
            way in becoming a Full stack Developer. I am excited to apply my
            comprehensive skill set and drive to contribute to the dynamic and
            innovative field of software engineering.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

// font-bold text-4xl text-center mt-6 md:text-left md:text-7xl
