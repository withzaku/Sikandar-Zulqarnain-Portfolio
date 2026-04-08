"use client";

import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";

// Lazy load the background to keep initial paint fast
const BackgroundParticles = dynamic(() => import("@/components/ui/BackgroundParticles"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <BackgroundParticles />
      <div className="relative z-10 flex flex-col items-center w-full">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </>
  );
}
