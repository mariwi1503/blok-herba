import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, TrendingDown, Wallet, PiggyBank, ArrowUpRight, ArrowDownRight } from "lucide-react"

export function FinanceOverview() {
  const financialStats = [
    {
      title: "Saldo Kas",
      value: "Rp 25.500.000",
      change: "+8%",
      changeType: "increase",
      icon: Wallet,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
    },
    {
      title: "Pemasukan Bulan Ini",
      value: "Rp 3.200.000",
      change: "+12%",
      changeType: "increase",
      icon: ArrowUpRight,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "Pengeluaran Bulan Ini",
      value: "Rp 1.850.000",
      change: "-5%",
      changeType: "decrease",
      icon: ArrowDownRight,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      title: "Tabungan RT",
      value: "Rp 15.000.000",
      change: "+3%",
      changeType: "increase",
      icon: PiggyBank,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {financialStats.map((stat, index) => (
        <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-body text-sm text-gray-600 mb-1">{stat.title}</p>
                <p className="font-heading text-2xl font-bold text-gray-900">{stat.value}</p>
                <div className="flex items-center mt-2">
                  {stat.changeType === "increase" ? (
                    <TrendingUp className="w-4 h-4 text-emerald-600 mr-1" />
                  ) : (
                    <TrendingDown className="w-4 h-4 text-red-600 mr-1" />
                  )}
                  <span
                    className={`font-body text-sm ${
                      stat.changeType === "increase" ? "text-emerald-600" : "text-red-600"
                    }`}
                  >
                    {stat.change}
                  </span>
                  <span className="font-body text-sm text-gray-500 ml-1">vs bulan lalu</span>
                </div>
              </div>
              <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
