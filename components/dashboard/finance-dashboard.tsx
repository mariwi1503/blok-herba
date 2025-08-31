"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FinanceOverview } from "./finance-overview";
import { TransactionHistory } from "./transaction-history";
import { AddTransactionDialog } from "./add-transaction-dialog";
import { Plus, Download, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Transaction = {
  id: string;
  createdAt: string;
  updatedAt: string;
  date: string;
  description: string;
  type: "INCOME" | "EXPENSE";
  category: string;
  amount: number;
  balance: number;
  source?: string | null;
  userId?: string | null;
};

export function FinanceDashboard() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(false);
  const [showAddTransaction, setShowAddTransaction] = useState(false);

  // filter states
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    fetchTransactions();
  }, [startDate, endDate, category]);

  const fetchTransactions = async () => {
    try {
      setLoading(true);
      const query = new URLSearchParams();
      if (startDate) query.append("startDate", startDate);
      if (endDate) query.append("endDate", endDate);
      if (category) query.append("category", category);

      const res = await fetch(`/api/transactions?${query.toString()}`);
      const result = await res.json();

      // Ambil array transaksi dari result.data
      if (Array.isArray(result.data)) {
        setTransactions(result.data);
      } else {
        setTransactions([]); // fallback kalau bukan array
      }
    } catch (err) {
      console.error("Failed to fetch transactions:", err);
      setTransactions([]); // fallback kalau error
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="font-heading text-3xl font-bold text-gray-900">
            Keuangan RT
          </h1>
          <p className="font-body text-gray-600 mt-2">
            Kelola keuangan RT dengan transparansi dan akuntabilitas
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="bg-transparent">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button
            onClick={() => setShowAddTransaction(true)}
            className="bg-emerald-600 hover:bg-emerald-700"
          >
            <Plus className="w-4 h-4 mr-2" />
            Tambah Transaksi
          </Button>
        </div>
      </div>

      {/* Finance Overview */}
      <FinanceOverview />

      {/* Filters */}
      <Card className="p-4 shadow-sm border rounded-xl">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Dari Tanggal */}
          <div className="flex flex-col">
            <label className="text-xs font-medium text-gray-500 mb-1">
              Dari Tanggal
            </label>
            <Input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="rounded-lg border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
            />
          </div>

          {/* Sampai Tanggal */}
          <div className="flex flex-col">
            <label className="text-xs font-medium text-gray-500 mb-1">
              Sampai Tanggal
            </label>
            <Input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="rounded-lg border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
            />
          </div>

          {/* Kategori */}
          <div className="flex flex-col">
            <label className="text-xs font-medium text-gray-500 mb-1">
              Kategori
            </label>
            <Select
              value={category || "ALL"}
              onValueChange={(val) => setCategory(val === "ALL" ? "" : val)}
            >
              <SelectTrigger className="rounded-lg border-gray-300 focus:border-emerald-500 focus:ring-emerald-500">
                <SelectValue placeholder="Semua Kategori" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ALL">Semua</SelectItem>
                <SelectItem value="IURAN">Iuran</SelectItem>
                <SelectItem value="INFRASTRUKTUR">Infrastruktur</SelectItem>
                <SelectItem value="ADMINISTRASI">Administrasi</SelectItem>
                <SelectItem value="LAIN">Lain-lain</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </Card>

      {/* Tabs */}
      <Tabs defaultValue="transactions-all" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="transactions-all">Semua Transaksi</TabsTrigger>
          <TabsTrigger value="transactions-in">Transaksi Masuk</TabsTrigger>
          <TabsTrigger value="transactions-out">Transaksi Keluar</TabsTrigger>
        </TabsList>

        <TabsContent value="transactions-all">
          <TransactionHistory transactionsData={transactions} />
        </TabsContent>

        <TabsContent value="transactions-in">
          <TransactionHistory
            transactionsData={transactions.filter((t) => t.type === "INCOME")}
          />
        </TabsContent>

        <TabsContent value="transactions-out">
          <TransactionHistory
            transactionsData={transactions.filter((t) => t.type === "EXPENSE")}
          />
        </TabsContent>
      </Tabs>

      {/* Add Transaction Dialog */}
      <AddTransactionDialog
        open={showAddTransaction}
        onOpenChange={setShowAddTransaction}
        onSubmit={async (payload) => {
          try {
            const res = await fetch("/api/transactions", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(payload),
            });

            const result = await res.json();
            if (result.status === "success") {
              fetchTransactions(); // refresh data
              setShowAddTransaction(false); // tutup dialog
            } else {
              alert("Gagal menambah transaksi: " + result.message);
            }
          } catch (err) {
            console.error("Error:", err);
            alert("Terjadi error saat menambah transaksi.");
          }
        }}
      />
    </div>
  );
}
