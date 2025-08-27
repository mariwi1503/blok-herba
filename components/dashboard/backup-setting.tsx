// components/admin-settings/BackupSettings.jsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Database } from "lucide-react";

export function BackupSettings() {
  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="font-heading text-xl flex items-center">
          <Database className="w-5 h-5 mr-2 text-red-600" />
          Backup & Restore
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="p-4 bg-blue-50 rounded-lg">
          <h3 className="font-body font-medium text-blue-900 mb-2">
            Backup Otomatis
          </h3>
          <p className="font-body text-sm text-blue-700 mb-3">
            Backup terakhir: 25 Desember 2024, 02:00 WIB
          </p>
          <div className="flex items-center justify-between">
            <span className="font-body text-sm text-blue-700">
              Status: Aktif (Harian)
            </span>
            <Switch defaultChecked />
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="font-body font-medium text-gray-900">Backup Manual</h3>
          <p className="font-body text-sm text-gray-600">
            Buat backup manual dari semua data RT termasuk warga, keuangan, dan
            galeri.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700">
            Buat Backup Sekarang
          </Button>
        </div>
        <div className="space-y-4">
          <h3 className="font-body font-medium text-gray-900">Restore Data</h3>
          <p className="font-body text-sm text-gray-600">
            Pulihkan data dari file backup yang tersimpan.
          </p>
          <div className="flex gap-3">
            <Input type="file" accept=".zip,.sql" />
            <Button variant="outline" className="bg-transparent">
              Restore
            </Button>
          </div>
        </div>
        <div className="p-4 bg-red-50 rounded-lg">
          <h3 className="font-body font-medium text-red-900 mb-2">
            Zona Bahaya
          </h3>
          <p className="font-body text-sm text-red-700 mb-3">
            Tindakan berikut akan menghapus semua data secara permanen.
          </p>
          <Button
            variant="outline"
            className="text-red-600 border-red-600 hover:bg-red-50 bg-transparent"
          >
            Reset Semua Data
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
