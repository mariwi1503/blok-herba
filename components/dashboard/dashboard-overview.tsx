"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Home,
  Users,
  UserCheck,
  Wallet,
  TrendingUp,
  TrendingDown,
  Calendar,
  AlertCircle,
  CheckCircle,
  Plus,
  Edit,
  Trash2,
  UserPlus,
  Settings,
  ArrowUpRight,
  ArrowDownLeft,
} from "lucide-react"
import { useAuth } from "@/contexts/auth-context"

export function DashboardOverview() {
  const { user } = useAuth()

  const stats = [
    {
      title: "Total Rumah",
      value: "120",
      change: "+2",
      changeType: "increase",
      icon: Home,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "Total Warga",
      value: "450",
      change: "+8",
      changeType: "increase",
      icon: Users,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
    },
    {
      title: "Total KK",
      value: "115",
      change: "+1",
      changeType: "increase",
      icon: UserCheck,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      title: "Kas RT",
      value: "Rp 25.5M",
      change: "+8%",
      changeType: "increase",
      icon: Wallet,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
  ]

  const adminActivities = [
    {
      action: "Menambahkan rumah baru",
      description: "Blok C No. 25 - Keluarga Budi Santoso",
      admin: "Admin RT",
      time: "30 menit yang lalu",
      icon: Plus,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
    },
    {
      action: "Memperbarui pengumuman",
      description: "Jadwal gotong royong bulan Januari 2025",
      admin: "Ketua RT",
      time: "2 jam yang lalu",
      icon: Edit,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      action: "Menambahkan warga baru",
      description: "Siti Rahayu - Blok A No. 12",
      admin: "Sekretaris RT",
      time: "4 jam yang lalu",
      icon: UserPlus,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      action: "Mengupdate data keuangan",
      description: "Laporan kas bulan Desember 2024",
      admin: "Bendahara RT",
      time: "6 jam yang lalu",
      icon: Wallet,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      action: "Menghapus artikel lama",
      description: "Artikel kegiatan bulan Oktober 2024",
      admin: "Admin RT",
      time: "1 hari yang lalu",
      icon: Trash2,
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
  ]

  const recentTransactions = [
    {
      type: "income",
      title: "Iuran Bulanan",
      description: "Bapak Ahmad - Blok A No. 15",
      amount: "Rp 50.000",
      time: "1 jam yang lalu",
      status: "completed",
    },
    {
      type: "expense",
      title: "Pembelian Alat Kebersihan",
      description: "Sapu, pel, dan deterjen",
      amount: "Rp 275.000",
      time: "3 jam yang lalu",
      status: "completed",
    },
    {
      type: "income",
      title: "Iuran Keamanan",
      description: "Ibu Sari - Blok B No. 8",
      amount: "Rp 25.000",
      time: "5 jam yang lalu",
      status: "completed",
    },
    {
      type: "expense",
      title: "Bayar Listrik Pos Ronda",
      description: "PLN bulan Desember 2024",
      amount: "Rp 150.000",
      time: "1 hari yang lalu",
      status: "completed",
    },
    {
      type: "income",
      title: "Iuran Bulanan",
      description: "Bapak Joko - Blok C No. 20",
      amount: "Rp 50.000",
      time: "1 hari yang lalu",
      status: "completed",
    },
  ]

  const recentActivities = [
    {
      title: "Gotong Royong Mingguan",
      description: "Pembersihan area umum dan taman",
      time: "Kemarin, 07:00",
      status: "completed",
      participants: "25 warga",
    },
    {
      title: "Rapat Koordinasi RT",
      description: "Pembahasan program kerja 2025",
      time: "3 hari yang lalu",
      status: "completed",
      participants: "15 pengurus",
    },
    {
      title: "Pelatihan Keamanan",
      description: "Sosialisasi sistem keamanan lingkungan",
      time: "1 minggu yang lalu",
      status: "completed",
      participants: "30 warga",
    },
    {
      title: "Bakti Sosial",
      description: "Pembagian sembako untuk warga kurang mampu",
      time: "2 minggu yang lalu",
      status: "completed",
      participants: "20 warga",
    },
    {
      title: "Perayaan HUT RI",
      description: "Lomba 17 Agustus dan makan bersama",
      time: "4 bulan yang lalu",
      status: "completed",
      participants: "150 warga",
    },
  ]

  const upcomingEvents = [
    {
      title: "Rapat Koordinasi RT",
      date: "28 Des 2024",
      time: "19:00",
      location: "Balai RT",
    },
    {
      title: "Gotong Royong Bulanan",
      date: "30 Des 2024",
      time: "07:00",
      location: "Area Umum",
    },
    {
      title: "Pembayaran Iuran",
      date: "1 Jan 2025",
      time: "08:00-17:00",
      location: "Rumah Ketua RT",
    },
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="font-heading text-3xl font-bold text-gray-900">Dashboard RT Blok Herba</h1>
        <p className="font-body text-gray-600 mt-2">
          Selamat datang kembali, {user?.name}! Berikut ringkasan aktivitas RT hari ini.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-body text-sm text-gray-600 mb-1">{stat.title}</p>
                  <p className="font-heading text-2xl font-bold text-gray-900">{stat.value}</p>
                  <div className="flex items-center mt-2">
                    {stat.changeType === "increase" ? (
                      <TrendingUp className="w-4 h-4 text-emerald-600 mr-1" />
                    ) : (
                      <TrendingDown className="w-4 h-4 text-red-600 mr-1" />
                    )}
                    <span
                      className={`font-body text-sm ${
                        stat.changeType === "increase" ? "text-emerald-600" : "text-red-600"
                      }`}
                    >
                      {stat.change}
                    </span>
                    <span className="font-body text-sm text-gray-500 ml-1">bulan ini</span>
                  </div>
                </div>
                <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="font-heading text-xl flex items-center">
              <Settings className="w-5 h-5 mr-2 text-emerald-600" />
              Aktivitas Admin
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {adminActivities.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className={`p-2 rounded-full ${activity.bgColor}`}>
                    <activity.icon className={`w-4 h-4 ${activity.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-body font-medium text-gray-900">{activity.action}</p>
                    <p className="font-body text-sm text-gray-600">{activity.description}</p>
                    <div className="flex items-center justify-between mt-1">
                      <p className="font-body text-xs text-gray-500">oleh {activity.admin}</p>
                      <p className="font-body text-xs text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <Button variant="outline" className="w-full bg-transparent">
                Lihat Semua Aktivitas Admin
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="font-heading text-xl flex items-center">
              <Wallet className="w-5 h-5 mr-2 text-orange-600" />5 Transaksi Terakhir
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentTransactions.map((transaction, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className={`p-2 rounded-full ${transaction.type === "income" ? "bg-emerald-50" : "bg-red-50"}`}
                    >
                      {transaction.type === "income" ? (
                        <ArrowDownLeft className="w-4 h-4 text-emerald-600" />
                      ) : (
                        <ArrowUpRight className="w-4 h-4 text-red-600" />
                      )}
                    </div>
                    <div>
                      <p className="font-body font-medium text-gray-900">{transaction.title}</p>
                      <p className="font-body text-sm text-gray-600">{transaction.description}</p>
                      <p className="font-body text-xs text-gray-500">{transaction.time}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p
                      className={`font-body font-semibold ${
                        transaction.type === "income" ? "text-emerald-600" : "text-red-600"
                      }`}
                    >
                      {transaction.type === "income" ? "+" : "-"}
                      {transaction.amount}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <Button variant="outline" className="w-full bg-transparent">
                Lihat Semua Transaksi
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="font-heading text-xl flex items-center">
              <Calendar className="w-5 h-5 mr-2 text-blue-600" />5 Kegiatan Terakhir
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="p-2 rounded-full bg-blue-50">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-body font-medium text-gray-900">{activity.title}</p>
                    <p className="font-body text-sm text-gray-600">{activity.description}</p>
                    <div className="flex items-center justify-between mt-1">
                      <p className="font-body text-xs text-gray-500">{activity.participants}</p>
                      <p className="font-body text-xs text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <Button variant="outline" className="w-full bg-transparent">
                Lihat Semua Kegiatan
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Events */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="font-heading text-xl flex items-center">
              <Calendar className="w-5 h-5 mr-2 text-emerald-600" />
              Agenda Mendatang
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="p-3 border border-gray-200 rounded-lg">
                  <h4 className="font-body font-medium text-gray-900 mb-2">{event.title}</h4>
                  <div className="space-y-1">
                    <p className="font-body text-sm text-gray-600">📅 {event.date}</p>
                    <p className="font-body text-sm text-gray-600">🕐 {event.time}</p>
                    <p className="font-body text-sm text-gray-600">📍 {event.location}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <Button variant="outline" className="w-full bg-transparent">
                Lihat Kalender Lengkap
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="font-heading text-xl">Aksi Cepat</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button className="h-20 flex-col bg-emerald-600 hover:bg-emerald-700">
              <Wallet className="w-6 h-6 mb-2" />
              <span className="font-body text-sm">Tambah Transaksi</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col bg-transparent">
              <Users className="w-6 h-6 mb-2" />
              <span className="font-body text-sm">Daftar Warga</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col bg-transparent">
              <Calendar className="w-6 h-6 mb-2" />
              <span className="font-body text-sm">Buat Acara</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col bg-transparent">
              <AlertCircle className="w-6 h-6 mb-2" />
              <span className="font-body text-sm">Laporan Masalah</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
