export default function ImpactMetrics() {
  return (
    <section className="bg-background py-16 px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-foreground border border-gray-700 rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-lg">
          <span className="text-5xl font-extrabold text-white mb-4">90%</span>
          <p className="text-gray-300 font-medium">Reduction in Manual Drafting Time</p>
        </div>
        <div className="bg-foreground border border-gray-700 rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-lg">
          <span className="text-5xl font-extrabold text-white mb-4">SaaS</span>
          <p className="text-gray-300 font-medium">Complex Data Workflows Synchronized</p>
        </div>
        <div className="bg-foreground border border-gray-700 rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-lg">
          <span className="text-5xl font-extrabold text-white mb-4">Intern</span>
          <p className="text-gray-300 font-medium">Prompt Engineering at Innoverse</p>
        </div>
      </div>
    </section>
  );
}
