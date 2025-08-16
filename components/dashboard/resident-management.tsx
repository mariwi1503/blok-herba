"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AddResidentDialog } from "./add-resident-dialog"
import { HouseOccupancyView } from "./house-occupancy-view"
import { Plus, Search, Filter, Download, Users, Home, Phone, Mail, Edit, Trash2, MapPin } from "lucide-react"

export function ResidentManagement() {
  const [showAddResident, setShowAddResident] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")

  const residents = [
    {
      id: 1,
      name: "Bapak Suharto",
      role: "Ketua RT",
      house: "A-001",
      phone: "0812-3456-7890",
      email: "suharto@email.com",
      familyMembers: 4,
      status: "active",
      joinDate: "2020-01-15",
      occupation: "Pensiunan",
      religion: "Islam",
      maritalStatus: "menikah",
      ktpType: "ktp-batam",
      housingStatus: "milik-sendiri",
      propertyType: "rumah",
    },
    {
      id: 2,
      name: "Ibu Siti Aminah",
      role: "Sekretaris RT",
      house: "A-005",
      phone: "0813-4567-8901",
      email: "siti@email.com",
      familyMembers: 3,
      status: "active",
      joinDate: "2020-03-20",
      occupation: "Guru",
      religion: "Islam",
      maritalStatus: "menikah",
      ktpType: "ktp-batam",
      housingStatus: "milik-sendiri",
      propertyType: "rumah",
    },
    {
      id: 3,
      name: "Bapak Ahmad Wijaya",
      role: "Bendahara RT",
      house: "B-012",
      phone: "0814-5678-9012",
      email: "ahmad@email.com",
      familyMembers: 5,
      status: "active",
      joinDate: "2019-11-10",
      occupation: "Wiraswasta",
      religion: "Islam",
      maritalStatus: "menikah",
      ktpType: "ktp-luar-batam",
      housingStatus: "milik-sendiri",
      propertyType: "rumah",
    },
    {
      id: 4,
      name: "Ibu Ratna Sari",
      role: "Warga",
      house: "A-008",
      phone: "0815-6789-0123",
      email: "ratna@email.com",
      familyMembers: 2,
      status: "active",
      joinDate: "2021-05-12",
      occupation: "Dokter",
      religion: "Kristen",
      maritalStatus: "menikah",
      ktpType: "ktp-batam",
      housingStatus: "milik-sendiri",
      propertyType: "rumah",
    },
    {
      id: 5,
      name: "Bapak Joko Susilo",
      role: "Koordinator Keamanan",
      house: "C-020",
      phone: "0816-7890-1234",
      email: "joko@email.com",
      familyMembers: 3,
      status: "active",
      joinDate: "2020-08-30",
      occupation: "Polisi",
      religion: "Islam",
      maritalStatus: "menikah",
      ktpType: "ktp-batam",
      housingStatus: "milik-sendiri",
      propertyType: "rumah",
    },
    {
      id: 6,
      name: "Ibu Maya Indira",
      role: "Warga",
      house: "B-015",
      phone: "0817-8901-2345",
      email: "maya@email.com",
      familyMembers: 4,
      status: "inactive",
      joinDate: "2022-02-14",
      occupation: "Ibu Rumah Tangga",
      religion: "Hindu",
      maritalStatus: "menikah",
      ktpType: "ktp-batam",
      housingStatus: "ngontrak",
      propertyType: "rumah",
    },
    {
      id: 7,
      name: "Andi Pratama",
      role: "Warga",
      house: "C-025",
      phone: "0818-9012-3456",
      email: "andi@email.com",
      familyMembers: 1,
      status: "active",
      joinDate: "2023-06-10",
      occupation: "Mahasiswa",
      religion: "Islam",
      maritalStatus: "belum-menikah",
      ktpType: "ktp-luar-batam",
      housingStatus: "ngontrak",
      propertyType: "kost",
    },
  ]

  const filteredResidents = residents.filter(
    (resident) =>
      resident.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resident.house.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resident.role.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const getMaritalStatusLabel = (status: string) => {
    switch (status) {
      case "menikah":
        return "Menikah"
      case "belum-menikah":
        return "Belum Menikah"
      case "janda-duda":
        return "Janda/Duda"
      default:
        return status
    }
  }

  const getKtpTypeLabel = (type: string) => {
    return type === "ktp-batam" ? "KTP Batam" : "KTP Luar Batam"
  }

  const getHousingStatusLabel = (status: string) => {
    return status === "milik-sendiri" ? "Milik Sendiri" : "Ngontrak"
  }

  const getPropertyTypeLabel = (type: string) => {
    return type === "rumah" ? "Rumah" : "Kost"
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="font-heading text-3xl font-bold text-gray-900">Data Warga</h1>
          <p className="font-body text-gray-600 mt-2">Kelola data warga dan penghuni RT Blok Herba</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="bg-transparent">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button onClick={() => setShowAddResident(true)} className="bg-emerald-600 hover:bg-emerald-700">
            <Plus className="w-4 h-4 mr-2" />
            Tambah Warga
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-body text-sm text-gray-600 mb-1">Total Warga</p>
                <p className="font-heading text-3xl font-bold text-emerald-600">450</p>
              </div>
              <div className="p-3 rounded-lg bg-emerald-50">
                <Users className="w-6 h-6 text-emerald-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-body text-sm text-gray-600 mb-1">Total KK</p>
                <p className="font-heading text-3xl font-bold text-blue-600">115</p>
              </div>
              <div className="p-3 rounded-lg bg-blue-50">
                <Home className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-body text-sm text-gray-600 mb-1">Rumah Terisi</p>
                <p className="font-heading text-3xl font-bold text-purple-600">115</p>
              </div>
              <div className="p-3 rounded-lg bg-purple-50">
                <MapPin className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-body text-sm text-gray-600 mb-1">Rumah Kosong</p>
                <p className="font-heading text-3xl font-bold text-orange-600">5</p>
              </div>
              <div className="p-3 rounded-lg bg-orange-50">
                <Home className="w-6 h-6 text-orange-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="residents" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="residents">Daftar Warga</TabsTrigger>
          <TabsTrigger value="occupancy">Okupansi Rumah</TabsTrigger>
        </TabsList>

        <TabsContent value="residents">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <CardTitle className="font-heading text-xl">Daftar Warga RT</CardTitle>
                <div className="flex gap-3 w-full sm:w-auto">
                  <div className="relative flex-1 sm:w-64">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      placeholder="Cari warga, rumah, atau jabatan..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Button variant="outline" size="sm" className="bg-transparent">
                    <Filter className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-body font-semibold text-gray-900">Nama</th>
                      <th className="text-left py-3 px-4 font-body font-semibold text-gray-900">Rumah</th>
                      <th className="text-left py-3 px-4 font-body font-semibold text-gray-900">Jabatan</th>
                      <th className="text-left py-3 px-4 font-body font-semibold text-gray-900">Kontak</th>
                      <th className="text-left py-3 px-4 font-body font-semibold text-gray-900">Detail</th>
                      <th className="text-left py-3 px-4 font-body font-semibold text-gray-900">Status</th>
                      <th className="text-left py-3 px-4 font-body font-semibold text-gray-900">Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredResidents.map((resident) => (
                      <tr key={resident.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-4 px-4">
                          <div>
                            <p className="font-body font-medium text-gray-900">{resident.name}</p>
                            <p className="font-body text-sm text-gray-500">{resident.occupation}</p>
                            <p className="font-body text-xs text-gray-400">{resident.religion}</p>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <div className="space-y-1">
                            <Badge variant="outline" className="bg-transparent">
                              {resident.house}
                            </Badge>
                            <div className="text-xs text-gray-500">
                              <div>{getPropertyTypeLabel(resident.propertyType)}</div>
                              <div>{getHousingStatusLabel(resident.housingStatus)}</div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <Badge
                            variant={resident.role === "Warga" ? "secondary" : "default"}
                            className={
                              resident.role === "Warga"
                                ? "bg-gray-100 text-gray-700"
                                : "bg-emerald-100 text-emerald-700"
                            }
                          >
                            {resident.role}
                          </Badge>
                        </td>
                        <td className="py-4 px-4">
                          <div className="space-y-1">
                            <div className="flex items-center text-sm text-gray-600">
                              <Phone className="w-3 h-3 mr-2" />
                              {resident.phone}
                            </div>
                            <div className="flex items-center text-sm text-gray-600">
                              <Mail className="w-3 h-3 mr-2" />
                              {resident.email}
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <div className="space-y-1 text-xs text-gray-600">
                            <div>KK: {resident.familyMembers} orang</div>
                            <div>{getMaritalStatusLabel(resident.maritalStatus)}</div>
                            <div>{getKtpTypeLabel(resident.ktpType)}</div>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <Badge
                            variant={resident.status === "active" ? "default" : "secondary"}
                            className={
                              resident.status === "active"
                                ? "bg-emerald-100 text-emerald-700"
                                : "bg-gray-100 text-gray-700"
                            }
                          >
                            {resident.status === "active" ? "Aktif" : "Tidak Aktif"}
                          </Badge>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex space-x-2">
                            <Button variant="ghost" size="sm">
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="text-red-600 hover:bg-red-50">
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="occupancy">
          <HouseOccupancyView />
        </TabsContent>
      </Tabs>

      {/* Add Resident Dialog */}
      <AddResidentDialog open={showAddResident} onOpenChange={setShowAddResident} />
    </div>
  )
}
