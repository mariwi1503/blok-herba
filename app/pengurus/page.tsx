"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Calendar, Users } from "lucide-react"
import Image from "next/image"
import type { Metadata } from "next"
import { toWaMeUrl } from "@/lib/utils"
import { useState } from "react"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"

// export const metadata: Metadata = {
//   title: "Pengurus RT Blok Herba - Ketua, Sekretaris, Bendahara | Taman Cipta Asri 2 Batam",
//   description:
//     "Daftar lengkap pengurus RT 005 Blok Herba: Ketua RT, Sekretaris, Bendahara, Koordinator Keamanan & Kesehatan. Kontak pengurus Taman Cipta Asri 2, Batam.",
//   keywords: [
//     "pengurus RT Blok Herba",
//     "ketua RT",
//     "sekretaris RT",
//     "bendahara RT",
//     "kontak pengurus",
//     "RT 005 Batam",
//     "Taman Cipta Asri",
//   ],
// }

export default function PengurusPage() {
  const [selected, setSelected] = useState<any | null>(null)

  const management = [
    {
      name: "Edika Saputra",
      position: "Ketua RT",
      phone: "+62 812-6361-3720",
      address: "Blok Herba No. 57",
      period: "2022-2025",
      description:
        "Memimpin dan mengkoordinasikan seluruh kegiatan RT dengan pengalaman 15 tahun di bidang kemasyarakatan.",
      image: "/images/rt.jpg",
    },
    {
      name: "Eka Pengayum",
      position: "Sekretaris RT",
      phone: "+62 831-8435-2371",
      address: "Blok A No. 005",
      period: "2022-2025",
      description: "Mengelola administrasi dan dokumentasi RT dengan ketelitian dan dedikasi tinggi.",
      image: "/images/eka.jpg",
    },
    {
      name: "Ibu Sinta",
      position: "Bendahara RT",
      phone: "0814-5678-9012",
      // email: "ahmad@rtherba.com",
      address: "Blok B No. 012",
      period: "2022-2025",
      description: "Mengelola keuangan RT dengan transparansi dan akuntabilitas yang tinggi.",
      image: "/placeholder-nybna.png",
    },
    {
      name: "Andeska Arifin",
      position: "Koordinator Perlengkapan",
      phone: "+62 812-7524-3138",
      // email: "joko@rtherba.com",
      address: "Blok Herba No. 109",
      period: "2022-2025",
      description: "Mengkoordinasikan sistem keamanan lingkungan dan ronda malam dengan pengalaman kepolisian.",
      image: "/images/andes.jpg",
    },
    {
      name: "Leni Syafrida",
      position: "Koordinator Konsumsi",
      phone: "+62 812-7515-5988",
      // email: "ratna@rtherba.com",
      address: "Blok A No. 008",
      period: "2022-2025",
      description: "Mengelola program kesehatan warga dan koordinasi dengan puskesmas setempat.",
      image: "/images/leni.jpg",
    },
    {
      name: "Muhammad Ary Widodo",
      position: "Koordinator Pemuda dan Olahraga",
      phone: "+62 853-3871-4313",
      // email: "andi@rtherba.com",
      address: "Blok C No. 025",
      period: "2022-2025",
      description: "Mengkoordinasikan kegiatan pemuda dan olahraga di lingkungan RT.",
      image: "/images/ary.jpg",
    },
    {
      name: "Nur Afandi",
      position: "Koordinator Humas",
      phone: "+62 812-6821-6760",
      // email: "andi@rtherba.com",
      address: "Blok C No. 025",
      period: "2022-2025",
      description: "Mengkoordinasikan kegiatan pemuda dan olahraga di lingkungan RT.",
      image: "/images/nur.jpg",
    },
    {
      name: "Ruli Candra",
      position: "Koordinator Pengajian",
      phone: "+62 813-7331-8342",
      // email: "andi@rtherba.com",
      address: "Blok C No. 025",
      period: "2022-2025",
      description: "Mengkoordinasikan kegiatan pemuda dan olahraga di lingkungan RT.",
      image: "/images/ruli.jpg",
    },
    {
      name: "Rizky ragil seputro",
      position: "Koordinator Pemuda",
      phone: "+62 815-3349-2729",
      // email: "andi@rtherba.com",
      address: "Blok C No. 025",
      period: "2022-2025",
      description: "Mengkoordinasikan kegiatan pemuda dan olahraga di lingkungan RT.",
      image: "/images/ragil.jpg",
    },
     {
      name: "Ondra Wizal",
      position: "Koordinator Humas",
      phone: "+62 815-3349-2729",
      // email: "andi@rtherba.com",
      address: "Blok C No. 025",
      period: "2022-2025",
      description: "Mengkoordinasikan kegiatan pemuda dan olahraga di lingkungan RT.",
      image: "/images/ondra.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navbar />
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Users className="w-12 h-12 text-emerald-600 mr-4" />
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-900">
                Pengurus RT Blok Herba
              </h1>
            </div>
            <p className="font-body text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Tim pengurus yang berdedikasi untuk melayani dan memajukan RT Blok Herba dengan penuh tanggung jawab dan
              transparansi.
            </p>
          </div>

          {/* Management Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-8 mb-16">
            {management.map((person, index) => (
              <Card
                key={index}
                className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                onClick={() => {
                  if (window.innerWidth < 768) setSelected(person)
                }}
              >
                <div className="relative">
                  <Image
                    src={person.image || "/placeholder.svg"}
                    alt={person.name}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-t-lg" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-heading text-xl font-bold mb-1">{person.name}</h3>
                    <p className="font-body text-sm opacity-90">{person.position}</p>
                  </div>
                </div>

                {/* CardContent hanya muncul di desktop/tablet */}
                <CardContent className="p-6 hidden md:block">
                  <p className="font-body text-gray-600 mb-4 leading-relaxed text-sm">{person.description}</p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <Phone className="w-4 h-4 mr-3 text-emerald-600" />
                      <span>{person.phone}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="w-4 h-4 mr-3 text-purple-600" />
                      <span>{person.address}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="w-4 h-4 mr-3 text-orange-600" />
                      <span>Periode {person.period}</span>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full bg-transparent border-emerald-600 text-emerald-600 hover:bg-emerald-50"
                  >
                    <a
                      href={toWaMeUrl(person.phone)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Hubungi
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Modal untuk mobile */}
          <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
            <DialogContent className="max-w-md">
              {selected && (
                <div>
                  <VisuallyHidden>
                    <DialogTitle>{selected.name}</DialogTitle>
                  </VisuallyHidden>
                  <Image
                    src={selected.image || "/placeholder.svg"}
                    alt={selected.name}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover rounded-lg mb-4"
                  />
                  <h3 className="font-heading text-xl font-bold mb-1">{selected.name}</h3>
                  <p className="text-sm text-gray-500 mb-3">{selected.position}</p>
                  <p className="text-gray-600 mb-4">{selected.description}</p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <Phone className="w-4 h-4 mr-3 text-emerald-600" />
                      <span>{selected.phone}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="w-4 h-4 mr-3 text-purple-600" />
                      <span>{selected.address}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="w-4 h-4 mr-3 text-orange-600" />
                      <span>Periode {selected.period}</span>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full bg-transparent border-emerald-600 text-emerald-600 hover:bg-emerald-50"
                  >
                    <a
                      href={toWaMeUrl(selected.phone)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Hubungi
                    </a>
                  </Button>
                </div>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </main>
      <Footer />
    </div>
  )
}
