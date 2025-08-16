"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { AuthGuard } from "@/components/auth-guard"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Calendar, Plus, Search, Users, MapPin, Clock, Edit, Trash2 } from "lucide-react"
import Image from "next/image"

export default function ActivitiesPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const activities = [
    {
      id: 1,
      title: "Kerja Bakti Mingguan",
      date: "2025-01-25",
      time: "07:00 - 10:00",
      location: "Area Taman RT",
      participants: 25,
      maxParticipants: 30,
      status: "upcoming",
      description: "Pembersihan area taman dan jalan lingkungan RT",
      organizer: "Ketua RT",
      image: "/images/pasang-tenda.jpg", // Added image
    },
    {
      id: 2,
      title: "Rapat Koordinasi Bulanan",
      date: "2025-01-30",
      time: "19:00 - 21:00",
      location: "Balai RT",
      participants: 15,
      maxParticipants: 20,
      status: "upcoming",
      description: "Evaluasi kegiatan bulan ini dan perencanaan bulan depan",
      organizer: "Sekretaris RT",
      image: "/images/rapat-rt.jpg", // Added image
    },
    {
      id: 3,
      title: "Gotong Royong Pemasangan Tenda",
      date: "2025-01-08",
      time: "08:00 - 12:00",
      location: "Lapangan RT",
      participants: 18,
      maxParticipants: 20,
      status: "completed",
      description: "Pemasangan tenda untuk acara 17 Agustus",
      organizer: "Bendahara RT",
      image: "/images/rapat-pembentukan-panitia.jpg", // Added image
    },
    {
      id: 4,
      title: "Senam Sehat Bersama",
      date: "2025-02-02",
      time: "06:00 - 07:30",
      location: "Lapangan RT",
      participants: 12,
      maxParticipants: 25,
      status: "upcoming",
      description: "Senam sehat rutin untuk warga RT",
      organizer: "Koordinator Kesehatan",
      image: "/images/pertemuan.jpg", // Added image
    },
  ]

  const filteredActivities = activities.filter(
    (activity) =>
      activity.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      activity.location.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "upcoming":
        return <Badge className="bg-blue-100 text-blue-800">Akan Datang</Badge>
      case "ongoing":
        return <Badge className="bg-green-100 text-green-800">Berlangsung</Badge>
      case "completed":
        return <Badge className="bg-gray-100 text-gray-800">Selesai</Badge>
      case "cancelled":
        return <Badge className="bg-red-100 text-red-800">Dibatalkan</Badge>
      default:
        return <Badge>{status}</Badge>
    }
  }

  return (
    <AuthGuard>
      <DashboardLayout>
        <div className="space-y-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="font-heading text-2xl md:text-3xl font-bold text-gray-900">Kegiatan</h1>
              <p className="font-body text-gray-600 mt-1">Kelola dan pantau kegiatan RT Blok Herba</p>
            </div>
            <Button className="bg-emerald-600 hover:bg-emerald-700 w-full sm:w-auto">
              <Plus className="w-4 h-4 mr-2" />
              Tambah Kegiatan
            </Button>
          </div>

          {/* Stats Cards - Made responsive for mobile */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            <Card>
              <CardContent className="p-3 md:p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-body text-xs md:text-sm text-gray-600">Total Kegiatan</p>
                    <p className="font-heading text-lg md:text-2xl font-bold text-gray-900">24</p>
                  </div>
                  <Calendar className="w-6 md:w-8 h-6 md:h-8 text-emerald-600" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-3 md:p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-body text-xs md:text-sm text-gray-600">Akan Datang</p>
                    <p className="font-heading text-lg md:text-2xl font-bold text-blue-600">3</p>
                  </div>
                  <Clock className="w-6 md:w-8 h-6 md:h-8 text-blue-600" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-3 md:p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-body text-xs md:text-sm text-gray-600">Selesai</p>
                    <p className="font-heading text-lg md:text-2xl font-bold text-green-600">20</p>
                  </div>
                  <Users className="w-6 md:w-8 h-6 md:h-8 text-green-600" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-3 md:p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-body text-xs md:text-sm text-gray-600">Partisipasi</p>
                    <p className="font-heading text-lg md:text-2xl font-bold text-emerald-600">85%</p>
                  </div>
                  <Calendar className="w-6 md:w-8 h-6 md:h-8 text-emerald-600" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Search and Filter */}
          <Card>
            <CardContent className="p-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Cari kegiatan..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    Semua Status
                  </Button>
                  <Button variant="outline" size="sm">
                    Filter Tanggal
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Activities List */}
          <div className="grid gap-4">
            {filteredActivities.map((activity) => (
              <Card key={activity.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="lg:w-48 flex-shrink-0">
                      <Image
                        src={activity.image || "/placeholder.svg"}
                        alt={activity.title}
                        width={200}
                        height={120}
                        className="w-full h-32 lg:h-28 object-cover rounded-lg"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                        <h3 className="font-heading text-lg font-semibold text-gray-900">{activity.title}</h3>
                        {getStatusBadge(activity.status)}
                      </div>
                      <p className="font-body text-gray-600 mb-3">{activity.description}</p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-sm mb-3">
                        <div className="flex items-center text-gray-600">
                          <Calendar className="w-4 h-4 mr-2" />
                          {new Date(activity.date).toLocaleDateString("id-ID", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })}
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Clock className="w-4 h-4 mr-2" />
                          {activity.time}
                        </div>
                        <div className="flex items-center text-gray-600">
                          <MapPin className="w-4 h-4 mr-2" />
                          {activity.location}
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Users className="w-4 h-4 mr-2" />
                          {activity.participants}/{activity.maxParticipants} peserta
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <span className="font-body text-sm text-gray-500">Penyelenggara: {activity.organizer}</span>

                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" onClick={() => alert(`Edit kegiatan: ${activity.title}`)}>
                            <Edit className="w-4 h-4 mr-1" />
                            Edit
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-red-600 hover:bg-red-50 bg-transparent"
                            onClick={() => alert(`Hapus kegiatan: ${activity.title}`)}
                          >
                            <Trash2 className="w-4 h-4 mr-1" />
                            Hapus
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredActivities.length === 0 && (
            <Card>
              <CardContent className="p-8 text-center">
                <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="font-heading text-lg font-semibold text-gray-900 mb-2">Tidak ada kegiatan ditemukan</h3>
                <p className="font-body text-gray-600">Coba ubah kata kunci pencarian atau tambah kegiatan baru.</p>
              </CardContent>
            </Card>
          )}
        </div>
      </DashboardLayout>
    </AuthGuard>
  )
}
