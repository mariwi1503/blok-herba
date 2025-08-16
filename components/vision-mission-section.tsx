import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Heart } from "lucide-react"

export function VisionMissionSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">Visi & Misi RT Blok Herba</h2>
          <p className="font-body text-lg text-gray-600 max-w-2xl mx-auto">
            Komitmen kami untuk membangun komunitas yang harmonis dan sejahtera
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 lg:gap-8">
          {/* Visi */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-green-50">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="inline-flex p-3 rounded-lg mr-4">
                  <Eye className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-gray-900">Visi</h3>
              </div>
              <p className="font-body text-lg text-gray-700 leading-relaxed">
                Menjadikan RT Blok Herba sebagai lingkungan perumahan yang aman, nyaman, bersih, dan harmonis dengan
                mengedepankan nilai-nilai gotong royong, transparansi, dan kebersamaan dalam kehidupan bermasyarakat.
              </p>
            </CardContent>
          </Card>

          {/* Misi */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-blue-50">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="inline-flex p-3 rounded-lg mr-4">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-gray-900">Misi</h3>
              </div>
              <ul className="font-body text-gray-700 space-y-3">
                <li className="flex items-start">
                  <Heart className="w-5 h-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                  Membangun komunikasi yang baik antar warga RT
                </li>
                <li className="flex items-start">
                  <Heart className="w-5 h-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                  Mengelola keuangan RT secara transparan dan akuntabel
                </li>
                <li className="flex items-start">
                  <Heart className="w-5 h-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                  Mengadakan kegiatan yang mempererat tali silaturahmi
                </li>
                <li className="flex items-start">
                  <Heart className="w-5 h-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                  Menjaga kebersihan dan keamanan lingkungan bersama
                </li>
                <li className="flex items-start">
                  <Heart className="w-5 h-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                  Memberikan pelayanan terbaik kepada seluruh warga
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
