"use client"

import type React from "react"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface CreateAlbumDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function CreateAlbumDialog({ open, onOpenChange }: CreateAlbumDialogProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle album creation here
    console.log("Album created")
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="font-heading text-xl">Buat Album Baru</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Album Name */}
          <div className="space-y-2">
            <Label htmlFor="name" className="font-body font-medium">
              Nama Album
            </Label>
            <Input id="name" placeholder="Masukkan nama album" required />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="description" className="font-body font-medium">
              Deskripsi
            </Label>
            <Textarea id="description" placeholder="Deskripsi album (opsional)" />
          </div>

          {/* Privacy */}
          <div className="space-y-2">
            <Label htmlFor="privacy" className="font-body font-medium">
              Privasi
            </Label>
            <Select defaultValue="public">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="public">Publik - Semua warga dapat melihat</SelectItem>
                <SelectItem value="private">Privat - Hanya pengurus yang dapat melihat</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Date */}
          <div className="space-y-2">
            <Label htmlFor="date" className="font-body font-medium">
              Tanggal Kegiatan
            </Label>
            <Input id="date" type="date" required />
          </div>

          {/* Actions */}
          <div className="flex justify-end space-x-3 pt-4">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)} className="bg-transparent">
              Batal
            </Button>
            <Button type="submit" className="bg-emerald-600 hover:bg-emerald-700">
              Buat Album
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
