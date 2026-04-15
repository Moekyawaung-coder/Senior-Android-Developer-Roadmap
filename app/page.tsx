'use client';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-zinc-950/80 backdrop-blur-lg z-50 border-b border-green-500/20">
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-green-400">moekyawaung<span className="text-white">.</span>dev</h1>
          <div className="flex gap-8 text-sm">
            <a href="#projects" className="hover:text-green-400 transition">Projects</a>
            <a href="#roadmap" className="hover:text-green-400 transition">Senior Roadmap</a>
            <a href="#dashboard" className="hover:text-green-400 transition">Dashboard</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center pt-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 to-purple-500 bg-clip-text text-transparent"
          >
            Moe Kyaw Aung
          </motion.h1>
          <p className="text-3xl text-zinc-400 mb-8">Senior Android Engineer • Kotlin • Jetpack Compose • KMP</p>
          
          <div className="flex gap-4 justify-center">
            <a href="https://github.com/Moekyawaung-coder" target="_blank"
               className="flex items-center gap-2 bg-green-600 hover:bg-green-500 px-8 py-4 rounded-2xl font-medium transition">
              <Github size={24} /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/moe-kyaw-aung-2653093a1" target="_blank"
               className="flex items-center gap-2 border border-green-500 hover:bg-green-500/10 px-8 py-4 rounded-2xl font-medium transition">
              <Linkedin size={24} /> LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Projects, Roadmap, Dashboard sections can be added below */}
      {/* I can expand this full website with 6 more sections if you want */}
    </div>
  );
}
