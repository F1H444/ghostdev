'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface ProjectInfo {
  title: string;
  tech: string[];
  category: string;
}

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [activeProjectInfo, setActiveProjectInfo] = useState<ProjectInfo | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  
  const springConfig = { damping: 30, stiffness: 250, mass: 0.5 };
  const lagSpringConfig = { damping: 40, stiffness: 150, mass: 0.8 };

  const dotX = useSpring(mouseX, springConfig);
  const dotY = useSpring(mouseY, springConfig);
  const ringX = useSpring(mouseX, lagSpringConfig);
  const ringY = useSpring(mouseY, lagSpringConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a') || target.closest('button') || target.closest('[data-hoverable]');
      
      if (link) {
        setIsHovering(true);
        const infoString = link.getAttribute('data-project-info');
        if (infoString) {
          try {
            setActiveProjectInfo(JSON.parse(infoString));
          } catch (e) {
            console.error("Failed to parse project info", e);
          }
        }
      } else {
        setIsHovering(false);
        setActiveProjectInfo(null);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY, isVisible]);

  return (
    <div style={{ visibility: isVisible ? 'visible' : 'hidden' }}>
      {/* Outer Ring */}
      <motion.div
        className="fixed left-0 top-0 w-10 h-10 rounded-full border border-white/20 pointer-events-none z-[100001]"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          scale: isHovering ? 1.5 : 1,
        }}
      />

      {/* Main Dot / Info Card */}
      <motion.div
        className="fixed left-0 top-0 pointer-events-none z-[100002] flex items-center justify-center px-4"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <AnimatePresence mode="wait">
          {activeProjectInfo ? (
            <motion.div
              key="info"
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 10 }}
              className="relative w-64 bg-zinc-900/90 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-3xl overflow-hidden"
            >
              {/* Card Accent */}
              <div className="absolute top-0 left-0 w-1 h-full bg-white/20" />
              
              <div className="space-y-4">
                <div>
                  <p className="text-zinc-500 font-mono text-[8px] uppercase tracking-[0.4em] mb-1">Project Spec</p>
                  <h5 className="text-white font-bold text-lg leading-none">{activeProjectInfo.title}</h5>
                </div>

                <div className="h-[1px] w-full bg-white/5" />

                <div className="space-y-2">
                   <p className="text-zinc-500 font-mono text-[8px] uppercase tracking-[0.4em]">Tech Stack</p>
                   <div className="flex flex-wrap gap-2">
                     {activeProjectInfo.tech.map((t, idx) => (
                       <span key={idx} className="bg-white/5 border border-white/10 px-2 py-1 rounded text-[9px] text-zinc-300 font-mono">
                         {t}
                       </span>
                     ))}
                   </div>
                </div>

                <div>
                   <p className="text-zinc-500 font-mono text-[8px] uppercase tracking-[0.4em] mb-1">Kategori</p>
                   <p className="text-white text-[10px] font-medium">{activeProjectInfo.category}</p>
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-2 right-2 w-1.5 h-1.5 border-t border-r border-white/20" />
            </motion.div>
          ) : (
            <motion.div
              key="dot"
              className="w-1.5 h-1.5 bg-white rounded-full mix-blend-difference"
              animate={{ 
                scale: isHovering ? 0 : 1,
              }}
            />
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
