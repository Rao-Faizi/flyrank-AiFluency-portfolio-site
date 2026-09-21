import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[75vh] min-h-[600px] flex items-center justify-start overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero_background_keeper.jpg"
          alt="Abstract digital workflow background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay Fix for Contrast */}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-left px-8 md:px-16 max-w-5xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
          Business Automation & AI Engineer
          <span className="block text-2xl md:text-3xl text-gray-300 font-normal mt-4">
            Turning manual workflows into automated LLM systems.
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-accent font-mono mb-10">
          Next.js • Python • N8N • LangChain • OpenAI API
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href="#work" 
            className="inline-block text-center w-full sm:w-auto bg-accent text-white font-bold py-4 px-8 rounded-lg hover:bg-blue-700 transition-colors"
          >
            View Projects
          </a>
          <a 
            href="#contact" 
            className="inline-block text-center w-full sm:w-auto bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white/10 transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
