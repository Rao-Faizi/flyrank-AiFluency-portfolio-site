import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero_background_keeper.jpg"
          alt="Abstract digital workflow background"
          fill
          className="object-cover opacity-80"
          priority
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          I build high-performance Business Automation and AI Engineering solutions.
        </h1>
        <a 
          href="#work" 
          className="inline-block w-full md:w-auto bg-accent text-white font-bold py-4 px-8 rounded-lg hover:bg-blue-700 transition-colors"
        >
          View My Work
        </a>
      </div>
    </section>
  );
}
