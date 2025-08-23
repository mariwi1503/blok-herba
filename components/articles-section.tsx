"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, ArrowRight, Clock, Calendar } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export function ArticlesSection() {
  const [selectedArticle, setSelectedArticle] = useState<any>(null)

  useEffect(() => {
    if (selectedArticle) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [selectedArticle])

  const articles = [
    {
      id: 1,
      title: "Cara Mendidik Anak Menurut Islam",
      excerpt:
        "Cara Mendidik Anak Menurut Islam: Membentuk Generasi Saleh dan Berakhlak Mulia",
      date: "22 Desember 2024",
      readTime: "5 menit",
      category: "Agama",
      author: "Ketua RT",
      fullContent:
        `
    <h1>Cara Mendidik Anak Menurut Islam: Membentuk Generasi Saleh dan Berakhlak Mulia</h1>
    <p>Anak adalah amanah terindah dari Allah SWT sekaligus investasi dunia dan akhirat bagi orang tua. Mendidik anak tidak hanya sekadar memenuhi kebutuhan fisik, tetapi juga membangun karakter, moral, dan spiritual yang kokoh. Dalam Islam, pendidikan anak memiliki landasan yang jelas, berpedoman pada Al-Qur'an dan sunnah Nabi Muhammad SAW. Artikel ini akan membahas beberapa prinsip penting dalam mendidik anak menurut ajaran Islam.</p>

    <h2>1. Menjadi Teladan yang Baik</h2>
    <p>Prinsip pertama dan terpenting dalam mendidik anak adalah menjadi teladan. Anak adalah peniru ulung. Mereka lebih banyak belajar dari apa yang mereka lihat daripada apa yang mereka dengar. Seorang ayah atau ibu yang jujur, bertanggung jawab, dan berakhlak mulia akan menanamkan nilai-nilai tersebut secara alami pada anak-anak mereka. Allah berfirman dalam Al-Qur'an, "Sesungguhnya telah ada pada (diri) Rasulullah itu suri teladan yang baik bagimu (yaitu) bagi orang yang mengharap (rahmat) Allah dan (kedatangan) hari kiamat dan dia banyak menyebut Allah." (QS. Al-Ahzab: 21).</p>
    
    <h2>2. Menanamkan Akidah Sejak Dini</h2>
    <p>Pondasi terkuat bagi seorang muslim adalah akidah yang lurus. Tugas orang tua adalah mengenalkan Allah SWT, Rasul-Nya, kitab-kitab-Nya, malaikat, hari kiamat, dan takdir kepada anak-anak sejak usia dini. Ajarkan mereka tentang tauhid, bahwa Allah adalah satu-satunya Tuhan yang berhak disembah. Tanamkan rasa cinta dan takut kepada Allah, sehingga mereka tumbuh dengan kesadaran bahwa hidup ini adalah ibadah.</p>
    
    <h2>3. Mengajarkan Ibadah secara Bertahap</h2>
    <p>Perkenalkan anak pada ibadah seperti salat, puasa, dan membaca Al-Qur'an secara bertahap dan menyenangkan. Jangan memaksa, tetapi ajaklah mereka dengan lembut. Ajak mereka salat berjamaah, biarkan mereka ikut berpuasa meskipun hanya setengah hari, dan bacakan Al-Qur'an sebelum tidur. Jadikan ibadah sebagai rutinitas yang dinanti-nanti, bukan beban. Nabi SAW bersabda, "Perintahkanlah anak-anak kalian untuk salat ketika mereka berusia tujuh tahun..." (HR. Abu Daud).</p>
    
    <h2>4. Memberikan Kasih Sayang dan Perhatian</h2>
    <p>Kasih sayang adalah nutrisi emosional yang sangat dibutuhkan anak. Berikan pelukan, ciuman, dan kata-kata positif yang membangun. Dengarkan cerita mereka, temani saat mereka bermain, dan berikan dukungan saat mereka menghadapi kesulitan. Anak yang merasa dicintai akan tumbuh menjadi pribadi yang lebih percaya diri, stabil, dan mampu menyayangi orang lain. Ingatlah sabda Nabi SAW, "Barang siapa tidak menyayangi, ia tidak akan disayangi." (HR. Bukhari).</p>
    
    <h2>5. Melatih Tanggung Jawab dan Kemandirian</h2>
    <p>Ajarkan anak untuk mandiri sesuai usianya. Berikan tugas-tugas kecil di rumah, seperti merapikan mainan, membereskan tempat tidur, atau membantu menyiapkan makanan. Hal ini melatih mereka untuk bertanggung jawab dan menghargai kerja keras. Tanggung jawab adalah bagian penting dari pembentukan karakter yang kuat.</p>
    
    <h2>6. Menjaga Komunikasi yang Efektif</h2>
    <p>Bangunlah komunikasi dua arah yang terbuka. Jadilah orang tua yang bisa menjadi tempat curhat bagi anak-anak. Saat anak berbuat salah, hadapi dengan tenang. Berikan nasihat dengan lembut, bukan dengan amarah atau kekerasan fisik. Ajarkan mereka konsekuensi dari perbuatan mereka tanpa merendahkan martabat mereka.</p>
    
    <h2>7. Mendoakan Anak</h2>
    <p>Doa adalah senjata terkuat orang tua. Doakan anak-anak agar mereka menjadi anak yang saleh, berilmu, bermanfaat bagi agama dan sesama, serta selalu berada dalam lindungan Allah SWT. Doa orang tua adalah salah satu doa yang mustajab.</p>

    <p>Mendidik anak menurut Islam adalah sebuah perjalanan panjang yang penuh tantangan, namun juga mendatangkan pahala yang tak terhingga. Dengan berpegang teguh pada Al-Qur'an dan sunnah, serta diiringi dengan kesabaran, keikhlasan, dan doa, insyaallah kita dapat melahirkan generasi yang tidak hanya sukses di dunia, tetapi juga bahagia di akhirat.</p>
    `,
    },
    {
      id: 2,
      title: "Program Penghijauan 2025",
      excerpt:
        "Rencana penanaman pohon dan tanaman hias untuk mempercantik lingkungan RT Blok Herba serta meningkatkan kualitas udara di sekitar perumahan.",
      date: "18 Desember 2024",
      readTime: "3 menit",
      category: "Lingkungan",
      author: "Sekretaris RT",
      fullContent:
`
    <h1>Cara Mendidik Anak Menurut Islam: Membentuk Generasi Saleh dan Berakhlak Mulia</h1>
    <p>Anak adalah amanah terindah dari Allah SWT sekaligus investasi dunia dan akhirat bagi orang tua. Mendidik anak tidak hanya sekadar memenuhi kebutuhan fisik, tetapi juga membangun karakter, moral, dan spiritual yang kokoh. Dalam Islam, pendidikan anak memiliki landasan yang jelas, berpedoman pada Al-Qur'an dan sunnah Nabi Muhammad SAW. Artikel ini akan membahas beberapa prinsip penting dalam mendidik anak menurut ajaran Islam.</p>

    <h2>1. Menjadi Teladan yang Baik</h2>
    <p>Prinsip pertama dan terpenting dalam mendidik anak adalah menjadi teladan. Anak adalah peniru ulung. Mereka lebih banyak belajar dari apa yang mereka lihat daripada apa yang mereka dengar. Seorang ayah atau ibu yang jujur, bertanggung jawab, dan berakhlak mulia akan menanamkan nilai-nilai tersebut secara alami pada anak-anak mereka. Allah berfirman dalam Al-Qur'an, "Sesungguhnya telah ada pada (diri) Rasulullah itu suri teladan yang baik bagimu (yaitu) bagi orang yang mengharap (rahmat) Allah dan (kedatangan) hari kiamat dan dia banyak menyebut Allah." (QS. Al-Ahzab: 21).</p>
    
    <h2>2. Menanamkan Akidah Sejak Dini</h2>
    <p>Pondasi terkuat bagi seorang muslim adalah akidah yang lurus. Tugas orang tua adalah mengenalkan Allah SWT, Rasul-Nya, kitab-kitab-Nya, malaikat, hari kiamat, dan takdir kepada anak-anak sejak usia dini. Ajarkan mereka tentang tauhid, bahwa Allah adalah satu-satunya Tuhan yang berhak disembah. Tanamkan rasa cinta dan takut kepada Allah, sehingga mereka tumbuh dengan kesadaran bahwa hidup ini adalah ibadah.</p>
    
    <h2>3. Mengajarkan Ibadah secara Bertahap</h2>
    <p>Perkenalkan anak pada ibadah seperti salat, puasa, dan membaca Al-Qur'an secara bertahap dan menyenangkan. Jangan memaksa, tetapi ajaklah mereka dengan lembut. Ajak mereka salat berjamaah, biarkan mereka ikut berpuasa meskipun hanya setengah hari, dan bacakan Al-Qur'an sebelum tidur. Jadikan ibadah sebagai rutinitas yang dinanti-nanti, bukan beban. Nabi SAW bersabda, "Perintahkanlah anak-anak kalian untuk salat ketika mereka berusia tujuh tahun..." (HR. Abu Daud).</p>
    
    <h2>4. Memberikan Kasih Sayang dan Perhatian</h2>
    <p>Kasih sayang adalah nutrisi emosional yang sangat dibutuhkan anak. Berikan pelukan, ciuman, dan kata-kata positif yang membangun. Dengarkan cerita mereka, temani saat mereka bermain, dan berikan dukungan saat mereka menghadapi kesulitan. Anak yang merasa dicintai akan tumbuh menjadi pribadi yang lebih percaya diri, stabil, dan mampu menyayangi orang lain. Ingatlah sabda Nabi SAW, "Barang siapa tidak menyayangi, ia tidak akan disayangi." (HR. Bukhari).</p>
    
    <h2>5. Melatih Tanggung Jawab dan Kemandirian</h2>
    <p>Ajarkan anak untuk mandiri sesuai usianya. Berikan tugas-tugas kecil di rumah, seperti merapikan mainan, membereskan tempat tidur, atau membantu menyiapkan makanan. Hal ini melatih mereka untuk bertanggung jawab dan menghargai kerja keras. Tanggung jawab adalah bagian penting dari pembentukan karakter yang kuat.</p>
    
    <h2>6. Menjaga Komunikasi yang Efektif</h2>
    <p>Bangunlah komunikasi dua arah yang terbuka. Jadilah orang tua yang bisa menjadi tempat curhat bagi anak-anak. Saat anak berbuat salah, hadapi dengan tenang. Berikan nasihat dengan lembut, bukan dengan amarah atau kekerasan fisik. Ajarkan mereka konsekuensi dari perbuatan mereka tanpa merendahkan martabat mereka.</p>
    
    <h2>7. Mendoakan Anak</h2>
    <p>Doa adalah senjata terkuat orang tua. Doakan anak-anak agar mereka menjadi anak yang saleh, berilmu, bermanfaat bagi agama dan sesama, serta selalu berada dalam lindungan Allah SWT. Doa orang tua adalah salah satu doa yang mustajab.</p>

    <p>Mendidik anak menurut Islam adalah sebuah perjalanan panjang yang penuh tantangan, namun juga mendatangkan pahala yang tak terhingga. Dengan berpegang teguh pada Al-Qur'an dan sunnah, serta diiringi dengan kesabaran, keikhlasan, dan doa, insyaallah kita dapat melahirkan generasi yang tidak hanya sukses di dunia, tetapi juga bahagia di akhirat.</p>
    `,
    },
    {
      id: 3,
      title: "Jadwal Kerja Bakti Januari 2025",
      excerpt:
        "Informasi lengkap mengenai jadwal kerja bakti rutin bulan Januari 2025 dan pembagian tugas untuk setiap blok rumah.",
      date: "15 Desember 2024",
      readTime: "2 menit",
      category: "Kegiatan",
      author: "Bendahara RT",
      fullContent:
        `
    <h1>Cara Mendidik Anak Menurut Islam: Membentuk Generasi Saleh dan Berakhlak Mulia</h1>
    <p>Anak adalah amanah terindah dari Allah SWT sekaligus investasi dunia dan akhirat bagi orang tua. Mendidik anak tidak hanya sekadar memenuhi kebutuhan fisik, tetapi juga membangun karakter, moral, dan spiritual yang kokoh. Dalam Islam, pendidikan anak memiliki landasan yang jelas, berpedoman pada Al-Qur'an dan sunnah Nabi Muhammad SAW. Artikel ini akan membahas beberapa prinsip penting dalam mendidik anak menurut ajaran Islam.</p>

    <h2>1. Menjadi Teladan yang Baik</h2>
    <p>Prinsip pertama dan terpenting dalam mendidik anak adalah menjadi teladan. Anak adalah peniru ulung. Mereka lebih banyak belajar dari apa yang mereka lihat daripada apa yang mereka dengar. Seorang ayah atau ibu yang jujur, bertanggung jawab, dan berakhlak mulia akan menanamkan nilai-nilai tersebut secara alami pada anak-anak mereka. Allah berfirman dalam Al-Qur'an, "Sesungguhnya telah ada pada (diri) Rasulullah itu suri teladan yang baik bagimu (yaitu) bagi orang yang mengharap (rahmat) Allah dan (kedatangan) hari kiamat dan dia banyak menyebut Allah." (QS. Al-Ahzab: 21).</p>
    
    <h2>2. Menanamkan Akidah Sejak Dini</h2>
    <p>Pondasi terkuat bagi seorang muslim adalah akidah yang lurus. Tugas orang tua adalah mengenalkan Allah SWT, Rasul-Nya, kitab-kitab-Nya, malaikat, hari kiamat, dan takdir kepada anak-anak sejak usia dini. Ajarkan mereka tentang tauhid, bahwa Allah adalah satu-satunya Tuhan yang berhak disembah. Tanamkan rasa cinta dan takut kepada Allah, sehingga mereka tumbuh dengan kesadaran bahwa hidup ini adalah ibadah.</p>
    
    <h2>3. Mengajarkan Ibadah secara Bertahap</h2>
    <p>Perkenalkan anak pada ibadah seperti salat, puasa, dan membaca Al-Qur'an secara bertahap dan menyenangkan. Jangan memaksa, tetapi ajaklah mereka dengan lembut. Ajak mereka salat berjamaah, biarkan mereka ikut berpuasa meskipun hanya setengah hari, dan bacakan Al-Qur'an sebelum tidur. Jadikan ibadah sebagai rutinitas yang dinanti-nanti, bukan beban. Nabi SAW bersabda, "Perintahkanlah anak-anak kalian untuk salat ketika mereka berusia tujuh tahun..." (HR. Abu Daud).</p>
    
    <h2>4. Memberikan Kasih Sayang dan Perhatian</h2>
    <p>Kasih sayang adalah nutrisi emosional yang sangat dibutuhkan anak. Berikan pelukan, ciuman, dan kata-kata positif yang membangun. Dengarkan cerita mereka, temani saat mereka bermain, dan berikan dukungan saat mereka menghadapi kesulitan. Anak yang merasa dicintai akan tumbuh menjadi pribadi yang lebih percaya diri, stabil, dan mampu menyayangi orang lain. Ingatlah sabda Nabi SAW, "Barang siapa tidak menyayangi, ia tidak akan disayangi." (HR. Bukhari).</p>
    
    <h2>5. Melatih Tanggung Jawab dan Kemandirian</h2>
    <p>Ajarkan anak untuk mandiri sesuai usianya. Berikan tugas-tugas kecil di rumah, seperti merapikan mainan, membereskan tempat tidur, atau membantu menyiapkan makanan. Hal ini melatih mereka untuk bertanggung jawab dan menghargai kerja keras. Tanggung jawab adalah bagian penting dari pembentukan karakter yang kuat.</p>
    
    <h2>6. Menjaga Komunikasi yang Efektif</h2>
    <p>Bangunlah komunikasi dua arah yang terbuka. Jadilah orang tua yang bisa menjadi tempat curhat bagi anak-anak. Saat anak berbuat salah, hadapi dengan tenang. Berikan nasihat dengan lembut, bukan dengan amarah atau kekerasan fisik. Ajarkan mereka konsekuensi dari perbuatan mereka tanpa merendahkan martabat mereka.</p>
    
    <h2>7. Mendoakan Anak</h2>
    <p>Doa adalah senjata terkuat orang tua. Doakan anak-anak agar mereka menjadi anak yang saleh, berilmu, bermanfaat bagi agama dan sesama, serta selalu berada dalam lindungan Allah SWT. Doa orang tua adalah salah satu doa yang mustajab.</p>

    <p>Mendidik anak menurut Islam adalah sebuah perjalanan panjang yang penuh tantangan, namun juga mendatangkan pahala yang tak terhingga. Dengan berpegang teguh pada Al-Qur'an dan sunnah, serta diiringi dengan kesabaran, keikhlasan, dan doa, insyaallah kita dapat melahirkan generasi yang tidak hanya sukses di dunia, tetapi juga bahagia di akhirat.</p>
    `,
    },
    {
      id: 4,
      title: "Laporan Keuangan RT Desember 2024",
      excerpt:
        "Transparansi keuangan RT Blok Herba untuk bulan Desember 2024 termasuk pemasukan, pengeluaran, dan saldo kas RT.",
      date: "31 Desember 2024",
      readTime: "4 menit",
      category: "Keuangan",
      author: "Bendahara RT",
      fullContent:
        `
    <h1>Cara Mendidik Anak Menurut Islam: Membentuk Generasi Saleh dan Berakhlak Mulia</h1>
    <p>Anak adalah amanah terindah dari Allah SWT sekaligus investasi dunia dan akhirat bagi orang tua. Mendidik anak tidak hanya sekadar memenuhi kebutuhan fisik, tetapi juga membangun karakter, moral, dan spiritual yang kokoh. Dalam Islam, pendidikan anak memiliki landasan yang jelas, berpedoman pada Al-Qur'an dan sunnah Nabi Muhammad SAW. Artikel ini akan membahas beberapa prinsip penting dalam mendidik anak menurut ajaran Islam.</p>

    <h2>1. Menjadi Teladan yang Baik</h2>
    <p>Prinsip pertama dan terpenting dalam mendidik anak adalah menjadi teladan. Anak adalah peniru ulung. Mereka lebih banyak belajar dari apa yang mereka lihat daripada apa yang mereka dengar. Seorang ayah atau ibu yang jujur, bertanggung jawab, dan berakhlak mulia akan menanamkan nilai-nilai tersebut secara alami pada anak-anak mereka. Allah berfirman dalam Al-Qur'an, "Sesungguhnya telah ada pada (diri) Rasulullah itu suri teladan yang baik bagimu (yaitu) bagi orang yang mengharap (rahmat) Allah dan (kedatangan) hari kiamat dan dia banyak menyebut Allah." (QS. Al-Ahzab: 21).</p>
    
    <h2>2. Menanamkan Akidah Sejak Dini</h2>
    <p>Pondasi terkuat bagi seorang muslim adalah akidah yang lurus. Tugas orang tua adalah mengenalkan Allah SWT, Rasul-Nya, kitab-kitab-Nya, malaikat, hari kiamat, dan takdir kepada anak-anak sejak usia dini. Ajarkan mereka tentang tauhid, bahwa Allah adalah satu-satunya Tuhan yang berhak disembah. Tanamkan rasa cinta dan takut kepada Allah, sehingga mereka tumbuh dengan kesadaran bahwa hidup ini adalah ibadah.</p>
    
    <h2>3. Mengajarkan Ibadah secara Bertahap</h2>
    <p>Perkenalkan anak pada ibadah seperti salat, puasa, dan membaca Al-Qur'an secara bertahap dan menyenangkan. Jangan memaksa, tetapi ajaklah mereka dengan lembut. Ajak mereka salat berjamaah, biarkan mereka ikut berpuasa meskipun hanya setengah hari, dan bacakan Al-Qur'an sebelum tidur. Jadikan ibadah sebagai rutinitas yang dinanti-nanti, bukan beban. Nabi SAW bersabda, "Perintahkanlah anak-anak kalian untuk salat ketika mereka berusia tujuh tahun..." (HR. Abu Daud).</p>
    
    <h2>4. Memberikan Kasih Sayang dan Perhatian</h2>
    <p>Kasih sayang adalah nutrisi emosional yang sangat dibutuhkan anak. Berikan pelukan, ciuman, dan kata-kata positif yang membangun. Dengarkan cerita mereka, temani saat mereka bermain, dan berikan dukungan saat mereka menghadapi kesulitan. Anak yang merasa dicintai akan tumbuh menjadi pribadi yang lebih percaya diri, stabil, dan mampu menyayangi orang lain. Ingatlah sabda Nabi SAW, "Barang siapa tidak menyayangi, ia tidak akan disayangi." (HR. Bukhari).</p>
    
    <h2>5. Melatih Tanggung Jawab dan Kemandirian</h2>
    <p>Ajarkan anak untuk mandiri sesuai usianya. Berikan tugas-tugas kecil di rumah, seperti merapikan mainan, membereskan tempat tidur, atau membantu menyiapkan makanan. Hal ini melatih mereka untuk bertanggung jawab dan menghargai kerja keras. Tanggung jawab adalah bagian penting dari pembentukan karakter yang kuat.</p>
    
    <h2>6. Menjaga Komunikasi yang Efektif</h2>
    <p>Bangunlah komunikasi dua arah yang terbuka. Jadilah orang tua yang bisa menjadi tempat curhat bagi anak-anak. Saat anak berbuat salah, hadapi dengan tenang. Berikan nasihat dengan lembut, bukan dengan amarah atau kekerasan fisik. Ajarkan mereka konsekuensi dari perbuatan mereka tanpa merendahkan martabat mereka.</p>
    
    <h2>7. Mendoakan Anak</h2>
    <p>Doa adalah senjata terkuat orang tua. Doakan anak-anak agar mereka menjadi anak yang saleh, berilmu, bermanfaat bagi agama dan sesama, serta selalu berada dalam lindungan Allah SWT. Doa orang tua adalah salah satu doa yang mustajab.</p>

    <p>Mendidik anak menurut Islam adalah sebuah perjalanan panjang yang penuh tantangan, namun juga mendatangkan pahala yang tak terhingga. Dengan berpegang teguh pada Al-Qur'an dan sunnah, serta diiringi dengan kesabaran, keikhlasan, dan doa, insyaallah kita dapat melahirkan generasi yang tidak hanya sukses di dunia, tetapi juga bahagia di akhirat.</p>
    `,
    },
  ]

  const displayedArticles = articles.slice(0, 4)

  const handleArticleClick = (article: any) => {
    setSelectedArticle(article)
  }

  return (
    <>
      <section className="py-12 md:py-16 bg-gradient-to-r from-yellow-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <div className="flex items-center justify-center mb-4">
              <FileText className="w-6 md:w-8 h-6 md:h-8 text-blue-600 mr-3" />
              <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                Artikel & Pengumuman
              </h2>
            </div>
            <div className="mx-auto h-1 w-1/2 lg:w-1/4 bg-green-400 rounded-md mb-10"></div>
            <p className="font-body text-xl text-gray-600 max-w-2xl mx-auto">
              Kumpulan artikel yang bermanfaat
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {displayedArticles.map((article, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group h-full"
                onClick={() => handleArticleClick(article)}
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

                  {/* <div className="flex items-center justify-between">
                    <span className="font-body text-sm text-gray-500">oleh {article.author}</span>
                    <Button variant="ghost" size="sm" className="text-blue-600 hover:bg-blue-50 p-0">
                      Baca Selengkapnya
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div> */}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 md:mt-12 text-center">
            <Link href="/artikel">
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent">
                Lihat Semua Artikel
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Dialog open={!!selectedArticle} onOpenChange={() => setSelectedArticle(null)}>
        <DialogContent className="md:max-w-[50vw] w-full md:w-[80vw] max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gray-900">{selectedArticle?.title}</DialogTitle>
          </DialogHeader>

          {selectedArticle && (
            <div className="space-y-6">
              <div className="flex items-center space-x-4 text-base text-gray-500">
                <span className="inline-block px-4 py-2 text-sm font-medium bg-blue-100 text-blue-800 rounded-full">
                  {selectedArticle.category}
                </span>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  {selectedArticle.date}
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  {selectedArticle.readTime}
                </div>
              </div>

              <div className="border-l-4 border-blue-500 pl-6 py-4 bg-blue-50 rounded-r-lg">
                <p className="font-body text-gray-700 italic text-lg leading-relaxed">{selectedArticle.excerpt}</p>
              </div>

              <div dangerouslySetInnerHTML={{ __html: selectedArticle.fullContent }}>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <p className="font-body text-base text-gray-600">
                  Ditulis oleh: <span className="font-semibold text-gray-900">{selectedArticle.author}</span>
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
