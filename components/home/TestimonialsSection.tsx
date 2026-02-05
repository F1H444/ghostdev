'use client';

import { motion } from 'framer-motion';

const reviews = [
  {
    name: "Colin",
    role: "Siswa SMKN 2 Surabaya",
    text: "Sangat membantu untuk pengerjaan UKK RPL saya. Penjelasan kodenya sangat detail dan aplikasinya berjalan tanpa bug saat demo di depan penguji."
  },
  {
    name: "Fathir",
    role: "Siswa SMKN 2 Surabaya.",
    text: "Solusi tugas web development yang luar biasa presisi. Hasil kodenya benar-benar bersih dan mudah dipahami."
  },
  {
    name: "Ayman",
    role: "Siswa SMKN 2 Surabaya.",
    text: "Konfigurasi MikroTik pengerjaan GhostDev tidak pernah mengecewakan. Sangat direkomendasikan untuk tugas jaringan."
  },
  {
    name: "Arya",
    role: "Siswa SMKN 2 Surabaya.",
    text: "Database architecture yang dibuat sangat optimal. Membantu saya memahami relasi data yang kompleks dalam tugas akhir."
  },
  {
    name: "Farel",
    role: "Siswa SMKN 2 Surabaya.",
    text: "UI/UX design nya sangat modern. Prototyping yang diberikan sangat interaktif dan membuat presentasi saya diapresiasi guru."
  },
  {
    name: "Usman",
    role: "Siswa SMKN 2 Surabaya.",
    text: "Pengerjaan aplikasi Flutter sangat cepat dan fungsional. Integrasi Firebase nya berjalan mulus sesuai requirement tugas."
  },
  {
    name: "Alif",
    role: "Siswa SMKN 2 Surabaya.",
    text: "Membantu banget pas UKK kemarin. Dari mulai perencanaan sampai hasil akhir bener-bener dipandu sama tim GhostDev."
  },
  {
    name: "Aditya",
    role: "Siswa SMKN 2 Surabaya.",
    text: "Coding Python untuk otomasi tugas saya diselesaikan dengan sangat cerdas. Logikanya kuat dan performanya kencang."
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 flex flex-col items-center">
          <h2 className="text-[10px] font-mono text-zinc-600 uppercase tracking-[1em] mb-8 text-center">Testimoni Klien</h2>
          <div className="w-12 h-[1px] bg-zinc-800" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 border border-white/5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] transition-colors flex flex-col justify-between"
            >
              <p className="text-zinc-400 text-sm leading-relaxed mb-8">"{review.text}"</p>
              <div>
                <h4 className="text-white font-bold text-sm">{review.name}</h4>
                <p className="text-zinc-600 text-[10px] font-mono uppercase tracking-widest">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
