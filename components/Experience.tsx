"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    id: "01",
    role: "Web Developer",
    organization: "Bayucaraka UAV Research Team",
    category: "PROFESSIONAL EXPERIENCE",
    duration: "2023 — Present",
    description:
      "Web development contributions for the Media Communication division of the Bayucaraka UAV Research Team.",
    highlights: [
      "Developed responsive UAV team platform",
      "Organized divisions and achievements",
      "Built with Next.js and Tailwind",
      "Structured maintainable content",
    ],
  },
  {
    id: "02",
    role: "Backend Developer",
    organization: "Information Systems Expo",
    category: "PROFESSIONAL EXPERIENCE",
    duration: "2023",
    description:
      "Backend development contributions for the Information Systems Expo (ISE!).",
    highlights: [
      "Developed robust API endpoints",
      "Integrated various backend services",
      "Optimized database queries",
      "Collaborated with frontend teams",
    ],
  },
  {
    id: "03",
    role: "Developer",
    organization: "Academic Project",
    category: "ACADEMIC EXPERIENCE",
    duration: "2022",
    description:
      "Conceptualized an automated plant watering system using Arduino Uno and soil moisture sensors.",
    highlights: [
      "Programmed Arduino Uno",
      "Integrated soil moisture sensors",
      "Designed hardware schematic",
      "Implemented automated logic",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative bg-ink py-24 overflow-hidden">
      {/* Massive background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-sans font-bold text-[20vw] leading-none text-white/[0.02] pointer-events-none select-none tracking-tighter w-full text-center">
        EXPERIENCES
      </div>

      <div className="page-container relative z-10">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-16">
          <div>
            <div className="font-mono text-xs tracking-widest text-text-muted uppercase mb-4">
              Career Archive
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-sans tracking-tight text-paper font-medium">
              EXPERIENCES
            </h2>
          </div>
          <p className="text-text-inverse-muted max-w-sm md:text-right text-lg">
            Roles, systems, and the work behind them.
          </p>
        </div>
      </div>

      {/* Horizontal Scroll Rail */}
      <div className="w-full relative z-10 pl-[max(24px,calc((100%-1440px)/2+24px))] sm:pl-[max(14px,calc((100%-1440px)/2+14px))]">
        <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-6 pb-12 pr-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="snap-center sm:snap-start shrink-0 w-[85vw] sm:w-[60vw] md:w-[45vw] lg:w-[400px] bg-ink-soft border border-border-dark rounded-none sm:rounded-sm flex flex-col group hover:border-text-muted transition-colors duration-300"
            >
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-12">
                  <span className="font-mono text-xs text-text-inverse-muted tracking-widest uppercase">
                    {exp.category}
                  </span>
                  <span className="font-mono text-sm text-text-muted group-hover:text-accent transition-colors duration-300">
                    {exp.id}
                  </span>
                </div>

                <div className="mb-8">
                  <h3 className="text-2xl font-sans text-paper font-medium mb-1">
                    {exp.role}
                  </h3>
                  <div className="text-lg text-text-inverse-muted">
                    {exp.organization}
                  </div>
                </div>

                <p className="text-text-muted leading-relaxed mb-8 flex-grow">
                  {exp.description}
                </p>

                <ul className="flex flex-col gap-3 mb-8">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-text-inverse-muted">
                      <span className="text-accent mt-1 opacity-50">✦</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-6 border-t border-border-dark flex justify-between items-center mt-auto">
                  <span className="font-mono text-xs text-text-muted">
                    {exp.duration}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
          {/* Spacer for end of scroll */}
          <div className="shrink-0 w-[4vw] sm:w-[10vw]" />
        </div>
      </div>
    </section>
  );
}
