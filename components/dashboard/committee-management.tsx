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

interface CommitteeMember {
  fullName: string;
  address: string; // nomor rumah
  committeeLabel: string;
  phone: string;
}

interface Resident {
  id: string;
  fullName: string;
}

export default function CommitteeManagement() {
  const [management, setManagement] = useState<CommitteeMember[]>([]);
  const [residents, setResidents] = useState<Resident[]>([]); // list semua warga
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Modal state
  const [openModal, setOpenModal] = useState(false);
  const [selectedResident, setSelectedResident] = useState<string>("");
  const [selectedPosition, setSelectedPosition] = useState<string>("");

  useEffect(() => {
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

    async function fetchResidents() {
      // misalnya endpoint "/api/residents"
      try {
        const response = await fetch("/api/residents");
        if (response.ok) {
          const result = await response.json();
          setResidents(result.data as Resident[]);
        }
      } catch (err) {
        console.error(err);
      }
    }

    fetchManagement();
    fetchResidents();
  }, []);

  const handleChangePosition = (member: CommitteeMember) => {
    console.log("Ganti jabatan untuk:", member);
  };

  const handleDelete = (member: CommitteeMember) => {
    console.log("Hapus:", member);
  };

  const handleAddCommittee = () => {
    if (!selectedResident || !selectedPosition) {
      alert("Harap pilih warga dan jabatan");
      return;
    }

    console.log("Tambah pengurus baru:", {
      residentId: selectedResident,
      position: selectedPosition,
    });

    // TODO: panggil API POST ke /api/committee
    setOpenModal(false);
    setSelectedResident("");
    setSelectedPosition("");
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

        {/* Button tambah pengurus */}
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
          {management.map((person, idx) => (
            <Card
              key={idx}
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

                {/* Tombol Aksi */}
                <div className="flex gap-2 mt-4 w-full justify-center">
                  {/* Desktop: tombol teks */}
                  <div className="hidden sm:flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-8 px-3 text-sm rounded-md border-emerald-300 hover:bg-gray-200"
                      onClick={() => handleChangePosition(person)}
                    >
                      Ganti Jabatan
                    </Button>
                    <Button
                      size="sm"
                      className="h-8 px-3 text-sm rounded-md bg-red-500 hover:bg-red-700 text-white"
                      onClick={() => handleDelete(person)}
                    >
                      Hapus
                    </Button>
                  </div>

                  {/* Mobile: ikon saja */}
                  <div className="flex sm:hidden gap-2">
                    <Button
                      size="icon"
                      className="h-8 w-8 rounded-md border border-emerald-300 bg-white hover:bg-gray-200"
                      onClick={() => handleChangePosition(person)}
                    >
                      <Pencil className="w-4 h-4 text-emerald-700" />
                    </Button>
                    <Button
                      size="icon"
                      className="h-8 w-8 rounded-md bg-red-500 hover:bg-red-700 text-white"
                      onClick={() => handleDelete(person)}
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
              <Select
                value={selectedResident}
                onValueChange={setSelectedResident}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Pilih warga" />
                </SelectTrigger>
                <SelectContent>
                  {residents.map((res) => (
                    <SelectItem key={res.id} value={res.id}>
                      {res.fullName}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
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
                  <SelectItem value="Ketua">Ketua</SelectItem>
                  <SelectItem value="Sekretaris">Sekretaris</SelectItem>
                  <SelectItem value="Bendahara">Bendahara</SelectItem>
                  <SelectItem value="Seksi Keamanan">Seksi Keamanan</SelectItem>
                  <SelectItem value="Seksi Sosial">Seksi Sosial</SelectItem>
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
    </div>
  );
}
