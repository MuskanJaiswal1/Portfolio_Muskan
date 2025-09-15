"use client";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import { useState } from "react";

export default function Projects() {
  const columns = 4;
  const rowsToShow = 2;
  const initialCount = columns * rowsToShow;

  const [showAll, setShowAll] = useState(false);
  const projectsToShow = showAll ? projects : projects.slice(0, initialCount);

  return (
    <section
      id="projects"
      className="min-h-screen bg-[#060606] text-white py-20 px-6 md:px-16"
    >
      <h2 className="text-4xl font-bold mb-12 text-center">
        My <span className="text-blue-500">Projects</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {projectsToShow.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group relative rounded-xl overflow-hidden shadow-lg border border-gray-800 hover:shadow-blue-500/40 transition-all"
          >
            <div className="relative w-full h-48 md:h-52 lg:h-60">
              <Image
                src={project.img}
                alt={project.title}
                fill
                className="object-cover rounded-t-xl transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="p-4 bg-[#111] rounded-b-xl flex flex-col gap-2">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <div className="flex flex-wrap gap-2 mt-1">
                {project.tech.slice(0, 3).map((t, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2 py-1 bg-blue-600/20 text-blue-400 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {projects.length > initialCount && (
        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-block bg-blue-500 px-6 py-3 rounded-xl font-semibold hover:bg-blue-600 transition-colors"
          >
            {showAll ? "Show Less" : "View All Projects"}
          </button>
        </div>
      )}
    </section>
  );
}
