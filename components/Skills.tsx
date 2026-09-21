export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-background border-t border-gray-800">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">Technical Architecture Stack</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-foreground p-8 rounded-xl border border-gray-800 shadow-lg">
            <h3 className="text-xl font-bold mb-6 text-accent border-b border-gray-700 pb-2">AI & LLMs</h3>
            <ul className="space-y-3 text-gray-300 font-medium">
              <li>Prompt Engineering</li>
              <li>Fine-Tuning & RAG</li>
              <li>OpenAI API</li>
              <li>LangChain</li>
            </ul>
          </div>

          <div className="bg-foreground p-8 rounded-xl border border-gray-800 shadow-lg">
            <h3 className="text-xl font-bold mb-6 text-accent border-b border-gray-700 pb-2">Automation & Workflow</h3>
            <ul className="space-y-3 text-gray-300 font-medium">
              <li>N8N (Node-based automation)</li>
              <li>Make.com & Zapier</li>
              <li>Custom Webhooks</li>
              <li>REST API Integration</li>
            </ul>
          </div>

          <div className="bg-foreground p-8 rounded-xl border border-gray-800 shadow-lg">
            <h3 className="text-xl font-bold mb-6 text-accent border-b border-gray-700 pb-2">Core Development</h3>
            <ul className="space-y-3 text-gray-300 font-medium">
              <li>Next.js (App Router)</li>
              <li>TypeScript</li>
              <li>Python</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
