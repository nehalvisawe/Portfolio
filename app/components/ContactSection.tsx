"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, Send, MessageSquare } from 'lucide-react';
import Link from 'next/link';
import Form from 'next/form'


const data = {
  name: " ",
  email: " ",
  subject: "",
  content: "",
}
const ContactSection = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    // Create a FormData object from the form
    const formData = new FormData(e.currentTarget);
    
    // Call the Server Action
  //  const result = await submitContactForm(formData);

    // if (result.success) {
    //   setStatus('sent');
    //   (e.target as HTMLFormElement).reset(); // Clear form on success
    // } else {
    //   setStatus('error');
    //   alert(result.error);
    // }
  };

  return (
    <section className="bg-slate-950 py-24 px-8 lg:px-16 border-t border-slate-900 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side: Contact Info & Socials */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-6">
              <MessageSquare className="w-3 h-3" />
              <span>GET IN TOUCH</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to scale your <span className="text-blue-500">next project?</span>
            </h2>
            
            <p className="text-slate-400 text-lg mb-10 max-w-md">
              Whether you have a question or just want to discuss a new opportunity, 
              my inbox is always open.
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4 text-slate-300 group cursor-pointer">
                <div className="w-12 h-12 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-blue-500 transition-colors">
                  <Mail className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold">Email Me</p>
                  <Link href={"mailto:nehalvisawe28@gmail.com"}><p className="text-white">nehalvisawe28@gmail.com</p></Link>
                </div>
              </div>

              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-12 h-12 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold">Location</p>
                  <p className="text-white">India (Available for Remote/Hybrid)</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/nehal-visawe28/" className="p-3 bg-slate-900 border border-slate-800 rounded-xl text-slate-400 hover:text-white hover:border-blue-500 transition-all">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://github.com/nehalvisawe" className="p-3 bg-slate-900 border border-slate-800 rounded-xl text-slate-400 hover:text-white hover:border-blue-500 transition-all">
                <Github className="w-6 h-6" />
              </a>
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900/50 border border-slate-800 p-8 rounded-3xl relative"
          >
            <Form action={""} className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-2 ml-1">Name</label>
                  <input 
                    id='name'
                    type="text" 
                    required
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-2 ml-1">Email</label>
                  <input 
                    id='email'
                    type="email" 
                    required
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-2 ml-1">Subject</label>
                <input 
                  id='subject'
                  type="text" 
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-all"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-2 ml-1">Message</label>
                <textarea 
                  id='content'
                  required
                  rows={4}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-all resize-none"
                  placeholder="Write Your message here..."
                />
              </div>

              <button 
                type="submit"
                disabled={status !== 'idle'}
                className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all disabled:bg-slate-800 disabled:text-slate-500"
              >
                {status === 'idle' && (
                  <>Send Message <Send className="w-4 h-4" /></>
                )}
                {status === 'sending' && "Processing..."}
                {status === 'sent' && "Message Sent Successfully!"}
              </button>
            </Form>

            {/* Success Message Glow */}
            {status === 'sent' && (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="absolute inset-0 bg-slate-950/90 flex flex-col items-center justify-center rounded-3xl border border-blue-500/50"
              >
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-4">
                  <Send className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold text-white">Thank you!</h3>
                <p className="text-slate-400">I'll get back to you shortly.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-6 text-sm text-blue-500 underline"
                >
                  Send another
                </button>
              </motion.div>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;