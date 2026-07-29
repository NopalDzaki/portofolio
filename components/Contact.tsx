"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MessageSquare,
  MapPin,
  Loader2,
  CheckCircle2,
  Send,
  AlertCircle,
  Phone,
} from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error" | "missing_key"
  >("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const formData = new FormData(e.currentTarget);
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

    if (!accessKey) {
      setIsSubmitting(false);
      setSubmitStatus("missing_key");
      return;
    }

    formData.append("access_key", accessKey);
    formData.append("subject", "New Contact Message from Portfolio");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden bg-background"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] opacity-50" />
        <div className="absolute top-20 left-[-20%] w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] opacity-50" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Get In{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Touch
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-foreground/70 text-lg max-w-2xl"
          >
            Have a project in mind or just want to say hi? I'm always open to
            discussing digital experiences, opportunities, and partnerships.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-8"
          >
            <div className="flex flex-col gap-6">
              <a
                href="mailto:naufalforyou11@gmail.com"
                className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-foreground/5 transition-colors"
              >
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email Me</h3>
                  <p className="text-foreground/70 group-hover:text-foreground transition-colors">
                    naufalforyou11@gmail.com
                  </p>
                </div>
              </a>

              <div className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-foreground/5 transition-colors">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Location</h3>
                  <p className="text-foreground/70 group-hover:text-foreground transition-colors">
                    Surabaya, Indonesia
                  </p>
                </div>
              </div>

              <a
                href="https://wa.me/6287814463443"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-foreground/5 transition-colors"
              >
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">
                    Phone & WhatsApp
                  </h3>
                  <p className="text-foreground/70 group-hover:text-foreground transition-colors">
                    +62 878-1446-3443
                  </p>
                </div>
              </a>
            </div>

            <div className="pt-8 border-t border-foreground/10">
              <h3 className="font-semibold text-lg mb-6">Connect with me</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/NopalDzaki"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-foreground/20 flex items-center justify-center text-foreground/70 hover:bg-foreground hover:text-background hover:border-foreground transition-all hover:scale-110"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/naufal-dzaki11"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-foreground/20 flex items-center justify-center text-foreground/70 hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] transition-all hover:scale-110"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com/nopal.dzaki"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-foreground/20 flex items-center justify-center text-foreground/70 hover:bg-[#E1306C] hover:text-white hover:border-[#E1306C] transition-all hover:scale-110"
                >
                  <FaInstagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-foreground/5 border border-foreground/10 rounded-3xl p-8 lg:p-10 backdrop-blur-sm relative"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {submitStatus === "missing_key" && (
                <div className="bg-yellow-500/10 border border-yellow-500/30 text-yellow-600 dark:text-yellow-400 p-4 rounded-xl flex gap-3 text-sm">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <p>
                    Form submission is disabled. Please add your{" "}
                    <strong>Web3Forms Access Key</strong> to the{" "}
                    <code className="bg-background px-1 rounded">
                      .env.local
                    </code>{" "}
                    file.
                  </p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 p-4 rounded-xl flex gap-3 text-sm">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <p>
                    Something went wrong. Please try again or email me directly.
                  </p>
                </div>
              )}

              {submitStatus === "success" && (
                <div className="bg-green-500/10 border border-green-500/30 text-green-600 dark:text-green-400 p-4 rounded-xl flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5" />
                  <p className="font-medium">Message sent successfully!</p>
                </div>
              )}

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-foreground/80"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="w-full bg-background/50 border border-foreground/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-foreground/30"
                    placeholder="John Doe"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-foreground/80"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="w-full bg-background/50 border border-foreground/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-foreground/30"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-foreground/80"
                >
                  Your Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  required
                  rows={5}
                  className="w-full bg-background/50 border border-foreground/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none placeholder:text-foreground/30"
                  placeholder="Tell me about your project or what you need help with..."
                />
              </div>

              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                style={{ display: "none" }}
              />

              <button
                type="submit"
                disabled={isSubmitting || submitStatus === "success"}
                className="w-full bg-foreground text-background hover:bg-foreground/90 disabled:bg-foreground/50 disabled:cursor-not-allowed py-4 rounded-xl font-medium transition-all flex items-center justify-center gap-2 mt-2 group"
              >
                {isSubmitting ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : submitStatus === "success" ? (
                  <>
                    <CheckCircle2 className="w-5 h-5" /> Sent
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
