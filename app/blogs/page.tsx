"use client";

import Hero from "@/components/Hero";
import InProgress from "@/components/InProgress";

export default function Page() {
  return (
    <main className="flex flex-col items-center text-center justify-center px-8 lg:px-40 2xl:px-80">
      <InProgress />
    </main>
  );
}
