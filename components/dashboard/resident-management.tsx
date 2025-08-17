"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AddResidentDialog } from "./add-resident-dialog"
import { HouseOccupancyView } from "./house-occupancy-view"
import {
  Plus,
  Search,
  Filter,
  Download,
  Users,
  Home,
  Phone,
  Mail,
  Edit,
  Trash2,
  MapPin,
} from "lucide-react"

export function ResidentManagement() {
  const [showAddResident, setShowAddResident] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  const initialResidents = [
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
  {
    id: 8,
    name: "Bapak Bambang Hartono",
    role: "Warga",
    house: "B-018",
    phone: "0819-1234-5678",
    email: "bambang@email.com",
    familyMembers: 6,
    status: "active",
    joinDate: "2018-07-21",
    occupation: "Pegawai Negeri",
    religion: "Islam",
    maritalStatus: "menikah",
    ktpType: "ktp-batam",
    housingStatus: "milik-sendiri",
    propertyType: "rumah",
  },
  {
    id: 9,
    name: "Ibu Lestari Wulandari",
    role: "Warga",
    house: "C-030",
    phone: "0820-5678-9012",
    email: "lestari@email.com",
    familyMembers: 2,
    status: "active",
    joinDate: "2021-09-10",
    occupation: "Dosen",
    religion: "Kristen",
    maritalStatus: "menikah",
    ktpType: "ktp-luar-batam",
    housingStatus: "ngontrak",
    propertyType: "apartemen",
  },
  {
    id: 10,
    name: "Bapak Doni Setiawan",
    role: "Warga",
    house: "A-009",
    phone: "0821-6789-0123",
    email: "doni@email.com",
    familyMembers: 3,
    status: "active",
    joinDate: "2019-02-05",
    occupation: "Karyawan Swasta",
    religion: "Islam",
    maritalStatus: "menikah",
    ktpType: "ktp-batam",
    housingStatus: "milik-sendiri",
    propertyType: "rumah",
  },
  {
    id: 11,
    name: "Ibu Sri Wahyuni",
    role: "Warga",
    house: "B-021",
    phone: "0822-7890-1234",
    email: "sri@email.com",
    familyMembers: 4,
    status: "inactive",
    joinDate: "2022-12-18",
    occupation: "Perawat",
    religion: "Islam",
    maritalStatus: "menikah",
    ktpType: "ktp-luar-batam",
    housingStatus: "ngontrak",
    propertyType: "rumah",
  },
  {
    id: 12,
    name: "Bapak Rudi Santoso",
    role: "Warga",
    house: "C-040",
    phone: "0823-8901-2345",
    email: "rudi@email.com",
    familyMembers: 5,
    status: "active",
    joinDate: "2020-06-11",
    occupation: "Supir",
    religion: "Islam",
    maritalStatus: "menikah",
    ktpType: "ktp-batam",
    housingStatus: "milik-sendiri",
    propertyType: "rumah",
  },
  {
    id: 13,
    name: "Ibu Lina Marlina",
    role: "Warga",
    house: "A-011",
    phone: "0824-9012-3456",
    email: "lina@email.com",
    familyMembers: 3,
    status: "active",
    joinDate: "2021-04-19",
    occupation: "Pedagang",
    religion: "Budha",
    maritalStatus: "menikah",
    ktpType: "ktp-batam",
    housingStatus: "ngontrak",
    propertyType: "ruko",
  },
  {
    id: 14,
    name: "Bapak Fajar Nugroho",
    role: "Warga",
    house: "B-022",
    phone: "0825-0123-4567",
    email: "fajar@email.com",
    familyMembers: 2,
    status: "active",
    joinDate: "2017-03-14",
    occupation: "Tentara",
    religion: "Islam",
    maritalStatus: "menikah",
    ktpType: "ktp-batam",
    housingStatus: "milik-sendiri",
    propertyType: "rumah",
  },
  {
    id: 15,
    name: "Ibu Desi Handayani",
    role: "Warga",
    house: "C-045",
    phone: "0826-1234-5678",
    email: "desi@email.com",
    familyMembers: 1,
    status: "inactive",
    joinDate: "2023-01-09",
    occupation: "Mahasiswi",
    religion: "Kristen",
    maritalStatus: "belum-menikah",
    ktpType: "ktp-luar-batam",
    housingStatus: "kost",
    propertyType: "kost",
  },
  {
    id: 16,
    name: "Bapak Heru Kurniawan",
    role: "Warga",
    house: "A-013",
    phone: "0827-2345-6789",
    email: "heru@email.com",
    familyMembers: 4,
    status: "active",
    joinDate: "2018-09-25",
    occupation: "Wiraswasta",
    religion: "Islam",
    maritalStatus: "menikah",
    ktpType: "ktp-batam",
    housingStatus: "milik-sendiri",
    propertyType: "rumah",
  },
  {
    id: 17,
    name: "Ibu Kartika Putri",
    role: "Warga",
    house: "B-023",
    phone: "0828-3456-7890",
    email: "kartika@email.com",
    familyMembers: 3,
    status: "active",
    joinDate: "2021-07-14",
    occupation: "Designer",
    religion: "Hindu",
    maritalStatus: "menikah",
    ktpType: "ktp-luar-batam",
    housingStatus: "ngontrak",
    propertyType: "apartemen",
  },
  {
    id: 18,
    name: "Bapak Yusuf Maulana",
    role: "Warga",
    house: "C-050",
    phone: "0829-4567-8901",
    email: "yusuf@email.com",
    familyMembers: 6,
    status: "active",
    joinDate: "2016-11-30",
    occupation: "Pengusaha",
    religion: "Islam",
    maritalStatus: "menikah",
    ktpType: "ktp-batam",
    housingStatus: "milik-sendiri",
    propertyType: "rumah",
  },
  {
    id: 19,
    name: "Ibu Melati Ayu",
    role: "Warga",
    house: "A-015",
    phone: "0830-5678-9012",
    email: "melati@email.com",
    familyMembers: 2,
    status: "active",
    joinDate: "2020-02-20",
    occupation: "Karyawan Swasta",
    religion: "Islam",
    maritalStatus: "menikah",
    ktpType: "ktp-batam",
    housingStatus: "milik-sendiri",
    propertyType: "rumah",
  },
  {
    id: 20,
    name: "Bapak Anton Prasetyo",
    role: "Warga",
    house: "B-024",
    phone: "0831-6789-0123",
    email: "anton@email.com",
    familyMembers: 4,
    status: "inactive",
    joinDate: "2023-03-22",
    occupation: "Karyawan Swasta",
    religion: "Kristen",
    maritalStatus: "menikah",
    ktpType: "ktp-luar-batam",
    housingStatus: "ngontrak",
    propertyType: "kost",
  },
  {
    id: 21,
    name: "Ibu Wulan Dewi",
    role: "Warga",
    house: "C-060",
    phone: "0832-7890-1234",
    email: "wulan@email.com",
    familyMembers: 3,
    status: "active",
    joinDate: "2019-05-18",
    occupation: "Guru",
    religion: "Islam",
    maritalStatus: "menikah",
    ktpType: "ktp-batam",
    housingStatus: "milik-sendiri",
    propertyType: "rumah",
  },
  {
    id: 22,
    name: "Bapak Dedi Saputra",
    role: "Warga",
    house: "A-018",
    phone: "0833-8901-2345",
    email: "dedi@email.com",
    familyMembers: 2,
    status: "active",
    joinDate: "2017-10-10",
    occupation: "Polisi",
    religion: "Islam",
    maritalStatus: "menikah",
    ktpType: "ktp-batam",
    housingStatus: "milik-sendiri",
    propertyType: "rumah",
  },
  {
    id: 23,
    name: "Ibu Clara Melinda",
    role: "Warga",
    house: "B-026",
    phone: "0834-9012-3456",
    email: "clara@email.com",
    familyMembers: 1,
    status: "inactive",
    joinDate: "2022-11-03",
    occupation: "Mahasiswi",
    religion: "Kristen",
    maritalStatus: "belum-menikah",
    ktpType: "ktp-luar-batam",
    housingStatus: "kost",
    propertyType: "kost",
  },
  {
    id: 24,
    name: "Bapak Rio Hidayat",
    role: "Warga",
    house: "C-070",
    phone: "0835-0123-4567",
    email: "rio@email.com",
    familyMembers: 5,
    status: "active",
    joinDate: "2018-06-07",
    occupation: "Sopir",
    religion: "Islam",
    maritalStatus: "menikah",
    ktpType: "ktp-batam",
    housingStatus: "milik-sendiri",
    propertyType: "rumah",
  },
  {
    id: 25,
    name: "Ibu Ayu Lestari",
    role: "Warga",
    house: "A-020",
    phone: "0836-1234-5678",
    email: "ayu@email.com",
    familyMembers: 3,
    status: "active",
    joinDate: "2019-09-15",
    occupation: "Perawat",
    religion: "Hindu",
    maritalStatus: "menikah",
    ktpType: "ktp-batam",
    housingStatus: "milik-sendiri",
    propertyType: "rumah",
  },
  {
    id: 26,
    name: "Bapak Bagus Adi",
    role: "Warga",
    house: "B-027",
    phone: "0837-2345-6789",
    email: "bagus@email.com",
    familyMembers: 2,
    status: "inactive",
    joinDate: "2023-04-11",
    occupation: "Karyawan Swasta",
    religion: "Islam",
    maritalStatus: "menikah",
    ktpType: "ktp-luar-batam",
    housingStatus: "ngontrak",
    propertyType: "apartemen",
  },
  {
    id: 27,
    name: "Ibu Rani Oktaviani",
    role: "Warga",
    house: "C-080",
    phone: "0838-3456-7890",
    email: "rani@email.com",
    familyMembers: 4,
    status: "active",
    joinDate: "2020-12-01",
    occupation: "Guru",
    religion: "Budha",
    maritalStatus: "menikah",
    ktpType: "ktp-batam",
    housingStatus: "milik-sendiri",
    propertyType: "rumah",
  },
  {
    id: 28,
    name: "Bapak Sandi Maulana",
    role: "Warga",
    house: "A-022",
    phone: "0839-4567-8901",
    email: "sandi@email.com",
    familyMembers: 6,
    status: "active",
    joinDate: "2016-08-20",
    occupation: "Wiraswasta",
    religion: "Islam",
    maritalStatus: "menikah",
    ktpType: "ktp-batam",
    housingStatus: "milik-sendiri",
    propertyType: "rumah",
  },
  {
    id: 29,
    name: "Ibu Dina Marlina",
    role: "Warga",
    house: "B-028",
    phone: "0840-5678-9012",
    email: "dina@email.com",
    familyMembers: 2,
    status: "inactive",
    joinDate: "2023-05-19",
    occupation: "Ibu Rumah Tangga",
    religion: "Kristen",
    maritalStatus: "menikah",
    ktpType: "ktp-luar-batam",
    housingStatus: "ngontrak",
    propertyType: "rumah",
  },
  ]

  const [residents, setResidents] = useState(initialResidents)
  const [deleteId, setDeleteId] = useState<number | null>(null)

  const filteredResidents = residents.filter(
    (resident) =>
      resident.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resident.house.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resident.role.toLowerCase().includes(searchTerm.toLowerCase())
  )

  // pagination logic
  const totalPages = Math.ceil(filteredResidents.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedResidents = filteredResidents.slice(
    startIndex,
    startIndex + itemsPerPage
  )

  const handleEdit = (id: number) => {
    alert(`Edit data dengan ID ${id}`)
    // di sini bisa buka modal atau form edit
  }

  const handleDelete = (id: number) => {
    if (confirm("Yakin ingin menghapus data ini?")) {
      setResidents(residents.filter((r) => r.id !== id))
    }
  }

  const confirmDelete = () => {
    if (deleteId !== null) {
      setResidents(residents.filter((r) => r.id !== deleteId))
      setDeleteId(null)
    }}

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
      {/* ... Header dan Stats tetap sama ... */}
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
                      onChange={(e) => {
                        setSearchTerm(e.target.value)
                        setCurrentPage(1) // reset page saat search
                      }}
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
                      <th className="text-left py-3 px-4">Nama</th>
                      <th className="text-left py-3 px-4">Rumah</th>
                      <th className="text-left py-3 px-4">Jabatan</th>
                      <th className="text-left py-3 px-4">Kontak</th>
                      <th className="text-left py-3 px-4">Detail</th>
                      <th className="text-left py-3 px-4">Status</th>
                      <th className="text-left py-3 px-4">Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedResidents.map((resident) => (
                      <tr
                        key={resident.id}
                        className="border-b border-gray-100 hover:bg-gray-50"
                      >
                        <td className="py-4 px-4">{resident.name}</td>
                        <td className="py-4 px-4">{resident.house}</td>
                        <td className="py-4 px-4">{resident.role}</td>
                        <td className="py-4 px-4">{resident.phone}</td>
                        <td className="py-4 px-4">{getMaritalStatusLabel(resident.maritalStatus)}</td>
                        <td className="py-4 px-4">{resident.status}</td>
                        <td className="py-4 px-4">
                          <div className="flex space-x-2">
                            <Button variant="ghost" size="sm" onClick={() => handleEdit(resident.id)}>
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-red-600 hover:bg-red-50"
                              onClick={() => handleDelete(resident.id)}
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="flex justify-between items-center mt-4">
                <p className="text-sm text-gray-600">
                  Halaman {currentPage} dari {totalPages}
                </p>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage((p) => p - 1)}
                  >
                    Prev
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage((p) => p + 1)}
                  >
                    Next
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="occupancy">
          <HouseOccupancyView />
        </TabsContent>
      </Tabs>

      <AddResidentDialog open={showAddResident} onOpenChange={setShowAddResident} />
    </div>
  )
}
