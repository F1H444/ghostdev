'use client';

import { motion, Variants } from 'framer-motion';
import { useRef } from 'react';
import { Magnetic } from '@/components/ui/Magnetic';

const heading = "GHOSTDEV";
const characters = heading.split("");

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.8,
    }
  }
};

const charVariants: Variants = {
  hidden: { 
    y: 50, 
    opacity: 0, 
    filter: "blur(20px)",
    scale: 0.8
  },
  visible: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    scale: 1,
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Floating Geometry for Hero Only */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          animate={{ 
            rotate: [0, 90],
            scale: [1, 1.1, 1],
            opacity: [0.03, 0.08, 0.03]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -left-20 w-96 h-96 border border-white/10 rounded-full"
        />
        <motion.div 
          animate={{ 
            rotate: [0, -45],
            x: [0, 50, 0],
            opacity: [0.02, 0.05, 0.02]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-10 right-10 w-64 h-64 border border-white/10"
        />
      </div>

      <motion.div 
        className="w-full max-w-7xl px-8 flex flex-col items-center justify-center relative z-10"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex overflow-hidden"
        >
          {characters.map((char, i) => (
            <span key={i} className="inline-block px-1">
              <motion.span
                variants={charVariants}
                className="text-[14vw] md:text-[10vw] font-black text-white leading-none tracking-tighter inline-block will-change-[transform,filter,opacity]"
              >
                {char}
              </motion.span>
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 1.8, duration: 1.2 }}
          className="mt-8 flex flex-col items-center gap-12"
        >
          <div className="flex items-center gap-4">
            <div className="w-8 h-[1px] bg-zinc-800" />
            <p className="text-zinc-500 font-mono text-xs uppercase tracking-[0.6em]">
              Arsitek Digital Sunyi // 2026
            </p>
            <div className="w-8 h-[1px] bg-zinc-800" />
          </div>

          <div className="flex gap-8">
            <Magnetic strength={0.25}>
              <a href="#work" className="group relative h-12 px-10 flex items-center justify-center overflow-hidden border border-white/10 rounded-full transition-colors hover:border-white/40">
                <span className="relative z-10 text-xs font-bold uppercase tracking-widest text-zinc-400 group-hover:text-white transition-colors">
                  Karya Terpilih
                </span>
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </Magnetic>
          </div>
        </motion.div>

        {/* Minimalist Vertical Scroll Indicator */}
        <div className="absolute bottom-12 flex flex-col items-center gap-6">
          <div className="w-[1px] h-16 bg-gradient-to-b from-zinc-800 to-transparent relative overflow-hidden">
            <motion.div 
              animate={{ y: ["-100%", "100%"] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="absolute top-0 left-0 w-full h-1/2 bg-white"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
