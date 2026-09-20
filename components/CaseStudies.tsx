export default function CaseStudies() {
  return (
    <section id="work" className="py-20 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">Featured Work</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Case Study 1 */}
        <div className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden flex flex-col">
          <div className="h-48 bg-gray-100 flex items-center justify-center">
            <span className="text-gray-400 font-semibold">[SalesScript AI Screenshot]</span>
          </div>
          <div className="p-6 flex-grow flex flex-col">
            <h3 className="text-xl font-bold mb-2">SalesScript AI</h3>
            <p className="text-gray-600 mb-4 flex-grow">
              A high-performance Next.js application that integrates LLMs to instantly generate tailored sales scripts, reducing manual drafting time by 90%.
            </p>
            <a href="#" className="text-accent font-semibold hover:underline mt-auto">Read full case study &rarr;</a>
          </div>
        </div>

        {/* Case Study 2 */}
        <div className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden flex flex-col">
          <div className="h-48 bg-gray-100 flex items-center justify-center">
            <span className="text-gray-400 font-semibold">[N8N Workflow Diagram]</span>
          </div>
          <div className="p-6 flex-grow flex flex-col">
            <h3 className="text-xl font-bold mb-2">N8N Data Workflows</h3>
            <p className="text-gray-600 mb-4 flex-grow">
              Automated digital workflows to synchronize complex data streams between multiple SaaS platforms, eliminating human error in data entry.
            </p>
            <a href="#" className="text-accent font-semibold hover:underline mt-auto">Read full case study &rarr;</a>
          </div>
        </div>
      </div>
    </section>
  );
}
