import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrencyShort } from "@/lib/utils";
import {
  Home,
  Users,
  UserCheck,
  Wallet,
  ArrowUpRight,
  TrendingUp,
  ArrowDownRight,
  TrendingDown,
} from "lucide-react";

type TransactionItem = {
  id: string;
  createdAt: string;
  updatedAt: string;
  date: string;
  description: string;
  type: "INCOME" | "EXPENSE";
  category: string;
  amount: string;
  balance: string;
  residentId: string;
};

interface TransactionHistory {
  balance: string;
  trend: string
  percentageChange: number
  history: TransactionItem[];
}

interface StatsSectionProps {
  transactionHistory: TransactionHistory;
  totalHouse: number;
  totalResident: number;
  totalFamilyCard: number;
}

export function StatsSection({
  transactionHistory,
  totalHouse,
  totalResident,
  totalFamilyCard,
}: StatsSectionProps) {
  const stats = [
    {
      icon: Home,
      title: "Total Rumah",
      value: totalHouse,
      subtitle: "Rumah: 130 | Kos: 0 | Ruko: 10",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: Users,
      title: "Total Warga",
      value: totalResident,
      subtitle: "Berdasarkan data terdaftar",
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
    },
    {
      icon: UserCheck,
      title: "Total KK",
      value: totalFamilyCard,
      subtitle: "Kepala Keluarga Aktif",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: Wallet,
      title: "Kas RT",
      // value: `Rp ${Number(transactionHistory?.balance).toLocaleString("id-ID")}`,
      value: `Rp ${formatCurrencyShort(Number(transactionHistory?.balance))}`,
      subtitle: "Saldo terakhir",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
  ];

  // ambil 5 transaksi terbaru, urutkan desc by date
  const recentTransactions = [...transactionHistory?.history]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5);

  return (
    <section className="py-16 bg-gradient-to-b from-yellow-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-1 lg:mb-2">
            Data Blok Herba
          </h2>
          <div className="mx-auto h-1 w-1/2 lg:w-1/4 bg-green-400 rounded-md mb-10"></div>
          <p className="font-body text-xl text-gray-600 max-w-2xl mx-auto font-bold">
            Ringkasan Data Blok Herba
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className={`border-0 shadow-lg hover:shadow-xl ${stat.bgColor} transition-shadow duration-300`}
            >
              <CardContent className="px-2 lg:p-6">
                <div className={`inline-flex p-2 rounded-lg mb-2 lg:mb-4`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <h3 className="font-heading lg:text-lg font-semibold text-gray-900 mb-2">
                  {stat.title}
                </h3>
                <div className="font-heading text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <p className="font-body text-sm text-gray-600">
                  {stat.subtitle}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Keuangan */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <p className="font-body text-xl text-gray-600 max-w-2xl mx-auto font-bold">
            Data Keuangan terbaru
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
    {/* Saldo utama */}
    <div className="text-3xl font-bold text-gray-900 mb-2">
      Rp {Number(transactionHistory?.balance).toLocaleString("id-ID")}
    </div>
    <p className="font-body text-sm text-gray-600">Saldo per hari ini</p>

    {/* Info naik/turun */}
    <div
      className={`mt-4 p-3 rounded-lg flex items-center gap-2 ${
        transactionHistory?.trend === "up"
          ? "bg-emerald-50 text-emerald-700"
          : transactionHistory?.trend === "down"
          ? "bg-red-50 text-red-700"
          : "bg-gray-50 text-gray-600"
      }`}
    >
      {transactionHistory?.trend === "up" && (
        <>
          <TrendingUp className="w-4 h-4" />
          <span className="font-body text-sm">
            Naik {transactionHistory?.percentageChange}% dibanding bulan lalu
          </span>
        </>
      )}

      {transactionHistory?.trend === "down" && (
        <>
          <TrendingDown className="w-4 h-4" />
          <span className="font-body text-sm">
            Turun {transactionHistory?.percentageChange}% dibanding bulan lalu
          </span>
        </>
      )}

      {transactionHistory?.trend === "same" && (
        <>
          <span className="font-body text-sm">Tidak ada perubahan dari bulan lalu</span>
        </>
      )}
    </div>
  </CardContent>
</Card>

          {/* Recent Transactions */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 lg:col-span-2">
            <CardHeader>
              <CardTitle className="font-heading text-lg">
                5 Transaksi Terakhir
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentTransactions.map((transaction) => (
                  <div
                    key={transaction.id}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center">
                      <div
                        className={`p-2 rounded-full mr-3 ${
                          transaction.type === "INCOME"
                            ? "bg-emerald-50 text-emerald-600"
                            : "bg-red-50 text-red-600"
                        }`}
                      >
                        {transaction.type === "INCOME" ? (
                          <ArrowUpRight className="w-4 h-4" />
                        ) : (
                          <ArrowDownRight className="w-4 h-4" />
                        )}
                      </div>
                      <div>
                        <div className="font-body font-medium text-gray-900">
                          {transaction.description}
                        </div>
                        <div className="font-body text-sm text-gray-500">
                          {new Date(transaction.date).toLocaleDateString(
                            "id-ID",
                            {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            }
                          )}
                        </div>
                      </div>
                    </div>
                    <div
                      className={`font-heading font-semibold ${
                        transaction.type === "INCOME"
                          ? "text-emerald-600"
                          : "text-red-600"
                      }`}
                    >
                      {transaction.type === "INCOME" ? "+" : "-"}Rp{" "}
                      {Number(transaction.amount).toLocaleString("id-ID")}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
