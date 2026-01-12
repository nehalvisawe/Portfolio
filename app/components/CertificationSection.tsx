"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Check } from 'lucide-react';

const CERTS = [
  {
    title: "Google Arcade",
    issuer: "Google Cloud",
    date: "Nov '25",
    icon: "☁️",
  },
  {
    title: "AWS Practitioner",
    issuer: "Amazon Services",
    date: "Jan '26",
    icon: "🏹",
  },
  {
    title: "Advanced VLSI",
    issuer: "NPTEL",
    date: "Aug '25",
    icon: "📟",
  },
  {
    title: "Docker & K8s",
    issuer: "Udemy",
    date: "Oct '25",
    icon: "🐳",
  }
];

const CompactCerts = () => {
  return (
    <section className="bg-slate-950 py-16 px-8 border-t border-slate-900">
      <div className="max-w-6xl mx-auto">
        
        {/* Compact Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-blue-500 font-mono text-xs mb-2">
              <Award className="w-4 h-4" /> 
              <span>VERIFIED CREDENTIALS</span>
            </div>
            <h2 className="text-3xl font-bold text-white">Certifications & Learning</h2>
          </div>
          <p className="text-slate-500 text-sm max-w-xs md:text-right italic">
            Continuous professional development in Cloud & System Architecture.
          </p>
        </div>

        {/* 4-Column Compact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CERTS.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-slate-900/30 border border-slate-800 p-5 rounded-xl hover:bg-slate-900 hover:border-blue-500/50 transition-all cursor-default"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl bg-slate-800 w-10 h-10 flex items-center justify-center rounded-lg group-hover:scale-110 transition-transform">
                  {cert.icon}
                </span>
                <span className="text-[10px] font-mono text-slate-500 tracking-tighter uppercase">
                  {cert.date}
                </span>
              </div>

              <h3 className="text-white font-bold text-sm group-hover:text-blue-400 transition-colors truncate">
                {cert.title}
              </h3>
              
              <div className="flex items-center justify-between mt-1">
                <p className="text-slate-400 text-xs">{cert.issuer}</p>
                <Check className="w-3 h-3 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="mt-4 pt-4 border-t border-slate-800/50 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                 <span className="text-[10px] text-slate-500 font-bold uppercase">View Certificate</span>
                 <ExternalLink className="w-3 h-3 text-slate-500" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CompactCerts;