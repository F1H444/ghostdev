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
    <section ref={containerRef} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-32">

      <div className="relative z-10 w-full max-w-5xl px-8 flex flex-col items-center text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex justify-center overflow-hidden mb-8 whitespace-nowrap"
        >
          {characters.map((char, i) => (
            <div key={i} className="overflow-hidden">
              <motion.span
                variants={charVariants}
                className="text-[12vw] font-black text-white leading-[0.9] tracking-tighter inline-block"
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
          <h2 className="text-xl md:text-3xl text-zinc-400 font-medium tracking-tight leading-tight">
            Partner Rahasia untuk <span className="text-white">UKK, Programming,</span> & <span className="text-white">Solusi Teknik</span> Berkelas Dunia.
          </h2>

          <div className="flex flex-col sm:flex-row gap-6">
            <Magnetic strength={0.3}>
              <a 
                href="https://wa.me/6281216802722" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative h-14 px-12 flex items-center justify-center overflow-hidden bg-white rounded-full transition-all hover:scale-105"
              >
                <span className="relative z-10 text-[10px] font-bold uppercase tracking-widest text-black">Joki Sekarang</span>
              </a>
            </Magnetic>
            <Magnetic strength={0.3}>
              <a 
                href="#work" 
                className="group relative h-14 px-12 flex items-center justify-center overflow-hidden border border-white/20 rounded-full transition-all hover:border-white/50"
              >
                <span className="relative z-10 text-[10px] font-bold uppercase tracking-widest text-zinc-400 group-hover:text-white transition-all">Lihat Karya</span>
              </a>
            </Magnetic>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
