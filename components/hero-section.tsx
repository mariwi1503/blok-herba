"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Home, UserCheck } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { ResidentRegistrationModal } from "./resident-registration-modal"
import { BannerCarousel } from "./ui/banner-carousel"

export function HeroSection() {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false)

  return (
    <>
      <section className="relative bg-gradient-to-br from-emerald-50 via-white to-emerald-50 py-12 md:py-20 lg:py-24 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-3 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium mb-4 md:mb-6">
                <UserCheck className="w-4 h-4 mr-2" />
                Selamat Datang di Blok Herba
              </div>

              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                Komunitas yang{" "}
                
              </h1>
              <p className="text-emerald-600  text-xl lg:text-4xl font-bold mb-4 md:mb-6">
                  Harmonis, Energik, Ramah, Bermartabat dan Asri
                  <div className="absolute -bottom-1 md:-bottom-2 left-0 right-0 h-2 md:h-3 bg-emerald-200 -skew-y-1 -z-10"></div>
                </p>

              <p className="font-body text-base md:text-lg lg:text-xl text-gray-600 mb-6 md:mb-8 max-w-2xl">
                Menghubungkan Tetangga, Mengelola Bersama. Bergabunglah dengan komunitas yang peduli, transparan dalam
                pengelolaan, dan selalu mengutamakan kebersamaan.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 md:px-8 py-3 w-full sm:w-auto"
                  onClick={() => setIsRegistrationOpen(true)}
                >
                  Bergabung Sekarang
                  <ArrowRight className="ml-2 h-4 md:h-5 w-4 md:w-5" />
                </Button>
                <Link href="/tentang">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-6 md:px-8 py-3 bg-transparent w-full sm:w-auto"
                  >
                    Pelajari Lebih Lanjut
                  </Button>
                </Link>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-12 pt-6 md:pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="flex justify-center mb-1 md:mb-2">
                    <Home className="w-5 md:w-6 h-5 md:h-6 text-emerald-600" />
                  </div>
                  <div className="font-heading text-xl md:text-2xl font-bold text-gray-900">120</div>
                  <div className="font-body text-xs md:text-sm text-gray-600">Total Rumah</div>
                </div>
                <div className="text-center">
                  <div className="flex justify-center mb-1 md:mb-2">
                    <Users className="w-5 md:w-6 h-5 md:h-6 text-emerald-600" />
                  </div>
                  <div className="font-heading text-xl md:text-2xl font-bold text-gray-900">450</div>
                  <div className="font-body text-xs md:text-sm text-gray-600">Total Warga</div>
                </div>
                <div className="text-center">
                  <div className="flex justify-center mb-1 md:mb-2">
                    <UserCheck className="w-5 md:w-6 h-5 md:h-6 text-emerald-600" />
                  </div>
                  <div className="font-heading text-xl md:text-2xl font-bold text-gray-900">95</div>
                  <div className="font-body text-xs md:text-sm text-gray-600">Total KK</div>
                </div>
              </div>
            </div>

            {/* Image - replaced with new banner image and made larger */}
            {/* <div className="relative mt-8 lg:mt-0">
              <div className="relative z-10">
                <Image
                  src="/images/hero-banner.png"
                  alt="Blok Herba Community Banner"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
              </div>
              <div className="absolute -top-2 md:-top-4 -right-2 md:-right-4 w-16 md:w-24 h-16 md:h-24 bg-emerald-200 rounded-full opacity-60 -z-10"></div>
              <div className="absolute -bottom-3 md:-bottom-6 -left-3 md:-left-6 w-20 md:w-32 h-20 md:h-32 bg-emerald-100 rounded-full opacity-40 -z-10"></div>
            </div> */}

            {/* Carousel Banner */}
            <div className="relative mt-8 lg:mt-0 z-10">
              <BannerCarousel
                slides={[
                  { src: "/images/hero-banner.png", alt: "Banner 1 - Blok Herba" },
                  { src: "/images/hero-banner-2.png", alt: "Banner 2 - Kegiatan Warga" },
                  { src: "/images/hero-banner-3.png", alt: "Banner 3 - Gotong Royong" },
                  { src: "/images/hero-banner-4.png", alt: "Banner 3 - Gotong Royong" },
                ]}
                autoplay
                interval={3000}
                className="shadow-2xl"
              />
              {/* Decorative elements */}
              <div className="absolute -top-2 md:-top-4 -right-2 md:-right-4 w-16 md:w-24 h-16 md:h-24 bg-emerald-200 rounded-full opacity-60 -z-10"></div>
              <div className="absolute -bottom-3 md:-bottom-6 -left-3 md:-left-6 w-20 md:w-32 h-20 md:h-32 bg-emerald-100 rounded-full opacity-40 -z-10"></div>
            </div>

          </div>
        </div>
      </section>

      <ResidentRegistrationModal open={isRegistrationOpen} onOpenChange={setIsRegistrationOpen} />
    </>
  )
}
