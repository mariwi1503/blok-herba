// components/admin-settings/UserManagement.jsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";

export function UserManagement() {
  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="font-heading text-xl flex items-center">
          <Users className="w-5 h-5 mr-2 text-purple-600" />
          Manajemen Pengguna
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div>
              <h3 className="font-body font-medium text-gray-900">
                Bapak Suharto
              </h3>
              <p className="font-body text-sm text-gray-600">
                Ketua RT - Admin Penuh
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="bg-transparent">
                Edit
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="text-red-600 hover:bg-red-50 bg-transparent"
              >
                Hapus
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div>
              <h3 className="font-body font-medium text-gray-900">
                Ibu Siti Aminah
              </h3>
              <p className="font-body text-sm text-gray-600">
                Sekretaris RT - Editor
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="bg-transparent">
                Edit
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="text-red-600 hover:bg-red-50 bg-transparent"
              >
                Hapus
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div>
              <h3 className="font-body font-medium text-gray-900">
                Bapak Ahmad Wijaya
              </h3>
              <p className="font-body text-sm text-gray-600">
                Bendahara RT - Keuangan
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="bg-transparent">
                Edit
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="text-red-600 hover:bg-red-50 bg-transparent"
              >
                Hapus
              </Button>
            </div>
          </div>
          <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
            Tambah Pengguna Baru
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
