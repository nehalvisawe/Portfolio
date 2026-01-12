"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Terminal, Settings, Cpu, ChevronRight, Search } from 'lucide-react';

const SKILLS_CATEGORIES = {
  "Languages": {
    icon: <Terminal className="w-4 h-4" />,
    description: "Core programming languages used for competitive programming and system logic[cite: 13].",
    skills: [
      { name: "Java", level: "90%", color: "bg-orange-500" },
      { name: "C++", level: "85%", color: "bg-blue-600" },
      { name: "TypeScript", level: "80%", color: "bg-sky-500" },
      { name: "Python", level: "75%", color: "bg-yellow-500" },
      { name: "JavaScript", level: "90%", color: "bg-yellow-400" }
    ]
  },
  "Web Technologies": {
    icon: <Globe className="w-4 h-4" />,
    description: "Full-stack development stack used in Bizkranti internship and SmartEDU[cite: 15, 32, 37].",
    skills: [
      { name: "Next.js", level: "90%", color: "bg-white" },
      { name: "React.js", level: "92%", color: "bg-cyan-400" },
      { name: "Node.js", level: "85%", color: "bg-green-500" },
      { name: "MERN Stack", level: "88%", color: "bg-emerald-500" },
      { name: "Tailwind CSS", level: "95%", color: "bg-teal-400" }
    ]
  },
  "Cloud & Tools": {
    icon: <Settings className="w-4 h-4" />,
    description: "Infrastructure and version control competencies[cite: 16, 44].",
    skills: [
      { name: "Google Cloud (GCP)", level: "70%", color: "bg-blue-500" },
      { name: "Git / GitHub", level: "95%", color: "bg-orange-600" },
      { name: "MongoDB", level: "82%", color: "bg-green-600" },
      { name: "Vercel", level: "90%", color: "bg-slate-300" }
    ]
  },
  "Core Concepts": {
    icon: <Cpu className="w-4 h-4" />,
    description: "Foundational engineering principles and architecture[cite: 17].",
    skills: [
      { name: "REST APIs", level: "90%", color: "bg-purple-500" },
      { name: "System Design", level: "70%", color: "bg-pink-500" },
      { name: "MVC Architecture", level: "85%", color: "bg-red-500" },
      { name: "Data Structures", level: "80%", color: "bg-blue-400" }
    ]
  }
};

const ChromeSkills = () => {
  const [activeTab, setActiveTab] = useState<keyof typeof SKILLS_CATEGORIES>("Web Technologies");

  return (
    <section id="skills" className="bg-slate-950 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Technical Arsenal</h2>
          <p className="text-slate-400 max-w-2xl italic">
            Inspecting the source of my expertise. Structured competencies from academic foundations 
            and professional internships[cite: 21, 31].
          </p>
        </div>

        {/* Chrome Browser Mockup */}
        <div className="w-full bg-[#202124] rounded-xl border border-slate-800 shadow-2xl overflow-hidden flex flex-col h-[600]">
          
          {/* Chrome Tab Bar */}
          <div className="flex bg-[#121212] pt-2 px-2 gap-1 border-b border-slate-800">
            {Object.keys(SKILLS_CATEGORIES).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`flex items-center gap-2 px-4 py-2 rounded-t-lg text-xs font-medium transition-all ${
                  activeTab === tab 
                  ? "bg-[#202124] text-white" 
                  : "text-slate-500 hover:bg-slate-800 hover:text-slate-300"
                }`}
              >
                {SKILLS_CATEGORIES[tab as keyof typeof SKILLS_CATEGORIES].icon}
                {tab}.json
              </button>
            ))}
          </div>

          {/* Address Bar Area */}
          <div className="bg-[#202124] p-2 flex items-center gap-3 border-b border-slate-800">
            <div className="flex gap-2 ml-2">
              <div className="w-3 h-3 rounded-full bg-slate-700" />
              <div className="w-3 h-3 rounded-full bg-slate-700" />
            </div>
            <div className="flex-1 bg-[#121212] rounded-full px-4 py-1 flex items-center gap-2 border border-slate-700">
              <Search className="w-3 h-3 text-slate-500" />
              <span className="text-[10px] text-slate-400 font-mono">localhost:3000/skills/{activeTab.toLowerCase().replace(" ", "-")}</span>
            </div>
          </div>

          {/* Main Content Area: Sidebar + Panel */}
          <div className="flex flex-1 overflow-hidden">
            
            {/* Sidebar (Navigation Panel) */}
            <aside className="w-64 border-r border-slate-800 bg-[#202124] hidden md:block">
              <div className="p-4 uppercase text-[10px] font-bold text-slate-500 tracking-widest">
                Category Explorer
              </div>
              <nav>
                {Object.keys(SKILLS_CATEGORIES).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab as any)}
                    className={`w-full flex items-center justify-between px-4 py-3 text-sm transition-colors ${
                      activeTab === tab ? "bg-blue-600/10 text-blue-400" : "text-slate-400 hover:bg-slate-800"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {SKILLS_CATEGORIES[tab as keyof typeof SKILLS_CATEGORIES].icon}
                      {tab}
                    </div>
                    <ChevronRight className={`w-4 h-4 transition-transform ${activeTab === tab ? "rotate-90" : ""}`} />
                  </button>
                ))}
              </nav>
            </aside>

            {/* Main Inspection Panel */}
            <main className="flex-1 bg-[#121212] p-8 overflow-y-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-8"
                >
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{activeTab}</h3>
                    <p className="text-slate-500 text-sm font-mono">{SKILLS_CATEGORIES[activeTab].description}</p>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {SKILLS_CATEGORIES[activeTab].skills.map((skill) => (
                      <div key={skill.name} className="bg-[#202124] p-4 rounded-lg border border-slate-800 group hover:border-slate-600 transition-all">
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-slate-300 font-mono text-sm">{skill.name}</span>
                          <span className="text-xs text-slate-500">{skill.level}</span>
                        </div>
                        <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: skill.level }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className={`h-full ${skill.color} shadow-[0_0_10px_rgba(255,255,255,0.1)]`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </main>
          </div>

          {/* Chrome Bottom Status Bar */}
          <div className="bg-[#202124] px-4 py-1 border-t border-slate-800 flex justify-between items-center text-[10px] font-mono text-slate-500">
            <div className="flex gap-4">
              <span>Status: 200 OK</span>
              <span>Memory: 12.4MB</span>
            </div>
            <div className="flex gap-4">
              <span>UTF-8</span>
              <span>Node: v20.10.0</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChromeSkills;