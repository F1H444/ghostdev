'use client';

import { motion } from "framer-motion";
import { Magnetic } from "@/components/ui/Magnetic";
import { MessageSquare, Phone, Mail } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-40 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end">
          <div>
            <h2 className="text-xs font-mono text-zinc-600 uppercase tracking-[0.4em] mb-10">Koneksi</h2>
            <h3 className="text-5xl md:text-8xl font-bold text-white tracking-tighter leading-[0.9] mb-12">
              Kirim <br /> Tugasmu.
            </h3>
            <p className="text-zinc-500 text-lg md:text-xl max-w-md leading-relaxed mb-12">
              Konsultasikan tugas atau proyek UKK Anda secara gratis. Kami siap membantu memberikan solusi teknis terbaik.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <Magnetic strength={0.1}>
              <a 
                href="https://wa.me/6281216802722" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-8 rounded-2xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all duration-500"
              >
                <div className="flex items-center gap-6">
                   <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                     <Phone size={20} />
                   </div>
                   <div>
                     <p className="text-zinc-600 text-[10px] font-mono uppercase tracking-widest mb-1">WhatsApp</p>
                     <p className="text-white font-bold">0812-1680-2722</p>
                   </div>
                </div>
                <div className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all text-white">
                  <span className="text-xs font-mono uppercase tracking-widest">Chat Sekarang</span>
                </div>
              </a>
            </Magnetic>

            <Magnetic strength={0.1}>
              <a 
                href="mailto:admin@ghostdev.co" 
                className="group flex items-center justify-between p-8 rounded-2xl border border-white/5 bg-transparent hover:border-white/20 transition-all duration-500"
              >
                <div className="flex items-center gap-6">
                   <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500">
                     <Mail size={20} />
                   </div>
                   <div>
                     <p className="text-zinc-600 text-[10px] font-mono uppercase tracking-widest mb-1">Email</p>
                     <p className="text-white font-bold">admin@ghostdev.co</p>
                   </div>
                </div>
                <div className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all text-white">
                  <span className="text-xs font-mono uppercase tracking-widest">Kirim Surat</span>
                </div>
              </a>
            </Magnetic>
          </div>
        </div>

        <div className="mt-40 pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="flex flex-col items-center md:items-start gap-4">
              <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.5em]">Tersedia Global</span>
              <div className="flex items-center gap-2">
                 <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                 <span className="text-zinc-400 text-sm font-medium">Siap untuk pengerjaan joki baru</span>
              </div>
           </div>
           
           <div className="flex gap-12 text-zinc-600 font-mono text-[10px] uppercase tracking-widest">
              GhostDev // Est. 2026
           </div>
        </div>
      </div>
    </section>
  );
}
