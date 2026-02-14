'use client';

import { motion, Variants } from 'framer-motion';
import { useRef } from 'react';
import { Magnetic } from '@/components/ui/Magnetic';
import { ArrowDown } from 'lucide-react';
import { Counter } from '@/components/ui/Counter';

const heading = "GHOSTDEV";
const characters = heading.split("");

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.5,
    }
  }
};

const charVariants: Variants = {
  hidden: { y: "100%", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-20 px-0 bg-black">
      
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
      </div>

      <div className="relative z-10 w-full max-w-7xl px-8 flex flex-col items-center text-center">
        {/* Badge */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.2 }}
           className="mb-8 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs font-medium text-zinc-300"
        >
          GASS JOKI SEKARANG 
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex justify-center overflow-hidden mb-6 whitespace-nowrap relative group cursor-default"
        >
          {characters.map((char, i) => (
            <div key={i} className="overflow-hidden">
              <motion.span
                variants={charVariants}
                className="text-[12vw] font-black text-white leading-[0.85] tracking-tighter inline-block relative"
              >
                {char}
              </motion.span>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="max-w-2xl space-y-10 flex flex-col items-center"
        >
          <h2 className="text-xl md:text-2xl text-zinc-400 font-light tracking-wide leading-relaxed">
            Partner Rahasia Untuk Tugas <span className="text-yellow-500 font-semibold">UKK </span> Meliputi <span className="text-purple-500 font-semibold">Programming</span>,<span className="text-cyan-500 font-semibold"> Perancangan Database</span> & <span className="text-purple-500 font-semibold">Diagram</span>.
            <br />
          </h2>

          <div className="flex flex-col sm:flex-row gap-6 items-center">
            <Magnetic strength={0.3}>
              <a 
                href="https://wa.me/6281216802722" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative h-14 px-10 flex items-center justify-center overflow-hidden bg-white text-black rounded-full transition-all hover:scale-105"
              >
                <span className="relative z-10 text-xs font-bold uppercase tracking-widest">Mulai Bangun Proyek</span>
              </a>
            </Magnetic>
            <Magnetic strength={0.3}>
              <a 
                href="#work" 
                className="group relative h-14 px-10 flex items-center justify-center overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm rounded-full transition-all hover:bg-white/10 hover:border-white/20"
              >
                <span className="relative z-10 text-xs font-bold uppercase tracking-widest text-zinc-300 group-hover:text-white transition-all">Lihat Karya Kami</span>
              </a>
            </Magnetic>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 md:gap-16 pt-8 border-t border-white/5 mt-8 w-full">
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-white"><Counter target={50} />+</span>
              <span className="text-xs text-zinc-500 uppercase tracking-wider mt-1">Proyek</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-white"><Counter target={100} />%</span>
              <span className="text-xs text-zinc-500 uppercase tracking-wider mt-1">Kepuasan</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-white">24/7</span>
              <span className="text-xs text-zinc-500 uppercase tracking-wider mt-1">Dukungan</span>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50"
      >
        <ArrowDown className="w-5 h-5 text-white/50" />
      </motion.div>
    </section>
  );
}
