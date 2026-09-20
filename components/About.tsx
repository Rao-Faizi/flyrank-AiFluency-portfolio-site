export default function About() {
  return (
    <section className="py-20 px-4 bg-gray-50 border-y border-gray-100">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="w-48 h-48 bg-gray-200 rounded-full flex-shrink-0 flex items-center justify-center overflow-hidden">
           <span className="text-gray-400 font-semibold">[Headshot]</span>
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            I am Muhammad Faizan, a software engineer passionate about the intersection of frontend development and generative AI. 
            Currently, I am honing my skills as a Prompt Engineering Intern at Innoverse, where I optimize LLM interactions and design efficient automated systems. 
            I believe that great design is invisible&mdash;it simply frames the work.
          </p>
        </div>
      </div>
    </section>
  );
}
