'use client';

import { motion } from 'framer-motion';

const tech = [
  "React", "Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Framer Motion", 
  "Node.js", "Prisma", "PostgreSQL", "Three.js", "Radix UI", "Lucide Icons",
  "React", "Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Framer Motion"
];

export function TechMarquee() {
  return (
    <div className="py-20 border-y border-white/5 bg-black overflow-hidden select-none">
      <div className="flex flex-col gap-8">
        <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.6em] text-center w-full mb-4">
          Industry Standard Technologies
        </span>
        
        <div className="flex overflow-hidden">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="flex items-center gap-16 whitespace-nowrap px-8"
          >
            {tech.map((item, i) => (
              <span 
                key={i} 
                className="text-2xl md:text-4xl font-black text-zinc-800 hover:text-white transition-colors cursor-default"
              >
                {item}
              </span>
            ))}
          </motion.div>
          
          {/* Duplicate for seamless effect */}
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="flex items-center gap-16 whitespace-nowrap px-8"
          >
            {tech.map((item, i) => (
              <span 
                key={i + tech.length} 
                className="text-2xl md:text-4xl font-black text-zinc-800 hover:text-white transition-colors cursor-default"
              >
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
