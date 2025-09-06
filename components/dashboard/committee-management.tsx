"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trash2, Pencil, Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import {
  Command,
  CommandInput,
  CommandItem,
  CommandList,
  CommandEmpty,
  CommandGroup,
} from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useToast } from "@/hooks/use-toast";

// --- Types ---
interface CommitteeMember {
  id: string;
  fullName: string;
  address: string;
  committeeLabel: string;
  phone: string;
}

interface Resident {
  id: string;
  fullName: string;
}

// --- Jabatan list ---
const POSITIONS = [
  { key: "penasehat", label: "Penasehat" },
  { key: "ketua", label: "Ketua RT" },
  { key: "sekretaris", label: "Sekretaris" },
  { key: "bendahara", label: "Bendahara" },
  { key: "bidang_sarana", label: "Bidang Sarana" },
  { key: "konsumsi", label: "Konsumsi" },
  { key: "pemuda_olahraga", label: "Pemuda & Olahraga" },
  { key: "humas", label: "Humas" },
  { key: "keagamaan", label: "Keagamaan" },
  { key: "keamanan", label: "Keamanan" },
];

export default function CommitteeManagement() {
  const { toast } = useToast();

  const [management, setManagement] = useState<CommitteeMember[]>([]);
  const [residents, setResidents] = useState<Resident[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Modal Tambah
  const [openModal, setOpenModal] = useState(false);
  const [selectedResident, setSelectedResident] = useState<Resident | null>(
    null
  );
  const [selectedPosition, setSelectedPosition] = useState<string>("");

  // Modal Update Jabatan
  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const [memberToUpdate, setMemberToUpdate] = useState<CommitteeMember | null>(
    null
  );
  const [newPosition, setNewPosition] = useState<string>("");

  // Modal Konfirmasi Hapus
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [memberToDelete, setMemberToDelete] = useState<CommitteeMember | null>(
    null
  );

  // Search state for residents
  const [searchResident, setSearchResident] = useState("");
  const [openCommand, setOpenCommand] = useState(false);

  // --- API Fetch Management ---
  async function fetchManagement() {
    try {
      const response = await fetch("/api/committee");
      if (!response.ok) throw new Error("Failed to fetch data");
      const result = await response.json();
      setManagement(result.data as CommitteeMember[]);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchManagement();
  }, []);

  // fetch residents sesuai search
  useEffect(() => {
    const delayDebounce = setTimeout(async () => {
      try {
        const response = await fetch(
          `/api/residents?search=${encodeURIComponent(searchResident)}`
        );
        if (response.ok) {
          const result = await response.json();
          setResidents(result.data as Resident[]);
        }
      } catch (err) {
        console.error(err);
      }
    }, 300);

    return () => clearTimeout(delayDebounce);
  }, [searchResident]);

  // --- HANDLERS ---
  const handleDelete = async () => {
    if (!memberToDelete) return;

    try {
      const response = await fetch(`/api/committee/${memberToDelete.id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Gagal menghapus pengurus");

      await fetchManagement();
      toast({
        title: "Berhasil",
        description: "Pengurus berhasil dihapus",
      });
      setOpenDeleteModal(false);
      setMemberToDelete(null);
    } catch (err) {
      console.error(err);
      toast({
        variant: "destructive",
        title: "Gagal",
        description: "Terjadi kesalahan saat menghapus data",
      });
    }
  };

  const handleOpenUpdate = (member: CommitteeMember) => {
    setMemberToUpdate(member);
    setNewPosition("");
    setOpenUpdateModal(true);
  };

  const handleUpdatePosition = async () => {
    if (!memberToUpdate || !newPosition) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Harap pilih jabatan baru",
      });
      return;
    }

    try {
      const response = await fetch(`/api/committee/${memberToUpdate.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ committeeId: newPosition }),
      });

      if (!response.ok) throw new Error("Gagal update jabatan");

      await fetchManagement();
      setOpenUpdateModal(false);
      setMemberToUpdate(null);
      setNewPosition("");
      toast({
        title: "Berhasil",
        description: "Jabatan berhasil diperbarui",
      });
    } catch (err) {
      console.error(err);
      toast({
        variant: "destructive",
        title: "Gagal",
        description: "Terjadi kesalahan saat update jabatan",
      });
    }
  };

  const handleAddCommittee = async () => {
    if (!selectedResident || !selectedPosition) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Harap pilih warga dan jabatan",
      });
      return;
    }

    try {
      const response = await fetch("/api/committee", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          residentId: selectedResident.id,
          committeeId: selectedPosition,
        }),
      });

      if (!response.ok) throw new Error("Gagal menambahkan pengurus baru");

      await fetchManagement();

      setOpenModal(false);
      setSelectedResident(null);
      setSelectedPosition("");
      toast({
        title: "Berhasil",
        description: "Pengurus baru berhasil ditambahkan",
      });
    } catch (err) {
      console.error(err);
      toast({
        variant: "destructive",
        title: "Gagal",
        description: "Terjadi kesalahan saat menyimpan data",
      });
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="font-heading text-3xl font-bold text-gray-900">
            Data Pengurus
          </h1>
          <p className="font-body text-gray-600 mt-2">
            Kelola daftar pengurus RT Blok Herba
          </p>
        </div>

        <Button
          onClick={() => setOpenModal(true)}
          className="bg-emerald-600 hover:bg-emerald-700 text-white flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          <span>Tambah Pengurus</span>
        </Button>
      </div>

      {/* Grid */}
      {isLoading ? (
        <p className="text-gray-500">Loading...</p>
      ) : error ? (
        <p className="text-red-500">Error: {error}</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {management.map((person) => (
            <Card
              key={person.id}
              className="border-2 transition-colors border-emerald-200 bg-emerald-50 hover:shadow-md py-0 text-center"
            >
              <CardContent className="p-3 lg:p-4 flex flex-col justify-between h-full my-0">
                <div>
                  <h3 className="font-heading text-lg font-bold text-gray-900">
                    {person.fullName}
                  </h3>
                  <p className="font-body text-base text-gray-700">
                    {person.address}
                  </p>
                  <p className="font-body text-base text-emerald-700 font-semibold">
                    {person.committeeLabel}
                  </p>
                </div>

                <div className="flex gap-2 mt-4 w-full justify-center">
                  <div className="hidden sm:flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-8 px-3 text-sm rounded-md border-emerald-300 hover:bg-gray-200"
                      onClick={() => handleOpenUpdate(person)}
                    >
                      Ganti Jabatan
                    </Button>
                    <Button
                      size="sm"
                      className="h-8 px-3 text-sm rounded-md bg-red-500 hover:bg-red-700 text-white"
                      onClick={() => {
                        setMemberToDelete(person);
                        setOpenDeleteModal(true);
                      }}
                    >
                      Hapus
                    </Button>
                  </div>

                  {/* Mobile icons */}
                  <div className="flex sm:hidden gap-2">
                    <Button
                      size="icon"
                      className="h-8 w-8 rounded-md border border-emerald-300 bg-white hover:bg-gray-200"
                      onClick={() => handleOpenUpdate(person)}
                    >
                      <Pencil className="w-4 h-4 text-emerald-700" />
                    </Button>
                    <Button
                      size="icon"
                      className="h-8 w-8 rounded-md bg-red-500 hover:bg-red-700 text-white"
                      onClick={() => {
                        setMemberToDelete(person);
                        setOpenDeleteModal(true);
                      }}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Modal Tambah Pengurus */}
      <Dialog open={openModal} onOpenChange={setOpenModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Tambah Pengurus Baru</DialogTitle>
          </DialogHeader>

          <div className="space-y-4 mt-4">
            {/* Pilih warga */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Pilih Warga
              </label>
              <Popover open={openCommand} onOpenChange={setOpenCommand}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={openCommand}
                    className="w-full justify-between"
                  >
                    {selectedResident
                      ? selectedResident.fullName
                      : "Pilih warga..."}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="p-0">
                  <Command>
                    <CommandInput
                      placeholder="Cari warga..."
                      value={searchResident}
                      onValueChange={setSearchResident}
                    />
                    <CommandList>
                      <CommandEmpty>Tidak ada hasil</CommandEmpty>
                      <CommandGroup>
                        {residents.map((res) => (
                          <CommandItem
                            key={res.id}
                            value={res.fullName}
                            onSelect={() => {
                              setSelectedResident(res);
                              setOpenCommand(false);
                              setSearchResident("");
                            }}
                          >
                            {res.fullName}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>

            {/* Pilih jabatan */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Pilih Jabatan
              </label>
              <Select
                value={selectedPosition}
                onValueChange={setSelectedPosition}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Pilih jabatan" />
                </SelectTrigger>
                <SelectContent>
                  {POSITIONS.map((pos) => (
                    <SelectItem key={pos.key} value={pos.key}>
                      {pos.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <DialogFooter className="mt-6">
            <Button
              variant="outline"
              onClick={() => setOpenModal(false)}
              className="mr-2"
            >
              Batal
            </Button>
            <Button
              className="bg-emerald-600 hover:bg-emerald-700 text-white"
              onClick={handleAddCommittee}
            >
              Simpan
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Modal Update Jabatan */}
      <Dialog open={openUpdateModal} onOpenChange={setOpenUpdateModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Ganti Jabatan</DialogTitle>
          </DialogHeader>

          <div className="space-y-4 mt-4">
            <p className="text-sm text-gray-600">
              Ubah jabatan untuk{" "}
              <span className="font-semibold">
                {memberToUpdate?.fullName}
              </span>
            </p>
            <Select value={newPosition} onValueChange={setNewPosition}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Pilih jabatan baru" />
              </SelectTrigger>
              <SelectContent>
                {POSITIONS.map((pos) => (
                  <SelectItem key={pos.key} value={pos.key}>
                    {pos.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <DialogFooter className="mt-6">
            <Button
              variant="outline"
              onClick={() => setOpenUpdateModal(false)}
              className="mr-2"
            >
              Batal
            </Button>
            <Button
              className="bg-emerald-600 hover:bg-emerald-700 text-white"
              onClick={handleUpdatePosition}
            >
              Simpan
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Modal Konfirmasi Hapus */}
      <Dialog open={openDeleteModal} onOpenChange={setOpenDeleteModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Konfirmasi Hapus</DialogTitle>
          </DialogHeader>

          <p className="text-sm text-gray-600">
            Apakah kamu yakin ingin menghapus{" "}
            <span className="font-semibold">{memberToDelete?.fullName}</span>{" "}
            dari daftar pengurus?
          </p>

          <DialogFooter className="mt-6">
            <Button
              variant="outline"
              onClick={() => setOpenDeleteModal(false)}
              className="mr-2"
            >
              Batal
            </Button>
            <Button
              className="bg-red-600 hover:bg-red-700 text-white"
              onClick={handleDelete}
            >
              Hapus
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
