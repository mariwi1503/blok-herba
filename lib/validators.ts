// lib/validators.ts
import { z } from "zod";

// Definisikan schema untuk data OrganizationProfile
export const organizationProfileSchema = z.object({
  heroTagline: z.string().min(1, { message: "Hero tagline harus diisi." }),
  footerTagline: z.string().min(1, { message: "Footer tagline harus diisi." }),
  vision: z.string().min(1, { message: "Visi harus diisi." }),
  mission: z
    .array(z.string().min(1, { message: "Item misi harus diisi." }))
    .min(1, { message: "Misi harus memiliki setidaknya satu item." }),
  history: z.string().min(1, { message: "Sejarah harus diisi." }),
  about: z.string().min(1, { message: "Tentang harus diisi." }),
  address: z.string().min(1, { message: "Alamat harus diisi." }),
  phone: z.string().min(1, { message: "Nomor telepon harus diisi." }),
  email: z.string().email({ message: "Email tidak valid." }),
});

// Zod akan secara otomatis menyimpulkan tipe data dari schema
export type OrganizationProfile = z.infer<typeof organizationProfileSchema>;