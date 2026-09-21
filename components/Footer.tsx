export default function Footer() {
  return (
    <footer className="bg-foreground text-white py-24 px-4 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">Let&apos;s build something together.</h2>
        <p className="text-gray-400 text-lg mb-10">
          I&apos;m currently looking for new opportunities as a Business Automation and AI Engineer.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
          <a 
            href="https://calendly.com/" 
            className="inline-block bg-accent text-white font-bold py-4 px-10 rounded-lg hover:bg-blue-700 transition-colors text-lg"
          >
            Book a Discovery Call
          </a>
          <a 
            href="/cv.pdf" 
            className="inline-block bg-transparent border-2 border-accent text-white font-bold py-4 px-10 rounded-lg hover:bg-accent/20 transition-colors text-lg"
          >
            Download CV
          </a>
        </div>
        
        <div className="flex justify-center gap-8 mt-12 border-t border-gray-800 pt-8">
          <a href="https://linkedin.com/in/raofaizi21" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-lg font-medium">
            LinkedIn
          </a>
          <a href="https://github.com/raofaizi21" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-lg font-medium">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
