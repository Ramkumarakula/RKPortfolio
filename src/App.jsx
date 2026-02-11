import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import profileImg from './assets/profile.png'; 
import arenaArch from './assets/SA.png'; 
import interviewerArch from './assets/SA2.png'; 
import notaryArch from './assets/SA3.png'; 
import { Github, Mail, Linkedin, ExternalLink, ShieldCheck, Brain, Mic, Layers, Cpu, Server, Terminal, Database, Code2, ShieldAlert, X, Plus } from 'lucide-react';

const Portfolio = () => {
  const [index, setIndex] = useState(0);
  const [selectedExploration, setSelectedExploration] = useState(null);
  const [showResume, setShowResume] = useState(false);

  const specializations = ["Blockchain Architect", "AI Solutions Engineer", "Full-Stack Developer", "Web3 Innovator"];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % specializations.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const socials = [
    { icon: <Linkedin size={22}/>, link: "https://www.linkedin.com/in/ram-kumar-akula/", label: "LinkedIn", color: "hover:text-blue-600" },
    { icon: <Github size={22}/>, link: "https://github.com/Ramkumarakula", label: "GitHub", color: "hover:text-slate-950" },
    { icon: <Mail size={22}/>, link: "mailto:ramkumarafw@gmail.com", label: "Email", color: "hover:text-red-500" }
  ];

  const skillCategories = [
    { name: "AI & Core Engineering", skills: ["RAG Architecture", "TensorFlow.js", "Solidity", "Java", "C++"], icon: <Brain size={18}/> },
    { name: "Frontend & Performance", skills: ["React", "Vite", "Tailwind CSS", "Deepgram SDK", "WebAssembly"], icon: <Code2 size={18}/> },
    { name: "Backend & Systems", skills: ["Node.js", "Groq Llama-3", "Supabase Vector DB", "Firebase"], icon: <Database size={18}/> }
  ];

  const explorations = [
    {
      title: "Dads Business Assistant",
      abstract: "A dual-purpose 'Cyber-Hub' web application designed for a generator hiring service. It bridges regional language barriers by using the Web Speech API to capture live Telugu voice input, which is instantly translated via Neural Signal Processing into professional English emails or 2K marketing visuals. Features a futuristic Cyberpunk UI with specialized Yahoo Mail integration.",
      tech: ["Google Gemini API", "Web Speech API", "GTX Bridge", "Glassmorphism UI"]
    },
    {
      title: "Green Energy Portfolio",
      abstract: "A high-performance analytics platform for classifying renewable energy sources. Built with Vite and React for 100/100 Lighthouse performance, it visualizes complex data sets regarding solar and geothermal output. It features a custom rendering engine to handle large-scale data visualization without UI lag.",
      tech: ["React", "Vite", "Data Visualization"]
    }
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <div className="bg-[#FDFDFF] text-slate-900 min-h-screen font-sans selection:bg-blue-100 text-left">
      
      {/* --- NAVIGATION --- */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <span className="text-xl font-black tracking-tighter uppercase cursor-default">RAMKUMAR<span className="text-blue-600">.DEV</span></span>
          <div className="hidden md:flex gap-10 items-center">
            {["Projects", "Skills", "Contact"].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-[11px] font-bold text-slate-400 hover:text-blue-600 uppercase tracking-widest transition-colors">{item}</a>
            ))}
            <button 
              onClick={() => setShowResume(true)}
              className="px-6 py-2.5 bg-blue-600 text-white text-[11px] font-bold rounded-full hover:bg-slate-950 transition-all shadow-xl shadow-blue-500/20 uppercase tracking-widest"
            >
              Resume
            </button>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 pt-20">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl mx-auto w-full text-center md:text-left">
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="relative flex-shrink-0">
            <div className="relative w-64 h-64 rounded-[3.5rem] overflow-hidden border-[8px] border-white shadow-2xl z-10">
               <img src={profileImg} alt="Ramkumar Akula" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -right-8 top-1/2 -translate-y-1/2 flex flex-col gap-5 bg-white p-4 rounded-3xl shadow-xl border border-slate-50 z-20">
              {socials.map((soc, i) => (
                <a key={i} href={soc.link} target="_blank" rel="noreferrer" className={`text-slate-300 ${soc.color} transition-all`}>{soc.icon}</a>
              ))}
            </div>
          </motion.div>

          <div className="min-w-[300px] md:min-w-[450px]">
            <h2 className="text-blue-600 font-black tracking-[0.3em] text-sm uppercase mb-2 italic tracking-widest">Advanced Systems</h2>
            <div className="h-[120px] md:h-[150px] relative flex items-center md:items-start overflow-hidden text-5xl md:text-7xl font-black tracking-tighter leading-none">
              <AnimatePresence mode="wait">
                <motion.h1 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute w-full"
                >
                  {specializations[index]}
                </motion.h1>
              </AnimatePresence>
            </div>
            <p className="text-slate-400 text-lg font-medium max-w-md mt-4 font-mono">// Architecting high-integrity AI frameworks.</p>
          </div>
        </div>
      </section>

      {/* --- CORE ENGINEERING PROJECTS (ZIGZAG) --- */}
      <section id="projects" className="py-32 px-6 max-w-7xl mx-auto">
        
        {/* PROJECT 1: AI TECHNICAL INTERVIEWER (IMAGE RIGHT) */}
        <motion.div {...fadeIn} className="grid lg:grid-cols-2 gap-20 items-center mb-48 border-b border-slate-100 pb-32">
          <div className="space-y-8 order-2 lg:order-1">
            <div className="flex items-center gap-3">
              <ShieldAlert className="text-blue-600" size={32} />
              <h2 className="text-4xl font-black tracking-tight leading-none uppercase italic">AI Technical <br/>Interviewer</h2>
            </div>
            <p className="text-xl text-slate-800 font-bold leading-relaxed border-l-4 border-blue-600 pl-4">
              "Automated RAG-driven platform with real-time Anti-Cheating."
            </p>
            <div className="text-slate-500 space-y-4 text-sm leading-relaxed italic">
              <p>Implemented RAG Architecture using Llama-3 and Supabase Vector DB for context-aware screening.</p>
              <p>Uses TensorFlow.js for real-time gaze tracking and object detection to ensure interview integrity.</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {["TensorFlow.js", "RAG", "Supabase", "Llama-3"].map(tag => (
                <span key={tag} className="text-[9px] font-bold px-3 py-1 bg-blue-50 text-blue-600 rounded-lg uppercase">{tag}</span>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-2 text-blue-600 font-mono text-[11px] font-bold uppercase tracking-widest mb-4 ml-4">
               <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" /> Architecture: Interviewer Engine
            </div>
            <div className="bg-slate-950 p-4 rounded-[3.5rem] shadow-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-500">
              <img src={interviewerArch} alt="AI Interviewer Arch" className="w-full h-auto rounded-[2.5rem] opacity-90" />
            </div>
          </div>
        </motion.div>

        {/* PROJECT 2: AI PERFORMANCE ARENA (IMAGE LEFT) */}
        <motion.div {...fadeIn} className="grid lg:grid-cols-2 gap-20 items-center mb-48 border-b border-slate-100 pb-32">
          <div className="order-2">
            <div className="flex items-center gap-3">
              <Mic className="text-purple-600" size={32} />
              <h2 className="text-4xl font-black tracking-tight leading-none uppercase italic">AI Performance <br/>Arena</h2>
            </div>
            <p className="text-xl text-slate-800 font-bold leading-relaxed border-l-4 border-purple-600 pl-4">
              "Real-time verbal proficiency analysis with zero-lag feedback."
            </p>
            <div className="text-slate-500 space-y-4 text-sm leading-relaxed italic">
              <p>Leveraging WebAssembly and Chrome V8 to evaluate filler-word density and pace calculation instantly.</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Web Speech API", "Wasm", "Vite", "Firebase"].map(tag => (
                <span key={tag} className="text-[9px] font-bold px-3 py-1 bg-purple-50 text-purple-600 rounded-lg uppercase">{tag}</span>
              ))}
            </div>
          </div>
          <div className="order-1">
            <div className="flex items-center gap-2 text-purple-600 font-mono text-[11px] font-bold uppercase tracking-widest mb-4 ml-4">
               <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" /> Architecture: Arena Logic
            </div>
            <div className="bg-slate-950 p-4 rounded-[3.5rem] shadow-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-500">
              <img src={arenaArch} alt="AI Arena Arch" className="w-full h-auto rounded-[2.5rem] opacity-90" />
            </div>
          </div>
        </motion.div>

        {/* PROJECT 3: DECENTRALIZED NOTARY (IMAGE RIGHT) */}
        <motion.div {...fadeIn} className="grid lg:grid-cols-2 gap-20 items-center mb-48 border-b border-slate-100 pb-32">
          <div className="space-y-8 order-2 lg:order-1">
            <div className="flex items-center gap-3">
              <ShieldCheck className="text-cyan-600" size={32} />
              <h2 className="text-4xl font-black tracking-tight leading-none uppercase italic">Decentralized <br/>Notary Protocol</h2>
            </div>
            <p className="text-xl text-slate-800 font-bold leading-relaxed border-l-4 border-cyan-600 pl-4">
              "Immutable proof-of-existence protocol on Ethereum Sepolia."
            </p>
            <div className="text-slate-500 space-y-4 text-sm leading-relaxed italic">
              <p>Developed custom Solidity contracts for secure document hashing and verification without central authorities.</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Solidity", "Ethers.js", "Hardhat", "Sepolia"].map(tag => (
                <span key={tag} className="text-[9px] font-bold px-3 py-1 bg-cyan-50 text-cyan-600 rounded-lg uppercase">{tag}</span>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-2 text-cyan-600 font-mono text-[11px] font-bold uppercase tracking-widest mb-4 ml-4">
               <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" /> Architecture: Web3 Notary
            </div>
            <div className="bg-slate-950 p-4 rounded-[3.5rem] shadow-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-500">
              <img src={notaryArch} alt="Notary dApp Arch" className="w-full h-auto rounded-[2.5rem] opacity-90" />
            </div>
          </div>
        </motion.div>

        {/* --- OTHER EXPLORATIONS --- */}
        <div className="mt-32 pt-24 border-t border-slate-100">
           <h3 className="text-sm font-black text-slate-400 uppercase tracking-[0.4em] mb-12 italic">/ Other Explorations</h3>
           <div className="grid md:grid-cols-2 gap-6">
              {explorations.map((exp, i) => (
                <div key={i} className="p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 group hover:bg-slate-100 transition-colors duration-500">
                   <h4 className="text-xl font-bold mb-3">{exp.title}</h4>
                   <button 
                     onClick={() => setSelectedExploration(exp)}
                     className="flex items-center gap-2 text-[10px] font-black text-blue-600 uppercase tracking-widest underline"
                   >
                     Read Abstract <Plus size={12}/>
                   </button>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* --- POPUPS & MODALS --- */}
      <AnimatePresence>
        {selectedExploration && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-white/90 backdrop-blur-xl flex items-center justify-center p-6"
          >
            <div className="max-w-2xl w-full bg-white border border-slate-200 p-12 rounded-[3rem] shadow-2xl relative text-left">
              <button onClick={() => setSelectedExploration(null)} className="absolute top-8 right-8 text-slate-400 hover:text-black transition-colors"><X size={24}/></button>
              <h3 className="text-3xl font-black mb-6 uppercase italic text-blue-600">{selectedExploration.title}</h3>
              <p className="text-slate-600 leading-relaxed text-lg mb-8">{selectedExploration.abstract}</p>
              <div className="flex gap-2">
                {selectedExploration.tech.map(t => <span key={t} className="px-4 py-1.5 bg-slate-100 rounded-full text-[10px] font-bold text-slate-500 uppercase">{t}</span>)}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showResume && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-950/95 flex items-center justify-center p-6"
          >
            <div className="relative max-w-5xl w-full h-[90vh] flex flex-col">
              <div className="flex justify-between items-center mb-4 text-white">
                <h3 className="font-bold uppercase tracking-widest text-xs italic">Curriculum Vitae</h3>
                <button onClick={() => setShowResume(false)} className="bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 flex items-center gap-2 text-xs font-bold uppercase transition-all">Close <X size={18}/></button>
              </div>
              <iframe src="/resume.pdf" title="Resume" className="w-full h-full bg-white rounded-2xl border-none shadow-2xl" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- SKILLS MATRIX & FOOTER --- */}
      <section id="skills" className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-black mb-16 uppercase tracking-tighter italic">/ Technical Stack</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((cat, i) => (
              <motion.div key={i} {...fadeIn} className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">{cat.icon}</div>
                <h3 className="font-black text-lg mb-6 tracking-tight uppercase">{cat.name}</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {cat.skills.map(skill => <span key={skill} className="px-4 py-2 bg-slate-50 text-slate-600 rounded-xl text-xs font-bold border border-slate-100">{skill}</span>)}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <footer id="contact" className="py-32 px-6 bg-slate-950 text-white rounded-t-[4rem] text-center">
        <h2 className="text-5xl md:text-8xl font-black mb-12 tracking-tighter uppercase italic underline decoration-blue-600 decoration-8 underline-offset-8">Let's Connect.</h2>
        <div className="flex justify-center gap-8">
          {socials.map((soc, i) => (
            <a key={i} href={soc.link} target="_blank" rel="noreferrer" className="flex flex-col items-center gap-2 group">
              <div className="w-16 h-16 bg-slate-900 rounded-3xl flex items-center justify-center group-hover:bg-blue-600 transition-all border border-white/5">{soc.icon}</div>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{soc.label}</span>
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;