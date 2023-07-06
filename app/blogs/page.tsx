"use client";

import InProgress from "@/components/InProgress";
import Blog from "@/components/Blog";
import Motion from "@/components/Motion";

export default function Page() {
  return (
    <main className="flex flex-col items-stretch text-center justify-center px-8 lg:px-40 2xl:px-80">
      <Motion>
        <InProgress />
      </Motion>
      {/* <Motion>
        <Blog />
      </Motion> */}
    </main>
  );
}

//last here
