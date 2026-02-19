'use client';

import { motion, Variants } from 'framer-motion';
import { Layout, Shield, Zap, Globe, Cpu, Smartphone } from 'lucide-react';
import { cn } from '@/lib/utils';

const services = [
  {
    title: "Pemrograman Web",
    description: "Pengerjaan proyek website dengan fitur lengkap sesuai modul UKK, dijamin fungsional dan responsif.",
    icon: Globe,
    className: "lg:col-span-2 md:col-span-2 bg-blue-600/10 border-blue-500/20",
    color: "text-blue-500"
  },
  {
    title: "Jaminan Lulus UKK",
    description: "Pendampingan proyek dari perencanaan hingga demo aplikasi. Fokus pada kriteria penilaian penguji.",
    icon: Zap,
    className: "lg:col-span-1 md:col-span-1 bg-zinc-900/50 border-white/5",
    color: "text-yellow-500"
  },
  {
    title: "UI/UX & Desain",
    description: "Tampilan antarmuka yang modern dan profesional untuk meningkatkan nilai presentasi.",
    icon: Layout,
    className: "lg:col-span-1 md:col-span-1 bg-zinc-900/50 border-white/5",
    color: "text-purple-500"
  },
  {
    title: "Keamanan Sistem",
    description: "Implementasi proteksi data dan autentikasi yang kuat sesuai standar keamanan web modern.",
    icon: Shield,
    className: "lg:col-span-1 md:col-span-1 bg-zinc-900/50 border-white/5",
    color: "text-green-500"
  },
  {
    title: "Bimbingan Teknis",
    description: "Konsultasi intensif agar Anda siap menjawab setiap pertanyaan penguji.",
    icon: Cpu,
    className: "lg:col-span-3 md:col-span-1 bg-cyan-600/10 border-cyan-500/20",
    color: "text-cyan-500"
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const cardVariants: Variants = {
  hidden: { y: 100, opacity: 0, scale: 0.95 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1] as any
    }
  }
};

export function ServicesSection() {
  return (
    <section id="services" className="min-h-screen flex items-center justify-center py-20 px-0 relative z-10 bg-black">
      <div className="max-w-7xl mx-auto px-8 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-xs font-mono text-zinc-600 uppercase tracking-[0.4em] mb-6">Keahlian</h2>
          <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
            Fast Results, High Grades,<br /><span className="text-blue-500 italic">Low Costs.</span>
          </h3>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className={cn(
                "p-8 rounded-[2rem] border bg-zinc-900/40 flex flex-col gap-4 group relative overflow-hidden will-change-transform",
                service.className
              )}
            >
              <div className={cn("w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center transition-transform duration-500 group-hover:scale-110", service.color)}>
                <service.icon size={24} />
              </div>
              
              <div className="space-y-3">
                <h4 className="text-2xl font-bold text-white tracking-tight">{service.title}</h4>
                <p className="text-zinc-500 text-sm leading-relaxed max-w-[280px]">
                  {service.description}
                </p>
              </div>

              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
