"use client";
import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section id="home">
      <div className="flex flex-col items-center text-center justify-center py-16 px-10 md:flex-row">
        <div className="md:w-1/3">
          <Image
            className="rounded-full"
            src="/images/profilephoto.jpeg"
            alt="profile"
            width={280}
            height={280}
          />
        </div>
        <div className="md:w-2/3">
          <h1 className="font-bold text-4xl mt-6">Hi, I&#39;m Akmal! 👋🏽</h1>
          <p className="font-medium text-lg mt-4">
            I&#39;m a <span className="text-teal-600">Software Developer</span>{" "}
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
