import { Card, CardContent } from "@/components/ui/card"
import { Crown, FileText, Wallet, Users, Phone, Mail } from "lucide-react"
import Image from "next/image"

export function ManagementSection() {
  const management = [
    {
      position: "Ketua RT",
      name: "Bapak RT lansung",
      phone: "0812-3456-7890",
      email: "ketua@rtblokherba.id",
      icon: Crown,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
    },
    {
      position: "Sekretaris",
      name: "Bapak Eka",
      phone: "0813-4567-8901",
      email: "sekretaris@rtblokherba.id",
      icon: FileText,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      position: "Bendahara",
      name: "Ibu Sinta",
      phone: "0814-5678-9012",
      email: "bendahara@rtblokherba.id",
      icon: Wallet,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
    },
    {
      position: "Koordinator Perlengkapan",
      name: "Bapak Andes",
      phone: "0815-6789-0123",
      email: "keamanan@rtblokherba.id",
      icon: Users,
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pengurus RT Blok Herba</h2>
          <p className="font-body text-lg text-gray-600 max-w-2xl mx-auto">
            Tim pengurus yang siap melayani dan memajukan RT Blok Herba
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {management.map((person, index) => (
            <Card
              key={index}
              className="border-0 shadow-[0_0_20px_rgba(0,0,0,0.15)] hover:shadow-[0_0_30px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6 text-center">
                {/* Profile Image Placeholder */}
                <div className="relative mb-4">
                  <Image
                    src="/professional-indonesian-portrait.png"
                    alt={person.name}
                    width={120}
                    height={120}
                    className="rounded-full mx-auto shadow-lg"
                  />
                  <div className={`absolute -bottom-2 -right-2 p-2 rounded-full ${person.bgColor}`}>
                    <person.icon className={`w-5 h-5 ${person.color}`} />
                  </div>
                </div>

                {/* Position */}
                <div
                  className={`inline-flex px-3 py-1 rounded-full text-sm font-medium mb-3 ${person.bgColor} ${person.color}`}
                >
                  {person.position}
                </div>

                {/* Name */}
                <h3 className="font-heading text-xl font-bold text-gray-900 mb-4">{person.name}</h3>

                {/* Contact Info */}
                <div className="space-y-2">
                  <div className="flex items-center justify-center text-gray-600">
                    <Phone className="w-4 h-4 mr-2" />
                    <span className="font-body text-sm">{person.phone}</span>
                  </div>
                  <div className="hidden sm:flex items-center justify-center text-gray-600">
                    <Mail className="w-4 h-4 mr-2" />
                    <span className="font-body text-sm">{person.email}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <Card className="border-0 shadow-lg bg-gradient-to-r from-emerald-50 to-blue-50">
            <CardContent className="p-8">
              <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4">Hubungi Pengurus RT</h3>
              <p className="font-body text-gray-600 mb-6 max-w-2xl mx-auto">
                Jangan ragu untuk menghubungi pengurus RT jika ada pertanyaan, saran, atau hal-hal yang perlu
                disampaikan untuk kemajuan RT Blok Herba.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="flex items-center justify-center text-gray-700">
                  <Phone className="w-5 h-5 mr-2 text-emerald-600" />
                  <span className="font-body">Jam Kerja: Senin-Jumat 08:00-17:00</span>
                </div>
                <div className="flex items-center justify-center text-gray-700">
                  <Mail className="w-5 h-5 mr-2 text-emerald-600" />
                  <span className="font-body">Email: info@rtblokherba.id</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
