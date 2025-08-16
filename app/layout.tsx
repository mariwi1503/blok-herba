import type React from "react"
import type { Metadata } from "next"
import { Work_Sans, Open_Sans } from "next/font/google"
import "./globals.css"
import { AuthProvider } from "@/contexts/auth-context"
import { ResidentRegistrationModal } from "@/components/resident-registration-modal"

const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-work-sans",
  weight: ["400", "600", "700"],
})

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
  weight: ["400", "500", "600"],
})

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
    "Kecamatan Sagulung",
    "RT Batam",
    "Rukun Tetangga",
    "Perumahan Batam",
    "Komunitas Blok Herba",
    "Warga Taman Cipta Asri",
    "Administrasi RT",
    "Kegiatan RT",
    "Portal RT Online",
  ],
  authors: [{ name: "RT 005 Blok Herba" }],
  creator: "RT 005 Blok Herba",
  publisher: "RT 005 Blok Herba",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://blokherba.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Blok Herba - RT 005 RW 021 Taman Cipta Asri 2 Batam",
    description:
      "Website resmi RT 005 RW 021 Blok Herba, Taman Cipta Asri 2, Kelurahan Tembesi, Batam. Portal informasi warga, kegiatan RT, dan layanan administrasi RT online.",
    url: "https://blokherba.vercel.app",
    siteName: "Blok Herba RT 005",
    images: [
      {
        url: "/images/logo-rt-herba.png",
        width: 1200,
        height: 630,
        alt: "Logo RT 005 Blok Herba Taman Cipta Asri 2 Batam",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blok Herba - RT 005 RW 021 Taman Cipta Asri 2 Batam",
    description: "Website resmi RT 005 RW 021 Blok Herba, Taman Cipta Asri 2, Kelurahan Tembesi, Batam.",
    images: ["/images/logo-rt-herba.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className={`${workSans.variable} ${openSans.variable} antialiased`}>
      <head>
        <link rel="canonical" href="https://blokherba.vercel.app" />
        <meta name="geo.region" content="ID-BA" />
        <meta name="geo.placename" content="Batam" />
        <meta name="geo.position" content="1.1304753;104.0532535" />
        <meta name="ICBM" content="1.1304753, 104.0532535" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "RT 005 Blok Herba",
              alternateName: "Blok Herba Taman Cipta Asri 2",
              description: "Rukun Tetangga 005 RW 021 Blok Herba, Taman Cipta Asri 2, Kelurahan Tembesi, Batam",
              url: "https://blokherba.vercel.app",
              logo: "https://blokherba.vercel.app/images/logo-rt-herba.png",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Blok Herba, Taman Cipta Asri 2",
                addressLocality: "Kelurahan Tembesi",
                addressRegion: "Kecamatan Sagulung",
                addressCountry: "ID",
                postalCode: "29432",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "1.1304753",
                longitude: "104.0532535",
              },
              areaServed: {
                "@type": "Place",
                name: "Blok Herba, Taman Cipta Asri 2, Batam",
              },
              sameAs: [],
            }),
          }}
        />
      </head>
      <body className="font-sans">
        <AuthProvider>
          {children}
          {/* <ResidentRegistrationModal /> */}
        </AuthProvider>
      </body>
    </html>
  )
}
