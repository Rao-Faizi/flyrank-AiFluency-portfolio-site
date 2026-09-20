export default function Footer() {
  return (
    <footer className="bg-foreground text-white py-24 px-4 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">Let&apos;s build something together.</h2>
        <p className="text-gray-400 text-lg mb-10">
          I&apos;m currently looking for new opportunities as a Front-End or AI Developer.
        </p>
        <a 
          href="mailto:hello@example.com" 
          className="inline-block bg-accent text-white font-bold py-4 px-10 rounded-lg hover:bg-blue-700 transition-colors text-lg"
        >
          Contact Me to Hire Me
        </a>
      </div>
    </footer>
  );
}
