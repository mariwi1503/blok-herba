import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BarChart3, PieChart, TrendingUp, Download } from "lucide-react"

export function FinanceReports() {
  const monthlyData = [
    { month: "Jan", income: 2200000, expense: 1800000 },
    { month: "Feb", income: 2300000, expense: 1900000 },
    { month: "Mar", income: 2100000, expense: 2100000 },
    { month: "Apr", income: 2400000, expense: 1700000 },
    { month: "May", income: 2300000, expense: 1950000 },
    { month: "Jun", income: 2500000, expense: 1800000 },
    { month: "Jul", income: 2200000, expense: 2000000 },
    { month: "Aug", income: 2600000, expense: 1600000 },
    { month: "Sep", income: 2300000, expense: 1850000 },
    { month: "Oct", income: 2400000, expense: 1900000 },
    { month: "Nov", income: 2250000, expense: 1750000 },
    { month: "Dec", income: 2300000, expense: 1850000 },
  ]

  const expenseCategories = [
    { category: "Kebersihan", amount: 5400000, percentage: 35 },
    { category: "Infrastruktur", amount: 4200000, percentage: 27 },
    { category: "Konsumsi", amount: 2800000, percentage: 18 },
    { category: "Administrasi", amount: 1900000, percentage: 12 },
    { category: "Keamanan", amount: 1200000, percentage: 8 },
  ]

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-body text-sm text-gray-600 mb-1">Total Pemasukan 2024</p>
                <p className="font-heading text-2xl font-bold text-emerald-600">Rp 28.400.000</p>
                <p className="font-body text-sm text-gray-500 mt-1">+12% dari tahun lalu</p>
              </div>
              <div className="p-3 rounded-lg bg-emerald-50">
                <TrendingUp className="w-6 h-6 text-emerald-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-body text-sm text-gray-600 mb-1">Total Pengeluaran 2024</p>
                <p className="font-heading text-2xl font-bold text-red-600">Rp 22.250.000</p>
                <p className="font-body text-sm text-gray-500 mt-1">-8% dari tahun lalu</p>
              </div>
              <div className="p-3 rounded-lg bg-red-50">
                <BarChart3 className="w-6 h-6 text-red-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-body text-sm text-gray-600 mb-1">Surplus 2024</p>
                <p className="font-heading text-2xl font-bold text-blue-600">Rp 6.150.000</p>
                <p className="font-body text-sm text-gray-500 mt-1">+28% dari tahun lalu</p>
              </div>
              <div className="p-3 rounded-lg bg-blue-50">
                <PieChart className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Monthly Trend */}
        <Card className="border-0 shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="font-heading text-xl">Tren Bulanan 2024</CardTitle>
            <Button variant="outline" size="sm" className="bg-transparent">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {monthlyData.slice(-6).map((data, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                  <div className="font-body font-medium text-gray-900">{data.month}</div>
                  <div className="flex space-x-4">
                    <div className="text-right">
                      <div className="font-body text-sm text-gray-600">Masuk</div>
                      <div className="font-heading font-semibold text-emerald-600">{formatCurrency(data.income)}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-body text-sm text-gray-600">Keluar</div>
                      <div className="font-heading font-semibold text-red-600">{formatCurrency(data.expense)}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Expense Categories */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="font-heading text-xl">Kategori Pengeluaran 2024</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {expenseCategories.map((category, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-body font-medium text-gray-900">{category.category}</span>
                    <span className="font-body text-sm text-gray-600">{category.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-emerald-600 h-2 rounded-full" style={{ width: `${category.percentage}%` }}></div>
                  </div>
                  <div className="text-right">
                    <span className="font-heading font-semibold text-gray-900">{formatCurrency(category.amount)}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
