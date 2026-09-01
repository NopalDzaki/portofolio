"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function GithubActivity() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [blockSize, setBlockSize] = useState(12);

  useEffect(() => {
    setMounted(true);
    const handleResize = () => {
      if (window.innerWidth < 500) setBlockSize(8);
      else if (window.innerWidth < 768) setBlockSize(10);
      else setBlockSize(12);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="py-24 bg-paper relative overflow-hidden border-t border-border-light border-dashed">
      <div className="page-container">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-16">
          <div>
            <div className="font-mono text-xs tracking-widest text-text-muted uppercase mb-4">
              Open Source & Contributions
            </div>
            <h2 className="text-4xl md:text-5xl font-sans tracking-tight text-ink font-medium">
              GitHub Activity
            </h2>
          </div>
          <a
            href="https://github.com/NopalDzaki"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 font-sans font-medium text-ink hover:text-accent transition-colors"
          >
            VIEW GITHUB PROFILE
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full border border-border-light rounded-xl p-4 sm:p-8 bg-paper-bright flex justify-center overflow-hidden"
        >
          <div className="w-full overflow-x-auto hide-scrollbar flex justify-start sm:justify-center pb-2">
            {mounted && (
              <GitHubCalendar
                username="NopalDzaki"
                blockSize={blockSize}
                colorScheme={resolvedTheme === "dark" ? "dark" : "light"}
                theme={{
                  light: [
                    "color-mix(in srgb, var(--ink) 5%, transparent)",
                    "color-mix(in srgb, var(--ink) 25%, transparent)",
                    "color-mix(in srgb, var(--ink) 50%, transparent)",
                    "color-mix(in srgb, var(--ink) 75%, transparent)",
                    "var(--ink)",
                  ],
                  dark: [
                    "color-mix(in srgb, var(--ink) 10%, transparent)",
                    "color-mix(in srgb, var(--ink) 30%, transparent)",
                    "color-mix(in srgb, var(--ink) 60%, transparent)",
                    "color-mix(in srgb, var(--ink) 85%, transparent)",
                    "var(--ink)",
                  ],
                }}
                labels={{
                  totalCount: "{{count}} contributions in the last year",
                }}
              />
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
