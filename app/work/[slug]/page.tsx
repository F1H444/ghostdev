'use client';

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ExternalLink, Cpu, Layout, Boxes } from 'lucide-react';
import { projects } from '@/lib/projects';
import { Magnetic } from '@/components/ui/Magnetic';

export default function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <h1 className="text-white text-4xl font-bold mb-8">Proyek Tidak Ditemukan.</h1>
        <Link href="/" className="text-zinc-500 hover:text-white transition-colors font-mono uppercase tracking-widest text-xs">
          ← Kembali ke Beranda
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-64 px-8 md:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Navigation */}
        <Link href="/" className="inline-flex items-center gap-4 group mb-24">
          <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/40 transition-colors">
            <ArrowLeft size={16} className="text-zinc-500 group-hover:text-white transition-colors" />
          </div>
          <span className="text-zinc-500 font-mono text-[10px] uppercase tracking-[0.4em] group-hover:text-white transition-colors">Kembali</span>
        </Link>

        {/* Header */}
        <div className="mb-32">
          <div className="mb-16">
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-zinc-600 font-mono text-xs uppercase tracking-[0.5em] mb-8"
            >
              Studi Kasus / {project.category}
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-7xl md:text-[12vw] font-black text-white tracking-tighter leading-none"
            >
              {project.title}
            </motion.h1>
          </div>
          <div className="flex flex-col gap-12">
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.5 }}
               className="space-y-6"
            >
               <p className="text-zinc-500 text-lg leading-relaxed max-w-xl">
                 Solusi teknis presisi untuk tantangan akademik Anda. Proyek {project.title} dirancang untuk memenuhi standar kompetensi industri {project.category.toLowerCase()}.
               </p>
               <div className="flex gap-4">
                  <Magnetic strength={0.3}>
                    <a href="https://wa.me/6281216802722" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-8 py-4 bg-white rounded-full transition-transform hover:scale-105">
                      <span className="text-black font-bold text-xs uppercase tracking-widest">Joki Sekarang</span>
                      <ExternalLink size={14} className="text-black" />
                    </a>
                  </Magnetic>
               </div>
            </motion.div>
          </div>
        </div>

        {/* Project Image - Supports Long Vertical Screenshots */}
        <motion.div 
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
           className="relative w-full rounded-2xl overflow-hidden border border-white/5 mb-32 bg-zinc-900/50"
        >
           {/* If longImage exists, we render it with auto height. Otherwise, use standard view */}
           <div className="w-full h-full relative">
              <img 
                src={project.longImage || project.image} 
                alt={project.title} 
                className="w-full h-auto block select-none"
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#09090b] to-transparent opacity-60 pointer-events-none" />
           </div>
        </motion.div>

        {/* Specs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
           <div className="p-12 border border-white/5 rounded-3xl bg-white/[0.02] hover:bg-white/[0.04] transition-colors group">
              <Cpu className="text-zinc-600 mb-8 group-hover:text-white transition-colors" size={32} />
              <h3 className="text-white font-bold text-xl mb-4">Metodologi</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest bg-white/5 px-3 py-1 rounded-full">{t}</span>
                ))}
              </div>
           </div>
           
           <div className="p-12 border border-white/5 rounded-3xl bg-white/[0.02] hover:bg-white/[0.04] transition-colors group">
              <Layout className="text-zinc-600 mb-8 group-hover:text-white transition-colors" size={32} />
              <h3 className="text-white font-bold text-xl mb-4">Kualitas Output</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">Kode bersih (Clean Code), dokumentasi lengkap, dan hasil yang siap dipresentasikan di hadapan penguji UKK.</p>
           </div>

           <div className="p-12 border border-white/5 rounded-3xl bg-white/[0.02] hover:bg-white/[0.04] transition-colors group">
              <Boxes className="text-zinc-600 mb-8 group-hover:text-white transition-colors" size={32} />
              <h3 className="text-white font-bold text-xl mb-4">Layanan Purna Tugas</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">Gratis konsultasi dan revisi ringan hingga tugas benar-benar dinyatakan lulus atau diterima oleh dosen/guru.</p>
           </div>
        </div>

        {/* Content Section */}
        <div className="max-w-3xl mx-auto space-y-12">
            <h2 className="text-3xl font-bold text-white tracking-tight">Detail Pengerjaan</h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Dalam pengerjaan {project.title}, JokiTugas.inc berfokus pada ketepatan logika dan pemenuhan kriteria penilaian. Kami memahami bahwa setiap kata dalam modul tugas sangat krusial, itulah sebabnya kami melakukan audit mendalam sebelum menyerahkan hasil akhir.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Tantangan yang sering dihadapi adalah integrasi sistem yang kompleks dalam waktu singkat. Tim kami menggunakan boilerplate yang sudah teruji untuk mempercepat proses tanpa mengurangi kualitas esensial dari tugas tersebut.
            </p>
        </div>
      </div>
    </div>
  );
}
