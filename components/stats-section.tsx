import { Card, CardContent } from "@/components/ui/card"
import { Home, Users, UserCheck, Wallet } from "lucide-react"

export function StatsSection() {
  const stats = [
    {
      icon: Home,
      title: "Total Rumah",
      value: "120",
      subtitle: "Terisi: 115 | Kosong: 5",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: Users,
      title: "Total Warga",
      value: "450",
      subtitle: "Dewasa: 280 | Anak: 170",
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
    },
    {
      icon: UserCheck,
      title: "Total KK",
      value: "115",
      subtitle: "Kepala Keluarga Aktif",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: Wallet,
      title: "Kas RT",
      value: "Rp 25.5M",
      subtitle: "Per Desember 2024",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">Data RT Blok Herba</h2>
          <p className="font-body text-lg text-gray-600 max-w-2xl mx-auto">
            Transparansi data untuk kemajuan bersama komunitas RT Blok Herba
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className={`border-0 shadow-lg hover:shadow-xl ${stat.bgColor} transition-shadow duration-300`}>
              <CardContent className="px-2 lg:p-6">
                <div className={`inline-flex p-2 rounded-lg mb-2 lg:mb-4`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <h3 className="font-heading lg:text-lg font-semibold text-gray-900 mb-2">{stat.title}</h3>
                <div className="font-heading text-2xl lg:text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <p className="font-body text-sm text-gray-600">{stat.subtitle}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
