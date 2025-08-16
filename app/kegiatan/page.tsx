"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Users, ArrowRight } from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";
import { useState } from "react";
import { DialogContent, DialogHeader } from "@/components/ui/dialog";
import { Dialog, DialogTitle } from "@radix-ui/react-dialog";

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
  const activities = [
    {
      id: 1,
      title: "Rapat Koordinasi RT",
      description:
        "Pembahasan program kerja bulan Januari 2025 dan evaluasi kegiatan tahun 2024",
      date: "28/12/24",
      time: "19:00 - 21:00",
      location: "Balai RT Blok Herba",
      participants: "Pengurus RT",
      status: "upcoming",
      image: "/images/activities/rapat-rt.jpg",
      fullDescription:
        "Rapat koordinasi rutin untuk membahas program kerja bulan Januari 2025 dan melakukan evaluasi menyeluruh terhadap kegiatan yang telah dilaksanakan sepanjang tahun 2024. Agenda meliputi perencanaan kegiatan, alokasi anggaran, dan pembagian tugas pengurus.",
    },
    {
      id: 2,
      title: "Gotong Royong Bulanan",
      description: "Pembersihan area umum, taman, dan fasilitas bersama RT",
      date: "30/12/24",
      time: "07:00 - 10:00",
      location: "Area Umum RT",
      participants: "Seluruh Warga",
      status: "upcoming",
      image: "/images/activities/pasang-tenda.jpg",
      fullDescription:
        "Kegiatan gotong royong rutin bulanan untuk membersihkan area umum, merawat taman, dan memelihara fasilitas bersama RT. Kegiatan ini melibatkan seluruh warga untuk menjaga kebersihan dan keindahan lingkungan.",
    },
    {
      id: 3,
      title: "Rapat Pembentukan Panitia",
      description: "Pembentukan panitia untuk kegiatan perayaan tahun baru",
      date: "15/12/24",
      time: "19:30 - 21:30",
      location: "Lapangan RT",
      participants: "20 warga",
      status: "completed",
      image: "/images/activities/rapat-pembentukan-panitia.jpg",
      fullDescription:
        "Rapat pembentukan panitia untuk mempersiapkan kegiatan perayaan tahun baru 2025. Dalam rapat ini dibentuk struktur panitia, pembagian tugas, dan perencanaan acara yang akan dilaksanakan.",
    },
    {
      id: 4,
      title: "Pertemuan Warga",
      description: "Diskusi mengenai program pembangunan fasilitas umum RT",
      date: "10/12/24",
      time: "20:00 - 22:00",
      location: "Rumah Ketua RT",
      participants: "15 warga",
      status: "completed",
      image: "/images/activities/pertemuan.jpg",
      fullDescription:
        "Pertemuan warga untuk mendiskusikan rencana pembangunan fasilitas umum RT seperti perbaikan jalan, penambahan lampu penerangan, dan pembangunan pos keamanan.",
    },
    {
      id: 5,
      title: "Perlombaan Bulu Tangkis",
      description: "Pembentukan panitia untuk kegiatan perayaan tahun baru",
      date: "15/12/24",
      time: "19:30 - 21:30",
      location: "Lapangan RT",
      participants: "20 warga",
      status: "completed",
      image: "/images/activities/bulu.jpg",
      fullDescription:
        "Rapat pembentukan panitia untuk mempersiapkan kegiatan perayaan tahun baru 2025. Dalam rapat ini dibentuk struktur panitia, pembagian tugas, dan perencanaan acara yang akan dilaksanakan.",
    },
    {
      id: 6,
      title: "Acara Kondangan",
      description: "Diskusi mengenai program pembangunan fasilitas umum RT",
      date: "10/12/24",
      time: "20:00 - 22:00",
      location: "Rumah Ketua RT",
      participants: "15 warga",
      status: "completed",
      image: "/images/activities/kawinan.jpg",
      fullDescription:
        "Pertemuan warga untuk mendiskusikan rencana pembangunan fasilitas umum RT seperti perbaikan jalan, penambahan lampu penerangan, dan pembangunan pos keamanan.",
    },
  ];

  const pastEvents = [
    {
      title: `Rapat Koordinasi RT`,
      description:
        "Pembahasan program kerja bulan Januari 2025 dan evaluasi kegiatan tahun 2024",
      date: `28/12/24`,
      participants: `Warga`,
      image: "/images/activities/rapat-rt.jpg",
    },
  ];

  // Pagination
  const pageSize = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedActivity, setSelectedActivity] = useState<any>(null);

  const totalPages = Math.ceil(pastEvents.length / pageSize);
  const paginatedEvents = pastEvents.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handleActivityClick = (activity: any) => {
    setSelectedActivity(activity);
  };

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
              Berbagai kegiatan dan program yang diselenggarakan untuk
              mempererat hubungan antar warga dan meningkatkan kualitas hidup
              bersama.
            </p>
          </div>
          <div>
            {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
             
            </div> */}

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {activities.map((activity) => (
                <Card
                  key={activity.id}
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                  onClick={() => handleActivityClick(activity)}
                >
                  <div className="relative">
                    <Image
                      src={activity.image || "/placeholder.svg"}
                      alt={activity.title}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    {/* <div className="absolute top-4 left-4">
                      <Badge
                        className={
                          activity.status === "upcoming"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-gray-100 text-gray-700"
                        }
                      >
                        {activity.status === "upcoming"
                          ? "Akan Datang"
                          : "Selesai"}
                      </Badge>
                    </div> */}
                  </div>
                  <CardContent className="px-4 md:p-6">
                    <h3 className="font-heading text-xl font-bold text-gray-900 mb-3">
                      {activity.title}
                    </h3>
                    <p className="hidden md:blockfont-body text-gray-600 mb-4 line-clamp-2">
                      {activity.description}
                    </p>

                    <div className="grid grid-cols-2 gap-3 text-sm mb-4">
                      <div className="flex items-center text-gray-600">
                        <Calendar className="w-4 h-4 mr-2 text-emerald-600" />
                        <span className="font-body">{activity.date}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock className="w-4 h-4 mr-2 text-blue-600" />
                        <span className="font-body">{activity.time}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="w-4 h-4 mr-2 text-purple-600" />
                        <span className="font-body">{activity.location}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Users className="w-4 h-4 mr-2 text-orange-600" />
                        <span className="font-body">
                          {activity.participants}
                        </span>
                      </div>
                    </div>

                    {/* <Button variant="outline" className="w-full bg-transparent">
                      Lihat Detail
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button> */}
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

              <Dialog
                open={!!selectedActivity}
                onOpenChange={() => setSelectedActivity(null)}
              >
                <DialogContent className="md:max-w-[50vw] w-full md:w-[80vw] max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-gray-900">
                      {selectedActivity?.title}
                    </DialogTitle>
                  </DialogHeader>

                  {selectedActivity && (
                    <div className="space-y-6">
                      <div className="relative">
                        <Image
                          src={selectedActivity.image || "/placeholder.svg"}
                          alt={selectedActivity.title}
                          width={800}
                          height={400}
                          className="w-full h-auto md:max-h-[50vh] object-contain rounded-lg"
                        />
                        {/* <Badge
                          className={`absolute top-4 left-4 ${
                            selectedActivity.status === "upcoming"
                              ? "bg-blue-100 text-blue-700"
                              : "bg-gray-100 text-gray-700"
                          }`}
                        >
                          {selectedActivity.status === "upcoming"
                            ? "Akan Datang"
                            : "Selesai"}
                        </Badge> */}
                      </div>

                      <div className="grid grid-cols-2 gap-6 text-base">
                        <div className="flex items-center text-gray-600">
                          <Calendar className="w-5 h-5 mr-3 text-emerald-600" />
                          <span className="font-body">
                            {selectedActivity.date}
                          </span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Clock className="w-5 h-5 mr-3 text-blue-600" />
                          <span className="font-body">
                            {selectedActivity.time}
                          </span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <MapPin className="w-5 h-5 mr-3 text-purple-600" />
                          <span className="font-body">
                            {selectedActivity.location}
                          </span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Users className="w-5 h-5 mr-3 text-orange-600" />
                          <span className="font-body">
                            {selectedActivity.participants}
                          </span>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-heading font-semibold text-lg text-gray-900 mb-3">
                          Deskripsi Kegiatan
                        </h4>
                        <p className="font-body text-gray-600 leading-relaxed text-base">
                          {selectedActivity.fullDescription}
                        </p>
                      </div>
                    </div>
                  )}
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
