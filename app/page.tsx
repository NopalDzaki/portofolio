import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { GithubActivity } from "@/components/GithubActivity";
import { Contact } from "@/components/Contact";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-paper">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <GithubActivity />
      <Contact />
    </main>
  );
}
