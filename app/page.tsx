"use client";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import ContactMe from "@/components/ContactMe";
import Motion from "@/components/Motion";

export default function Page() {
  return (
    <main className="flex flex-col items-stretch text-center justify-center px-8 lg:px-40 2xl:px-80">
      <Motion>
        <Hero />
      </Motion>
      <Motion>
        <About />
      </Motion>
      <Motion>
        <Skills />
      </Motion>
      <Motion>
        <Experience />
      </Motion>
      <Motion>
        <ContactMe />
      </Motion>
    </main>
  );
}
