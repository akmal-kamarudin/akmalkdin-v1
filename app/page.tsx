"use client";

import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import ContactMe from "@/components/ContactMe";

export default function Page() {
  return (
    <main className="flex flex-col items-center text-center justify-center px-8 lg:px-40 2xl:px-80">
      <Hero />
      <Skills />
      <Experience />
      <ContactMe />
    </main>
  );
}
