import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";

// Pre-generate all project slugs
export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export default async function ProjectPage({ params }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <div className="text-white p-20">Project not found</div>;
  }

  return (
    <section className="min-h-screen bg-[#060606] text-white py-20 px-6 md:px-16">
      <div className="max-w-4xl mx-auto space-y-10">
        <div className="space-y-2">
          <h1 className="text-4xl md:text-5xl font-bold">{project.title}</h1>
          {project.tagline && (
            <p className="text-gray-400 italic text-lg">{project.tagline}</p>
          )}
        </div>

        {project.link && (
          <div className="flex flex-wrap gap-4">
            <Link
              href={project.link}
              target="_blank"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-500 px-6 py-3 rounded-2xl text-white font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300"
            >
              Visit Live Project
            </Link>
          </div>
        )}

        <div className="relative w-full h-80 rounded-xl overflow-hidden shadow-lg border border-gray-700">
          <Image
            src={project.img}
            alt={project.title}
            fill
            priority 
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover rounded-xl"
          />
        </div>

        <div className="bg-[#111] p-6 rounded-xl shadow-md border border-gray-700">
          <h2 className="text-2xl font-semibold mb-4">Project Description</h2>
          <p className="text-gray-300 text-lg">{project.description}</p>
        </div>

        <div className="bg-[#111] p-6 rounded-xl shadow-md border border-gray-700">
          <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {project.tech.map((t, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-blue-600/30 text-white font-medium rounded-full text-sm"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {project.features && (
          <div className="bg-[#111] p-6 rounded-xl shadow-md border border-gray-700">
            <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              {project.features.map((f, idx) => (
                <li key={idx}>{f}</li>
              ))}
            </ul>
          </div>
        )}

        {project.challenges && (
          <div className="bg-[#111] p-6 rounded-xl shadow-md border border-gray-700">
            <h2 className="text-2xl font-semibold mb-4">
              Challenges & Learnings
            </h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              {project.challenges.map((c, idx) => (
                <li key={idx}>{c}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-12 text-center">
          <Link
            href="/#projects"
            className="text-blue-400 hover:text-blue-500 font-semibold transition-colors duration-200"
          >
            ← Back to Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
