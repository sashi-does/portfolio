import { ExternalLink, Github } from "lucide-react";
import { projects } from "../lib/data";
import Heading from "../ui/heading";
import Image from "next/image";

export default function Projects() {
  return (
    <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-10 py-12">
      <Heading>Projects</Heading>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-[#111111] border border-neutral-800 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            {project.image && (
              <Image
                width={400}
                height={192}
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
            )}

            <div className="flex items-center justify-between">
              <h3 className="text-white text-xl font-semibold">
                {project.title}
              </h3>
              <div className="flex gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-amber-400 transition"
                  >
                    <Github size={18} />
                  </a>
                )}
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-amber-400 transition"
                >
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>

            <p className="text-sm text-neutral-500 mt-1">{project.date}</p>
            <p className="text-sm text-neutral-300 mt-3">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="bg-neutral-800 text-neutral-200 text-xs px-2 py-1 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
