'use client';

import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { useRef } from 'react';

const text = "GhostDev adalah kolektif arsitek digital sunyi yang bergerak di balik layar untuk mewujudkan ide brilian Anda. Kami mahir dalam merancang produk digital yang melampaui standar biasa.";
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
    <section id="about" className="py-64 px-4 relative z-10" ref={containerRef}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-[10px] font-mono text-zinc-600 uppercase tracking-[1em] mb-20 text-center">Our Philosophy</h2>
        
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-6">
          {words.map((word, i) => {
            const start = i / (words.length * 1.5);
            const end = start + 0.2;
            return <Word key={i} word={word} range={[start, end]} progress={scrollYProgress} />;
          })}
        </div>
      </div>
    </section>
  );
}
