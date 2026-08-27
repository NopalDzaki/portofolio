"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const selectedProjects = [
  {
    title: "Gerigi X UKM Expo 2026",
    category: "WEB DEVELOPMENT / FRONTEND",
    year: 2026,
    description:
      "Frontend development for the Gerigi X UKM Expo 2026, focusing on creating interactive, responsive, and performant user interfaces.",
    highlights: [
      "Interactive user interfaces",
      "Responsive across devices",
      "Performance optimization",
    ],
    technologies: ["Next.js", "React", "Tailwind CSS"],
    link: "https://gerigixukmexpoits.id/",
    image: "/assets/gerigi.jpg",
  },
  {
    title: "Information Systems Expo 2026",
    category: "WEB DEVELOPMENT / BACKEND",
    year: 2026,
    description:
      "Backend development contributions for the Information Systems Expo (ISE!), including building robust API endpoints and integrating services.",
    highlights: [
      "Robust API development",
      "Backend service integration",
      "Database query optimization",
    ],
    technologies: ["Node.js", "Express", "Database"],
    link: "https://ise-its.com/",
    image: "/assets/ise.jpg",
  },
  {
    title: "Bayucaraka UAV Research Team",
    category: "WEB DEVELOPMENT",
    year: 2026,
    description:
      "Web platform development for the Media Communication division of the Bayucaraka UAV Research Team to showcase achievements and divisions.",
    highlights: [
      "Responsive team platform",
      "Content management structure",
      "Modern tech stack integration",
    ],
    technologies: ["Next.js", "Tailwind CSS", "React"],
    link: "https://www.bayucaraka-its.com/",
    image: "/assets/bayucaraka.jpg",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-paper relative overflow-hidden">
      <div className="page-container">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-24">
          <div>
            <div className="font-mono text-xs tracking-widest text-text-muted uppercase mb-4">
              Portfolio Showcase
            </div>
            <h2 className="text-5xl md:text-6xl font-sans tracking-tight text-ink font-medium">
              SELECTED PROJECTS
            </h2>
          </div>
          <a
            href="#projects"
            className="group flex items-center gap-2 font-sans font-medium text-ink hover:text-accent transition-colors"
          >
            VIEW ALL PROJECTS
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="flex flex-col gap-24 lg:gap-32">
          {selectedProjects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center`}
              >
                {/* Image / Fallback Container */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative w-full aspect-[4/3] sm:aspect-video lg:aspect-[4/3] bg-paper-bright border border-border-light rounded-xl overflow-hidden group cursor-pointer ${
                    !isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={true}
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-text-muted/30 font-mono text-sm">
                      Image not available
                    </div>
                  )}
                  {/* Custom Cursor Interaction Area */}
                  <div className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-20 h-20 rounded-full bg-accent/90 backdrop-blur-sm text-ink flex items-center justify-center font-mono text-xs font-semibold tracking-wider uppercase scale-50 group-hover:scale-100 transition-transform duration-300">
                      VIEW
                    </div>
                  </div>
                </motion.div>

                {/* Content Container */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                  className={`flex flex-col ${
                    !isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="font-mono text-xs tracking-widest text-text-muted uppercase mb-6">
                    {project.category} / {project.year}
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-sans font-medium text-ink mb-6 group inline-flex items-center gap-3">
                    <a href={project.link} className="hover:text-accent transition-colors">
                      {project.title}
                    </a>
                    <ArrowUpRight className="w-6 h-6 text-text-muted group-hover:text-accent group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
                  </h3>
                  <p className="text-lg text-text-secondary leading-relaxed mb-10 max-w-xl">
                    {project.description}
                  </p>

                  <div className="mb-10">
                    <div className="font-mono text-xs text-ink uppercase tracking-widest mb-4">
                      Highlights
                    </div>
                    <ul className="flex flex-col gap-3">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-3 text-text-secondary">
                          <span className="text-text-muted font-mono text-xs mt-1">
                            0{i + 1}
                          </span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-10">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 border border-border-light rounded font-mono text-xs text-text-secondary uppercase tracking-wider bg-paper-bright"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div>
                    <a
                      href={project.link}
                      className="inline-flex items-center gap-2 font-mono text-sm tracking-widest uppercase font-semibold text-ink hover:text-accent transition-colors border-b border-ink hover:border-accent pb-1"
                    >
                      VIEW PROJECT
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
