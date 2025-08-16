"use client"

import type React from "react"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface CreateArticleDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function CreateArticleDialog({ open, onOpenChange }: CreateArticleDialogProps) {
  const categories = ["Keamanan", "Lingkungan", "Keuangan", "Rapat", "Kegiatan", "Pengumuman"]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle article creation here
    console.log("Article created")
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-heading text-xl">Tulis Artikel Baru</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div className="space-y-2">
            <Label htmlFor="title" className="font-body font-medium">
              Judul Artikel
            </Label>
            <Input id="title" placeholder="Masukkan judul artikel" required />
          </div>

          {/* Category */}
          <div className="space-y-2">
            <Label htmlFor="category" className="font-body font-medium">
              Kategori
            </Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Pilih kategori" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Excerpt */}
          <div className="space-y-2">
            <Label htmlFor="excerpt" className="font-body font-medium">
              Ringkasan
            </Label>
            <Textarea id="excerpt" placeholder="Ringkasan singkat artikel (akan ditampilkan di daftar artikel)" />
          </div>

          {/* Content */}
          <div className="space-y-2">
            <Label htmlFor="content" className="font-body font-medium">
              Konten Artikel
            </Label>
            <Textarea id="content" placeholder="Tulis konten artikel di sini..." className="min-h-[200px]" required />
          </div>

          {/* Tags */}
          <div className="space-y-2">
            <Label htmlFor="tags" className="font-body font-medium">
              Tag (Opsional)
            </Label>
            <Input id="tags" placeholder="Pisahkan dengan koma (contoh: keamanan, protokol, panduan)" />
          </div>

          {/* Publish Date */}
          <div className="space-y-2">
            <Label htmlFor="publishDate" className="font-body font-medium">
              Tanggal Publikasi
            </Label>
            <Input id="publishDate" type="datetime-local" required />
          </div>

          {/* Actions */}
          <div className="flex justify-end space-x-3 pt-4">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)} className="bg-transparent">
              Batal
            </Button>
            <Button type="button" variant="outline" className="bg-transparent">
              Simpan sebagai Draft
            </Button>
            <Button type="submit" className="bg-emerald-600 hover:bg-emerald-700">
              Publikasikan
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
