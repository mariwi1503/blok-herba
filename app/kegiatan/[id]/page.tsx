import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Clock, MapPin, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ActivityDetailPage({ params }: { params: { id: string } }) {
  // Mock data - in real app, fetch based on params.id
  const activity = {
    id: params.id,
    title: "Rapat Koordinasi RT",
    description:
      "Pembahasan program kerja bulan Januari 2025 dan evaluasi kegiatan tahun 2024. Rapat ini akan membahas berbagai program yang akan dilaksanakan pada bulan mendatang serta evaluasi menyeluruh terhadap kegiatan-kegiatan yang telah terlaksana sepanjang tahun 2024.",
    date: "28 Desember 2024",
    time: "19:00 - 21:00",
    location: "Balai RT Blok Herba",
    participants: "Pengurus RT",
    status: "upcoming",
    image: "/images/rapat-rt.jpg",
    agenda: [
      "Pembukaan dan laporan ketua RT",
      "Evaluasi kegiatan tahun 2024",
      "Rencana program kerja Januari 2025",
      "Pembahasan anggaran kegiatan",
      "Diskusi dan tanya jawab",
      "Penutup",
    ],
    organizer: "Ketua RT Blok Herba",
    contact: "0812-3456-7890",
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navbar />
      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/kegiatan">
            <Button variant="outline" className="mb-8 bg-transparent">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Kembali ke Kegiatan
            </Button>
          </Link>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-64 md:h-96">
              <Image src={activity.image || "/placeholder.svg"} alt={activity.title} fill className="object-cover" />
              <div className="absolute top-4 left-4">
                <Badge
                  className={activity.status === "upcoming" ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-700"}
                >
                  {activity.status === "upcoming" ? "Akan Datang" : "Selesai"}
                </Badge>
              </div>
            </div>

            <div className="p-8">
              <h1 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6">{activity.title}</h1>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center text-gray-600">
                  <Calendar className="w-5 h-5 mr-3 text-emerald-600" />
                  <span className="font-body text-lg">{activity.date}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="w-5 h-5 mr-3 text-blue-600" />
                  <span className="font-body text-lg">{activity.time}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-5 h-5 mr-3 text-purple-600" />
                  <span className="font-body text-lg">{activity.location}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Users className="w-5 h-5 mr-3 text-orange-600" />
                  <span className="font-body text-lg">{activity.participants}</span>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="font-heading text-2xl font-bold text-gray-900 mb-4">Deskripsi Kegiatan</h2>
                <p className="font-body text-gray-700 text-lg leading-relaxed">{activity.description}</p>
              </div>

              <div className="mb-8">
                <h2 className="font-heading text-2xl font-bold text-gray-900 mb-4">Agenda Kegiatan</h2>
                <ul className="space-y-2">
                  {activity.agenda.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="bg-emerald-100 text-emerald-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium mr-3 mt-0.5">
                        {index + 1}
                      </span>
                      <span className="font-body text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t pt-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <p className="font-body text-gray-600">
                      Penyelenggara: <span className="font-semibold">{activity.organizer}</span>
                    </p>
                    <p className="font-body text-gray-600">
                      Kontak: <span className="font-semibold">{activity.contact}</span>
                    </p>
                  </div>
                  {activity.status === "upcoming" && (
                    <Button className="bg-emerald-600 hover:bg-emerald-700">Daftar Kegiatan</Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
