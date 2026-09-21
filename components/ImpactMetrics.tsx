export default function ImpactMetrics() {
  return (
    <section className="bg-foreground border-y border-gray-800 py-12 px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-700">
        <div className="flex flex-col items-center justify-center p-4">
          <span className="text-4xl font-bold text-accent mb-2">90%</span>
          <p className="text-gray-300 font-medium">Reduction in Manual Drafting Time</p>
        </div>
        <div className="flex flex-col items-center justify-center p-4">
          <span className="text-4xl font-bold text-accent mb-2">SaaS</span>
          <p className="text-gray-300 font-medium">Complex Data Workflows Synchronized</p>
        </div>
        <div className="flex flex-col items-center justify-center p-4">
          <span className="text-4xl font-bold text-accent mb-2">Intern</span>
          <p className="text-gray-300 font-medium">Prompt Engineering at Innoverse</p>
        </div>
      </div>
    </section>
  );
}
