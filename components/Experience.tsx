import React from "react";
import experience from "@/lib/ExpList";
import MotionItems from "./MotionItems";

const Experience = () => {
  const renderExperience = experience.map((items, index) => {
    const isLastItem = index === experience.length - 1;

    return (
      <MotionItems key={index} itemKey={index}>
        <div
          className="grid h-32 card bg-base-200 rounded-box place-items-center opacity-90"
          data-theme="light"
        >
          <h1>{items.job}</h1>
          <h3>{items.location}</h3>
          <p>{items.period}</p>
        </div>
        {!isLastItem && <div className="divider text-zinc-300">|</div>}
      </MotionItems>
    );
  });

  return (
    <div className="flex flex-col items-start text-justify justify-start pt-16 w-full">
      <h1 className="font-semibold text-xl lg:text-2xl">Experiences</h1>
      <p className="font-normal text-lg mt-4 lg:text-xl">
        Throughout my career, I&#39;ve had the privilege of working with
        remarkable companies that have provided me with valuable experiences.
      </p>
      <div className="flex flex-col w-full items-center justify-center text-center">
        <div className="w-full py-8 md:w-3/5">{renderExperience}</div>
      </div>
    </div>
  );
};

export default Experience;
