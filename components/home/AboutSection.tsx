'use client';

import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { useRef } from 'react';

const text = "Gak perlu pusing sama UKK atau proyek digital yang numpuk. Di GhostDev, kita bantu selesaiin tugasmu dengan hasil rapi, cepat, dan pastinya sesuai ekspektasi. Kamu tinggal duduk manis, biar kita yang eksekusi.";
const words = text.split(" ");

function Word({ word, range, progress }: { word: string; range: [number, number]; progress: MotionValue<number> }) {
  const opacity = useTransform(progress, range, [0.05, 1]);
  
  return (
    <motion.span
      style={{ opacity }}
      className="text-3xl md:text-7xl font-bold text-white tracking-tighter inline-block mr-[0.2em] mb-[0.1em]"
    >
      {word}
    </motion.span>
  );
}

export function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "end 0.1"]
  });

  const headerY = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const footerY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const footerOpacity = useTransform(scrollYProgress, [0.4, 0.6, 1], [0, 1, 1]);

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-24 px-4 relative z-10 bg-black" ref={containerRef}>
      <div className="max-w-6xl mx-auto flex flex-col items-center relative z-10 px-6 md:px-8">
        
        <motion.div style={{ y: headerY }} className="flex flex-col items-center mb-16 md:mb-20">
          <h2 className="text-[10px] font-mono text-zinc-600 uppercase tracking-[1em] mb-4 text-center ml-[1em]">Filosofi Kami</h2>
          <div className="w-12 h-[1px] bg-white/10" />
        </motion.div>
        
        <div className="flex flex-wrap justify-center text-center">
          {words.map((word, i) => {
            const start = i / (words.length * 1.8);
            const end = start + 0.08;
            return <Word key={i} word={word} range={[start, end]} progress={scrollYProgress} />;
          })}
        </div>

        <motion.p 
          style={{ y: footerY, opacity: footerOpacity }}
          className="text-zinc-500 text-lg md:text-xl leading-relaxed max-w-2xl text-center mt-20 font-medium"
        >
          Kita gak cuma sekedar bantuin tugas, tapi kita mastiin setiap baris kodenya bisa kamu pahami dan jelasin ke penguji. GhostDev ada buat bikin perjalanan akademismu jauh lebih santai.
        </motion.p>
      </div>
    </section>
  );
}
