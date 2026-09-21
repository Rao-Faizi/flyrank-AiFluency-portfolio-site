import Hero from "@/components/Hero";
import CaseStudies from "@/components/CaseStudies";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <CaseStudies />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
