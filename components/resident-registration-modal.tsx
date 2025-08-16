"use client"

import type React from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

interface ResidentRegistrationModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ResidentRegistrationModal({ open, onOpenChange }: ResidentRegistrationModalProps) {
  const houses = ["A-001", "A-002", "A-003", "B-009", "B-010", "C-017", "C-018"]
  const religions = ["Islam", "Kristen", "Katolik", "Hindu", "Buddha", "Konghucu", "Lainnya"]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle resident registration here
    alert("Pendaftaran berhasil! Tim RT akan menghubungi Anda segera.")
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-heading text-xl">Pendaftaran Warga Baru</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div className="space-y-4">
            <h3 className="font-heading text-lg font-semibold text-gray-900">Informasi Pribadi</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="font-body font-medium">
                  Nama Lengkap
                </Label>
                <Input id="name" placeholder="Masukkan nama lengkap" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="nik" className="font-body font-medium">
                  NIK
                </Label>
                <Input id="nik" placeholder="Nomor Induk Kependudukan" required />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone" className="font-body font-medium">
                  Nomor Telepon
                </Label>
                <Input id="phone" type="tel" placeholder="0812-3456-7890" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="font-body font-medium">
                  Email
                </Label>
                <Input id="email" type="email" placeholder="email@example.com" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="occupation" className="font-body font-medium">
                  Pekerjaan
                </Label>
                <Input id="occupation" placeholder="Pekerjaan/Profesi" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="religion" className="font-body font-medium">
                  Agama
                </Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih agama" />
                  </SelectTrigger>
                  <SelectContent>
                    {religions.map((religion) => (
                      <SelectItem key={religion} value={religion}>
                        {religion}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-3">
              <Label className="font-body font-medium">Status Pernikahan</Label>
              <RadioGroup defaultValue="belum-menikah" className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="belum-menikah" id="single" />
                  <Label htmlFor="single" className="font-body text-sm">
                    Belum Menikah
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="menikah" id="married" />
                  <Label htmlFor="married" className="font-body text-sm">
                    Menikah
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="janda-duda" id="divorced" />
                  <Label htmlFor="divorced" className="font-body text-sm">
                    Janda/Duda
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-3">
              <Label className="font-body font-medium">Jenis KTP</Label>
              <RadioGroup defaultValue="ktp-batam" className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="ktp-batam" id="ktp-batam" />
                  <Label htmlFor="ktp-batam" className="font-body text-sm">
                    KTP Batam
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="ktp-luar-batam" id="ktp-luar" />
                  <Label htmlFor="ktp-luar" className="font-body text-sm">
                    KTP Luar Batam
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>

          {/* Housing Information */}
          <div className="space-y-4">
            <h3 className="font-heading text-lg font-semibold text-gray-900">Informasi Tempat Tinggal</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="house" className="font-body font-medium">
                  Nomor Rumah
                </Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih nomor rumah" />
                  </SelectTrigger>
                  <SelectContent>
                    {houses.map((house) => (
                      <SelectItem key={house} value={house}>
                        {house}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="familyMembers" className="font-body font-medium">
                  Jumlah Anggota Keluarga
                </Label>
                <Input id="familyMembers" type="number" placeholder="0" min="1" required />
              </div>
            </div>

            <div className="space-y-3">
              <Label className="font-body font-medium">Jenis Properti</Label>
              <RadioGroup defaultValue="rumah" className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="rumah" id="house" />
                  <Label htmlFor="house" className="font-body text-sm">
                    Rumah
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="kost" id="boarding" />
                  <Label htmlFor="boarding" className="font-body text-sm">
                    Kost
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-3">
              <Label className="font-body font-medium">Status Kepemilikan</Label>
              <RadioGroup defaultValue="milik-sendiri" className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="milik-sendiri" id="owned" />
                  <Label htmlFor="owned" className="font-body text-sm">
                    Rumah Sendiri
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="ngontrak" id="rented" />
                  <Label htmlFor="rented" className="font-body text-sm">
                    Ngontrak
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>

          {/* Additional Information */}
          <div className="space-y-4">
            <h3 className="font-heading text-lg font-semibold text-gray-900">Informasi Tambahan</h3>

            <div className="space-y-2">
              <Label htmlFor="joinDate" className="font-body font-medium">
                Tanggal Bergabung
              </Label>
              <Input id="joinDate" type="date" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes" className="font-body font-medium">
                Catatan (Opsional)
              </Label>
              <Textarea id="notes" placeholder="Catatan tambahan" />
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row justify-end gap-3 pt-4">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)} className="bg-transparent">
              Batal
            </Button>
            <Button type="submit" className="bg-emerald-600 hover:bg-emerald-700">
              Daftar Sekarang
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
