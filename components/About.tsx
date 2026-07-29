"use client";

import { motion } from "framer-motion";
import {
  SiC,
  SiCplusplus,
  SiHtml5,
  SiGo,
  SiJavascript,
  SiTypescript,
  SiVercel,
  SiChartdotjs,
  SiBun,
  SiBootstrap,
  SiFlutter,
  SiJsonwebtokens,
  SiLaravel,
  SiNpm,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiThreedotjs,
  SiVite,
  SiVuedotjs,
  SiSupabase,
  SiSqlite,
  SiMysql,
  SiFigma,
  SiGit,
  SiGithub,
  SiPostman,
  SiDocker,
  SiCodecov,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { LayoutTemplate, Globe, Server, Database } from "lucide-react";
import BorderGlow from "@/components/ui/BorderGlow";
import LogoLoop from "@/components/ui/LogoLoop";

const expertise = [
  {
    icon: <LayoutTemplate className="w-6 h-6" />,
    title: "UI/UX Design",
    description:
      "Designing intuitive user experiences, wireframing, prototyping, and responsive interface design.",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Frontend Development",
    description:
      "Building responsive and interactive web applications focusing on clean code and performance.",
  },
  {
    icon: <Server className="w-6 h-6" />,
    title: "Backend Development",
    description:
      "Developing robust backend systems, APIs, and integrating various services seamlessly.",
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "Systems & Data",
    description:
      "Strong foundation in Information Systems, database fundamentals, and software engineering.",
  },
];

const techLogos1 = [
  { node: <SiC />, title: "C" },
  { node: <SiCplusplus />, title: "C++" },
  { node: <SiHtml5 />, title: "HTML5" },
  { node: <SiGo />, title: "Go" },
  { node: <FaJava />, title: "Java" },
  { node: <SiJavascript />, title: "JavaScript" },
  { node: <SiTypescript />, title: "TypeScript" },
  { node: <SiVercel />, title: "Vercel" },
  { node: <SiChartdotjs />, title: "Chart.js" },
  { node: <SiBun />, title: "Bun" },
  { node: <SiBootstrap />, title: "Bootstrap" },
  { node: <SiFlutter />, title: "Flutter" },
  { node: <SiJsonwebtokens />, title: "JWT" },
  { node: <SiLaravel />, title: "Laravel" },
  { node: <SiNpm />, title: "NPM" },
];

const techLogos2 = [
  { node: <SiNextdotjs />, title: "Next JS" },
  { node: <SiNodedotjs />, title: "NodeJS" },
  { node: <SiReact />, title: "React Native" },
  { node: <SiTailwindcss />, title: "TailwindCSS" },
  { node: <SiThreedotjs />, title: "Three js" },
  { node: <SiVite />, title: "Vite" },
  { node: <SiVuedotjs />, title: "Vue.js" },
  { node: <SiSupabase />, title: "Supabase" },
  { node: <SiSqlite />, title: "SQLite" },
  { node: <SiMysql />, title: "MySQL" },
  { node: <SiFigma />, title: "Figma" },
  { node: <SiGit />, title: "Git" },
  { node: <SiGithub />, title: "GitHub" },
  { node: <SiPostman />, title: "Postman" },
  { node: <SiDocker />, title: "Docker" },
  { node: <SiCodecov />, title: "CodeCov" },
];

export function About() {
  return (
    <section
      id="about"
      className="py-24 relative overflow-hidden bg-foreground/[0.02]"
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            I am passionate about translating user and organizational needs into
            digital experiences that are structured, functional, and easy to
            use. Currently pursuing my bachelor's degree in Information Systems
            at Institut Teknologi Sepuluh Nopember, I continuously explore new
            technologies across the full stack.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertise.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <BorderGlow
                className="p-6 rounded-2xl h-full flex flex-col"
                backgroundColor="var(--background)"
                borderRadius={16}
                glowColor="210 100% 50%"
                colors={["#f63bd4ff", "#8b5cf6", "#08daffff"]}
                glowIntensity={5}
                animated={true}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shrink-0">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-foreground/70 leading-relaxed text-sm flex-grow">
                  {feature.description}
                </p>
              </BorderGlow>
            </motion.div>
          ))}
        </div>

        <div className="mt-28">
          <h3 className="text-2xl font-bold text-center mb-10 tracking-wide text-foreground/90 uppercase">
            Tech Stack
          </h3>
          <div className="relative overflow-hidden w-full h-[180px] flex flex-col justify-center items-center gap-12">
            {/* @ts-expect-error - LogoLoop is a JS component wrapped in memo */}
            <LogoLoop
              logos={techLogos1}
              speed={100}
              direction="left"
              logoHeight={48}
              gap={56}
              fadeOut
              fadeOutColor="var(--background)"
              scaleOnHover
              hoverSpeed={15}
            />
            {/* @ts-expect-error - LogoLoop is a JS component wrapped in memo */}
            <LogoLoop
              logos={techLogos2}
              speed={100}
              direction="right"
              logoHeight={48}
              gap={56}
              fadeOut
              fadeOutColor="var(--background)"
              scaleOnHover
              hoverSpeed={15}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
