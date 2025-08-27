import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { VisionMissionSection } from "@/components/vision-mission-section";
import { StatsSection } from "@/components/stats-section";
import { FinanceSection } from "@/components/finance-section";
import { ArticlesSection } from "@/components/articles-section";
import { ManagementSection } from "@/components/management-section";
import { Footer } from "@/components/footer";
import { ActivitiesSection } from "@/components/activities-section";
import type { Metadata } from "next";

const getHomeData = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/public`, {cache: 'no-store'}
    );
    if (!response.ok) {
      throw new Error("Failed to fetch organization data");
    }
    const result = await response.json();
    return result.data;
  } catch (error) {
    return null;
  }
};

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
    description:
      "Website resmi RT 005 RW 021 Blok Herba, Taman Cipta Asri 2, Kelurahan Tembesi, Batam.",
    url: "https://blokherba.vercel.app",
    images: ["/images/hero-banner.png"],
  },
};

export default async function HomePage() {
  const homeData = await getHomeData();
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navbar />
      <main>
        <HeroSection 
          heroTagline={homeData?.heroTagline}
          totalHouse={homeData?.totalHouse}
          totalResident={homeData?.totalResident}
          totalFamilyCard={homeData?.totalFamilyCard}
        />
        <StatsSection
          transactionHistory={homeData?.transactionHistory}
          totalHouse={homeData?.totalHouse}
          totalResident={homeData?.totalResident}
          totalFamilyCard={homeData?.totalFamilyCard}
        />
        <ActivitiesSection />
        <ArticlesSection />
        <ManagementSection />
      </main>
      <Footer 
        footerTagline={homeData?.footerTagline}
        address={homeData?.address}
        phone={homeData?.phone}
        email={homeData?.email}
      />
    </div>
  );
}
