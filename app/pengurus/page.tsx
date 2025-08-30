"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Phone,
  MapPin,
  Users,
} from "lucide-react";
import Image from "next/image";
import { toWaMeUrl } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { ImWhatsapp } from "react-icons/im";
import { OrganizationalChart } from "@/components/organitational-chart";

// Define the type for a committee member
interface CommitteeMember {
  fullName: string;
  committeeLabel: string;
  committeeId: string;
  phone: string;
  address: string;
  committeeDescription: string;
  image: string;
}

export default function PengurusPage() {
  const [selected, setSelected] = useState<CommitteeMember | null>(null);
  const [management, setManagement] = useState<CommitteeMember[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchManagement() {
      try {
        const response = await fetch('/api/committee');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const result = await response.json();
        const rawData = result.data as CommitteeMember[];
        const sortedData = sortManagementData(rawData);
        setManagement(sortedData);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchManagement();
  }, []);

  const sortManagementData = (data: CommitteeMember[]): CommitteeMember[] => {
    const customOrder = ["penasehat", "ketua", "sekretaris", "bendahara"];
    
    // Separate the main leadership from other committees
    const mainLeadership = data.filter(member => customOrder.includes(member.committeeId));
    const otherCommittees = data.filter(member => !customOrder.includes(member.committeeId));
    
    // Sort the main leadership based on the custom order
    mainLeadership.sort((a, b) => {
      const aIndex = customOrder.indexOf(a.committeeId);
      const bIndex = customOrder.indexOf(b.committeeId);
      return aIndex - bIndex;
    });

    // Sort the other committees alphabetically by committeeLabel and then fullName
    otherCommittees.sort((a, b) => {
      const committeeLabelCompare = a.committeeLabel.localeCompare(b.committeeLabel);
      if (committeeLabelCompare !== 0) {
        return committeeLabelCompare;
      }
      return a.fullName.localeCompare(b.fullName);
    });
    
    // Combine and return the sorted arrays
    return [...mainLeadership, ...otherCommittees];
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-red-50 to-blue-50">
      <Navbar />
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Users className="w-12 h-12 text-emerald-600 mr-4" />
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-900">
                Pengurus RT Blok Herba
              </h1>
            </div>
            <p className="font-body text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Tim pengurus yang berdedikasi untuk melayani dan memajukan RT Blok
              Herba dengan penuh tanggung jawab dan transparansi.
            </p>
          </div>

          {/* Management Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-8 mb-16">
            {management.map((person, index) => (
              <Card
                key={index}
                className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                onClick={() => {
                  if (window.innerWidth < 768) setSelected(person);
                }}
              >
                <div className="relative">
                  <Image
                    src={person.image || "/placeholder.svg"}
                    alt={person.fullName}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-t-lg" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-heading text-xl font-bold mb-1">
                      {person.fullName}
                    </h3>
                    <p className="font-body text-sm opacity-90">
                      {person.committeeLabel}
                    </p>
                  </div>
                </div>

                {/* CardContent hanya muncul di desktop/tablet */}
                <CardContent className="p-6 hidden md:block">
                  <p className="font-body text-gray-600 mb-4 leading-relaxed text-sm">
                    {person.committeeDescription}
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <Phone className="w-4 h-4 mr-3 text-emerald-600" />
                      <span>{person.phone}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="w-4 h-4 mr-3 text-purple-600" />
                      <span>{person.address}</span>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full bg-transparent border-emerald-600 text-emerald-600 hover:bg-emerald-50 flex items-center justify-center gap-2"
                  >
                    <a
                      href={toWaMeUrl(person.phone)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <ImWhatsapp className="w-5 h-5 text-green-600" />
                      <span>Whatsapp</span>
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Modal untuk mobile */}
          <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
            <DialogContent className="max-w-md">
              {selected && (
                <div>
                  <VisuallyHidden>
                    <DialogTitle>{selected.fullName}</DialogTitle>
                  </VisuallyHidden>
                  <Image
                    src={selected.image || "/placeholder.svg"}
                    alt={selected.fullName}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover rounded-lg mb-4"
                  />
                  <h3 className="font-heading text-xl font-bold mb-1">
                    {selected.fullName}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">
                    {selected.committeeLabel}
                  </p>
                  <p className="text-gray-600 mb-4">{selected.committeeDescription}</p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <Phone className="w-4 h-4 mr-3 text-emerald-600" />
                      <span>{selected.phone}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="w-4 h-4 mr-3 text-purple-600" />
                      <span>{selected.address}</span>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full bg-transparent border-emerald-600 text-emerald-600 hover:bg-emerald-50 flex items-center justify-center gap-2"
                  >
                    <a
                      href={toWaMeUrl(selected.phone)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <ImWhatsapp className="w-5 h-5 text-green-600" />
                      <span>Whatsapp</span>
                    </a>
                  </Button>
                </div>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </main>
      <OrganizationalChart />
      <Footer />
    </div>
  );
}