'use client';

import { motion } from 'framer-motion';

const technologies = [
  'Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Node.js', 'PostgreSQL',
  'Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Node.js', 'PostgreSQL',
];

export function InfiniteMarquee() {
  return (
    <div className="relative w-full overflow-hidden bg-black py-10 border-y border-white/5">
      <div className="flex w-max">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20,
          }}
          className="flex gap-16 px-8"
        >
          {technologies.map((tech, index) => (
            <span key={index} className="text-4xl font-bold text-zinc-800 uppercase tracking-tighter whitespace-nowrap dark:text-zinc-800/80">
              {tech}
            </span>
          ))}
          {/* Duplicate for seamless loop */}
          {technologies.map((tech, index) => (
            <span key={`dup-${index}`} className="text-4xl font-bold text-zinc-800 uppercase tracking-tighter whitespace-nowrap dark:text-zinc-800/80">
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
