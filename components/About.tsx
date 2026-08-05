"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

const capabilities = [
  { text: "I build ", highlight: false },
  { text: "full-stack web systems", highlight: true },
  { text: "with ", highlight: false },
  { text: "intuitive interfaces", highlight: true },
  { text: ", ", highlight: false },
  { text: "reliable", highlight: true },
  { text: "\n", highlight: false },
  { text: "backend architecture", highlight: true },
  { text: ", and ", highlight: false },
  { text: "scalable", highlight: true },
  { text: "\n", highlight: false },
  { text: "product foundations.", highlight: true },
];

const techStack = [
  "NEXT.JS",
  "TYPESCRIPT",
  "LARAVEL",
  "NODE.JS",
  "SUPABASE",
  "REACT",
  "TAILWINDCSS",
  "FIGMA",
  "MYSQL",
  "POSTGRESQL",
];

const CapabilityWord = ({
  children,
  progress,
  range,
  highlight,
}: {
  children: React.ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
  highlight: boolean;
}) => {
  const opacity = useTransform(progress, range, [0.3, 1]);
  const color = highlight ? "var(--paper)" : "var(--text-muted)";

  return (
    <motion.span
      style={{ opacity, color }}
      className={`transition-colors duration-300 ${highlight ? "font-medium" : "font-normal"}`}
    >
      {children}
    </motion.span>
  );
};

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 70%"],
  });

  return (
    <section
      id="about"
      className="relative min-h-[90svh] bg-ink flex flex-col justify-center py-24 overflow-hidden"
      ref={containerRef}
    >
      <div className="page-container flex-grow flex items-center justify-center">
        <h2 className="text-[clamp(1.8rem,4vw,4.5rem)] leading-[1.2] md:leading-[1.1] text-center font-sans tracking-tight max-w-[1000px] whitespace-pre-wrap">
          {capabilities.map((word, i) => {
            const start = i / capabilities.length;
            const end = start + 1 / capabilities.length;
            return (
              <CapabilityWord
                key={i}
                progress={scrollYProgress}
                range={[start, end]}
                highlight={word.highlight}
              >
                {word.text}
              </CapabilityWord>
            );
          })}
        </h2>
      </div>

      {/* Technology Rail */}
      <div className="w-full mt-24 mb-8 overflow-hidden flex select-none relative mask-image-fade">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink to-transparent z-10" />
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          }}
          className="flex flex-none gap-8 items-center text-text-muted font-mono tracking-widest text-sm sm:text-base whitespace-nowrap"
        >
          {[...techStack, ...techStack, ...techStack].map((tech, i) => (
            <span key={i} className="flex items-center gap-8">
              <span>{tech}</span>
              <span className="text-text-muted/30">•</span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
