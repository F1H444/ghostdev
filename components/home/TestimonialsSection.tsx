'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { createClient } from '@/lib/supabase';
import { submitReview } from '@/app/actions/reviews';
import { X, Send, Plus, Loader2 } from 'lucide-react';



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
  
  useEffect(() => {
    const fetchReviews = async () => {
      const supabase = createClient();
      const { data } = await supabase
        .from('reviews')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (data) {
        setDynamicReviews(data);
      }
    };
    
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
      // Refresh reviews
      const supabase = createClient();
      const { data } = await supabase
        .from('reviews')
        .select('*')
        .order('created_at', { ascending: false });
      if (data) setDynamicReviews(data);
    }
  };

  const allReviews = dynamicReviews;

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 flex flex-col items-center">
          <h2 className="text-[10px] font-mono text-zinc-600 uppercase tracking-[1em] mb-8 text-center text-white">Testimoni Klien</h2>
          <div className="w-12 h-[1px] bg-zinc-800 mb-8" />
          
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-white/30 transition-all text-sm text-zinc-300 hover:text-white group"
          >
            <Plus className="w-4 h-4 group-hover:rotate-90 transition-transform" />
            <span>Tulis Ulasan</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {allReviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 4) * 0.1 }}
              className="p-8 border border-white/5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] transition-colors flex flex-col justify-between group"
            >
              <p className="text-zinc-400 text-sm leading-relaxed mb-8 group-hover:text-zinc-200 transition-colors">"{review.text}"</p>
              <div>
                <h4 className="text-white font-bold text-sm">{review.name}</h4>
                <p className="text-zinc-600 text-[10px] font-mono uppercase tracking-widest">{review.role}</p>
              </div>
            </motion.div>
          ))}
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
