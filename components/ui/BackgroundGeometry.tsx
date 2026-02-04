'use client';

import { motion } from 'framer-motion';

export function BackgroundGeometry() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-20">
      {/* Horizontal Line 1 */}
      <motion.div 
        animate={{ y: [0, 100, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[20%] left-0 w-full h-[1px] bg-white/5" 
      />
      {/* Horizontal Line 2 */}
      <motion.div 
        animate={{ y: [0, -150, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[30%] left-0 w-full h-[1px] bg-white/5" 
      />
      {/* Vertical Line 1 */}
      <motion.div 
        animate={{ x: [0, 50, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-[15%] w-[1px] h-full bg-white/5" 
      />
      {/* Vertical Line 2 */}
      <motion.div 
        animate={{ x: [0, -80, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 right-[25%] w-[1px] h-full bg-white/5" 
      />
    </div>
  );
}
