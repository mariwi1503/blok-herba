"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Crown,
  FileText,
  Wallet,
  Users,
  Shield,
  MessageCircle,
  MoonStar,
  Coffee,
  Trophy,
} from "lucide-react";

interface CommitteeMember {
  fullName: string;
  committeeLabel: string;
  committeeId: string;
}

const committeeColors: { [key: string]: { icon: any; color: string; title: string } } = {
  "penasehat": { icon: Crown, color: "from-purple-400 to-purple-500 border-purple-600", title: "PENASEHAT" },
  "ketua": { icon: Crown, color: "from-blue-400 to-blue-500 border-blue-600", title: "KETUA RT" },
  "sekretaris": { icon: FileText, color: "from-green-400 to-green-500 border-green-600", title: "SEKRETARIS" },
  "bendahara": { icon: Wallet, color: "from-green-400 to-green-500 border-green-600", title: "BENDAHARA" },
  "bidang_sarana": { icon: Users, color: "from-cyan-400 to-cyan-500 border-cyan-600", title: "BIDANG SARANA" },
  "humas": { icon: MessageCircle, color: "from-purple-400 to-purple-500 border-purple-600", title: "HUMAS" },
  "pemuda_olahraga": { icon: Trophy, color: "from-orange-400 to-orange-500 border-orange-600", title: "PEMUDA & OLAHRAGA" },
  "keagamaan": { icon: MoonStar, color: "from-green-500 to-green-600 border-green-700", title: "KEAGAMAAN" },
  "konsumsi": { icon: Coffee, color: "from-pink-400 to-pink-500 border-pink-600", title: "KONSUMSI" },
  "keamanan": { icon: Shield, color: "from-yellow-400 to-yellow-500 border-yellow-600", title: "KEAMANAN" },
};

export function OrganizationalChart() {
  const [organization, setOrganization] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Define your API's base URL
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000";

  useEffect(() => {
    async function fetchOrganizationalData() {
      try {
        const response = await fetch(`${baseUrl}/api/committee`);
        if (!response.ok) {
          throw new Error('Failed to fetch organizational data');
        }
        const result = await response.json();
        const rawMembers = result.data as CommitteeMember[];
        const structuredData = processData(rawMembers);
        setOrganization(structuredData);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchOrganizationalData();
  }, [baseUrl]); // Re-run effect if baseUrl changes

  const processData = (members: CommitteeMember[]) => {
    const processed = {
      penasehat: [] as string[],
      ketua: "",
      sekretaris: "",
      bendahara: "",
      bidang: [] as { title: string; icon: any; color: string; members: string[] }[],
    };

    const bidangMap = new Map<string, string[]>();

    members.forEach(member => {
      const { fullName, committeeId } = member;
      
      switch (committeeId) {
        case "penasehat":
          processed.penasehat.push(fullName.toUpperCase());
          break;
        case "ketua":
          processed.ketua = fullName.toUpperCase();
          break;
        case "sekretaris":
          processed.sekretaris = fullName.toUpperCase();
          break;
        case "bendahara":
          processed.bendahara = fullName.toUpperCase();
          break;
        default:
          if (!bidangMap.has(committeeId)) {
            bidangMap.set(committeeId, []);
          }
          bidangMap.get(committeeId)?.push(fullName.toUpperCase());
          break;
      }
    });

    for (const [id, memberList] of bidangMap.entries()) {
      const config = committeeColors[id] || { icon: Users, color: "bg-gray-500", title: id.toUpperCase().replace(/_/g, ' ') };
      processed.bidang.push({
        title: config.title,
        icon: config.icon,
        color: config.color,
        members: memberList,
      });
    }

    return processed;
  };

  if (isLoading) {
    return <div className="text-center py-12">Loading chart...</div>;
  }

  if (error || !organization) {
    return <div className="text-center py-12 text-red-500">Error: {error || "Data not found."}</div>;
  }
  
  // Sort bidang based on a custom order
  const customOrder = ["PENASEHAT", "KETUA RT", "SEKRETARIS", "BENDAHARA", "BIDANG SARANA", "HUMAS", "PEMUDA & OLAHRAGA", "KEAGAMAAN", "KONSUMSI", "KEAMANAN"];
  const sortedBidang = organization.bidang.sort((a: any, b: any) => {
    return customOrder.indexOf(a.title) - customOrder.indexOf(b.title);
  });

  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900">
            Struktur Organisasi
          </h2>
          <p className="font-body text-xl text-gray-600 mt-2">
            Struktur kepengurusan RT 005 Blok Herba, Taman Cipta Asri 2
          </p>
        </div>

        <div className="space-y-6">
          {/* Penasehat */}
          <div className="flex justify-center relative">
            <Card className="bg-gradient-to-r from-purple-400 to-purple-500 border border-purple-600 shadow-md w-full max-w-sm">
              <CardContent className="p-2 lg:p-4 text-center">
                <h3 className="font-heading font-bold text-white mb-2 lg:text-lg text-base">
                  PENASEHAT
                </h3>
                <div className="space-y-0.5 text-sm text-white">
                  {organization.penasehat.map((p: string, i: number) => (
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
                <h3 className="font-heading font-bold text-white mb-1 lg:text-lg text-base">
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
                <h3 className="font-heading font-bold text-white mb-1 lg:text-lg text-base">
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
                <h3 className="font-heading font-bold text-white mb-1 lg:text-lg text-base">
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
            {sortedBidang.map((b: any, i: number) => {
              const Icon = b.icon;
              return (
                <Card
                  key={i}
                  className={`bg-gradient-to-r ${b.color} border shadow-md`}
                >
                  <CardContent className="p-2 lg:p-4 text-center">
                    <Icon className="w-5 h-5 text-white mx-auto mb-1" />
                    <h4 className="font-heading lg:text-lg text-base font-bold text-white mb-1">
                      {b.title}
                    </h4>
                    <div className="space-y-0.5 text-xs text-white">
                      {b.members.map((m: string, j: number) => (
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