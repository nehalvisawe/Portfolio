"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FolderCode, 
  ExternalLink, 
  Github, 
  Search, 
  FileJson, 
  Monitor, 
  Smartphone,
  ChevronRight,
  History
} from 'lucide-react';
import focusflow from '@/public/focusflow.png'
import smartedu from '@/public/smartedu.png'
import swachhBharat from '@/public/swachh-bharat.png'
import Image from 'next/image';
const PROJECTS_DATA = {
  "SmartEDU - College LMS": {
    id: "smartedu",
    title: "SmartEDU - Resource Hub",
    duration: "2025 - 2026",
    description: "A centralized platform for colleges providing an efficient environment for university study resource sharing.",
    tech: ["Next.js", "MongoDB", "MERN Stack", "Vercel"],
    links: { live: "https://smart-edu-orcin.vercel.app/", github: "https://github.com/nehalvisawe" },
    image: smartedu
  },
  "Swachh-Bharat Platform": {
    id: "swachh-bharat",
    title: "Swachh-Bharat Platform",
    duration: "2025",
    description: "Developed a gamified complaint registration platform to report waste issues to local authorities, promoting public cleanliness[cite: 39, 40].",
    tech: ["Next.js", "Tailwind CSS", "TypeScript", "Vercel"],
    links: { live: "https://swachh-bharat.vercel.app/", github: "https://github.com/nehalvisawe" },
    image: swachhBharat
  },
  "FocusFlow Chrome Extension": {
    id: "focusflow",
    title: "FocusFlow Chrome Extension",
    duration: "2025",
    description: "A productivity-focused Pomodoro timer that triggers with every new tab to help maintain workflow focus.",
    tech: ["JavaScript", "Chrome APIs", "HTML/CSS", "Git"],
    links: { live: "#", github: "https://github.com/nehalvisawe/FocusFlow" },
    image: focusflow
  }
};

const ChromeProjects = () => {
  const [activeTab, setActiveTab] = useState<keyof typeof PROJECTS_DATA>("SmartEDU - College LMS");

  return (
    <section id="projects" className="bg-slate-950 py-24 px-6 border-t border-slate-900">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-white mb-4 italic">Sources / Projects</h2>
          <p className="text-slate-400 max-w-2xl">
            Auditing built systems and deployed architectures. This section explores the 
            source code and live environments of my engineering projects[cite: 8, 36].
          </p>
        </div>

        {/* Chrome Browser Mockup */}
        <div className="w-full bg-[#202124] rounded-xl border border-slate-800 shadow-2xl overflow-hidden flex flex-col h-[650]">
          
          {/* Chrome Tab Bar */}
          <div className="flex bg-[#121212] pt-2 px-2 gap-1 border-b border-slate-800">
            {Object.keys(PROJECTS_DATA).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`flex items-center gap-2 px-4 py-2 rounded-t-lg text-xs font-medium transition-all ${
                  activeTab === tab 
                  ? "bg-[#202124] text-white" 
                  : "text-slate-500 hover:bg-slate-800 hover:text-slate-300"
                }`}
              >
                <FileJson className="w-3 h-3 text-blue-400" />
                {tab.toLowerCase()}.js
              </button>
            ))}
          </div>

          {/* Address Bar */}
          <div className="bg-[#202124] p-2 flex items-center gap-3 border-b border-slate-800">
            <div className="flex gap-1.5 ml-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
            </div>
            <div className="flex-1 bg-[#121212] rounded-full px-4 py-1 flex items-center gap-2 border border-slate-700">
              <Search className="w-3 h-3 text-slate-500" />
              <span className="text-[10px] text-slate-400 font-mono">localhost:3000/projects/{PROJECTS_DATA[activeTab].id}</span>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex flex-1 overflow-hidden">
            
            {/* Sidebar Explorer */}
            <aside className="w-64 border-r border-slate-800 bg-[#202124] hidden md:block">
              <div className="p-4 uppercase text-[10px] font-bold text-slate-500 tracking-widest flex items-center gap-2">
                <FolderCode className="w-3 h-3" /> Project Files
              </div>
              <nav>
                {Object.keys(PROJECTS_DATA).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab as any)}
                    className={`w-full flex items-center px-4 py-2 text-xs font-mono transition-colors ${
                      activeTab === tab ? "bg-blue-600/10 text-blue-400" : "text-slate-400 hover:bg-slate-800"
                    }`}
                  >
                    <ChevronRight className={`w-3 h-3 mr-2 transition-transform ${activeTab === tab ? "rotate-90 text-blue-400" : ""}`} />
                    {PROJECTS_DATA[tab as keyof typeof PROJECTS_DATA].id}.ts
                  </button>
                ))}
              </nav>
            </aside>

            {/* Main Preview Panel */}
            <main className="flex-1 bg-[#121212] flex flex-col overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col h-full"
                >
                  {/* Visual Preview Header */}
                  <div className="relative h-80 w-full overflow-hidden border-b border-slate-800 group">
                    <Image 
                      src={PROJECTS_DATA[activeTab].image} 
                      className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" 
                      alt="Project preview"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#121212] to-transparent" />
                    <div className="absolute bottom-4 left-6">
                      <h3 className="text-2xl font-bold text-white">{PROJECTS_DATA[activeTab].title}</h3>
                      <p className="text-blue-500 text-xs font-mono">{PROJECTS_DATA[activeTab].duration}</p>
                    </div>
                  </div>

                  {/* Project Details Panel */}
                  <div className="p-8 overflow-y-auto flex-1">
                    <div className="mb-6">
                      <p className="text-slate-400 text-sm leading-relaxed mb-6 italic">
                        {PROJECTS_DATA[activeTab].description}
                      </p>
                      
                      {/* Tech Stack Badges */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {PROJECTS_DATA[activeTab].tech.map(t => (
                          <span key={t} className="px-2 py-1 bg-slate-800 border border-slate-700 text-slate-300 text-[10px] font-mono rounded capitalize">
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Action Links */}
                      <div className="flex gap-4">
                        <a 
                          href={PROJECTS_DATA[activeTab].links.github} 
                          target="_blank"
                          className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded text-xs transition-colors"
                        >
                          <Github className="w-4 h-4" /> View Source
                        </a>
                        <a 
                          href={PROJECTS_DATA[activeTab].links.live} 
                          target="_blank"
                          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-xs transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" /> Open App
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </main>
          </div>

          {/* Footer Bar */}
          <div className="bg-[#202124] px-4 py-1.5 border-t border-slate-800 flex justify-between items-center text-[10px] font-mono text-slate-500">
            <div className="flex gap-4 items-center">
              <History className="w-3 h-3" />
              <span>Last deployed: Recently [cite: 37]</span>
            </div>
            <div className="flex gap-3">
              <Monitor className="w-3 h-3" />
              <Smartphone className="w-3 h-3" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChromeProjects;