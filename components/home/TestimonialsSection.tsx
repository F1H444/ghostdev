'use client';

import { motion } from 'framer-motion';

export function TestimonialsSection() {
  return (
    <section className="py-24 border-y border-white/5 bg-zinc-900/20">
      <div className="max-w-6xl mx-auto px-4 text-center">
         <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 border border-white/5 rounded-2xl bg-black/50 backdrop-blur-sm"
         >
            <p className="text-2xl md:text-3xl font-light text-zinc-300 italic mb-8">
              "GhostDev transformed our vague ideas into a digital masterpiece. The attention to detail and animations are simply world-class."
            </p>
            <div>
              <h4 className="text-white font-bold">Alex Sterling</h4>
              <p className="text-zinc-500 text-sm">CEO, Futura Tech</p>
            </div>
         </motion.div>
      </div>
    </section>
  );
}
