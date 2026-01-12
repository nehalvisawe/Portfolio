"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';

const EXPERIENCE = [
  {
    role: "Full Stack Developer (Intern)",
    company: "Bizkranti PVT LTD",
    duration: "June 2024 - Aug 2025",
    location: "Faizpur",
    description: [
      "Architected a responsive news platform using Next.js and TypeScript for a local newspaper.",
      "Implemented a robust database schema with MongoDB and Mongoose for article management.",
      "Optimized the folder structure for scalability and maintainable code architecture."
    ]
  }
];

const EDUCATION = [
  {
    degree: "Bachelor of Engineering in Computer Engineering",
    institution: "North Maharashtra University, Jalgaon",
    duration: "2022 - 2026",
    location: "Jalgaon",
    description: [
      "Final Year Student specializing in Cloud Computing and DevOps methodologies.",
      "Core Coursework: Data Warehousing & Mining, Networking Concepts, System Architecture.",
      "Leading the 'College Learning Management System – SmartEdu' major project."
    ]
  }
];

const TimelineCard = ({ title, subtitle, duration, location, points, icon: Icon }: any) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="relative pl-8 pb-12 last:pb-0 group"
  >
    {/* Vertical Line */}
    <div className="absolute left-0 top-0 h-full w-[2] bg-slate-800 group-last:h-8" />
    
    {/* Timeline Dot */}
    <div className="absolute left-[-9] top-0 h-5 w-5 rounded-full border-4 border-slate-950 bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />

    <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl hover:border-blue-500/30 transition-all duration-300">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
        <div>
          <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{title}</h3>
          <p className="text-blue-500 font-medium">{subtitle}</p>
        </div>
        <div className="flex flex-col items-start md:items-end text-sm text-slate-500 font-mono">
          <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {duration}</span>
          <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {location}</span>
        </div>
      </div>
      
      <ul className="space-y-3">
        {points.map((point: string, i: number) => (
          <li key={i} className="text-slate-400 text-sm leading-relaxed flex gap-2">
            <span className="text-blue-500 mt-1">▹</span> {point}
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

const ExperienceSection = () => {
  return (
    <section className="bg-slate-950 py-24 px-8 lg:px-16 border-t border-slate-900">
      <div className="max-w-4xl mx-auto">
        
        {/* Experience Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <Briefcase className="text-blue-500 w-6 h-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">Experience</h2>
          </div>
          <p className="text-slate-400 text-lg">My professional journey and hands-on participation in tech programs.</p>
        </div>

        <div className="mb-20">
          {EXPERIENCE.map((exp, index) => (
            <TimelineCard 
              key={index}
              title={exp.role}
              subtitle={exp.company}
              duration={exp.duration}
              location={exp.location}
              points={exp.description}
            />
          ))}
        </div>

        {/* Education Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <GraduationCap className="text-blue-500 w-6 h-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">Education</h2>
          </div>
          <p className="text-slate-400 text-lg">Academic background and relevant coursework.</p>
        </div>

        <div>
          {EDUCATION.map((edu, index) => (
            <TimelineCard 
              key={index}
              title={edu.degree}
              subtitle={edu.institution}
              duration={edu.duration}
              location={edu.location}
              points={edu.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ExperienceSection;