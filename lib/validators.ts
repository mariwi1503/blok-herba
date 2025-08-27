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

export const residentSchema = z.object({
  fullName: z.string().min(1, "Nama lengkap harus diisi."),
  idCardNumber: z.string().min(1, "Nomor KTP harus diisi."),
  idCardType: z.enum(["BATAM", "NON_BATAM"]),
  phone: z.string().optional(),
  maritalStatus: z.enum(["KAWIN", "BELUM_KAWIN", "DUDA_JANDA"]),
  gender: z.enum(["L", "P"]),
  isHead: z.boolean().default(false),
  image: z.string().optional(),
  houseNumber: z.string().min(1, "Nomor rumah harus diisi."),
  committeeId: z.string().optional().nullable(),
  familyCardId: z.string().optional().nullable(),
});