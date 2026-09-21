import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 px-4 bg-gray-50 border-y border-gray-200">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="w-56 h-56 bg-gray-200 rounded-full flex-shrink-0 relative overflow-hidden shadow-2xl border-4 border-white">
           <Image
             src="/professional_avatar.jpg"
             alt="Muhammad Faizan Avatar"
             fill
             className="object-cover"
           />
        </div>
        <div>
          <h2 className="text-4xl font-bold mb-6 text-gray-900">About Me</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            I am a Software Engineer dedicated to bridging the gap between cutting-edge AI capabilities and real-world business efficiency. I build systems that automate the mundane so teams can focus on the meaningful.
          </p>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="font-bold text-gray-900 mb-3 text-lg">Current Role: Prompt Engineering Intern @ Innoverse</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Optimizing Large Language Model (LLM) interactions and system prompts for production-grade reliability.</li>
              <li>Designing efficient, multi-step automated workflows to process high-volume data streams.</li>
              <li>Collaborating with cross-functional teams to identify and eliminate operational bottlenecks using AI.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
