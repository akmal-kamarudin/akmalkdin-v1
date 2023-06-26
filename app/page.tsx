"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Skills />

      <h1 className="text-2xl">Akmal </h1>
      <button className="btn btn-primary">One</button>
      <button className="btn btn-secondary">Two</button>
      <button className="btn btn-accent btn-outline">Three</button>
      <Footer />
    </main>
  );
}
