"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Settings, Users, Bell, Database, Palette } from "lucide-react"

export function AdminSettings() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="font-heading text-3xl font-bold text-gray-900">Pengaturan</h1>
        <p className="font-body text-gray-600 mt-2">Kelola pengaturan sistem dan konfigurasi RT</p>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="general" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="general">Umum</TabsTrigger>
          <TabsTrigger value="users">Pengguna</TabsTrigger>
          <TabsTrigger value="notifications">Notifikasi</TabsTrigger>
          <TabsTrigger value="backup">Backup</TabsTrigger>
        </TabsList>

        <TabsContent value="general">
          <div className="grid gap-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="font-heading text-xl flex items-center">
                  <Settings className="w-5 h-5 mr-2 text-emerald-600" />
                  Informasi RT
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="rtName" className="font-body font-medium">
                      Nama RT
                    </Label>
                    <Input id="rtName" defaultValue="RT 005 Blok Herba" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="rtCode" className="font-body font-medium">
                      Kode RT
                    </Label>
                    <Input id="rtCode" defaultValue="RT.005" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address" className="font-body font-medium">
                    Alamat Lengkap
                  </Label>
                  <Textarea
                    id="address"
                    defaultValue="Taman Cipta Asri 2, Blok Herba, RT 005, Kota Bekasi, Jawa Barat"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="totalHouses" className="font-body font-medium">
                      Total Rumah
                    </Label>
                    <Input id="totalHouses" type="number" defaultValue="120" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="monthlyFee" className="font-body font-medium">
                      Iuran Bulanan (Rp)
                    </Label>
                    <Input id="monthlyFee" type="number" defaultValue="20000" />
                  </div>
                </div>

                <Button className="bg-emerald-600 hover:bg-emerald-700">Simpan Perubahan</Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="font-heading text-xl flex items-center">
                  <Palette className="w-5 h-5 mr-2 text-blue-600" />
                  Tampilan Website
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="font-body font-medium">Mode Gelap</Label>
                    <p className="font-body text-sm text-gray-600">Aktifkan tema gelap untuk website</p>
                  </div>
                  <Switch />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label className="font-body font-medium">Galeri Publik</Label>
                    <p className="font-body text-sm text-gray-600">Izinkan warga melihat galeri tanpa login</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label className="font-body font-medium">Keuangan Transparan</Label>
                    <p className="font-body text-sm text-gray-600">Tampilkan laporan keuangan di halaman utama</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="users">
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
                    <h3 className="font-body font-medium text-gray-900">Bapak Suharto</h3>
                    <p className="font-body text-sm text-gray-600">Ketua RT - Admin Penuh</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="bg-transparent">
                      Edit
                    </Button>
                    <Button variant="outline" size="sm" className="text-red-600 hover:bg-red-50 bg-transparent">
                      Hapus
                    </Button>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div>
                    <h3 className="font-body font-medium text-gray-900">Ibu Siti Aminah</h3>
                    <p className="font-body text-sm text-gray-600">Sekretaris RT - Editor</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="bg-transparent">
                      Edit
                    </Button>
                    <Button variant="outline" size="sm" className="text-red-600 hover:bg-red-50 bg-transparent">
                      Hapus
                    </Button>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div>
                    <h3 className="font-body font-medium text-gray-900">Bapak Ahmad Wijaya</h3>
                    <p className="font-body text-sm text-gray-600">Bendahara RT - Keuangan</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="bg-transparent">
                      Edit
                    </Button>
                    <Button variant="outline" size="sm" className="text-red-600 hover:bg-red-50 bg-transparent">
                      Hapus
                    </Button>
                  </div>
                </div>

                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Tambah Pengguna Baru</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications">
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
                  <p className="font-body text-sm text-gray-600">Kirim notifikasi melalui email</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label className="font-body font-medium">Notifikasi Transaksi</Label>
                  <p className="font-body text-sm text-gray-600">Notifikasi untuk setiap transaksi keuangan</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label className="font-body font-medium">Notifikasi Warga Baru</Label>
                  <p className="font-body text-sm text-gray-600">Notifikasi saat ada warga baru bergabung</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label className="font-body font-medium">Reminder Iuran</Label>
                  <p className="font-body text-sm text-gray-600">Pengingat otomatis untuk pembayaran iuran</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="space-y-2">
                <Label htmlFor="adminEmail" className="font-body font-medium">
                  Email Admin
                </Label>
                <Input id="adminEmail" type="email" defaultValue="admin@rtblokherba.id" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="backup">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="font-heading text-xl flex items-center">
                <Database className="w-5 h-5 mr-2 text-red-600" />
                Backup & Restore
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-body font-medium text-blue-900 mb-2">Backup Otomatis</h3>
                <p className="font-body text-sm text-blue-700 mb-3">Backup terakhir: 25 Desember 2024, 02:00 WIB</p>
                <div className="flex items-center justify-between">
                  <span className="font-body text-sm text-blue-700">Status: Aktif (Harian)</span>
                  <Switch defaultChecked />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-body font-medium text-gray-900">Backup Manual</h3>
                <p className="font-body text-sm text-gray-600">
                  Buat backup manual dari semua data RT termasuk warga, keuangan, dan galeri.
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700">Buat Backup Sekarang</Button>
              </div>

              <div className="space-y-4">
                <h3 className="font-body font-medium text-gray-900">Restore Data</h3>
                <p className="font-body text-sm text-gray-600">Pulihkan data dari file backup yang tersimpan.</p>
                <div className="flex gap-3">
                  <Input type="file" accept=".zip,.sql" />
                  <Button variant="outline" className="bg-transparent">
                    Restore
                  </Button>
                </div>
              </div>

              <div className="p-4 bg-red-50 rounded-lg">
                <h3 className="font-body font-medium text-red-900 mb-2">Zona Bahaya</h3>
                <p className="font-body text-sm text-red-700 mb-3">
                  Tindakan berikut akan menghapus semua data secara permanen.
                </p>
                <Button variant="outline" className="text-red-600 border-red-600 hover:bg-red-50 bg-transparent">
                  Reset Semua Data
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
