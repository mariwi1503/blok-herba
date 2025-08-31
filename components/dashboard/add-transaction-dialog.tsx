"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type AddTransactionDialogProps = {
  open: boolean;
  onOpenChange: (val: boolean) => void;
  onSubmit: (payload: {
    date: string;
    description: string;
    type: "INCOME" | "EXPENSE";
    category: string;
    amount: number;
    source: string; // ✅ ditambahkan
  }) => void;
};

export function AddTransactionDialog({
  open,
  onOpenChange,
  onSubmit,
}: AddTransactionDialogProps) {
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState<"INCOME" | "EXPENSE">("INCOME");
  const [category, setCategory] = useState("LAIN");
  const [amount, setAmount] = useState("");
  const [source, setSource] = useState(""); // ✅ state baru

  const handleSubmit = () => {
    if (!date || !description || !amount || !source) {
      alert("Lengkapi semua field!");
      return;
    }

    onSubmit({
      date,
      description,
      type,
      category,
      amount: Number(amount),
      source, // ✅ ikut dikirim
    });

    // reset form
    setDate("");
    setDescription("");
    setType("INCOME");
    setCategory("LAIN");
    setAmount("");
    setSource("");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Tambah Transaksi Baru</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium">Tanggal</label>
            <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
          </div>

          <div>
            <label className="text-sm font-medium">Deskripsi</label>
            <Input value={description} onChange={(e) => setDescription(e.target.value)} />
          </div>

          <div>
            <label className="text-sm font-medium">Jenis</label>
            <Select value={type} onValueChange={(val) => setType(val as "INCOME" | "EXPENSE")}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="INCOME">Pemasukan</SelectItem>
                <SelectItem value="EXPENSE">Pengeluaran</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium">Kategori</label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="IURAN">Iuran</SelectItem>
                <SelectItem value="INFRASTRUKTUR">Infrastruktur</SelectItem>
                <SelectItem value="ADMINISTRASI">Administrasi</SelectItem>
                <SelectItem value="LAIN">Lain-lain</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium">Jumlah</label>
            <Input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>

          {/* ✅ field baru */}
          <div>
            <label className="text-sm font-medium">Sumber Dana / Pemberi Dana</label>
            <Input
              value={source}
              onChange={(e) => setSource(e.target.value)}
              placeholder="Contoh: Donatur A, Iuran Warga, dll"
            />
          </div>

          <div className="flex justify-end">
            <Button onClick={handleSubmit} className="bg-emerald-600 hover:bg-emerald-700">
              Simpan
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
