'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export function ParallaxSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

  return (
    <section ref={ref} className="h-[100vh] relative flex items-center justify-center overflow-hidden bg-[#050505]">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          style={{ y: y1, rotate }}
          className="absolute top-20 left-20 w-64 h-64 border border-white/5 rounded-3xl bg-white/[0.01]"
        />
        <motion.div 
          style={{ y: y2, rotate: -rotate }}
          className="absolute bottom-40 right-40 w-96 h-96 border border-white/5 rounded-full bg-white/[0.02]"
        />
      </div>

      <div className="relative z-10 text-center space-y-8 max-w-4xl px-6">
        {/* Text removed as requested */}
      </div>
    </section>
  );
}
