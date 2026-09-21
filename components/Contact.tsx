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
        <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
        <form onSubmit={onSubmit} className="flex flex-col gap-6">
          <input 
            type="text" 
            name="name" 
            placeholder="Your Name" 
            required 
            className="p-4 rounded-lg bg-foreground border border-gray-700 text-white focus:outline-none focus:border-accent"
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Your Email" 
            required 
            className="p-4 rounded-lg bg-foreground border border-gray-700 text-white focus:outline-none focus:border-accent"
          />
          <textarea 
            name="message" 
            placeholder="How can I help you automate your business?" 
            required 
            rows={5}
            className="p-4 rounded-lg bg-foreground border border-gray-700 text-white focus:outline-none focus:border-accent resize-none"
          ></textarea>
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="bg-accent text-white font-bold py-4 px-8 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
          {result && (
            <p className={`text-center font-medium ${result.includes('Success') ? 'text-green-400' : 'text-red-400'}`}>
              {result}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
