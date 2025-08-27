// components/admin-settings/ResidentList.jsx
"use client";

import { useState, useEffect, useCallback } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Search,
  Filter,
  Edit,
  Trash2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface Resident {
  id: string;
  fullName: string;
  idCardNumber: string;
  idCardType: "BATAM" | "NON_BATAM";
  phone?: string;
  maritalStatus: "KAWIN" | "BELUM_KAWIN" | "DUDA_JANDA";
  gender: "L" | "P";
  isHead: boolean;
  image?: string;
  houseNumber: string;
}

export function ResidentList() {
  const [residents, setResidents] = useState<Resident[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showFilterDialog, setShowFilterDialog] = useState(false);
  
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [filters, setFilters] = useState({
    gender: "",
    maritalStatus: "",
    idCardType: "",
  });

  // Fungsi untuk fetching data dipindahkan ke sini
  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || window.location.origin;
      const url = new URL(`${baseUrl}/api/residents`);
      
      url.searchParams.append("page", page.toString());
      url.searchParams.append("per_page", "10");
      if (debouncedSearchTerm) {
        url.searchParams.append("search", debouncedSearchTerm);
      }
      if (filters.gender) {
        url.searchParams.append("gender", filters.gender);
      }
      if (filters.maritalStatus) {
        url.searchParams.append("maritalStatus", filters.maritalStatus);
      }
      if (filters.idCardType) {
        url.searchParams.append("idCardType", filters.idCardType);
      }

      const response = await fetch(url.toString());
      if (!response.ok) {
        throw new Error("Gagal mengambil data warga.");
      }
      const result = await response.json();
      
      setResidents(result.data);
      setTotalPages(result.meta.lastPage);

    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Terjadi kesalahan yang tidak diketahui.");
      }
    } finally {
      setLoading(false);
    }
  }, [page, debouncedSearchTerm, filters]); // Ditambahkan ke dependencies

  // Efek untuk debouncing: menunda pembaruan `debouncedSearchTerm`
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500); 

    return () => clearTimeout(timerId); 
  }, [searchTerm]);

  // Efek utama untuk mengambil data
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleFilterChange = (filterName: string, value: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: value,
    }));
    setPage(1);
  };
  
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setPage(1);
  };

  const handleEdit = (id: string) => {
    alert(`Aksi: Edit data warga dengan ID ${id}`);
  };

  const handleDelete = async (id: string) => {
    if (confirm("Apakah Anda yakin ingin menghapus data warga ini?")) {
      try {
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || window.location.origin;
        const response = await fetch(`${baseUrl}/api/residents/${id}`, {
          method: "DELETE",
        });
        if (!response.ok) {
          throw new Error("Gagal menghapus data.");
        }
        alert("Data berhasil dihapus.");
        fetchData(); // Sekarang fetchData bisa diakses di sini
      } catch (err) {
        if (err instanceof Error) {
          alert(err.message);
        } else {
          alert("Terjadi kesalahan yang tidak diketahui.");
        }
      }
    }
  };
  
  const getMaritalStatusLabel = (status: string) => {
    switch (status) {
      case "KAWIN":
        return "Menikah";
      case "BELUM_KAWIN":
        return "Belum Menikah";
      case "DUDA_JANDA":
        return "Janda/Duda";
      default:
        return status;
    }
  };

  const getKtpTypeLabel = (type: string) => {
    return type === "BATAM" ? "KTP Batam" : "KTP Luar Batam";
  };

  const getGenderLabel = (gender: string) => {
    return gender === "L" ? "Laki-laki" : "Perempuan";
  };
  
  if (loading) return <div>Memuat data...</div>;
  if (error) return <div>Terjadi kesalahan: {error}</div>;

  return (
    <>
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <CardTitle className="font-heading text-xl">Daftar Warga RT</CardTitle>
            <div className="flex gap-3 w-full sm:w-auto">
              <div className="relative flex-1 sm:w-64">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Cari warga, rumah, atau nomor KTP..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="pl-10"
                />
              </div>
              <Button
                variant="outline"
                size="sm"
                className="bg-transparent"
                onClick={() => setShowFilterDialog(true)}
              >
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
                  <th className="text-left py-3 px-4">No. KTP</th>
                  <th className="text-left py-3 px-4">Jenis KTP</th>
                  <th className="text-left py-3 px-4">Gender</th>
                  <th className="text-left py-3 px-4">Status Kawin</th>
                  <th className="text-left py-3 px-4">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {residents.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="text-center py-8 text-gray-500">
                      Tidak ada data warga ditemukan.
                    </td>
                  </tr>
                ) : (
                  residents.map((resident) => (
                    <tr
                      key={resident.id}
                      className="border-b border-gray-100 hover:bg-gray-50"
                    >
                      <td className="py-4 px-4">{resident.fullName}</td>
                      <td className="py-4 px-4">{resident.houseNumber}</td>
                      <td className="py-4 px-4">{resident.idCardNumber}</td>
                      <td className="py-4 px-4">
                        <Badge variant="secondary">
                          {getKtpTypeLabel(resident.idCardType)}
                        </Badge>
                      </td>
                      <td className="py-4 px-4">
                        <Badge variant="outline">{getGenderLabel(resident.gender)}</Badge>
                      </td>
                      <td className="py-4 px-4">
                        <Badge variant="outline">
                          {getMaritalStatusLabel(resident.maritalStatus)}
                        </Badge>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex space-x-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleEdit(resident.id)}
                          >
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
                  ))
                )}
              </tbody>
            </table>
          </div>
          <div className="flex justify-between items-center mt-4">
            <p className="text-sm text-gray-600">
              Halaman {page} dari {totalPages}
            </p>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                disabled={page === 1}
                onClick={() => setPage(page - 1)}
              >
                <ChevronLeft className="w-4 h-4" /> Prev
              </Button>
              <Button
                variant="outline"
                size="sm"
                disabled={page === totalPages}
                onClick={() => setPage(page + 1)}
              >
                Next <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Dialog Filter */}
      <Dialog open={showFilterDialog} onOpenChange={setShowFilterDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Filter Data Warga</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="gender">Jenis Kelamin</Label>
              <Select onValueChange={(value) => handleFilterChange('gender', value)} value={filters.gender}>
                <SelectTrigger id="gender">
                  <SelectValue placeholder="Pilih jenis kelamin" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Semua</SelectItem>
                  <SelectItem value="L">Laki-laki</SelectItem>
                  <SelectItem value="P">Perempuan</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="maritalStatus">Status Pernikahan</Label>
              <Select onValueChange={(value) => handleFilterChange('maritalStatus', value)} value={filters.maritalStatus}>
                <SelectTrigger id="maritalStatus">
                  <SelectValue placeholder="Pilih status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Semua</SelectItem>
                  <SelectItem value="KAWIN">Menikah</SelectItem>
                  <SelectItem value="BELUM_KAWIN">Belum Menikah</SelectItem>
                  <SelectItem value="DUDA_JANDA">Janda/Duda</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="idCardType">Tipe KTP</Label>
              <Select onValueChange={(value) => handleFilterChange('idCardType', value)} value={filters.idCardType}>
                <SelectTrigger id="idCardType">
                  <SelectValue placeholder="Pilih tipe KTP" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Semua</SelectItem>
                  <SelectItem value="BATAM">KTP Batam</SelectItem>
                  <SelectItem value="NON_BATAM">KTP Luar Batam</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <Button onClick={() => setShowFilterDialog(false)}>Tutup</Button>
        </DialogContent>
      </Dialog>
    </>
  );
}