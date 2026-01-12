// JUST FOR EXPERIEMENTAL PURPOSE



"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Trophy, Milestone } from 'lucide-react';

const BentoHistory = () => {
  return (
    <section id="journey" className="bg-slate-950 py-24 px-8 border-t border-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
          <Milestone className="text-blue-500" /> Career Roadmap
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[180px]">
          {/* Work Experience - Large Span */}
          <div className="md:col-span-2 md:row-span-2 bg-[#121212] border border-slate-800 p-8 rounded-3xl hover:border-blue-500/30 transition-all group">
            <Briefcase className="text-blue-500 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Bizkranti Pvt. Ltd.</h3>
            <p className="text-blue-400 font-mono text-sm mb-4 italic">Web Development Intern | 2024 - 2025</p>
            <ul className="text-slate-400 text-sm space-y-3 leading-relaxed">
              <li>• Built React applications and managed UI wireframing[cite: 35].</li>
              <li>• Managed source code using Git-based version control[cite: 35].</li>
              <li>• Coordinated with team members for client requirement analysis[cite: 35].</li>
            </ul>
          </div>

          {/* Education - Main */}
          <div className="md:col-span-1 md:row-span-2 bg-slate-900/40 border border-slate-800 p-6 rounded-3xl">
            <GraduationCap className="text-amber-500 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">B.E. Computer Engineering</h3>
            <p className="text-slate-500 text-xs mb-4">KBCNMU, Jalgaon | 2022 - 2026 </p>
            <div className="space-y-4">
              <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                <span className="text-blue-500 font-bold block">7.61</span>
                <span className="text-slate-500 text-[10px] uppercase">Current CGPA [cite: 23]</span>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">
                Focusing on MERN stack, Next.js, and Cloud application design[cite: 8, 9].
              </p>
            </div>
          </div>

          {/* Achievement 1 */}
          <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-3xl flex flex-col justify-center hover:bg-slate-900 transition-colors">
            <Trophy className="text-yellow-500 mb-2 w-5 h-5" />
            <h4 className="text-white font-bold text-sm">Legend Milestone</h4>
            <p className="text-slate-500 text-[10px]">Google Cloud Arcade 2025 </p>
          </div>

          {/* Achievement 2 */}
          <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-3xl flex flex-col justify-center hover:bg-slate-900 transition-colors">
            <Trophy className="text-yellow-500 mb-2 w-5 h-5" />
            <h4 className="text-white font-bold text-sm">Code-for-Bharat</h4>
            <p className="text-slate-500 text-[10px]">Hackathon Pre-Finalist 2025 [cite: 43]</p>
          </div>

          {/* Schooling - Small Card */}
          <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-3xl flex flex-col justify-center hover:bg-slate-900 transition-colors">
            <h4 className="text-white font-bold text-sm">Class X Result</h4>
            <p className="text-blue-500 font-bold text-xl">92.00% [cite: 30]</p>
            <p className="text-slate-500 text-[10px]">K.M.C. Vidyalaya, Faizpur [cite: 28]</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoHistory;