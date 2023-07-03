import React from "react";

const InProgress = () => {
  return (
    <div className="flex flex-col items-center text-center justify-center pt-40 w-full">
      <h1 className="font-semibold text-2xl lg:text-3xl">
        Page In Progress..
        <span className="inline-flex animate-twirl">⚙️</span>
        <span className="inline-flex animate-wiggle">🛠️</span>
      </h1>
      <p className="font-normal text-lg mt-4 lg:text-xl">
        I&#39;m starting to write any time soon. Please stay tuned.
      </p>
    </div>
  );
};

export default InProgress;
