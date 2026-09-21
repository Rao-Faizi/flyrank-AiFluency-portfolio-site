import Image from "next/image";

export default function CaseStudies() {
  return (
    <section id="work" className="py-24 px-4 bg-background max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-16 text-center text-white">Featured Work</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Case Study 1 */}
        <div className="bg-foreground border border-gray-800 rounded-2xl shadow-xl overflow-hidden flex flex-col">
          <div className="h-64 bg-gray-900 relative">
            <Image 
              src="/sales_script_dashboard.jpg" 
              alt="SalesScript AI Dashboard"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-8 flex-grow flex flex-col">
            <h3 className="text-2xl font-bold mb-1 text-white">SalesScript AI</h3>
            <p className="text-accent font-mono mb-6 text-sm">Next.js • Tailwind • OpenAI API</p>
            
            <div className="space-y-4 flex-grow text-gray-300">
              <p><strong className="text-white">The Problem:</strong> Sales reps were spending 2+ hours a day manually researching prospects and drafting hyper-personalized cold outreach scripts from scratch.</p>
              <p><strong className="text-white">The Solution:</strong> Built a custom Next.js web application integrating the OpenAI API that ingests target profiles and instantly outputs structured, high-converting scripts based on proven sales frameworks.</p>
              <p><strong className="text-accent">The Impact:</strong> Reduced manual drafting time by 90%, allowing the sales team to triple their daily outreach volume while maintaining message quality.</p>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-800 flex gap-4">
              <span className="text-gray-500 font-medium cursor-not-allowed">Live Demo</span>
              <span className="text-gray-500 font-medium cursor-not-allowed">GitHub Repo</span>
            </div>
          </div>
        </div>

        {/* Case Study 2 */}
        <div className="bg-foreground border border-gray-800 rounded-2xl shadow-xl overflow-hidden flex flex-col">
          <div className="h-64 bg-gray-900 relative">
            <Image 
              src="/n8n_workflow_diagram.jpg" 
              alt="N8N Workflow Diagram"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-8 flex-grow flex flex-col">
            <h3 className="text-2xl font-bold mb-1 text-white">Data Sync Workflows</h3>
            <p className="text-accent font-mono mb-6 text-sm">N8N • Webhooks • REST APIs • Postgres</p>
            
            <div className="space-y-4 flex-grow text-gray-300">
              <p><strong className="text-white">The Problem:</strong> A mid-sized agency was manually copying customer data from Shopify into their CRM and Google Sheets, leading to a 15% error rate and delayed onboarding.</p>
              <p><strong className="text-white">The Solution:</strong> Architected a robust node-based automation workflow in N8N that listens for Shopify webhooks, formats the JSON payload, and routes the data concurrently to the CRM and internal analytics database.</p>
              <p><strong className="text-accent">The Impact:</strong> Eliminated 100% of human data-entry errors and saved the operations team 15 hours per week in manual copy-pasting tasks.</p>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-800 flex gap-4">
               <span className="text-gray-500 font-medium cursor-not-allowed">Live Demo</span>
               <span className="text-gray-500 font-medium cursor-not-allowed">GitHub Repo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
