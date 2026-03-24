import { Suspense } from 'react';
import { fetchProjects } from '@/lib/projects';
import Link from 'next/link';

// Komponen Server tersendiri yang mensimulasikan data fetching berat / database lambat
async function HeavyProjectsList() {
  // Simulasi delay (misalnya query lambat selama 2.5 detik)
  await new Promise((resolve) => setTimeout(resolve, 2500));
  const projects = await fetchProjects();
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
      {projects.map((p) => (
        <Link key={p.id} href={`/work/${p.slug}`} className="block p-6 border border-white/10 rounded-2xl hover:bg-white/5 hover:border-white/20 transition-all duration-300 group">
          <div className="aspect-video bg-zinc-900 rounded-lg mb-4 overflow-hidden relative">
            <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          <h3 className="text-white text-xl font-bold mb-2">{p.title}</h3>
          <p className="text-zinc-500 text-sm uppercase tracking-widest">{p.category}</p>
        </Link>
      ))}
    </div>
  );
}

// Halaman utama (langsung di-render instan ke klien)
export default function PerformanceDemoPage() {
  return (
    <div className="min-h-screen pt-32 pb-64 px-8 md:px-24 bg-black">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-white mb-6">Demo Performa: <span className="text-zinc-500">Streaming & Suspense</span></h1>
        <p className="text-zinc-400 max-w-2xl leading-relaxed text-lg">
          Halaman UI ini di-render secara instan kepada Anda. Daftar proyek di bawah sedang mengambil data selama 2.5 detik menggunakan simulasi <em>fetch</em>. Karena dibungkus <code>&lt;Suspense&gt;</code>, keseluruhan <em>page</em> tidak ikut tertahan (streaming).
        </p>

        {/* Suspense akan merender fallback UI sementara hingga HeavyProjectsList selesai dimuat */}
        <Suspense fallback={
          <div className="mt-12 p-12 border border-white/5 border-dashed rounded-3xl flex flex-col items-center justify-center bg-white/[0.02]">
            <div className="w-10 h-10 border-2 border-white/20 border-t-white rounded-full animate-spin mb-6" />
            <span className="text-zinc-400 font-mono text-sm uppercase tracking-widest">Melakukan Query Database Berat...</span>
          </div>
        }>
          <HeavyProjectsList />
        </Suspense>
      </div>
    </div>
  );
}
