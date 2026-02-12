'use client';

import { motion } from 'framer-motion';
import { Layout, Shield, Zap, Globe, Cpu, Smartphone } from 'lucide-react';

const services = [
  {
    title: "Web Development",
    description: "Membangun ekosistem digital yang cepat, aman, dan memukau klien Anda.",
    icon: Globe,
    className: "md:col-span-2 md:row-span-1 bg-blue-600/10 border-blue-500/20",
    color: "text-blue-500"
  },
  {
    title: "UKK & Tugas",
    description: "Solusi tuntas untuk tugas pemrograman dan proyek UKK.",
    icon: Zap,
    className: "md:col-span-1 md:row-span-1 bg-zinc-900/50 border-white/5",
    color: "text-yellow-500"
  },
  {
    title: "App Design",
    description: "Antarmuka modern yang memprioritaskan pengalaman pengguna.",
    icon: Layout,
    className: "md:col-span-1 md:row-span-2 bg-zinc-900/50 border-white/5",
    color: "text-purple-500"
  },
  {
    title: "Security Logic",
    description: "Keamanan tingkat lanjut untuk infrastruktur digital Anda.",
    icon: Shield,
    className: "md:col-span-1 md:row-span-1 bg-zinc-900/50 border-white/5",
    color: "text-green-500"
  },
  {
    title: "Tech Solutions",
    description: "Konsultasi teknis untuk masalah programming yang kompleks.",
    icon: Cpu,
    className: "md:col-span-2 md:row-span-1 bg-cyan-600/10 border-cyan-500/20",
    color: "text-cyan-500"
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="min-h-screen flex items-center justify-center py-32 px-0 relative z-10 bg-black">
      <div className="max-w-7xl mx-auto px-8 w-full">
        <div className="mb-20">
          <h2 className="text-xs font-mono text-zinc-600 uppercase tracking-[0.4em] mb-6">Expertise</h2>
          <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
            Layanan Terpadu. <br /> Kualitas <span className="text-blue-500 italic">Tanpa Kompromi.</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className={`p-8 rounded-3xl border backdrop-blur-sm group transition-all duration-500 ${service.className}`}
            >
              <div className="flex flex-col h-full justify-between gap-12">
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-2xl bg-white/5 ${service.color}`}>
                    <service.icon size={24} />
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                     <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-4">{service.title}</h4>
                  <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">{service.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
