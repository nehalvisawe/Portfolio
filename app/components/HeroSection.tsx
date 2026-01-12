"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CodeIcon, Download, MailIcon } from 'lucide-react';
import code from "@/app/codeSnippet.json"
import Navbar from './Navbar';

const HeroSection = () => {
  const profileData = {
    name: "Your Name",
    role: "Full Stack Developer",
    specialty: "DevOps & Cloud",
    tools: ["Docker", "Kubernetes", "GCP", "Next.js"],
    location: "India",
    status: "Exploring Opportunities"
  };

  const handleDownload = () => {
    // Path relative to the public folder
    const resumeUrl = "/Nehal_Visawe_Resume.pdf"; 
    
    // Create a temporary anchor element
    const link = document.createElement("a");
    link.href = resumeUrl;
    
    //
    link.download = "Nehal_Visawe_Resume.pdf"; 
    
    document.body.appendChild(link);
    link.click();
    
    // Clean up
    document.body.removeChild(link);
  };
  const keys = Object.keys(code);
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    
    <section className="bg-slate-950 py-20 px-8 lg:px-16 min-h-screen flex items-center justify-center">
      <Navbar/>
      {/* Centered Container with Max Width */}
      <div className="max-w-4xl w-full mx-auto flex flex-col items-center gap-16">
        
        {/* Top Content: Hero Text (Centered) */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-8"
        >
          <h1 className="text-5xl lg:text-5xl font-bold text-white tracking-tight mb-6 mt-6">
            Hey, I'm <span className="text-blue-500">Nehal</span>
          </h1>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto leading-relaxed">
            Final year Computer Engineering student specializing in automating 
            infrastructure and crafting high-performance digital experiences.
          </p>
         
        </motion.div>

        {/* Bottom Content: The Mac IDE (Centered Row) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full group"
        >
          {/* Outer Glow Effect */}
          <div className="absolute -inset-1 bg-linear-to-r from-blue-600 to-indigo-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          
          <div className="relative bg-[#0d1117] rounded-xl border border-slate-800 shadow-2xl overflow-hidden font-mono">
            {/* Mac Title Bar */}
            <div className="bg-[#161b22] px-4 py-4 flex items-center border-b border-slate-800/50">
              <div className="flex gap-2.5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
              </div>
              <div className="flex-1 text-right">
                <span className="text-slate-500 text-xs tracking-widest uppercase">profile.json</span>
              </div>
            </div>

            {/* IDE Editor Content (Left-aligned for realism) */}
            <div className="p-6 text-sm sm:text-base leading-[1.8] text-left">
              {/* Line 1: Opening Brace */}
              <div className="flex">
                <span className="text-slate-600 mr-6 w-4 text-right select-none">1</span>
                <span className='text-blue-400 pr-2'>const </span>
                <span className='pr-2'>SoftwareEngineer </span>
                <span className='text-gray-400'>= </span>
                <span className="text-yellow-400 pl-2">{` {`}</span>
              </div>

              {/* Dynamic JSON Content */}
              {Object.entries(code).map(([key, value], index) => {
                const isLast = index === keys.length - 1;
                return (
                  <div key={key} className="flex hover:bg-slate-800/30 transition-colors">
                    <span className="text-slate-600 mr-6 w-4 text-right select-none">{index + 2}</span>
                    <div className="pl-8 flex flex-wrap">
                      <span className="text-emerald-400">"{key}"</span>
                      <span className="text-gray-400 mx-2">:</span>
                      
                      {Array.isArray(value) ? (
                        <>
                          <span className="text-yellow-400">[</span>
                          {value.map((item, i) => (
                            <span key={i} className="flex">
                              <span className="text-yellow-400">"{item}"</span>
                              {i < value.length - 1 && <span className="text-slate-300">, </span>}
                            </span>
                          ))}
                          <span className="text-yellow-400">]</span>
                        </>
                      ) : (
                        <span className="text-orange-400">"{value}"</span>
                      )}
                      
                      {!isLast && <span className="text-slate-300">,</span>}
                    </div>
                  </div>
                );
              })}

              {/* Closing Brace */}
              <div className="flex">
                <span className="text-slate-600 mr-6 w-4 text-right select-none">
                  {keys.length + 2}
                </span>
                <span className="text-yellow-400">{`}`}</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
        {...fadeIn}
        transition={{ delay: 0.3 }}
        className="flex flex-wrap justify-center gap-4 text-sm text-gray-500 font-mono"
      >
        <div className="flex items-center gap-2">
          <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-block px-4 py-4 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-bold tracking-widest uppercase mb-2"
      >
        1+ Year Experience
      </motion.div>
        </div>
        <div className="flex items-center gap-2">
         <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="inline-block px-4 py-4 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-bold tracking-widest uppercase mb-2"
      >
        3+ Projects
      </motion.div>
        </div>
       
      </motion.div>

       <div className=" flex justify-center gap-4">
            <button className="px-6 py-3 border border-slate-700 bg-linear-to-r from-cyan-600 to-indigo-500 text-gray-400 rounded-lg font-bold hover:bg-slate-800 transition-all flex justify-center gap-2">
              <MailIcon size={20}/>
              <span className='text-center'>Hire Me</span>
            </button>
             <button className="px-6 py-3 border border-slate-700 text-gray-400 rounded-lg font-bold hover:bg-slate-800 transition-all flex justify-center gap-2">
              <CodeIcon size={20}/>
              <span className='text-center'>View Portfolio</span>
            </button>
             <button className="px-6 py-3 border border-slate-700 text-gray-400 rounded-lg font-bold hover:bg-slate-800 transition-all flex justify-center gap-2" onClick={handleDownload}>
              <Download size={20}/>
              <span className='text-center'>Download Resume</span>
            </button>
          </div>

      </div>
      
    </section>

  );
};

export default HeroSection;