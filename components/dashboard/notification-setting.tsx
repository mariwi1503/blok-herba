// components/admin-settings/NotificationSettings.jsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Bell } from "lucide-react";

export function NotificationSettings() {
  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="font-heading text-xl flex items-center">
          <Bell className="w-5 h-5 mr-2 text-orange-600" />
          Pengaturan Notifikasi
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <Label className="font-body font-medium">Email Notifikasi</Label>
            <p className="font-body text-sm text-gray-600">
              Kirim notifikasi melalui email
            </p>
          </div>
          <Switch defaultChecked />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <Label className="font-body font-medium">
              Notifikasi Transaksi
            </Label>
            <p className="font-body text-sm text-gray-600">
              Notifikasi untuk setiap transaksi keuangan
            </p>
          </div>
          <Switch defaultChecked />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <Label className="font-body font-medium">
              Notifikasi Warga Baru
            </Label>
            <p className="font-body text-sm text-gray-600">
              Notifikasi saat ada warga baru bergabung
            </p>
          </div>
          <Switch defaultChecked />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <Label className="font-body font-medium">Reminder Iuran</Label>
            <p className="font-body text-sm text-gray-600">
              Pengingat otomatis untuk pembayaran iuran
            </p>
          </div>
          <Switch defaultChecked />
        </div>
        <div className="space-y-2">
          <Label htmlFor="adminEmail" className="font-body font-medium">
            Email Admin
          </Label>
          <Input
            id="adminEmail"
            type="email"
            defaultValue="admin@rtblokherba.id"
          />
        </div>
      </CardContent>
    </Card>
  );
}
