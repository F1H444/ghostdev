'use client';

import { useOptimistic, useTransition, useState } from 'react';
import { Bookmark } from 'lucide-react';

// Fungsi simulasi Server Action (biasanya dipanggil dari lib/actions.ts)
async function simulateSaveAction(projectId: string, targetState: boolean) {
  await new Promise(resolve => setTimeout(resolve, 1500)); // Simulasi network latency
  // Simulasi 10% kemungkinan gagal
  if (Math.random() > 0.9) {
    throw new Error("Simulated Server Error");
  }
  return { success: true };
}

export function SaveButton({ projectId }: { projectId: string }) {
  // State dasar riil (biasanya dari validasi database)
  const [isSavedReal, setIsSavedReal] = useState(false);
  const [isPending, startTransition] = useTransition();

  // Optimistic UI Hook dari React 19
  // Menerima (initialState, reducer_cara_update)
  const [optimisticSaved, addOptimisticSaved] = useOptimistic(
    isSavedReal,
    (state: boolean, newState: boolean) => newState
  );

  const handleSave = () => {
    // 1. startTransition agar state update tidak memblokir render utama
    startTransition(async () => {
      const newState = !optimisticSaved;
      
      // 2. Beri instruksi ke UI untuk update seketika (optimis) secara visual
      addOptimisticSaved(newState);
      
      try {
        // 3. Lakukan request ke server sesungguhnya secara asinkron
        await simulateSaveAction(projectId, newState);
        
        // 4. Jika response OK, sinkronisasi state dasar / riil
        setIsSavedReal(newState);
      } catch (error) {
        // Jika gagal, react secara cerdas membatalkan optimistic state
        // UI pengguna akan kembali menjadi isSavedReal tanpa tambahan kode manual
        console.error("Gagal melakukan aksi penyimpanan di server.");
      }
    });
  };

  return (
    <button
      onClick={handleSave}
      disabled={isPending}
      className={`group flex items-center gap-3 px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 ${
        optimisticSaved 
          ? 'bg-white text-black border-white hover:bg-zinc-200' 
          : 'bg-transparent text-white border border-white/30 hover:border-white'
      } ${isPending ? 'opacity-70 cursor-wait' : ''}`}
    >
      <Bookmark 
        size={18} 
        className={optimisticSaved ? 'fill-black text-black' : 'text-zinc-400 group-hover:text-white'} 
      />
      {optimisticSaved ? 'Tersimpan (Optimistic)' : 'Simpan Proyek'}
    </button>
  );
}
