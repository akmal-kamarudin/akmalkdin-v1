import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section id="home">
      <div className="flex flex-col items-center text-center justify-center py-16 px-10">
        <div>
          <Image
            className="rounded-full"
            src="/images/myphoto.jpeg"
            alt="profile"
            width={300}
            height={300}
          />
        </div>
        <div>
          <h1>Hi, I&#39;m Akmal!</h1>
          <p>
            I&#39;m a Software Developer based in Malaysia. My forte is probably
            on the Front-end but I am working my way in becoming a Full stack
            Developer. I am passionate about delivering cutting-edge solutions
            and shaping the future of software development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
