import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Calendar, Users } from "lucide-react"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pengurus RT Blok Herba - Ketua, Sekretaris, Bendahara | Taman Cipta Asri 2 Batam",
  description:
    "Daftar lengkap pengurus RT 005 Blok Herba: Ketua RT, Sekretaris, Bendahara, Koordinator Keamanan & Kesehatan. Kontak pengurus Taman Cipta Asri 2, Batam.",
  keywords: [
    "pengurus RT Blok Herba",
    "ketua RT",
    "sekretaris RT",
    "bendahara RT",
    "kontak pengurus",
    "RT 005 Batam",
    "Taman Cipta Asri",
  ],
  openGraph: {
    title: "Pengurus RT Blok Herba - Ketua, Sekretaris, Bendahara",
    description: "Daftar lengkap pengurus RT 005 Blok Herba dengan kontak dan informasi lengkap.",
    url: "https://blokherba.vercel.app/pengurus",
  },
}

export default function PengurusPage() {
  const management = [
    {
      name: "Edika Saputra",
      position: "Ketua RT",
      phone: "+62 812-6361-3720",
      email: "suharto@rtherba.com",
      address: "Blok Herba No. 57",
      period: "2022-2025",
      description:
        "Memimpin dan mengkoordinasikan seluruh kegiatan RT dengan pengalaman 15 tahun di bidang kemasyarakatan.",
      image: "/indonesian-leader-formal.png",
    },
    {
      name: "Eka Pengayum",
      position: "Sekretaris RT",
      phone: "+62 831-8435-2371",
      email: "siti@rtherba.com",
      address: "Blok A No. 005",
      period: "2022-2025",
      description: "Mengelola administrasi dan dokumentasi RT dengan ketelitian dan dedikasi tinggi.",
      image: "/images/eka.jpg",
    },
    {
      name: "Ibu Sinta",
      position: "Bendahara RT",
      phone: "0814-5678-9012",
      email: "ahmad@rtherba.com",
      address: "Blok B No. 012",
      period: "2022-2025",
      description: "Mengelola keuangan RT dengan transparansi dan akuntabilitas yang tinggi.",
      image: "/indonesian-secretary.png",
    },
    {
      name: "Andeska Arifin",
      position: "Koordinator Perlengkapan",
      phone: "+62 816-7890-1234",
      email: "joko@rtherba.com",
      address: "Blok Herba No. 109",
      period: "2022-2025",
      description: "Mengkoordinasikan sistem keamanan lingkungan dan ronda malam dengan pengalaman kepolisian.",
      image: "/images/andes.jpg",
    },
    {
      name: "Ibu Leni",
      position: "Koordinator Konsumsi",
      phone: "0815-6789-0123",
      email: "ratna@rtherba.com",
      address: "Blok A No. 008",
      period: "2022-2025",
      description: "Mengelola program kesehatan warga dan koordinasi dengan puskesmas setempat.",
      image: "/indonesian-health-coordinator.png",
    },
    {
      name: "Muhammad Ary Widodo",
      position: "Koordinator Pemuda dan Olahraga",
      phone: "+62 853-3871-4313",
      email: "andi@rtherba.com",
      address: "Blok C No. 025",
      period: "2022-2025",
      description: "Mengkoordinasikan kegiatan pemuda dan olahraga di lingkungan RT.",
      image: "/placeholder-nybna.png",
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
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-900">Pengurus RT Blok Herba</h1>
            </div>
            <p className="font-body text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Tim pengurus yang berdedikasi untuk melayani dan memajukan RT Blok Herba dengan penuh tanggung jawab dan
              transparansi.
            </p>
          </div>

          {/* Management Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {management.map((person, index) => (
              <Card
                key={index}
                className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
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
                <CardContent className="p-6">
                  <p className="font-body text-gray-600 mb-4 leading-relaxed text-sm">{person.description}</p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <Phone className="w-4 h-4 mr-3 text-emerald-600" />
                      <span>{person.phone}</span>
                    </div>
                    {/* <div className="flex items-center text-sm text-gray-600">
                      <Mail className="w-4 h-4 mr-3 text-blue-600" />
                      <span>{person.email}</span>
                    </div> */}
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
                    Hubungi
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Info */}
          <Card className="border-0 shadow-xl">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="font-heading text-3xl font-bold text-gray-900 mb-6">Hubungi Pengurus RT</h2>
              <p className="font-body text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                Untuk keperluan administrasi, keluhan, atau saran terkait RT Blok Herba, silakan hubungi pengurus
                melalui kontak yang tersedia atau datang langsung ke sekretariat RT.
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-gray-900 mb-2">Telepon</h3>
                  <p className="font-body text-gray-600">0812-3456-7890</p>
                  <p className="font-body text-sm text-gray-500">(Ketua RT)</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-gray-900 mb-2">Email</h3>
                  <p className="font-body text-gray-600">info@rtherba.com</p>
                  <p className="font-body text-sm text-gray-500">(Sekretariat RT)</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-gray-900 mb-2">Alamat</h3>
                  <p className="font-body text-gray-600">Balai RT Blok Herba</p>
                  <p className="font-body text-sm text-gray-500">Taman Cipta Asri 2</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
