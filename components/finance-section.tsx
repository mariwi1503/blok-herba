import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Wallet, ArrowUpRight, ArrowDownRight } from "lucide-react"

export function FinanceSection() {
  const recentTransactions = [
    { type: "income", description: "Iuran Bulanan Desember", amount: "Rp 2.300.000", date: "15 Des 2024" },
    { type: "expense", description: "Pembelian Alat Kebersihan", amount: "Rp 450.000", date: "12 Des 2024" },
    { type: "income", description: "Sumbangan Kegiatan 17 Agustus", amount: "Rp 1.200.000", date: "10 Des 2024" },
    { type: "expense", description: "Perbaikan Lampu Jalan", amount: "Rp 800.000", date: "8 Des 2024" },
    { type: "expense", description: "Konsumsi Rapat RT", amount: "Rp 350.000", date: "5 Des 2024" },
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-yellow-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">Keuangan RT</h2>
          <p className="font-body text-lg text-gray-600 max-w-2xl mx-auto">
            Transparansi pengelolaan keuangan untuk kepercayaan bersama
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Saldo Kas */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 lg:col-span-1">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center font-heading text-lg">
                <Wallet className="w-5 h-5 text-emerald-600 mr-2" />
                Total Kas RT
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-gray-900 mb-2">Rp 25.500.000</div>
              <p className="font-body text-sm text-gray-600">Per 31 Desember 2024</p>
              <div className="mt-4 p-3 bg-emerald-50 rounded-lg">
                <div className="flex items-center text-emerald-700">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  <span className="font-body text-sm">Naik 8% dari bulan lalu</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recent Transactions */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 lg:col-span-2">
            <CardHeader>
              <CardTitle className="font-heading text-lg">5 Transaksi Terakhir</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentTransactions.map((transaction, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
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
                        <div className="font-body font-medium text-gray-900">{transaction.description}</div>
                        <div className="font-body text-sm text-gray-500">{transaction.date}</div>
                      </div>
                    </div>
                    <div
                      className={`font-heading font-semibold ${
                        transaction.type === "income" ? "text-emerald-600" : "text-red-600"
                      }`}
                    >
                      {transaction.type === "income" ? "+" : "-"}
                      {transaction.amount}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
