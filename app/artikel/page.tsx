import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArticlesSection } from "@/components/articles-section"
import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Calendar, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Artikel RT Blok Herba - Berita & Pengumuman | Taman Cipta Asri 2 Batam",
  description:
    "Baca artikel terbaru RT 005 Blok Herba: pengumuman, berita kegiatan, informasi penting warga Taman Cipta Asri 2, Kelurahan Tembesi, Batam.",
  keywords: [
    "artikel RT Blok Herba",
    "berita RT",
    "pengumuman RT",
    "informasi warga",
    "berita Taman Cipta Asri",
    "RT 005 Batam",
  ],
  openGraph: {
    title: "Artikel RT Blok Herba - Berita & Pengumuman",
    description: "Baca artikel terbaru RT 005 Blok Herba: pengumuman, berita kegiatan, informasi penting warga.",
    url: "https://blokherba.vercel.app/artikel",
  },
}

export default function ArtikelPage() {
  const articles = [
    {
      id: 1,
      title: "Cara Mendidik Anak Menurut Islam",
      excerpt:
        "Cara Mendidik Anak Menurut Islam: Membentuk Generasi Saleh dan Berakhlak Mulia. Anak adalah amanah terindah dari Allah SWT sekaligus investasi dunia dan akhirat bagi orang tua.",
      date: "22 Desember 2024",
      readTime: "5 menit",
      category: "Agama",
      author: "Ketua RT",
    },
    {
      id: 2,
      title: "Cara Mendidik Anak Menurut Islam",
      excerpt:
        "Cara Mendidik Anak Menurut Islam: Membentuk Generasi Saleh dan Berakhlak . Anak adalah amanah terindah dari Allah SWT sekaligus investasi dunia dan akhirat bagi orang tua.",
      date: "18 Desember 2024",
      readTime: "3 menit",
      category: "Agama",
      author: "Sekretaris RT",
    },
    {
      id: 3,
      title: "Cara Mendidik Anak Menurut Islam",
      excerpt:
        "Cara Mendidik Anak Menurut Islam: Membentuk Generasi Saleh dan Berakhlak . Anak adalah amanah terindah dari Allah SWT sekaligus investasi dunia dan akhirat bagi orang tua.",
      date: "15 Desember 2024",
      readTime: "2 menit",
      category: "Agama",
      author: "Bendahara RT",
    },
    {
      id: 4,
      title: "Cara Mendidik Anak Menurut Islam",
      excerpt:
        "Cara Mendidik Anak Menurut Islam: Membentuk Generasi Saleh dan Berakhlak . Anak adalah amanah terindah dari Allah SWT sekaligus investasi dunia dan akhirat bagi orang tua.",
      date: "31 Desember 2024",
      readTime: "4 menit",
      category: "Agama",
      author: "Bendahara RT",
    },
  ]

  const displayedArticles = articles.slice(0, 4)
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="font-heading text-4xl font-bold text-gray-900 mb-4">Artikel RT Blok Herba</h1>
            <p className="font-body text-lg text-gray-600 max-w-2xl mx-auto">
              Baca artikel terbaru yang bisa bermanfaat dalam kehidupan sehari hari
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {displayedArticles.map((article, index) => (
              <Link key={index} href={`/artikel/${article.id}`} className="block h-full">
              <Card
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group h-full bg-yellow-50/20"
              >
                <CardContent className="p-4 md:p-6 h-full flex flex-col">
                  <div className="flex items-center mb-3">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                      {article.category}
                    </span>
                  </div>
                  <h4 className="font-heading text-lg md:text-xl font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h4>
                  <p className="font-body text-gray-600 mb-4 leading-relaxed line-clamp-3 flex-grow">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {article.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {article.readTime}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="font-body text-sm text-gray-500">oleh {article.author}</span>
                    <Button variant="ghost" size="sm" className="text-blue-600 hover:bg-blue-50 p-0">
                      Baca Selengkapnya
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
