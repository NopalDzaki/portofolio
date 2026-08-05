"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const socialLinks = [
  { label: "Email", href: "mailto:naufalforyou11@gmail.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/naufal-dzaki11/" },
  { label: "GitHub", href: "https://github.com/NopalDzaki" },
  { label: "Instagram", href: "https://instagram.com/nopal.dzaki" },
];

export function Contact() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const surabayaTime = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Jakarta",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }).format(new Date());
      setTime(surabayaTime + " WIB");
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer id="contact" className="bg-ink relative overflow-hidden pt-32 pb-8">
      <div className="page-container flex flex-col justify-between min-h-[70vh]">
        
        {/* Top Content */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-24">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-[clamp(3.5rem,8vw,8rem)] leading-[0.9] font-sans font-medium text-paper tracking-[-0.03em] mb-8">
                LET'S WORK<br />TOGETHER.
              </h2>
              <a
                href="mailto:naufalforyou11@gmail.com"
                className="group inline-flex items-center gap-3 text-2xl font-sans text-text-inverse-muted hover:text-accent transition-colors border-b border-transparent hover:border-accent pb-1"
              >
                naufalforyou11@gmail.com
                <ArrowUpRight className="w-6 h-6 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="flex flex-col gap-4 min-w-[200px]"
          >
            <div className="font-mono text-xs text-text-muted tracking-widest uppercase mb-4">
              Socials
            </div>
            {socialLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm tracking-wider uppercase text-paper hover:text-accent transition-colors flex justify-between items-center group"
              >
                {link.label}
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border-dark flex flex-col md:flex-row justify-between items-center gap-4 text-text-muted font-mono text-xs uppercase tracking-widest">
          <div>
            © {new Date().getFullYear()} Naufal Dzaki. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Surabaya, ID — {time}
          </div>
        </div>
      </div>
    </footer>
  );
}
