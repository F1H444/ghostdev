'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const tech = [
  "React", "Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Framer Motion", 
  "Node.js", "Prisma", "PostgreSQL", "Three.js", "Radix UI", "Lucide Icons",
  "React", "Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Framer Motion"
];

export function TechMarquee() {
  const colors = [
    'text-blue-500',
    'text-purple-500',
    'text-cyan-500',
    'text-yellow-500',
    'text-green-500'
  ];

  return (
    <div className="py-24 border-y border-white/5 bg-black overflow-hidden select-none relative">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col items-center">
          <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.6em] mb-4">
            Industry Standard Technologies
          </span>
          <div className="w-12 h-[1px] bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500" />
        </div>
        
        <div className="flex overflow-hidden">
          <motion.div 
            animate={{ x: [0, -1500] }}
            transition={{ 
              duration: 30, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="flex items-center gap-24 whitespace-nowrap px-12"
          >
            {[...tech, ...tech].map((item, i) => (
              <span 
                key={i} 
                className={cn(
                  "text-3xl md:text-6xl font-black uppercase tracking-tighter transition-all duration-500 hover:scale-110 hover:brightness-125 cursor-default",
                  colors[i % colors.length]
                )}
              >
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Edge Fades */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
    </div>
  );
}
