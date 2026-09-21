import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ImpactMetrics from "@/components/ImpactMetrics";
import Skills from "@/components/Skills";
import CaseStudies from "@/components/CaseStudies";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <ImpactMetrics />
      <CaseStudies />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
