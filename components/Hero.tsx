"use client";
import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-col items-start text-center justify-start pt-8 w-full">
      <div className="flex">
        <Image
          className="rounded-full shadow-xl dark:shadow-sky-700/30"
          src="/images/profilephoto.jpeg"
          alt="profile"
          width={130}
          height={130}
        />
      </div>
      <div className="text-justify">
        <h1 className="font-semibold text-3xl mt-8 lg:text-4xl">
          Hi, I&#39;m Akmal!
          <span className="inline-flex animate-wiggle">👋🏽</span>
        </h1>
        <h3 className="text-left font-semibold text-2xl mt-4 lg:text-3xl">
          Frontend Developer and Tech Enthusiast{" "}
          <span className="inline-flex animate-bounce">💻</span>
        </h3>
        <div className="mt-8">
          <p className="font-normal text-lg mt-4 md:text-xl">
            I&#39;m a{" "}
            <span className="font-medium text-sky-500">
              Software Developer{" "}
            </span>
            based in Malaysia. My forte is on the Front-end but I am working my
            way in becoming a Full stack Developer.
          </p>
          <p className="font-normal text-lg mt-4 md:text-xl">
            I am excited to apply my comprehensive skill set and drive to
            contribute to the dynamic and innovative field of software
            engineering.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

// font-bold text-4xl text-center mt-6 md:text-left md:text-7xl
