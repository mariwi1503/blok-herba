import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { VisionMissionSection } from "@/components/vision-mission-section"
import { StatsSection } from "@/components/stats-section"
import { FinanceSection } from "@/components/finance-section"
import { ArticlesSection } from "@/components/articles-section"
import { ManagementSection } from "@/components/management-section"
import { Footer } from "@/components/footer"
import { ActivitiesSection } from "@/components/activities-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blok Herba - RT 005 RW 021 Taman Cipta Asri 2 Batam",
  description:
    "Website resmi RT 005 RW 021 Blok Herba, Taman Cipta Asri 2, Kelurahan Tembesi, Batam. Portal informasi warga, kegiatan RT, pengumuman, dan layanan administrasi RT online.",
  keywords: [
    "Blok Herba",
    "Taman Cipta Asri 2",
    "RT 005",
    "RW 021",
    "Batam",
    "Kelurahan Tembesi",
    "Rukun Tetangga",
    "Perumahan Batam",
  ],
  openGraph: {
    title: "Blok Herba - RT 005 RW 021 Taman Cipta Asri 2 Batam",
    description: "Website resmi RT 005 RW 021 Blok Herba, Taman Cipta Asri 2, Kelurahan Tembesi, Batam.",
    url: "https://blokherba.vercel.app",
    images: ["/images/hero-banner.png"],
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navbar />
      <main>
        <HeroSection />
        <VisionMissionSection />
        <StatsSection />
        <FinanceSection />
        <ActivitiesSection />
        <ArticlesSection />
        <ManagementSection />
      </main>
      <Footer />
    </div>
  )
}
