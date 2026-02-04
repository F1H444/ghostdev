'use client';

import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { useEffect, useRef } from 'react';

export function DigitalDust() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Create an array of 20 particles
  const particles = Array.from({ length: 20 });

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((_, i) => (
        <Particle key={i} index={i} mouseX={mouseX} mouseY={mouseY} scrollYProgress={scrollYProgress} />
      ))}
    </div>
  );
}

function Particle({ index, mouseX, mouseY, scrollYProgress }: { index: number, mouseX: any, mouseY: any, scrollYProgress: any }) {
  const initialX = (index * 7) % 100;
  const initialY = (index * 13) % 100;
  
  const xOffset = useTransform(mouseX, [0, 2000], [index * -2, index * 2]);
  const yOffset = useTransform(mouseY, [0, 2000], [index * -2, index * 2]);
  const scrollOffset = useTransform(scrollYProgress, [0, 1], [0, index * -50]);

  const x = useSpring(xOffset, { damping: 40, stiffness: 200 });
  const y = useSpring(yOffset, { damping: 40, stiffness: 200 });

  return (
    <motion.div
      style={{
        left: `${initialX}%`,
        top: `${initialY}%`,
        x,
        y: useTransform(y, (latest) => latest + scrollOffset.get()),
        opacity: 0.15,
      }}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.05, 0.15, 0.05],
      }}
      transition={{
        duration: 5 + index,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute w-[2px] h-[2px] bg-white rounded-full blur-[1px]"
    />
  );
}
