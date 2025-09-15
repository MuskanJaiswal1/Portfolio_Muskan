// app/about/page.js

"use client";

import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiFigma,
  SiCanva,
} from "react-icons/si";

const techStack = [
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss3 },
  { name: "JavaScript", icon: SiJavascript },
  { name: "React.js", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Bootstrap", icon: SiBootstrap },
  { name: "Redux", icon: SiRedux },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express.js", icon: SiExpress },
  { name: "MongoDB", icon: SiMongodb },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Figma", icon: SiFigma },
  { name: "Canva", icon: SiCanva },
];

export default function AboutPage() {
  return (
    <section id="about" className="min-h-screen bg-black text-white px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="text-blue-500">About</span> Me
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Side: Info */}
          <div className="space-y-4 text-lg">
            <p>
              <strong className="title">Name:</strong>{" "}
              <span className="text-blue-500">Muskan Jaiswal</span>
            </p>
            <p>
              <strong className="title">Qualification:</strong>{" "}
              <span className="text-blue-500">
                Pursuing B.Tech (CSE-AI & ML)
              </span>
            </p>
            <p>
              <strong className="title">Languages:</strong>{" "}
              <span className="text-blue-500">C, C++, Python</span>
            </p>
            <p>
              <strong className="title">Frontend:</strong>{" "}
              <span className="text-blue-500">
                HTML, CSS, JavaScript, React.js, Next.js, Tailwind CSS,
                Bootstrap, Shadcn UI
              </span>
            </p>
            <p>
              <strong className="title">Backend & APIs:</strong>{" "}
              <span className="text-blue-500">
                Node.js, Express.js, REST API, Postman
              </span>
            </p>
            <p>
              <strong className="title">State Management:</strong>{" "}
              <span className="text-blue-500">Redux, Zustand, Context API</span>
            </p>
            <p>
              <strong className="title">Database:</strong>{" "}
              <span className="text-blue-500">MongoDB, PostgreSQL</span>
            </p>
            <p>
              <strong className="title">Developer Tools:</strong>{" "}
              <span className="text-blue-500">
                Git, GitHub, VSCode, Netlify, Vercel
              </span>
            </p>
            <p>
              <strong className="title">Design Tools:</strong>{" "}
              <span className="text-blue-500">Canva, Figma</span>
            </p>
          </div>

          {/* Right Side: Experience and Button */}
          <div className="flex flex-col gap-6 items-center justify-center">
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg text-center w-full">
              <p className="text-blue-400 text-3xl font-bold">≫ 1</p>
              <p className="mt-2">years of experience</p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg shadow-lg text-center w-full">
              <p className="text-blue-400 text-3xl font-bold">≫ 8+</p>
              <p className="mt-2">projects completed</p>
            </div>

            <a
              href="/img/Muskan_Jaiswal_Resume.pdf"
              download
              className="w-full"
            >
              <Button className="bg-gray-800 hover:bg-blue-600 cursor-pointer text-white w-full flex items-center justify-center gap-2">
                <Download size={18} />
                Download CV
              </Button>
            </a>
          </div>
        </div>

        {/* Marquee-style Tech Stack */}
        <div className="overflow-hidden mt-10 py-6">
          <div className="flex animate-marquee whitespace-nowrap">
            {techStack.concat(techStack).map((tech, idx) => {
              const Icon = tech.icon;
              return (
                <div
                  key={idx}
                  className="inline-flex flex-col items-center justify-center mx-8 transition-transform hover:scale-110 cursor-pointer"
                >
                  <Icon size={36} className="text-blue-400" />
                  <p className="text-sm text-gray-300 mt-1">{tech.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
