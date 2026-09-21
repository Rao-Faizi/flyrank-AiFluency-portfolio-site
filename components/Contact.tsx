"use client";

import { useState } from 'react';

export default function Contact() {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending...");
    
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "10cff2a9-7b76-40a7-a264-9db7aa1609cb");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      if (data.success) {
        setResult("Success! Your message has been sent to Muhammad.");
        (event.target as HTMLFormElement).reset();
      } else {
        setResult("Error sending message. Please try again.");
      }
    } catch (error) {
      setResult("Error sending message. Please try again.");
    }
    
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 px-4 bg-background">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center text-white">Let&apos;s Automate Your Business</h2>
        <p className="text-center text-gray-400 mb-10 text-lg">Send me a message below to discuss how we can save your team hours of manual work every week.</p>
        
        <div className="bg-foreground p-8 md:p-10 rounded-2xl shadow-2xl border border-gray-800">
          <form onSubmit={onSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium text-gray-300">Name</label>
              <input 
                id="name"
                type="text" 
                name="name" 
                placeholder="John Doe" 
                required 
                className="p-4 rounded-xl bg-background border border-gray-700 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-300">Email Address</label>
              <input 
                id="email"
                type="email" 
                name="email" 
                placeholder="john@example.com" 
                required 
                className="p-4 rounded-xl bg-background border border-gray-700 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
              <textarea 
                id="message"
                name="message" 
                placeholder="Tell me about the manual processes you want to automate..." 
                required 
                rows={5}
                className="p-4 rounded-xl bg-background border border-gray-700 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent resize-none transition-all"
              ></textarea>
            </div>
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="mt-2 bg-accent text-white font-bold py-4 px-8 rounded-xl hover:bg-blue-600 transition-colors disabled:opacity-50 text-lg"
            >
              {isSubmitting ? "Sending Route..." : "Send Message"}
            </button>
            {result && (
              <div className={`mt-4 p-4 rounded-lg text-center font-medium border ${result.includes('Success') ? 'bg-green-900/20 text-green-400 border-green-800' : 'bg-red-900/20 text-red-400 border-red-800'}`}>
                {result}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
