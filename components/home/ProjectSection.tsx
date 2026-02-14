'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Magnetic } from '@/components/ui/Magnetic';
import { ChevronDown } from 'lucide-react';
import { fetchProjects, projects as staticProjects, Project } from '@/lib/projects';
import { cn } from '@/lib/utils';

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const colors = [
    'hover:border-blue-500/50',
    'hover:border-purple-500/50',
    'hover:border-cyan-500/50',
    'hover:border-yellow-500/50',
    'hover:border-green-500/50'
  ];
  const hoverColor = colors[index % colors.length];
  const textColors = [
    'group-hover:text-blue-500',
    'group-hover:text-purple-500',
    'group-hover:text-cyan-500',
    'group-hover:text-yellow-500',
    'group-hover:text-green-500'
  ];
  const textColor = textColors[index % textColors.length];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn(
        "group relative flex flex-col bg-zinc-900/40 rounded-[2rem] border border-white/5 overflow-hidden transition-all duration-500",
        hoverColor
      )}
    >
      <Link href={`/work/${project.slug}`} className="relative aspect-video overflow-hidden">
        <Image 
          src={project.image} 
          alt={project.title} 
          fill 
          className="object-cover object-top transition-all duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500" />
      </Link>

      <div className="p-8 flex flex-col gap-6">
        <div>
          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-3 block">
            {project.category}
          </span>
          <Link href={`/work/${project.slug}`}>
            <h4 className={cn("text-2xl font-bold text-white tracking-tight transition-colors", textColor)}>
              {project.title}
            </h4>
          </Link>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((t, idx) => (
            <span key={idx} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[9px] font-mono text-zinc-400 uppercase tracking-widest">
              {t}
            </span>
          ))}
        </div>

        <Link 
          href={`/work/${project.slug}`}
          className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-zinc-500 hover:text-white transition-colors mt-2"
        >
          <span>Intip Detailnya</span>
          <div className="w-1 h-1 rounded-full bg-current" />
        </Link>
      </div>
    </motion.div>
  );
}

export function ProjectSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [projects, setProjects] = useState<Project[]>(staticProjects);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProjects = async () => {
      const data = await fetchProjects();
      setProjects(data);
      setLoading(false);
    };
    loadProjects();
  }, []);

  const visibleProjects = isExpanded ? projects : projects.slice(0, 4);

  return (
    <section id="work" className="relative min-h-screen py-32 bg-black z-10">
      <div className="max-w-7xl mx-auto px-8 relative">
        
        {/* Section Header */}
        <div className="mb-24 flex flex-col items-center text-center">
          <h2 className="text-xs font-mono text-zinc-600 uppercase tracking-[0.6em] mb-6">Koleksi Karya Jagoan</h2>
          <h3 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-tight">
            KARYA <span className="text-blue-500">TERPILIH.</span>
          </h3>
        </div>

        {/* Standard Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {visibleProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* View All CTA - Relocated here */}
        <div className="mt-20 flex justify-center">
           {!isExpanded && (
             <Magnetic strength={0.3}>
               <button 
                 onClick={() => setIsExpanded(true)}
                 className="flex flex-col items-center gap-6 group"
               >
                 <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-zinc-500 group-hover:text-white transition-colors">Cek Karya Lainnya ({projects.length - 4})</span>
                 <motion.div 
                   animate={{ y: [0, 5, 0] }}
                   transition={{ repeat: Infinity, duration: 2 }}
                   className="w-12 h-12 flex items-center justify-center border border-white/10 rounded-full text-zinc-500 group-hover:border-blue-500 group-hover:text-blue-500 transition-all bg-zinc-950"
                 >
                   <ChevronDown size={18} />
                 </motion.div>
               </button>
             </Magnetic>
           )}
        </div>

        {/* Workflow / Steps */}
        <div className="mt-40 pt-40 border-t border-white/5">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { id: '01', title: 'Tanya-Tanya Dulu' },
              { id: '02', title: 'Mulai Bangun' },
              { id: '03', title: 'Poles & Rapikan' },
              { id: '04', title: 'Beres & Kirim' }
            ].map((step, idx) => (
              <div key={idx}>
                <span className="text-zinc-900 font-black text-6xl mb-6 block leading-none">{step.id}</span>
                <h4 className="font-bold text-white uppercase tracking-widest text-lg mb-4">{step.title}</h4>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  {idx === 0 && "Diskusikan kebutuhan tugas atau proyek Anda secara mendalam dengan tim ahli kami."}
                  {idx === 1 && "Proses koding dan teknis dimulai dengan standar koding yang bersih dan optimal."}
                  {idx === 2 && "Kami melakukan pengujian menyeluruh untuk memastikan semua fitur berjalan sempurna."}
                  {idx === 3 && "Penyerahan hasil akhir beserta dokumentasi lengkap untuk kemudahan Anda."}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
