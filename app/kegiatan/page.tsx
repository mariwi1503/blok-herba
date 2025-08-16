"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Users, ArrowRight } from "lucide-react"
import Image from "next/image"
import type { Metadata } from "next"
import { useState } from "react"

// export const metadata: Metadata = {
//   title: "Kegiatan RT Blok Herba - Agenda & Program | Taman Cipta Asri 2 Batam",
//   description:
//     "Jadwal kegiatan RT 005 Blok Herba: rapat koordinasi, gotong royong, perayaan HUT RI, bakti sosial. Program komunitas Taman Cipta Asri 2, Kelurahan Tembesi, Batam.",
//   keywords: [
//     "kegiatan RT Blok Herba",
//     "agenda RT",
//     "gotong royong",
//     "rapat RT",
//     "program komunitas",
//     "kegiatan warga Batam",
//     "Taman Cipta Asri",
//   ],
//   openGraph: {
//     title: "Kegiatan RT Blok Herba - Agenda & Program",
//     description: "Jadwal kegiatan RT 005 Blok Herba: rapat koordinasi, gotong royong, perayaan HUT RI, bakti sosial.",
//     url: "https://blokherba.vercel.app/kegiatan",
//   },
// }

export default function KegiatanPage() {
  const upcomingEvents = [
    {
      title: "Rapat Koordinasi RT",
      description: "Pembahasan program kerja bulan Januari 2025 dan evaluasi kegiatan tahun 2024",
      date: "28 Desember 2024",
      time: "19:00 - 21:00",
      location: "Balai RT Blok Herba",
      participants: "Pengurus RT",
      status: "upcoming",
      image: "/indonesian-neighborhood-meeting.png",
    },
    {
      title: "Gotong Royong Bulanan",
      description: "Pembersihan area umum, taman, dan fasilitas bersama RT",
      date: "30 Desember 2024",
      time: "07:00 - 10:00",
      location: "Area Umum RT",
      participants: "Seluruh Warga",
      status: "upcoming",
      image: "/indonesian-community-cleanup.png",
    },
    {
      title: "Pembayaran Iuran RT",
      description: "Pengumpulan iuran bulanan RT dan iuran keamanan",
      date: "1 Januari 2025",
      time: "08:00 - 17:00",
      location: "Rumah Ketua RT",
      participants: "Seluruh Warga",
      status: "upcoming",
      image: "/payment-collection.png",
    },
  ]

  const pastEvents = Array.from({ length: 20 }).map((_, i) => ({
    title: `Kegiatan ${i + 1}`,
    description: "Deskripsi kegiatan sebelumnya",
    date: `2024-0${(i % 12) + 1}-10`,
    participants: `${(i + 1) * 5} warga`,
    image: "/indonesian-independence-day.png",
  }))

  // Pagination
  const pageSize = 9
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(pastEvents.length / pageSize)
  const paginatedEvents = pastEvents.slice((currentPage - 1) * pageSize, currentPage * pageSize)

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navbar />
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Kegiatan RT Blok Herba
            </h1>
            <p className="font-body text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Berbagai kegiatan dan program yang diselenggarakan untuk mempererat hubungan antar warga
              dan meningkatkan kualitas hidup bersama.
            </p>
          </div>
          <div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {paginatedEvents.map((event, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-[0_0_15px_rgba(0,0,0,0.15)] hover:shadow-[0_0_25px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative">
                    <Image
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover rounded-t-lg px-1 md:px-3"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-blue-100 text-blue-700">Selesai</Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-heading text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                    <p className="font-body text-gray-600 mb-4 leading-relaxed">{event.description}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{event.date}</span>
                      <span>{event.participants}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center items-center gap-2 mt-10">
              <Button
                variant="outline"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((prev) => prev - 1)}
              >
                Prev
              </Button>
              <span className="font-body text-gray-600">
                Halaman {currentPage} dari {totalPages}
              </span>
              <Button
                variant="outline"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((prev) => prev + 1)}
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
