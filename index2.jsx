import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sun, Heart, Wind, MessageCircle } from 'lucide-react';

/**
 * PROJECT: THE LIGHT WE CARRY (拾光计划)
 * A non-commercial landing page focused on positivity and mindfulness.
 */

const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-10 py-8 mix-blend-difference text-white">
    <div className="text-lg font-light tracking-[0.4em] uppercase">The Light</div>
    <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em]">
      <a href="#" className="opacity-60 hover:opacity-100 transition-opacity">Archive</a>
      <a href="#" className="opacity-60 hover:opacity-100 transition-opacity">About</a>
    </div>
  </nav>
);

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-[#FDFCFB] overflow-hidden">
      {/* Background Decorative Element: Subtle Moving Light */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0],
          y: [0, 30, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-br from-orange-50 to-blue-50 blur-[120px]"
      />
      
      <div className="relative z-10 text-center space-y-12">
        <div className="space-y-4">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="block text-[10px] uppercase tracking-[0.6em] text-zinc-400"
          >
            A Non-profit Initiative
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="text-6xl md:text-[7rem] font-serif font-light text-zinc-900 tracking-tight leading-[0.9]"
          >
            Carry <br /> <span className="italic font-normal">the Light.</span>
          </motion.h1>
        </div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="text-zinc-500 max-w-sm mx-auto text-sm font-light leading-relaxed tracking-wide"
        >
          在每一个微小的瞬间，寻找那些照亮彼此的力量。这是一场关于善意、共鸣与希望的无声传递。
        </motion.p>

        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1, delay: 1.2 }}
           className="pt-10"
        >
          <div className="w-[1px] h-24 bg-gradient-to-b from-zinc-200 to-transparent mx-auto" />
        </motion.div>
      </div>
    </section>
  );
};

const Manifesto = () => (
  <section className="py-40 bg-white px-8">
    <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-start gap-20">
      <div className="md:w-1/2">
        <h2 className="text-[10px] uppercase tracking-[0.4em] text-zinc-400 mb-10 text-left">The Vision</h2>
        <p className="text-2xl md:text-3xl font-serif text-zinc-800 leading-snug">
          “世界并不缺少美， <br />而是缺少发现美的眼睛， <br />以及那颗愿意 <br />传递温暖的心。”
        </p>
      </div>
      <div className="md:w-1/2 space-y-10 pt-20 md:pt-40">
        <p className="text-zinc-500 text-sm leading-relaxed">
          我们相信，正能量不需要宏大的叙事。它存在于清晨第一缕阳光穿过窗帘的缝隙，存在于陌生人之间的一次礼貌侧身，存在于失落时那句“我理解你”。
        </p>
        <div className="flex gap-4">
           <Heart className="w-5 h-5 text-zinc-300 stroke-[1.5px]" />
           <Sun className="w-5 h-5 text-zinc-300 stroke-[1.5px]" />
           <Wind className="w-5 h-5 text-zinc-300 stroke-[1.5px]" />
        </div>
      </div>
    </div>
  </section>
);

const PhotoSection = () => (
  <section className="bg-white py-10 px-4 md:px-10">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="aspect-[4/3] bg-zinc-100 overflow-hidden relative group"
      >
        <img 
          src="https://images.unsplash.com/photo-1516746826332-de421a55c66e?auto=format&fit=crop&q=80&w=1200" 
          className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
          alt="Hands in light"
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-white/10 backdrop-blur-[2px]">
          <span className="text-[10px] uppercase tracking-[0.5em] text-white">Trust</span>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className="aspect-[4/3] bg-zinc-100 overflow-hidden relative group"
      >
        <img 
          src="https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&q=80&w=1200" 
          className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
          alt="Sunset horizon"
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-white/10 backdrop-blur-[2px]">
          <span className="text-[10px] uppercase tracking-[0.5em] text-white">Hope</span>
        </div>
      </motion.div>
    </div>
  </section>
);

const Interaction = () => (
  <section className="py-40 bg-[#0a0a0a] text-white text-center">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="max-w-xl mx-auto space-y-12"
    >
      <h2 className="text-3xl font-serif italic">留下你的微光</h2>
      <p className="text-zinc-500 text-sm font-light tracking-widest leading-relaxed">
        今天有什么让你感到温暖的事吗？ <br />
        不需要长篇大论，只需一个瞬间。
      </p>
      <div className="relative pt-4">
        <input 
          type="text" 
          placeholder="输入那一刻..." 
          className="bg-transparent border-b border-zinc-800 w-full py-4 text-center text-sm font-light focus:outline-none focus:border-zinc-500 transition-colors"
        />
        <button className="mt-12 flex items-center gap-4 mx-auto text-[10px] uppercase tracking-[0.4em] text-zinc-400 hover:text-white transition-colors">
          <MessageCircle size={14} />
          <span>Anonymous Share</span>
        </button>
      </div>
    </motion.div>
  </section>
);

export default function PositivityPage() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-zinc-900 selection:bg-orange-50">
      <Navbar />
      <main>
        <Hero />
        <Manifesto />
        <PhotoSection />
        <Interaction />
      </main>
      <footer className="py-20 bg-[#0a0a0a] flex flex-col items-center justify-center space-y-6">
        <div className="w-8 h-[1px] bg-zinc-800" />
        <p className="text-[8px] uppercase tracking-[0.5em] text-zinc-600">
          The Light We Carry · Since 2024
        </p>
      </footer>
    </div>
  );
}