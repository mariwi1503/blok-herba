"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, ArrowDownRight, Eye, Edit, Trash2 } from "lucide-react"

type Transaction = {
   id: string
  createdAt: string
  updatedAt: string
  date: string
  description: string
  type: "INCOME" | "EXPENSE"
  category: string
  amount: number
  balance: number
  source?: string | null
  userId?: string | null
}

interface TransactionHistoryProps {
  type?: "INCOME" | "EXPENSE" // optional, kalau tidak dikirim tampilkan semua
  transactionsData: Transaction[] // properti baru untuk data transaksi
}

export function TransactionHistory({ type, transactionsData }: TransactionHistoryProps) {
  // filter berdasarkan props
  const filteredTransactions = type
    ? transactionsData.filter((trx) => trx.type === type)
    : transactionsData

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(amount)
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    })
  }

  return (
    <Card className="border-0 shadow-lg mb-2 lg:mb-6">
      <CardHeader>
        <CardTitle className="font-heading text-xl">
          Riwayat Transaksi {type === "INCOME" ? "Masuk" : type === "EXPENSE" ? "Keluar" : ""}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-body font-semibold text-gray-900">No.</th>
                <th className="text-left py-3 px-4 font-body font-semibold text-gray-900">Tanggal</th>
                <th className="text-left py-3 px-4 font-body font-semibold text-gray-900">Deskripsi</th>
                <th className="text-left py-3 px-4 font-body font-semibold text-gray-900">Kategori</th>
                <th className="text-left py-3 px-4 font-body font-semibold text-gray-900">Jumlah</th>
                <th className="text-left py-3 px-4 font-body font-semibold text-gray-900">Pencatat</th>
                <th className="text-left py-3 px-4 font-body font-semibold text-gray-900">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {filteredTransactions.map((transaction, i) => (
                <tr key={transaction.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-4">
                    <span className="font-body font-medium text-gray-900">{i + 1}</span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="font-body text-gray-600">{formatDate(transaction.date)}</span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center">
                      <div
                        className={`p-2 rounded-full mr-3 ${
                          transaction.type === "INCOME" ? "bg-emerald-50 text-emerald-600" : "bg-red-50 text-red-600"
                        }`}
                      >
                        {transaction.type === "INCOME" ? (
                          <ArrowUpRight className="w-4 h-4" />
                        ) : (
                          <ArrowDownRight className="w-4 h-4" />
                        )}
                      </div>
                      <div>
                        <p className="font-body font-medium text-gray-900">{transaction.description}</p>
                        <p className="font-body text-sm text-gray-500">{transaction.source}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                      {transaction.category}
                    </Badge>
                  </td>
                  <td className="py-4 px-4">
                    <span
                      className={`font-heading font-semibold ${
                        transaction.type === "INCOME" ? "text-emerald-600" : "text-red-600"
                      }`}
                    >
                      {transaction.type === "INCOME" ? "+" : "-"}
                      {formatCurrency(transaction.amount)}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <Badge
                      // variant={transaction.status === "completed" ? "default" : "secondary"}
                      // variant={"secondary"}
                      // className={
                      //   transaction.status === "completed"
                      //     ? "bg-emerald-100 text-emerald-700"
                      //     : "bg-yellow-100 text-yellow-700"
                      // }
                      className="bg-gray-100 text-gray-700"
                    >
                      {"Bendahara"}
                    </Badge>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-red-600 hover:bg-red-50">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}