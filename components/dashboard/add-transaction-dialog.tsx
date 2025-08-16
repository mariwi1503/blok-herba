"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

interface AddTransactionDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function AddTransactionDialog({ open, onOpenChange }: AddTransactionDialogProps) {
  const [transactionType, setTransactionType] = useState<"income" | "expense">("income")

  const incomeCategories = ["Iuran Bulanan", "Sumbangan", "Denda", "Lain-lain"]
  const expenseCategories = ["Kebersihan", "Infrastruktur", "Konsumsi", "Administrasi", "Keamanan", "Lain-lain"]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Transaction submitted")
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="font-heading text-xl">Tambah Transaksi Baru</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Transaction Type */}
          <div className="space-y-3">
            <Label className="font-body font-medium">Jenis Transaksi</Label>
            <RadioGroup
              value={transactionType}
              onValueChange={(value) => setTransactionType(value as "income" | "expense")}
              className="flex space-x-6"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="income" id="income" />
                <Label htmlFor="income" className="font-body">
                  Pemasukan
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="expense" id="expense" />
                <Label htmlFor="expense" className="font-body">
                  Pengeluaran
                </Label>
              </div>
            </RadioGroup>
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
                {(transactionType === "income" ? incomeCategories : expenseCategories).map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Amount */}
          <div className="space-y-2">
            <Label htmlFor="amount" className="font-body font-medium">
              Jumlah (Rp)
            </Label>
            <Input id="amount" type="number" placeholder="0" required />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="description" className="font-body font-medium">
              Deskripsi
            </Label>
            <Textarea id="description" placeholder="Masukkan deskripsi transaksi" required />
          </div>

          {/* Date */}
          <div className="space-y-2">
            <Label htmlFor="date" className="font-body font-medium">
              Tanggal
            </Label>
            <Input id="date" type="date" required />
          </div>

          {/* Payer/Vendor */}
          <div className="space-y-2">
            <Label htmlFor="party" className="font-body font-medium">
              {transactionType === "income" ? "Pembayar" : "Vendor/Penerima"}
            </Label>
            <Input
              id="party"
              placeholder={transactionType === "income" ? "Nama pembayar" : "Nama vendor/penerima"}
              required
            />
          </div>

          {/* Actions */}
          <div className="flex justify-end space-x-3 pt-4">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)} className="bg-transparent">
              Batal
            </Button>
            <Button type="submit" className="bg-emerald-600 hover:bg-emerald-700">
              Simpan Transaksi
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
