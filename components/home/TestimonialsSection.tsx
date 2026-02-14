'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { createClient } from '@/lib/supabase';
import { submitReview } from '@/app/actions/reviews';
import { X, Send, Plus, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';



interface Review {
  id?: number;
  name: string;
  role: string;
  text: string;
}

export function TestimonialsSection() {
  const [dynamicReviews, setDynamicReviews] = useState<Review[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  const fetchReviews = async () => {
    setIsLoading(true);
    const supabase = createClient();
    const { data } = await supabase
      .from('reviews')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (data) {
      setDynamicReviews(data);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true);
    const result = await submitReview(formData);
    setIsSubmitting(false);

    if (result.error) {
      alert(result.error);
    } else {
      alert('Terima kasih! Ulasan Anda telah berhasil dikirim.');
      setShowModal(false);
      fetchReviews();
    }
  };

  return (
    <section id="testimonials" className="min-h-screen py-32 flex items-center bg-black relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 w-full">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="max-w-2xl">
            <h2 className="text-xs font-mono text-zinc-600 uppercase tracking-[0.4em] mb-6">Client Stories</h2>
            <h3 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-none">
              Apa Kata Mereka? <br /> <span className="text-blue-500 italic">Bukti Nyata</span> Kualitas.
            </h3>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="h-14 px-8 flex items-center gap-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-white/30 transition-all text-xs font-bold uppercase tracking-widest text-zinc-300 hover:text-white group"
          >
            <Plus className="w-4 h-4 group-hover:rotate-90 transition-transform" />
            <span>Tulis Ulasan</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {isLoading ? (
              [...Array(3)].map((_, i) => (
                <div key={i} className="h-64 bg-zinc-900 animate-pulse rounded-[2.5rem]" />
              ))
            ) : (
              dynamicReviews.map((review, i) => (
                <motion.div
                  key={review.id || i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={cn(
                    "p-10 rounded-[2.5rem] bg-zinc-900/40 border backdrop-blur-sm flex flex-col justify-between h-full transition-all duration-500",
                    [
                      "border-white/5 hover:border-green-500/30",
                      "border-white/5 hover:border-purple-500/30",
                      "border-white/5 hover:border-blue-500/30",
                      "border-white/5 hover:border-cyan-500/30",
                      "border-white/5 hover:border-yellow-500/30"
                    ][i % 5]
                  )}
                >
                  <p className="text-zinc-400 text-sm leading-relaxed mb-8">"{review.text}"</p>
                  <div>
                    <h4 className="text-white font-bold text-sm tracking-tight">{review.name}</h4>
                    <p className="text-zinc-600 text-[10px] font-mono uppercase tracking-widest mt-1">{review.role}</p>
                  </div>
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Submission Modal */}
      <AnimatePresence>
        {showModal && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed inset-0 m-auto w-full max-w-md h-fit p-6 bg-zinc-950 border border-white/10 rounded-2xl z-50 shadow-2xl"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white">Berikan Ulasan</h3>
                <button 
                  onClick={() => setShowModal(false)}
                  className="p-2 text-zinc-500 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form action={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-xs text-zinc-500 uppercase tracking-wider font-semibold mb-2 block">Nama</label>
                  <input 
                    name="name"
                    required
                    placeholder="Nama Anda"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-zinc-700 focus:outline-none focus:border-white/30 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs text-zinc-500 uppercase tracking-wider font-semibold mb-2 block">Role / Jurusan</label>
                  <input 
                    name="role"
                    required
                    placeholder="Contoh: Peserta UKK RPL"
                    defaultValue="Peserta UKK RPL"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-zinc-700 focus:outline-none focus:border-white/30 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs text-zinc-500 uppercase tracking-wider font-semibold mb-2 block">Ulasan</label>
                  <textarea 
                    name="text"
                    required
                    rows={4}
                    placeholder="Bagaimana pengalaman Anda menggunakan jasa kami?"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-zinc-700 focus:outline-none focus:border-white/30 transition-colors resize-none"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-white text-black font-bold py-3 rounded-xl hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Mengirim...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Kirim Ulasan</span>
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
