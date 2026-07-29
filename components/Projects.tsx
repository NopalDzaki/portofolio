"use client";

import { motion } from "framer-motion";
import { FolderGit2, BookOpen } from "lucide-react";

const projects = [
  {
    title: "Bayucaraka UAV Web Development",
    category: "Experience",
    role: "Web Developer",
    description:
      "Web development contributions for the Media Communication division of the Bayucaraka UAV Research Team.",
    tags: ["Web Development", "Team Collaboration", "Media"],
    type: "experience",
  },
  {
    title: "Information Systems Expo Backend",
    category: "Experience",
    role: "Backend Developer",
    description:
      "Backend development contributions for the Information Systems Expo (ISE!) 2026.",
    tags: ["Backend Development", "System Integration"],
    type: "experience",
  },
  {
    title: "Automatic Plant Watering System",
    category: "Academic Project",
    role: "Developer",
    description:
      "Conceptualized an automated plant watering system using Arduino Uno and soil moisture sensors to support efficient watering based on soil conditions.",
    tags: ["Arduino Uno", "Hardware", "IoT Concept"],
    type: "academic",
  },
  {
    title: "SIAP BOS Information-System Analysis",
    category: "Academic Research",
    role: "Researcher",
    description:
      "Academic analysis on the implementation of information technology in the SIAP BOS system and its role in supporting more accurate education funding distribution.",
    tags: ["Systems Analysis", "Research", "Information Systems"],
    type: "academic",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience & Projects
          </h2>
          <p className="text-foreground/70 max-w-2xl">
            A showcase of my professional team contributions and selected
            academic research works.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden bg-foreground/5 border border-foreground/10 p-8 hover:border-primary/50 transition-colors"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                  {project.type === "experience" ? (
                    <FolderGit2 className="w-6 h-6" />
                  ) : (
                    <BookOpen className="w-6 h-6" />
                  )}
                </div>
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-foreground/10 text-foreground/80">
                  {project.category}
                </span>
              </div>

              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-sm text-primary font-medium mb-4">
                {project.role}
              </p>

              <p className="text-foreground/70 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs font-medium px-2.5 py-1 rounded-md bg-background border border-foreground/10 text-foreground/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
