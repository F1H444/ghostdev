'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export function InfiniteMarquee() {
  const items = [
    { text: 'WEB DEVELOPMENT', color: 'text-blue-500' },
    { text: 'APP DESIGN', color: 'text-purple-500' },
    { text: 'TECH SOLUTIONS', color: 'text-cyan-500' },
    { text: 'UKK & TUGAS', color: 'text-yellow-500' },
    { text: 'SECURITY LOGIC', color: 'text-green-500' },
  ];

  return (
    <div className="relative w-full overflow-hidden py-24 bg-black border-y border-white/5 skew-y-[-1deg]">
      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{ x: [0, -2000] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 40,
          }}
          className="flex gap-20 items-center"
        >
          {[...items, ...items, ...items, ...items, ...items].map((item, index) => (
            <div key={index} className="flex items-center gap-20">
              <span className={cn(
                "text-7xl md:text-[12vw] font-black uppercase tracking-tighter transition-all duration-700 hover:scale-110 cursor-default",
                item.color
              )}>
                {item.text}
              </span>
              <div className="w-4 h-4 rounded-full bg-white/10" />
            </div>
          ))}
        </motion.div>
      </div>
      
      {/* Decorative Gradients for depth */}
      <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-black to-transparent z-10" />
    </div>
  );
}
