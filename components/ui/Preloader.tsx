'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Preloader() {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let start = 0;
    const end = 100;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(100);
        clearInterval(timer);
        setTimeout(() => setIsVisible(false), 500);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            y: "-100%",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 z-[100000] bg-[#09090b] flex flex-col items-center justify-center pointer-events-none"
        >
          <div className="relative overflow-hidden">
            <motion.div 
              className="text-8xl md:text-[12vw] font-bold text-white tracking-tighter tabular-nums"
              style={{
                fontWeight: 100 + (count * 8),
              }}
            >
              {count}%
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "20vw" }}
            className="h-[1px] bg-white/20 mt-8 relative overflow-hidden"
          >
            <motion.div 
              className="absolute inset-0 bg-white"
              style={{ scaleX: count / 100, transformOrigin: "left" }}
            />
          </motion.div>

          <div className="absolute bottom-12 left-12">
            <span className="text-zinc-600 font-mono text-xs uppercase tracking-[0.4em]">GhostDev © 2026</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
