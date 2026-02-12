'use client';

import { motion } from 'framer-motion';

const items = [
  { text: 'WEB' },
  { text: 'APP' },
  { text: 'DIAGRAM' },
];

export function InfiniteMarquee() {
  return (
    <div className="relative w-full overflow-hidden py-12 border-y border-white/5 bg-black">
      <div className="flex w-max">
        <motion.div
          animate={{ x: [0, -2000] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 30,
          }}
          className="flex gap-20 items-center px-10"
        >
          {[...items, ...items, ...items, ...items, ...items, ...items].map((item, index) => (
            <div key={index} className="flex items-center gap-12">
              <span className="text-6xl md:text-[10vw] font-black text-zinc-900 uppercase tracking-tighter whitespace-nowrap outline-text hover:text-white transition-colors duration-500">
                {item.text}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
      <style jsx>{`
        .outline-text {
          -webkit-text-stroke: 1px rgba(255,255,255,0.1);
          color: transparent;
        }
      `}</style>
    </div>
  );
}
