import React from "react";

const InProgress = () => {
  return (
    <div className="flex flex-col items-center text-center justify-center pt-32 w-full">
      <h1 className="font-semibold text-xl lg:text-2xl">
        Page is Under Construction..
        <span className="inline-flex animate-twirl">⚙️</span>
        <span className="inline-flex animate-wiggle">🛠️</span>
      </h1>
      <p className="font-normal text-lg mt-4 lg:text-xl">
        I&#39;ll be starting to write soon. Please stay tuned.
      </p>
    </div>
  );
};

export default InProgress;
