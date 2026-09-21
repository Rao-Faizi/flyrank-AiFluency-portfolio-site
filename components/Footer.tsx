export default function Footer() {
  return (
    <footer className="bg-foreground text-white py-12 px-4 text-center border-t border-gray-800">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-gray-400 font-medium">
          &copy; {new Date().getFullYear()} Muhammad Faizan. All rights reserved.
        </p>
        
        <div className="flex items-center gap-6">
          <a href="https://linkedin.com/in/raofaizi21" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors font-medium text-lg">
            LinkedIn
          </a>
          <a href="https://github.com/Rao-Faizi" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors font-medium text-lg">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
