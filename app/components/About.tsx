"use client";

import React from 'react';
import { motion } from 'framer-motion';
import nehalImage from '@/public/nehal.png'
import Image from 'next/image';
import { User, User2, User2Icon } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="bg-slate-950 py-24 px-8 lg:px-16 border-t border-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Image with Decorative Elements */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center lg:justify-start"
          >
            <div className="relative group">
              {/* Outer Glow/Ring */}
              <div className="absolute -inset-2 bg-linear-to-r from-blue-600 to-cyan-500 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
              
              {/* The Actual Image */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-slate-800 shadow-2xl">
                <Image
                  src={nehalImage} // Replace with your image
                  alt="Profile"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Decorative Badge */}
              <div className="absolute -bottom-4 -right-4 bg-cyan-600 text-white p-4 rounded-2xl shadow-xl hidden md:block">
                <span className="text-2xl font-bold">1+</span>
                <p className="text-xs uppercase tracking-wider">Years Coding</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-cyan-500 font-mono text-sm tracking-[0.3em] uppercase mb-4 flex gap-3">
              <User2Icon /><span>Introduction</span>
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About Me.
            </h3>
            
            <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
              <p>
                Hello! I'm a <span className="text-white font-semibold">Computer Engineering student</span> with a deep fascination for how the internet works at scale. My journey into tech started with curiosity about hardware, which eventually led me to the world of software architecture and cloud infrastructure.
              </p>
              <p>
                Currently, I focus on <span className="text-white font-semibold">DevOps & Cloud Computing</span>, bridging the gap between development and operations. I love building automated pipelines that make deployments faster and more reliable.
              </p>
              <p>
                Beyond coding, you'll often find me:
              </p>
              
              <ul className="grid grid-cols-2 gap-2 mt-4 text-sm font-mono text-cyan-400">
                <li className="flex items-center gap-2">
                  <span className="text-xs">▹</span> Infrastructure as Code
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-xs">▹</span> Graphics Design
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-xs">▹</span> UI/UX Design
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-xs">▹</span> System Architecture
                </li>
              </ul>
            </div>

            <div className="mt-10 border-l-4 border-blue-600 pl-6 py-2 bg-blue-600/5 italic text-slate-300">
              "I don't just write code; I build the environments where code lives and breathes."
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;