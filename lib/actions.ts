'use server'

import { z } from 'zod'
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

// 1. Skema Validasi Zod
const updateProfileSchema = z.object({
  fullName: z.string().min(3, { message: "Nama minimal 3 karakter" }),
  phone: z.string().min(10, { message: "Nomor telepon tidak valid" }),
})

// 2. Server Action dengan Otorisasi & Zod
export async function updateProfile(formData: FormData) {
  const cookieStore = await cookies()

  // Inisialisasi Supabase Client
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
      },
    }
  )

  // Verifikasi Otorisasi (Memastikan user login)
  const { data: { user }, error: authError } = await supabase.auth.getUser()
  if (authError || !user) {
    throw new Error('Unauthorized: Anda harus login untuk melakukan aksi ini.')
  }

  // Ambil raw payload
  const rawData = {
    fullName: formData.get('fullName'),
    phone: formData.get('phone'),
  }

  // Validasi payload dengan Zod secara aman (safeParse)
  const validated = updateProfileSchema.safeParse(rawData)
  if (!validated.success) {
    return { 
      success: false, 
      error: validated.error.flatten().fieldErrors 
    }
  }

  // Eksekusi jika otorisasi lewat dan data valid
  // const { fullName, phone } = validated.data
  // await supabase.from('profiles').update({ full_name: fullName, phone }).eq('id', user.id)

  return { 
    success: true, 
    message: 'Profil berhasil diperbarui', 
    data: validated.data 
  }
}
