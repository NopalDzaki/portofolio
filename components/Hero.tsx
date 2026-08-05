"use client";

import { motion, useAnimation, useMotionValue, useTransform } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import Image from "next/image";
import { useEffect, useState } from "react";

const roles = [
  "Full-Stack Web Developer",
  "UI/UX Designer",
  "Product-Oriented Engineer",
];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Parallax effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-500, 500], [1.2, -1.2]);
  const rotateY = useTransform(mouseX, [-500, 500], [-1.2, 1.2]);
  const translateX = useTransform(mouseX, [-500, 500], [-8, 8]);
  const translateY = useTransform(mouseY, [-500, 500], [-8, 8]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set(clientX - innerWidth / 2);
    mouseY.set(clientY - innerHeight / 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen bg-paper flex items-center pt-24 pb-12 overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="page-container relative z-10 w-full h-full flex flex-col justify-center">
        <div className="grid lg:grid-cols-[1.25fr_0.75fr] gap-12 lg:gap-24 items-center">
          
          {/* Left Column: Text Content */}
          <div className="flex flex-col gap-6 lg:gap-8 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="flex items-center gap-4 text-ink-soft/60 hover:text-ink transition-colors"
            >
              <a href="https://github.com/NopalDzaki" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/naufal-dzaki11/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/nopal.dzaki" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="mailto:naufalforyou11@gmail.com" aria-label="Email">
                <FaEnvelope className="w-5 h-5" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="font-mono text-xs font-semibold tracking-[0.2em] text-text-muted uppercase"
            >
              SURABAYA · INDONESIA
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="font-sans text-[clamp(3.65rem,2.35rem+5.3vw,8.2rem)] leading-[0.92] tracking-[-0.045em] text-ink font-medium"
            >
              Hi, I’m <br />
              <span className="font-display italic tracking-normal pr-4">Naufal Dzaki.</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              className="text-xl md:text-2xl text-text-secondary h-8 flex items-center"
            >
              <span>{roles[roleIndex]}</span>
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                className="inline-block w-3 h-[1.1em] bg-ink ml-1 mb-[-0.1em]"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-4"
            >
              <a
                href="https://docs.google.com/document/d/1OtdNM6Kp0f4XS8In3M4aYVvqHnfTKO96/edit?usp=sharing&ouid=111176491291122270640&rtpof=true&sd=true"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full sm:w-auto justify-center items-center gap-2 px-8 py-4 rounded-full bg-ink text-paper font-sans font-medium hover:bg-ink-soft transition-colors text-center"
              >
                VIEW RESUME
                <FileText className="w-4 h-4" />
              </a>
              <a
                href="#projects"
                className="inline-flex w-full sm:w-auto justify-center items-center gap-2 px-8 py-4 rounded-full bg-transparent border border-border-light text-ink font-sans font-medium hover:bg-black/5 transition-colors text-center"
              >
                EXPLORE PROJECTS
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Portrait Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="w-full flex justify-center items-center order-1 lg:order-2"
          >
            <motion.div
              style={{
                rotateX,
                rotateY,
                x: translateX,
                y: translateY,
              }}
              className="relative w-[320px] sm:w-[380px] lg:w-full max-w-[420px] aspect-[4/5] rounded-[24px] bg-[#1a1a1a] border border-white/10 overflow-hidden shadow-image hover:contrast-105 transition-[filter] duration-500"
            >
              {/* Abstract code symbols background */}
              <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden select-none font-mono text-[10px] text-white break-all leading-tight p-4">
                {`{ function init() { const sys = new Arch(); sys.boot(0x42); return sys.ready ? "OK" : "ERR"; } } [0x88 0xFF 0x00] => { ptr: 0x90A2 } `}
                {`const PORTFOLIO_BUILD = { version: '2.0.0', status: 'ACTIVE', author: 'NAUFAL' }; `}
                {`function init() { const sys = new Arch(); sys.boot(0x42); return sys.ready ? "OK" : "ERR"; } } [0x88 0xFF 0x00] => { ptr: 0x90A2 } `}
              </div>
              
              <Image
                src="/assets/Photo.jpeg"
                alt="Naufal Dzaki"
                fill
                priority
                className="object-cover object-top filter grayscale opacity-90 transition-opacity duration-300 hover:opacity-100"
                sizes="(max-width: 768px) 380px, 420px"
              />
              
              {/* Status Panel */}
              <div className="absolute bottom-4 left-4 right-4 bg-ink/80 backdrop-blur-md rounded-2xl p-4 border border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-paper font-medium text-sm">@nopaldzaki</div>
                  <div className="text-text-inverse-muted text-xs">Available for collaboration</div>
                </div>
                <div className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse shadow-[0_0_8px_rgba(36,201,139,0.6)]" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Hero Bottom Transition Curve */}
      <div className="absolute bottom-0 left-0 w-full h-[8vh] md:h-[15vh] overflow-hidden pointer-events-none">
        <svg
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          className="absolute bottom-0 w-full h-full text-ink"
        >
          <path
            fill="currentColor"
            d="M0 100 C 480 0 960 0 1440 100 Z"
          />
        </svg>
      </div>
    </section>
  );
}
