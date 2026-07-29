import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />

      {/* Footer */}
      <footer className="py-8 text-center text-foreground/50 text-sm border-t border-foreground/10">
        <p>
          © {new Date().getFullYear()} Naufal Dzaki Al Thaafah. Built with
          Next.js & Framer Motion.
        </p>
      </footer>
    </main>
  );
}
