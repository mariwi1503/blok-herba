import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, ArrowDownRight, Eye, Edit, Trash2 } from "lucide-react"

type Transaction = {
  id: string
  type: "income" | "expense"
  category: string
  description: string
  amount: number
  date: string
  status: "completed" | "pending"
  payer?: string
  vendor?: string
}

interface TransactionHistoryProps {
  type?: "income" | "expense" // optional, kalau tidak dikirim tampilkan semua
}

export function TransactionHistory({ type }: TransactionHistoryProps) {
  const transactions: Transaction[] = [
    {
      id: "TRX001",
      type: "income",
      category: "Iuran Bulanan",
      description: "Iuran Bulanan Desember 2024",
      amount: 2300000,
      date: "2024-12-15",
      status: "completed",
      payer: "Warga RT",
    },
    {
      id: "TRX002",
      type: "expense",
      category: "Kebersihan",
      description: "Pembelian Alat Kebersihan",
      amount: 450000,
      date: "2024-12-12",
      status: "completed",
      vendor: "Toko Sinar Jaya",
    },
    {
      id: "TRX003",
      type: "income",
      category: "Sumbangan",
      description: "Sumbangan Kegiatan 17 Agustus",
      amount: 1200000,
      date: "2024-12-10",
      status: "completed",
      payer: "Donatur",
    },
    {
      id: "TRX004",
      type: "expense",
      category: "Infrastruktur",
      description: "Perbaikan Lampu Jalan",
      amount: 800000,
      date: "2024-12-08",
      status: "completed",
      vendor: "CV Listrik Mandiri",
    },
    {
      id: "TRX005",
      type: "expense",
      category: "Konsumsi",
      description: "Konsumsi Rapat RT",
      amount: 350000,
      date: "2024-12-05",
      status: "completed",
      vendor: "Catering Berkah",
    },
    {
      id: "TRX006",
      type: "income",
      category: "Iuran Bulanan",
      description: "Iuran Bulanan November 2024",
      amount: 2250000,
      date: "2024-11-15",
      status: "completed",
      payer: "Warga RT",
    },
  ]

  // filter berdasarkan props
  const filteredTransactions = type
    ? transactions.filter((trx) => trx.type === type)
    : transactions

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
          Riwayat Transaksi {type === "income" ? "Masuk" : type === "expense" ? "Keluar" : ""}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-body font-semibold text-gray-900">ID</th>
                <th className="text-left py-3 px-4 font-body font-semibold text-gray-900">Tanggal</th>
                <th className="text-left py-3 px-4 font-body font-semibold text-gray-900">Deskripsi</th>
                <th className="text-left py-3 px-4 font-body font-semibold text-gray-900">Kategori</th>
                <th className="text-left py-3 px-4 font-body font-semibold text-gray-900">Jumlah</th>
                <th className="text-left py-3 px-4 font-body font-semibold text-gray-900">Status</th>
                <th className="text-left py-3 px-4 font-body font-semibold text-gray-900">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {filteredTransactions.map((transaction) => (
                <tr key={transaction.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-4">
                    <span className="font-body font-medium text-gray-900">{transaction.id}</span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="font-body text-gray-600">{formatDate(transaction.date)}</span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center">
                      <div
                        className={`p-2 rounded-full mr-3 ${
                          transaction.type === "income" ? "bg-emerald-50 text-emerald-600" : "bg-red-50 text-red-600"
                        }`}
                      >
                        {transaction.type === "income" ? (
                          <ArrowUpRight className="w-4 h-4" />
                        ) : (
                          <ArrowDownRight className="w-4 h-4" />
                        )}
                      </div>
                      <div>
                        <p className="font-body font-medium text-gray-900">{transaction.description}</p>
                        <p className="font-body text-sm text-gray-500">{transaction.payer || transaction.vendor}</p>
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
                        transaction.type === "income" ? "text-emerald-600" : "text-red-600"
                      }`}
                    >
                      {transaction.type === "income" ? "+" : "-"}
                      {formatCurrency(transaction.amount)}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <Badge
                      variant={transaction.status === "completed" ? "default" : "secondary"}
                      className={
                        transaction.status === "completed"
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-yellow-100 text-yellow-700"
                      }
                    >
                      {transaction.status === "completed" ? "Selesai" : "Pending"}
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
