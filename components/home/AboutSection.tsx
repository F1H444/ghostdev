'use client';

import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { useRef } from 'react';

const text = "GhostDev adalah partner strategis bagi Anda yang mengejar standar tertinggi. Kami menghadirkan solusi pengerjaan tugas UKK dan proyek digital dengan tingkat presisi yang tak tertandingi.";
const words = text.split(" ");

function Word({ word, range, progress }: { word: string; range: [number, number]; progress: MotionValue<number> }) {
  const opacity = useTransform(progress, range, [0.05, 1]);
  
  return (
    <motion.span
      style={{ opacity }}
      className="text-4xl md:text-7xl font-bold text-white tracking-tighter inline-block"
    >
      {word}
    </motion.span>
  );
}

export function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section id="about" className="py-32 px-4 relative z-10" ref={containerRef}>
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-[10px] font-mono text-zinc-600 uppercase tracking-[1em] mb-8 text-center">Filosofi Kami</h2>
          <div className="w-12 h-[1px] bg-zinc-800" />
        </div>
        
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-6 text-center">
          {words.map((word, i) => {
            const start = i / (words.length * 1.5);
            const end = start + 0.2;
            return <Word key={i} word={word} range={[start, end]} progress={scrollYProgress} />;
          })}
        </div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-zinc-500 text-lg md:text-xl leading-relaxed max-w-2xl text-center mt-16"
        >
          Kami percaya bahwa setiap tugas adalah representasi dari integritas akademik. Itulah mengapa GhostDev membangun solusi yang dapat dipertanggungjawabkan secara kualitas dan etika teknis.
        </motion.p>
      </div>
    </section>
  );
}
