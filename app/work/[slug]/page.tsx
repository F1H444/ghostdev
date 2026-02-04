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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-end mb-32">
          <div>
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
              className="text-6xl md:text-9xl font-black text-white tracking-tighter leading-none"
            >
              {project.title.split(" ").map((word, i) => (
                <span key={i} className="block">{word}</span>
              ))}
            </motion.h1>
          </div>
          <div className="flex flex-col gap-12">
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.5 }}
               className="space-y-6"
            >
               <p className="text-zinc-500 text-lg leading-relaxed max-w-sm">
                 Sebuah solusi digital mutakhir yang menggabungkan estetika minimalis dengan performa tanpa kompromi. Dirancang untuk masa depan industri {project.category.toLowerCase()}.
               </p>
               <div className="flex gap-4">
                  <Magnetic strength={0.3}>
                    <a href="#" className="flex items-center gap-3 px-8 py-4 bg-white rounded-full transition-transform">
                      <span className="text-black font-bold text-xs uppercase tracking-widest">Kunjungi Situs</span>
                      <ExternalLink size={14} className="text-black" />
                    </a>
                  </Magnetic>
               </div>
            </motion.div>
          </div>
        </div>

        {/* Hero Image */}
        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
           className="relative aspect-[21/9] w-full rounded-2xl overflow-hidden border border-white/5 mb-32"
        >
           <Image src={project.image} alt={project.title} fill className="object-cover" priority />
           <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent opacity-40" />
        </motion.div>

        {/* Specs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
           <div className="p-12 border border-white/5 rounded-3xl bg-white/[0.02] hover:bg-white/[0.04] transition-colors group">
              <Cpu className="text-zinc-600 mb-8 group-hover:text-white transition-colors" size={32} />
              <h3 className="text-white font-bold text-xl mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest">{t}</span>
                ))}
              </div>
           </div>
           
           <div className="p-12 border border-white/5 rounded-3xl bg-white/[0.02] hover:bg-white/[0.04] transition-colors group">
              <Layout className="text-zinc-600 mb-8 group-hover:text-white transition-colors" size={32} />
              <h3 className="text-white font-bold text-xl mb-4">Interface</h3>
              <p className="text-zinc-500 text-sm">Responsif secara maksimal, berfokus pada pengalaman pengguna yang halus dan intuitif di setiap perangkat.</p>
           </div>

           <div className="p-12 border border-white/5 rounded-3xl bg-white/[0.02] hover:bg-white/[0.04] transition-colors group">
              <Boxes className="text-zinc-600 mb-8 group-hover:text-white transition-colors" size={32} />
              <h3 className="text-white font-bold text-xl mb-4">Architecture</h3>
              <p className="text-zinc-500 text-sm">Dibangun dengan basis kode yang bersih dan skalabel menggunakan standar industri global terbaru.</p>
           </div>
        </div>

        {/* Content Placeholder */}
        <div className="max-w-3xl mx-auto space-y-12">
            <h2 className="text-3xl font-bold text-white tracking-tight">Visi Eksklusif</h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Dalam pengerjaan {project.title}, GhostDev berfokus pada harmonisasi antara data dan seni visual. Kami percaya bahwa setiap baris kode harus memiliki tujuan estetika, dan setiap piksel harus memiliki fungsi teknikal yang kuat. 
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Tantangan utama dalam proyek ini adalah bagaimana menjaga performa tetap di angka 100% sembari memberikan animasi transisi yang sinematik. Melalui optimasi GPU acceleration dan manajemen aset yang cerdas, kami berhasil melampaui standar ekspektasi klien.
            </p>
        </div>
      </div>
    </div>
  );
}
