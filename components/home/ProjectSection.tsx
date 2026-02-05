'use client';

import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Magnetic } from '@/components/ui/Magnetic';
import { ChevronDown } from 'lucide-react';
import { projects } from '@/lib/projects';

function ProjectCard({ project, index }: { project: any; index: number }) {
  const isLarge = project.size === "large";
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: any) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const projectInfo = JSON.stringify({
    title: project.title,
    tech: project.tech,
    category: project.category
  });

  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: (index % 4) * 0.1 }}
      className={`relative group ${isLarge ? 'md:col-span-2' : 'md:col-span-1'} mb-24 md:mb-32`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1000 }}
    >
      <motion.div 
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative aspect-[16/9] md:aspect-[16/10] overflow-hidden rounded-2xl bg-zinc-900 border border-white/5 transition-colors group-hover:border-white/20"
      >
        <Image 
          src={project.image} 
          alt={project.title} 
          fill 
          className="object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500" />
        
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-white/5" />
        </div>

        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ transform: "translateZ(50px)" }}>
           <Magnetic strength={0.2}>
             <Link 
               href={`/work/${project.slug}`}
               className="h-20 w-20 bg-white rounded-full flex items-center justify-center text-black font-black text-[10px] uppercase tracking-tighter shadow-2xl"
               data-project-info={projectInfo}
             >
               Tech Stack
             </Link>
           </Magnetic>
        </div>
      </motion.div>

      <div className="mt-8 flex justify-between items-end">
        <div className="group-hover:translate-x-2 transition-transform duration-500">
          <h4 className="text-2xl md:text-3xl font-bold text-white tracking-tighter mb-2">{project.title}</h4>
          <span className="text-zinc-600 font-mono text-[10px] uppercase tracking-[0.3em]">{project.category}</span>
        </div>
        
        {/* Detail Button (Right Bottom) */}
        <div className="flex flex-col items-end gap-2">
          <Magnetic strength={0.3}>
            <Link 
              href={`/work/${project.slug}`}
              className="flex items-center gap-3 px-6 py-3 bg-zinc-900 border border-white/10 rounded-full group/btn hover:border-white/40 transition-colors"
            >
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-400 group-hover/btn:text-white transition-colors">Detail</span>
              <div className="w-1.5 h-1.5 bg-zinc-700 rounded-full group-hover/btn:bg-white group-hover/btn:scale-125 transition-all" />
            </Link>
          </Magnetic>
        </div>
      </div>
    </motion.div>
  );
}

export function ProjectSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  const visibleProjects = isExpanded ? projects : projects.slice(0, 4);

  return (
    <section id="work" className="py-32 px-4 md:px-12 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="max-w-2xl">
            <h2 className="text-xs font-mono text-zinc-600 uppercase tracking-[0.4em] mb-6">Layanan Unggulan</h2>
            <h3 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-none">
              Solusi Tuntas <br /> Tugas & Proyek.
            </h3>
          </div>
          <div className="hidden md:block">
            <p className="text-zinc-500 font-mono text-xs uppercase tracking-[0.3em] max-w-xs text-right leading-relaxed">
              Setiap tugas dikerjakan dengan standar profesional untuk menjamin kelulusan dan nilai terbaik.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 md:gap-x-20">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-32 flex justify-center flex-col items-center gap-12">
           {!isExpanded && (
             <Magnetic strength={0.3}>
               <button 
                 onClick={() => setIsExpanded(true)}
                 className="flex flex-col items-center gap-6 group"
               >
                 <span className="text-[10px] font-mono uppercase tracking-[0.6em] text-zinc-500 group-hover:text-white transition-colors">Lihat Semua Karya (8)</span>
                 <motion.div 
                   animate={{ y: [0, 5, 0] }}
                   transition={{ repeat: Infinity, duration: 2 }}
                   className="w-10 h-10 flex items-center justify-center border border-white/10 rounded-full text-zinc-500 group-hover:border-white/40 group-hover:text-white transition-all"
                 >
                   <ChevronDown size={14} />
                 </motion.div>
               </button>
             </Magnetic>
           )}
        </div>
      </div>
    </section>
  );
}
