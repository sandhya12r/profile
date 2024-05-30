import About from "@/components/About";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialised bg-grid-white/[0.02]">
      <h1 className="text-2xl text-center font-bold underline"></h1>
      <HeroSection />
      <About />
      <Skills />
      <Projects />
    </main>
  );
}
