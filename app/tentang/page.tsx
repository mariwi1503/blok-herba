import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, Eye, Award } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Tentang RT Blok Herba - Sejarah, Visi Misi | Taman Cipta Asri 2 Batam",
  description:
    "Pelajari sejarah, visi misi, dan nilai-nilai RT 005 Blok Herba Taman Cipta Asri 2, Kelurahan Tembesi, Batam. Komunitas harmonis sejak 2019 dengan 115 kepala keluarga.",
  keywords: [
    "sejarah RT Blok Herba",
    "visi misi RT",
    "nilai-nilai RT",
    "komunitas Taman Cipta Asri",
    "RT 005 Batam",
    "Kelurahan Tembesi",
  ],
  openGraph: {
    title: "Tentang RT Blok Herba - Sejarah, Visi Misi",
    description:
      "Pelajari sejarah, visi misi, dan nilai-nilai RT 005 Blok Herba Taman Cipta Asri 2, Kelurahan Tembesi, Batam.",
    url: "https://blokherba.vercel.app/tentang",
  },
}

export default function TentangPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navbar />
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6">Tentang RT Blok Herba</h1>
            <p className="font-body text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              RT Blok Herba adalah komunitas yang berdedikasi untuk menciptakan lingkungan yang aman, nyaman, dan
              harmonis bagi seluruh warga Taman Cipta Asri 2.
            </p>
          </div>

          {/* Sejarah */}
          <div className="mb-16">
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8 md:p-12">
                <h2 className="font-heading text-3xl font-bold text-gray-900 mb-6">Sejarah RT Blok Herba</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="font-body text-gray-700 leading-relaxed mb-4">
                    RT Blok Herba didirikan pada tahun 2019 sebagai bagian dari pengembangan perumahan Taman Cipta Asri
                    2 di Batam. Dengan visi menciptakan lingkungan yang harmonis dan berkelanjutan, RT ini telah menjadi
                    rumah bagi lebih dari 450 warga yang terdiri dari 115 kepala keluarga.
                  </p>
                  <p className="font-body text-gray-700 leading-relaxed mb-4">
                    Sejak awal berdirinya, RT Blok Herba telah berkomitmen untuk menjalankan program-program yang
                    berfokus pada kesejahteraan warga, keamanan lingkungan, dan pembangunan komunitas yang solid.
                    Berbagai kegiatan rutin seperti gotong royong, rapat koordinasi, dan acara sosial telah menjadi
                    tradisi yang memperkuat ikatan antar warga.
                  </p>
                  <p className="font-body text-gray-700 leading-relaxed">
                    Dengan dukungan penuh dari seluruh warga dan pengurus yang berdedikasi, RT Blok Herba terus
                    berkembang menjadi salah satu RT percontohan di wilayah Taman Cipta Asri 2, dengan fokus pada
                    transparansi, partisipasi aktif warga, dan inovasi dalam pelayanan masyarakat.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Visi Misi */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Eye className="w-8 h-8 text-emerald-600 mr-3" />
                  <h3 className="font-heading text-2xl font-bold text-gray-900">Visi</h3>
                </div>
                <p className="font-body text-gray-700 leading-relaxed">
                  Menjadi RT yang mandiri, harmonis, dan berkelanjutan dengan warga yang aktif berpartisipasi dalam
                  pembangunan komunitas yang sejahtera dan berakhlak mulia.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Target className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="font-heading text-2xl font-bold text-gray-900">Misi</h3>
                </div>
                <ul className="font-body text-gray-700 space-y-2">
                  <li>• Meningkatkan kualitas hidup warga melalui program-program pemberdayaan</li>
                  <li>• Menjaga keamanan dan ketertiban lingkungan RT</li>
                  <li>• Membangun komunikasi yang efektif antar warga</li>
                  <li>• Mengelola keuangan RT secara transparan dan akuntabel</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Nilai-nilai */}
          <div className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-gray-900 text-center mb-12">
              Nilai-Nilai RT Blok Herba
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <Users className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                  <h4 className="font-heading text-xl font-semibold text-gray-900 mb-3">Gotong Royong</h4>
                  <p className="font-body text-gray-600">
                    Membangun semangat kebersamaan dan saling membantu dalam setiap kegiatan komunitas.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h4 className="font-heading text-xl font-semibold text-gray-900 mb-3">Transparansi</h4>
                  <p className="font-body text-gray-600">
                    Menjalankan pengelolaan RT dengan keterbukaan informasi dan akuntabilitas yang tinggi.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <Target className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h4 className="font-heading text-xl font-semibold text-gray-900 mb-3">Inovasi</h4>
                  <p className="font-body text-gray-600">
                    Mengembangkan solusi kreatif untuk meningkatkan kualitas pelayanan kepada warga.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
