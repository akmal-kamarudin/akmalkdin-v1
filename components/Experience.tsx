import React from "react";

const Experience = () => {
  return (
    <div className="flex flex-col items-start text-justify justify-start pt-16 w-full">
      <h1 className="font-semibold text-xl lg:text-2xl">Experiences</h1>
      <p className="font-normal text-lg mt-4 lg:text-xl">
        Throughout my career, I&#39;ve had the privilege of working with
        remarkable companies that have provided me with valuable experiences.
      </p>
      <div className="flex flex-col w-full items-center justify-center text-center">
        <div className="w-full py-8 md:w-3/5">
          <div
            className="grid h-32 card bg-base-200 rounded-box place-items-center opacity-90"
            data-theme="light"
          >
            <h1>Junior Programmer @ Saf Pilihan</h1>
            <h3>Bandar Baru Bangi, Malaysia </h3>
            <p>Jan 2023 - Present</p>
          </div>
          <div className="divider text-zinc-300">|</div>
          <div
            className="grid h-32 card bg-base-200 rounded-box place-items-center opacity-90"
            data-theme="light"
          >
            <h1>Biomedical Engineer @ Altica</h1>
            <h3>Puchong, Malaysia </h3>
            <p>Jul 2021 - Feb 2023</p>
          </div>
          <div className="divider text-zinc-300">|</div>
          <div
            className="grid h-32 card bg-base-200 rounded-box place-items-center opacity-90"
            data-theme="light"
          >
            <h1>Intern Junior Biomedical Engineer @ Advance Pact</h1>
            <h3>Johor Bahru, Malaysia </h3>
            <p>Jan 2018 — May 2018</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
