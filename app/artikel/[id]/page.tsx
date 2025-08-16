import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, User, Eye } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default async function ArticleDetailPage({ params }: { params: Promise<{ id: string }> }) {
  // Mock data - in real app, fetch based on params.
  const { id } = await params 
  const article = {
    id,
    title: "Cara Mendidik Anak Menurut Islam",
    content: `
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
    excerpt: "Pengumuman pembayaran iuran RT bulan Januari 2025 dengan total Rp 70.000 per KK",
    date: "20 Desember 2024",
    author: "Ketua RT",
    category: "Agama",
    views: 234,
    image: "/indonesian-community-gathering.png",
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navbar />
      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/artikel">
            <Button variant="outline" className="mb-8 bg-transparent">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Kembali ke Artikel
            </Button>
          </Link>

          <article className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-64 md:h-96">
              <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
            </div>

            <div className="p-8">
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                  {article.category}
                </span>
                <div className="flex items-center text-gray-500 text-sm">
                  <Calendar className="w-4 h-4 mr-1" />
                  {article.date}
                </div>
                <div className="flex items-center text-gray-500 text-sm">
                  <User className="w-4 h-4 mr-1" />
                  {article.author}
                </div>
                <div className="flex items-center text-gray-500 text-sm">
                  <Eye className="w-4 h-4 mr-1" />
                  {article.views} views
                </div>
              </div>

              <h1 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6">{article.title}</h1>

              <div
                className="font-body text-gray-700 text-lg leading-relaxed prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  )
}
