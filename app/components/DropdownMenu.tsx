"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  Linkedin, 
  Github, 
  Mail, 
  MessageCircle,
  ExternalLink 
} from 'lucide-react';

const StayInTouch = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-4 h-4" />,
      href: 'https://www.linkedin.com/in/nehal-visawe28/', //
      label: 'Professional Network'
    },
    {
      name: 'GitHub',
      icon: <Github className="w-4 h-4" />,
      href: 'https://github.com/nehalvisawe', //
      label: 'Open Source Projects'
    },
    {
      name: 'Email',
      icon: <Mail className="w-4 h-4" />,
      href: 'mailto:nehalvisawe28@gmail.com', //
      label: 'Direct Inquiry'
    }
  ];

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-cyane-600 hover:bg-cyan-700 text-white text-sm font-bold rounded-lg transition-all shadow-lg shadow-blue-500/20"
      >
        <MessageCircle className="w-4 h-4" />
        Stay in Touch
        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute right-0 mt-3 w-64 bg-[#121212] border border-slate-800 rounded-xl shadow-2xl z-50 overflow-hidden"
          >
            <div className="p-2 border-b border-slate-800 bg-[#202124]/50">
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest px-2">Connect with me</span>
            </div>
            
            <div className="p-2">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-800 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-slate-900 rounded-lg text-cyan-500 group-hover:text-white group-hover:bg-cyan-600 transition-all">
                      {link.icon}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">{link.name}</p>
                      <p className="text-[10px] text-slate-500 font-mono">{link.label}</p>
                    </div>
                  </div>
                  <ExternalLink className="w-3 h-3 text-slate-600 opacity-0 group-hover:opacity-100 transition-all" />
                </a>
              ))}
            </div>

            {/* Mock Status Bar to match Chrome/IDE Style */}
            <div className="bg-[#202124] px-4 py-2 border-t border-slate-800 flex justify-between items-center text-[10px] font-mono text-slate-600">
              <span>Status: Active twice a week</span>
              <span className="text-green-500">●</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default StayInTouch;