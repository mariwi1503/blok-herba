// components/admin-settings/GeneralSettings.jsx
"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Settings, Palette } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

// Define the type for the settings data
interface RtSettings {
  heroTagline: string;
  footerTagline: string;
  vision: string;
  mission: string[];
  history: string;
  about: string;
  address: string;
  phone: string;
  email: string;
}

export function GeneralSettings() {
  const [settings, setSettings] = useState<RtSettings | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    async function fetchSettings() {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/setting`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch settings data");
        }
        const data = await response.json();
        setSettings(data.data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    }
    fetchSettings();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setSettings((prevSettings) => {
      if (!prevSettings) return null;
      if (id === "mission") {
        return { ...prevSettings, [id]: value.split(",").map((m) => m.trim()) };
      }
      return { ...prevSettings, [id]: value };
    });
  };

  const handleSave = async () => {
    if (!settings) {
      toast({
        title: "Error",
        description: "Data settings tidak ditemukan.",
        variant: "destructive",
      });
      return;
    }

    // Validation: Check if all required fields are not empty
    const requiredFields = [
      "heroTagline",
      "footerTagline",
      "vision",
      "history",
      "about",
      "address",
      "phone",
      "email",
    ];
    for (const field of requiredFields) {
      if (!settings[field as keyof RtSettings]) {
        toast({
          title: "Error",
          description: `Field '${field}' tidak boleh kosong.`,
          variant: "destructive",
        });
        return;
      }
    }

    if (
      !settings.mission ||
      settings.mission.length === 0 ||
      settings.mission.some((m) => m.length === 0)
    ) {
      toast({
        title: "Error",
        description: "Field 'mission' tidak boleh kosong.",
        variant: "destructive",
      });
      return;
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/setting`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(settings),
        }
      );

      if (!response.ok) {
        throw new Error("Gagal menyimpan perubahan. Silakan coba lagi.");
      }

      toast({
        title: "Berhasil!",
        description: "Pengaturan telah berhasil diperbarui.",
      });
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error
          ? err.message
          : "Terjadi kesalahan saat menyimpan data.";
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center p-8 text-red-600">
        <p>Error: {error}</p>
      </div>
    );
  }

  if (!settings) {
    return null;
  }

  return (
    <div className="grid gap-6">
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="font-heading text-xl flex items-center">
            <Settings className="w-5 h-5 mr-2 text-emerald-600" />
            Profil RT
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="heroTagline" className="font-body font-medium">
                Hero Tagline
              </Label>
              <Textarea
                id="heroTagline"
                defaultValue={settings.heroTagline}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="footerTagline" className="font-body font-medium">
                Footer Tagline
              </Label>
              <Textarea
                id="footerTagline"
                defaultValue={settings.footerTagline}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="vision" className="font-body font-medium">
                Visi
              </Label>
              <Textarea
                id="vision"
                defaultValue={settings.vision}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="mission" className="font-body font-medium">
                Misi
              </Label>
              <Textarea
                id="mission"
                defaultValue={settings.mission?.join(", ")}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="history" className="font-body font-medium">
                Sejarah
              </Label>
              <Textarea
                id="history"
                defaultValue={settings.history}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="about" className="font-body font-medium">
                Tentang Kami
              </Label>
              <Textarea
                id="about"
                defaultValue={settings.about}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone" className="font-body font-medium">
                Nomor Telepon
              </Label>
              <Input
                id="phone"
                defaultValue={settings.phone}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="font-body font-medium">
                Email
              </Label>
              <Input
                id="email"
                defaultValue={settings.email}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="address" className="font-body font-medium">
              Alamat
            </Label>
            <Textarea
              id="address"
              defaultValue={settings.address}
              onChange={handleInputChange}
            />
          </div>
          <Button
            className="bg-emerald-600 hover:bg-emerald-700 hover:cursor-pointer"
            onClick={handleSave}
          >
            Simpan Perubahan
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
