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
  DialogFooter,
  DialogDescription,
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
import { useToast } from "@/components/ui/use-toast";

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
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [residentToDeleteId, setResidentToDeleteId] = useState<string | null>(null);
  const [editFormData, setEditFormData] = useState<Resident | null>(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const { toast } = useToast();
  
  // State untuk filter yang aktif
  const [activeFilters, setActiveFilters] = useState({
    gender: "",
    maritalStatus: "",
    idCardType: "",
  });

  // State untuk filter sementara di dalam dialog
  const [dialogFilters, setDialogFilters] = useState({
    gender: "",
    maritalStatus: "",
    idCardType: "",
  });

  // Fungsi untuk fetching data
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
      // Gunakan activeFilters, bukan filters
      if (activeFilters.gender) {
        url.searchParams.append("gender", activeFilters.gender);
      }
      if (activeFilters.maritalStatus) {
        url.searchParams.append("maritalStatus", activeFilters.maritalStatus);
      }
      if (activeFilters.idCardType) {
        url.searchParams.append("idCardType", activeFilters.idCardType);
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
  }, [page, debouncedSearchTerm, activeFilters]); // Dependensi sekarang menggunakan activeFilters

  // Efek untuk debouncing
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

  // Fungsi untuk mengubah state filter sementara di dialog
  const handleDialogFilterChange = (filterName: string, value: string) => {
    const filterValue = value === "all" ? "" : value;
    setDialogFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: filterValue,
    }));
  };

  // Fungsi untuk menerapkan filter
  const applyFilters = () => {
    setActiveFilters(dialogFilters);
    setPage(1); // Kembali ke halaman 1 setiap kali filter baru diterapkan
    setShowFilterDialog(false);
  };

  // Fungsi untuk mereset filter
  const resetFilters = () => {
    const newFilters = { gender: "", maritalStatus: "", idCardType: "" };
    setDialogFilters(newFilters);
    applyFilters();
  };
  
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setPage(1);
  };

  const handleEdit = (resident: Resident) => {
    setEditFormData(resident);
    setShowEditDialog(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditFormData((prev) => (prev ? { ...prev, [name]: value } : null));
  };
  
  const handleSelectChange = (name: string, value: string) => {
    setEditFormData((prev) => (prev ? { ...prev, [name]: value } : null));
  };
  
  const handleUpdate = async () => {
    if (!editFormData) return;
  
    setLoading(true);
    try {
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || window.location.origin;
      const response = await fetch(`${baseUrl}/api/residents/${editFormData.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editFormData),
      });
      const result = await response.json();
  
      if (response.ok && result.status === "success") {
        toast({
          title: "Data Berhasil Diperbarui",
          description: "Data warga berhasil disimpan.",
        });
        fetchData();
        setShowEditDialog(false);
      } else {
        toast({
          title: "Gagal Memperbarui Data",
          description: result.message || "Terjadi kesalahan saat menyimpan perubahan.",
          variant: "destructive",
        });
      }
    } catch (err) {
      toast({
        title: "Terjadi Kesalahan",
        description: "Gagal terhubung ke server.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = (id: string) => {
    setResidentToDeleteId(id);
    setShowDeleteDialog(true);
  };

  const confirmDelete = async () => {
    if (!residentToDeleteId) return;

    try {
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || window.location.origin;
      const response = await fetch(`${baseUrl}/api/residents/${residentToDeleteId}`, {
        method: "DELETE",
      });
      const result = await response.json();

      if (response.ok && result.status === "success") {
        toast({
          title: "Data Berhasil Dihapus",
          description: "Data warga telah berhasil dihapus.",
        });
        fetchData();
        setShowDeleteDialog(false);
        setResidentToDeleteId(null);
      } else {
        toast({
          title: "Gagal Menghapus Data",
          description: result.message || "Terjadi kesalahan saat menghapus data.",
          variant: "destructive",
        });
      }
    } catch (err) {
      toast({
        title: "Terjadi Kesalahan",
        description: "Gagal terhubung ke server.",
        variant: "destructive",
      });
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
                onClick={() => {
                  setDialogFilters(activeFilters);
                  setShowFilterDialog(true);
                }}
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
                  <th className="text-left py-3 px-4 hidden sm:table-cell">No. KTP</th>
                  <th className="text-left py-3 px-4 hidden sm:table-cell">No. Telepon</th>
                  <th className="text-left py-3 px-4 hidden sm:table-cell">Jenis KTP</th>
                  <th className="text-left py-3 px-4 hidden sm:table-cell">Gender</th>
                  <th className="text-left py-3 px-4 hidden sm:table-cell">Status Kawin</th>
                  <th className="text-left py-3 px-4">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {residents.length === 0 ? (
                  <tr>
                    <td colSpan={8} className="text-center py-8 text-gray-500">
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
                      <td className="py-4 px-4">{`Herba ${resident.houseNumber}`}</td>
                      <td className="py-4 px-4 hidden sm:table-cell">{resident.idCardNumber}</td>
                      <td className="py-4 px-4 hidden sm:table-cell">{resident.phone}</td>
                      <td className="py-4 px-4 hidden sm:table-cell">
                        <Badge variant="secondary">
                          {getKtpTypeLabel(resident.idCardType)}
                        </Badge>
                      </td>
                      <td className="py-4 px-4 hidden sm:table-cell">
                        <Badge variant="outline">{getGenderLabel(resident.gender)}</Badge>
                      </td>
                      <td className="py-4 px-4 hidden sm:table-cell">
                        <Badge variant="outline">
                          {getMaritalStatusLabel(resident.maritalStatus)}
                        </Badge>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex space-x-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleEdit(resident)}
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
        <DialogContent className="lg:max-w-lg">
          <DialogHeader>
            <DialogTitle>Filter Data Warga</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="gender">Jenis Kelamin</Label>
              <Select onValueChange={(value) => handleDialogFilterChange('gender', value)} value={dialogFilters.gender}>
                <SelectTrigger id="gender">
                  <SelectValue placeholder="Pilih jenis kelamin" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Semua</SelectItem>
                  <SelectItem value="L">Laki-laki</SelectItem>
                  <SelectItem value="P">Perempuan</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="maritalStatus">Status Pernikahan</Label>
              <Select onValueChange={(value) => handleDialogFilterChange('maritalStatus', value)} value={dialogFilters.maritalStatus}>
                <SelectTrigger id="maritalStatus">
                  <SelectValue placeholder="Pilih status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Semua</SelectItem>
                  <SelectItem value="KAWIN">Menikah</SelectItem>
                  <SelectItem value="BELUM_KAWIN">Belum Menikah</SelectItem>
                  <SelectItem value="DUDA_JANDA">Janda/Duda</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="idCardType">Tipe KTP</Label>
              <Select onValueChange={(value) => handleDialogFilterChange('idCardType', value)} value={dialogFilters.idCardType}>
                <SelectTrigger id="idCardType">
                  <SelectValue placeholder="Pilih tipe KTP" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Semua</SelectItem>
                    <SelectItem value="BATAM">KTP Batam</SelectItem>
                    <SelectItem value="NON_BATAM">KTP Luar Batam</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button variant="ghost" onClick={resetFilters}>
                Reset Filter
              </Button>
              <Button onClick={applyFilters}>Terapkan Filter</Button>
              <Button variant="outline" onClick={() => setShowFilterDialog(false)}>
                Batal
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
    
        {/* Dialog Edit */}
        <Dialog open={showEditDialog} onOpenChange={setShowEditDialog}>
          <DialogContent className="lg:max-w-lg">
            <DialogHeader>
              <DialogTitle>Edit Data Warga</DialogTitle>
            </DialogHeader>
            {editFormData ? (
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Nama Lengkap</Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    value={editFormData.fullName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="houseNumber">Nomor Rumah</Label>
                  <Input
                    id="houseNumber"
                    name="houseNumber"
                    value={editFormData.houseNumber}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="idCardNumber">Nomor KTP</Label>
                  <Input
                    id="idCardNumber"
                    name="idCardNumber"
                    value={editFormData.idCardNumber}
                    readOnly
                    className="bg-gray-100"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="idCardType">Jenis KTP</Label>
                  <Select
                    onValueChange={(value) => handleSelectChange('idCardType', value)}
                    value={editFormData.idCardType}
                  >
                    <SelectTrigger id="idCardType">
                      <SelectValue placeholder="Pilih jenis KTP" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="BATAM">KTP Batam</SelectItem>
                      <SelectItem value="NON_BATAM">KTP Luar Batam</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Nomor Telepon</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={editFormData.phone || '-'}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="gender">Jenis Kelamin</Label>
                  <Select
                    onValueChange={(value) => handleSelectChange('gender', value)}
                    value={editFormData.gender}
                  >
                    <SelectTrigger id="gender">
                      <SelectValue placeholder="Pilih jenis kelamin" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="L">Laki-laki</SelectItem>
                      <SelectItem value="P">Perempuan</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="maritalStatus">Status Pernikahan</Label>
                  <Select
                    onValueChange={(value) => handleSelectChange('maritalStatus', value)}
                    value={editFormData.maritalStatus}
                  >
                    <SelectTrigger id="maritalStatus">
                      <SelectValue placeholder="Pilih status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="KAWIN">Menikah</SelectItem>
                      <SelectItem value="BELUM_KAWIN">Belum Menikah</SelectItem>
                      <SelectItem value="DUDA_JANDA">Janda/Duda</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            ) : (
              <div>Gagal memuat data.</div>
            )}
            <DialogFooter>
              <Button variant="outline" onClick={() => setShowEditDialog(false)}>
                Batal
              </Button>
              <Button onClick={handleUpdate}>
                Simpan Perubahan
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Dialog Konfirmasi Hapus */}
        <Dialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Konfirmasi Penghapusan</DialogTitle>
              <DialogDescription>
                Apakah Anda yakin ingin menghapus data warga ini? Tindakan ini tidak dapat dibatalkan.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => {
                  setShowDeleteDialog(false);
                  setResidentToDeleteId(null);
                }}
              >
                Batal
              </Button>
              <Button variant="destructive" onClick={confirmDelete}>
                Ya, Hapus
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </>
  );
}