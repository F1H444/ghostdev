'use server';

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

const badWords = [
  'anjing', 'babi', 'monyet', 'bangsat', 'kontol', 'memek', 'jembut', 
  'ngentot', 'tolol', 'goblok', 'bodoh', 'idiot', 'biadab', 'setan', 
  'iblis', 'kampret', 'brengsek', 'taik', 'tai', 'fuck', 'shit', 
  'bitch', 'asshole', 'bastard', 'damn', 'cunt', 'dick', 'pussy'
];

function containsBadWords(text: string): boolean {
  const lowerText = text.toLowerCase();
  return badWords.some(word => lowerText.includes(word));
}

export async function submitReview(formData: FormData) {
  const name = formData.get('name') as string;
  const role = formData.get('role') as string;
  const text = formData.get('text') as string;

  if (!name || !role || !text) {
    return { error: 'Semua field harus diisi' };
  }

  // 1. Analyze for bad words
  if (containsBadWords(text) || containsBadWords(name) || containsBadWords(role)) {
    // Silent rejection or explicit error? User said "langsung hapus saja".
    // We will return an error to the user so they know why, or just pretend it succeeded but not save it?
    // "maka langsung hapus saja" -> implies it shouldn't exist in DB.
    return { error: 'Ulasan mengandung kata-kata yang tidak sopan dan ditolak sistem.' };
  }

  // 2. Insert into Supabase
  const supabase = createClient(supabaseUrl, supabaseKey);

  const { error } = await supabase
    .from('reviews')
    .insert([
      { name, role, text }
    ]);

  if (error) {
    console.error('Supabase error:', error);
    return { error: 'Gagal menyimpan ulasan' };
  }

  return { success: true };
}
