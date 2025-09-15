"use client";

import { Button } from "@/components/ui/button";
import Typewriter from "@/components/ui/custom-ui/Typewriter";

export default function Home() {
  return (
    <section
      id="home"
      className="h-screen min-h-screen flex flex-col justify-center bg-[#060606] text-white px-4 sm:px-8 md:px-16 py-8 sm:py-12 md:py-16"
    >
      <div className="max-w-3xl mx-auto flex flex-col justify-center flex-grow">
        <h3 className="text-xl text-gray-300">Hi There !!</h3>

        <div className="mt-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            I&apos;M{" "}
            <span className="ml-2 inline-block min-w-[16ch] overflow-hidden h-16">
              <Typewriter
                words={[
                  "Muskan Jaiswal",
                  "Student",
                  "Web Developer",
                  "C++ Coder",
                ]}
              />
            </span>
          </h1>
        </div>

        <p className="mt-6 p-3 text-gray-300 leading-relaxed text-sm sm:text-base">
          I’m Muskan, a final-year CSE (AIML) student with a passion for
          full-stack web development and AI-powered tools. Grounded in the MERN
          stack and data structures & algorithms in C++, I have led development teams, contributed to open-source
          projects, and built applications that combine clarity, creativity, and
          real-world impact. I’m eager to contribute to challenging SDE and web
          development roles where I can grow, innovate, and collaborate with
          like-minded teams. Let’s connect — whether it’s about coding, building
          meaningful projects, or sharing ideas and inspiration in tech.
        </p>

        <div className="mt-8">
          <a href="#about">
            <Button className="cursor-pointer hover:bg-blue-600 rounded-full px-6 py-3 bg-[#2b2b2b]">
              About me
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
