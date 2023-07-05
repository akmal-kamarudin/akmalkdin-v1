"use client";
import React from "react";
import Image from "next/image";
import profilePic from "@/public/images/profilephoto.jpeg";
import { SiLinkedin, SiGithub, SiUpwork } from "react-icons/si";

const Hero = () => {
  return (
    <div className="flex flex-col xl:flex-row xl:items-center items-start text-center justify-start pt-16 w-full">
      <div className="flex flex-row">
        <Image
          className="rounded-full shadow-xl dark:shadow-sky-700/30"
          src={profilePic}
          alt="profile"
          sizes="(min-width: 1200px) 16vw, (min-width: 1000px) 20vw, (min-width: 760px) 24vw, 32vw"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </div>
      <div className="text-justify xl:ml-8 w-full">
        <h1 className="font-semibold text-3xl mt-8 lg:text-4xl xl:mt-0">
          Hi, I&#39;m Akmal!
          <span className="inline-flex animate-wiggle">👋🏽</span>
        </h1>
        <h3 className="font-semibold text-2xl mt-4 lg:text-3xl">
          Front-End Web Developer and Tech Enthusiast{" "}
          <span className="inline-flex animate-bounce">💻</span>
        </h3>
        <div className="flex flex-row mt-8">
          <div className="mr-1.5">
            <a
              href="https://www.linkedin.com/in/akmal-kamarudin19/"
              target="_blank"
            >
              <SiLinkedin className="text-2xl lg:text-3xl transition-all ease-in-out duration-100 hover:scale-125 hover:rotate-12" />
            </a>
          </div>
          <div className="mx-1.5">
            <a href="https://github.com/akmal-kamarudin" target="_blank">
              <SiGithub className="text-2xl lg:text-3xl transition-all ease-in-out duration-100 hover:scale-125 hover:rotate-12" />
            </a>
          </div>
          <div className="ml-1.5">
            <a
              href="https://www.upwork.com/freelancers/~0161970c8704f2b190"
              target="_blank"
            >
              <SiUpwork className="text-2xl lg:text-3xl transition-all ease-in-out duration-100 hover:scale-125 hover:rotate-12" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
