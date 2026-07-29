"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SpecularButton from "@/components/ui/SpecularButton";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ProfileCard from "@/components/ui/ProfileCard";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] opacity-50" />
      </div>

      <div className="relative z-10 px-4 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text Content */}
          <div className="text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="font-bold tracking-tight mb-4 leading-[1.1] pb-2">
                <span className="block text-3xl md:text-4xl lg:text-5xl text-foreground/90 mb-2">
                  Hi, I'm
                </span>
                <span className="text-5xl md:text-6xl lg:text-[5.5rem] text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Naufal Dzaki.
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground/70 mb-6 leading-snug">
                Crafting Digital Experiences in UI/UX & Web Development
              </h2>
              <p className="text-lg text-foreground/70 mb-8 max-w-2xl leading-relaxed">
                I'm an Information Systems student at Institut Teknologi Sepuluh
                Nopember with a background in Software Engineering. I focus on
                building structured, functional, responsive, and user-friendly
                digital products from frontend to backend.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <SpecularButton
                size="lg"
                radius={24}
                tint="rgba(59, 130, 246, 0.1)" // bg-primary/10
                blur={0}
                textColor="inherit"
                lineColor="#3b82f6" // primary
                baseColor="#1e40af" // primary dark
                intensity={1}
                shineSize={10}
                shineFade={40}
                thickness={2}
                speed={1.5}
                followMouse={true}
                proximity={250}
                autoAnimate={true}
                onClick={() => {
                  window.location.href = "#projects";
                }}
              >
                View My Work <ArrowRight className="w-4 h-4" />
              </SpecularButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex items-center gap-6 mt-12"
            >
              <a
                href="https://github.com/NopalDzaki"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/50 hover:text-foreground transition-colors hover:scale-110"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/naufal-dzaki11/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/50 hover:text-foreground transition-colors hover:scale-110"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Profile Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full flex justify-center items-center"
          >
            <ProfileCard
              handle="NopalDzaki"
              status="Online"
              contactText="Contact Me"
              avatarUrl="/assets/Photo.jpeg"
              showUserInfo
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() => {
                window.location.href = "mailto:naufalforyou11@gmail.com";
              }}
              behindGlowColor="rgba(125, 190, 255, 0.05)"
              behindGlowEnabled={false}
              innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
