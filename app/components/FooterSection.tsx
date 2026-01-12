"use client";

import React from 'react';
import { Github, Linkedin, Twitter, ArrowUp, X, XIcon } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          
          {/* Brand/Name Part */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold text-white tracking-tighter">
              NEHAL<span className="text-blue-500">VISAWE</span>
            </h2>
            <p className="text-slate-500 text-sm mt-1 font-mono">
              Software Developer/Engineer.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a href="https://github.com/nehalvisawe" className="text-slate-500 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/nehal-visawe28/" className="text-slate-500 hover:text-blue-500 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://x.com/NehalVisawe28" className="text-slate-500 hover:text-sky-400 transition-colors">
              <XIcon className="w-5 h-5" />
            </a>
          </div>

          {/* Back to Top */}
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-slate-500 hover:text-white transition-colors text-sm font-mono"
          >
            BACK TO TOP 
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-900/50 gap-4">
          <p className="text-slate-600 text-xs">
            © {currentYear} All rights reserved.
          </p>
          
          <p className="text-slate-600 text-xs flex items-center gap-1">
            Built with <span className="text-red-500 text-lg">❤️</span> using 
            <span className="text-slate-400 font-semibold">Next.js</span> & 
            <span className="text-slate-400 font-semibold">Tailwind</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;