"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Upload, X, ImageIcon } from "lucide-react"

interface UploadImageDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function UploadImageDialog({ open, onOpenChange }: UploadImageDialogProps) {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])

  const albums = ["Gotong Royong Desember 2024", "HUT RI ke-79", "Rapat RT November"]

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFiles(Array.from(e.target.files))
    }
  }

  const removeFile = (index: number) => {
    setSelectedFiles(selectedFiles.filter((_, i) => i !== index))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle file upload here
    console.log("Files uploaded:", selectedFiles)
    onOpenChange(false)
    setSelectedFiles([])
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="font-heading text-xl">Upload Foto</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* File Upload */}
          <div className="space-y-2">
            <Label className="font-body font-medium">Pilih Foto</Label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-emerald-400 transition-colors">
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleFileSelect}
                className="hidden"
                id="file-upload"
              />
              <label htmlFor="file-upload" className="cursor-pointer">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="font-body text-gray-600 mb-2">Klik untuk memilih foto atau drag & drop</p>
                <p className="font-body text-sm text-gray-500">PNG, JPG, JPEG hingga 10MB per file</p>
              </label>
            </div>
          </div>

          {/* Selected Files */}
          {selectedFiles.length > 0 && (
            <div className="space-y-2">
              <Label className="font-body font-medium">File Terpilih ({selectedFiles.length})</Label>
              <div className="space-y-2 max-h-40 overflow-y-auto">
                {selectedFiles.map((file, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <ImageIcon className="w-5 h-5 text-gray-500" />
                      <div>
                        <p className="font-body text-sm font-medium text-gray-900">{file.name}</p>
                        <p className="font-body text-xs text-gray-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                      </div>
                    </div>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => removeFile(index)}
                      className="text-red-600 hover:bg-red-50"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Album Selection */}
          <div className="space-y-2">
            <Label htmlFor="album" className="font-body font-medium">
              Album
            </Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Pilih album atau buat baru" />
              </SelectTrigger>
              <SelectContent>
                {albums.map((album) => (
                  <SelectItem key={album} value={album}>
                    {album}
                  </SelectItem>
                ))}
                <SelectItem value="new">+ Buat Album Baru</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="description" className="font-body font-medium">
              Deskripsi (Opsional)
            </Label>
            <Textarea id="description" placeholder="Tambahkan deskripsi untuk foto-foto ini" />
          </div>

          {/* Tags */}
          <div className="space-y-2">
            <Label htmlFor="tags" className="font-body font-medium">
              Tag (Opsional)
            </Label>
            <Input id="tags" placeholder="Pisahkan dengan koma (contoh: gotong royong, kebersihan, warga)" />
          </div>

          {/* Actions */}
          <div className="flex justify-end space-x-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                onOpenChange(false)
                setSelectedFiles([])
              }}
              className="bg-transparent"
            >
              Batal
            </Button>
            <Button type="submit" disabled={selectedFiles.length === 0} className="bg-emerald-600 hover:bg-emerald-700">
              Upload {selectedFiles.length > 0 && `(${selectedFiles.length} file)`}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
