"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Work", href: "#work" },
    { name: "Skills", href: "#skills" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-gray-800 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          
          <Link href="/" className="text-xl font-bold text-white tracking-wide">
            Muhammad<span className="text-accent">Faizan</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-accent transition-colors font-medium text-sm"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-300 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Side Menu */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      />
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-64 bg-foreground border-l border-gray-800 shadow-xl transform transition-transform duration-300 ease-in-out md:hidden flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-16 flex items-center justify-end px-4 border-b border-gray-800">
          <button onClick={toggleMenu} className="p-2 text-gray-300 hover:text-white" aria-label="Close menu">
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
             </svg>
          </button>
        </div>
        <div className="flex flex-col py-6 px-4 gap-6">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={toggleMenu}
              className="text-lg font-medium text-gray-300 hover:text-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
