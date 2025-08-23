"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Crown,
  FileText,
  Wallet,
  Users,
  Shield,
  MessageCircle,
  Church,
  Coffee,
  Trophy,
  Book,
  MoonStar,
} from "lucide-react";

// Dummy data (nanti bisa diganti fetch dari database)
const organization = {
  penasehat: ["Bpk. KISMARDI", "Bpk. SULAIMAN"],
  ketua: "EDIKA SAPUTRA",
  sekretaris: "EKA PENGAYUM",
  bendahara: "SHINTA JULIA FITRI",
  bidang: [
    {
      title: "BIDANG SARANA",
      icon: Users,
      color: "from-cyan-400 to-cyan-500 border-cyan-600",
      members: ["NUR AFANDI", "ANDESKA ARIFIN", "AGUS PURNOMO"],
    },
    {
      title: "HUMAS",
      icon: MessageCircle,
      color: "from-purple-400 to-purple-500 border-purple-600",
      members: ["ONDRA WIZAL", "RULLY CHANDRA", "AFRIZAL", "ALFITRA K."],
    },
    {
      title: "PEMUDA & OLAHRAGA",
      icon: Trophy,
      color: "from-orange-400 to-orange-500 border-orange-600",
      members: ["M. ARY WIDODO", "RIZKY RAGIL"],
    },

    {
      title: "KEAGAMAAN",
      icon: MoonStar,
      color: "from-green-500 to-green-600 border-green-700",
      members: ["ANDI SAMSU A.", "RUFIMA'RUF"],
    },
    {
      title: "KONSUMSI",
      icon: Coffee,
      color: "from-pink-400 to-pink-500 border-pink-600",
      members: ["LENI SYAFRIDA"],
    },
    {
      title: "KEAMANAN",
      icon: Shield,
      color: "from-yellow-400 to-yellow-500 border-yellow-600",
      members: ["HALLE"],
    },
  ],
};

export function OrganizationalChart() {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900">
            Struktur Organisasi
          </h2>
          <p className="font-body text-base text-gray-600 mt-2">
            Struktur kepengurusan RT 005 Blok Herba, Taman Cipta Asri 2
          </p>
        </div>

        <div className="space-y-6">
          {/* Penasehat */}
          <div className="flex justify-center relative">
            <Card className="bg-gradient-to-r from-purple-400 to-purple-500 border border-purple-600 shadow-md w-full max-w-sm">
              <CardContent className="p-2 lg:p-4 text-center">
                <h3 className="font-heading text-base font-bold text-white mb-2">
                  PENASEHAT
                </h3>
                <div className="space-y-0.5 text-sm text-white">
                  {organization.penasehat.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Garis */}
          <div className="flex justify-center">
            <div className="w-px h-6 bg-gray-400"></div>
          </div>

          {/* Ketua */}
          <div className="flex justify-center">
            <Card className="bg-gradient-to-r from-blue-400 to-blue-500 border border-blue-600 shadow-md w-full max-w-sm">
              <CardContent className="p-2 lg:p-4 text-center">
                <Crown className="w-7 h-7 text-white mx-auto mb-1" />
                <h3 className="font-heading text-base font-bold text-white mb-1">
                  KETUA RT
                </h3>
                <p className="font-body text-white font-semibold text-sm">
                  {organization.ketua}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Garis */}
          <div className="flex justify-center">
            <div className="w-px h-6 bg-gray-400"></div>
          </div>

          {/* Sekretaris & Bendahara */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto relative">
            <Card className="bg-gradient-to-r from-green-400 to-green-500 border border-green-600 shadow-md">
              <CardContent className="p-2 lg:p-4 text-center">
                <Wallet className="w-6 h-6 text-white mx-auto mb-1" />
                <h3 className="font-heading text-base font-bold text-white mb-1">
                  BENDAHARA
                </h3>
                <p className="font-body text-white text-sm font-medium">
                  {organization.bendahara}
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-r from-green-400 to-green-500 border border-green-600 shadow-md">
              <CardContent className="p-2 lg:p-4 text-center">
                <FileText className="w-6 h-6 text-white mx-auto mb-1" />
                <h3 className="font-heading text-base font-bold text-white mb-1">
                  SEKRETARIS
                </h3>
                <p className="font-body text-white text-sm font-medium">
                  {organization.sekretaris}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Garis ke bawah */}
          <div className="flex justify-center">
            <div className="w-px h-6 bg-gray-400"></div>
          </div>

          {/* Bidang-bidang */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4">
            {organization.bidang.map((b, i) => {
              const Icon = b.icon;
              return (
                <Card
                  key={i}
                  className={`bg-gradient-to-r ${b.color} border shadow-md`}
                >
                  <CardContent className="p-2 lg:p-4 text-center">
                    <Icon className="w-5 h-5 text-white mx-auto mb-1" />
                    <h4 className="font-heading text-sm font-bold text-white mb-1">
                      {b.title}
                    </h4>
                    <div className="space-y-0.5 text-xs text-white">
                      {b.members.map((m, j) => (
                        <p key={j}>{m}</p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
