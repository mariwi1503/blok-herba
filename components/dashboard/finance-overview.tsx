"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  TrendingUp,
  TrendingDown,
  Wallet,
  PiggyBank,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";

type SummaryResponse = {
  status: string;
  data: {
    balance: {
      current: number;
      change: number;
    };
    income: {
      current: number;
      change: number;
    };
    expense: {
      current: number;
      change: number;
    };
  };
};

export function FinanceOverview() {
  const [summary, setSummary] = useState<SummaryResponse | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/transactions/summary");
        const json: SummaryResponse = await res.json();
        setSummary(json);
      } catch (err) {
        console.error("Failed to fetch finance summary:", err);
      }
    };

    fetchData();
  }, []);

  // siapkan data stat dengan fallback "..." kalau summary masih null
  const financialStats = [
    {
      title: "Saldo Kas",
      value: summary
        ? `Rp ${summary.data.balance.current.toLocaleString("id-ID")}`
        : "...",
      change: summary ? `${summary.data.balance.change.toFixed(1)}%` : "...",
      changeType: summary
        ? summary.data.balance.change >= 0
          ? "increase"
          : "decrease"
        : "neutral",
      icon: Wallet,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
    },
    {
      title: "Pemasukan Bulan Ini",
      value: summary
        ? `Rp ${summary.data.income.current.toLocaleString("id-ID")}`
        : "...",
      change: summary ? `${summary.data.income.change.toFixed(1)}%` : "...",
      changeType: summary
        ? summary.data.income.change >= 0
          ? "increase"
          : "decrease"
        : "neutral",
      icon: ArrowUpRight,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "Pengeluaran Bulan Ini",
      value: summary
        ? `Rp ${summary.data.expense.current.toLocaleString("id-ID")}`
        : "...",
      change: summary ? `${summary.data.expense.change.toFixed(1)}%` : "...",
      changeType: summary
        ? summary.data.expense.change >= 0
          ? "increase"
          : "decrease"
        : "neutral",
      icon: ArrowDownRight,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      title: "Tabungan RT",
      value: summary
        ? `Rp ${(summary.data.balance.current - summary.data.expense.current).toLocaleString(
            "id-ID"
          )}`
        : "...",
      change: summary ? "+3%" : "...",
      changeType: summary ? "increase" : "neutral",
      icon: PiggyBank,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {financialStats.map((stat, index) => (
        <Card
          key={index}
          className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-body text-sm text-gray-600 mb-1">
                  {stat.title}
                </p>
                <p className="font-heading text-2xl font-bold text-gray-900">
                  {stat.value}
                </p>
                <div className="flex items-center mt-2">
                  {stat.changeType === "increase" && (
                    <TrendingUp className="w-4 h-4 text-emerald-600 mr-1" />
                  )}
                  {stat.changeType === "decrease" && (
                    <TrendingDown className="w-4 h-4 text-red-600 mr-1" />
                  )}
                  <span
                    className={`font-body text-sm ${
                      stat.changeType === "increase"
                        ? "text-emerald-600"
                        : stat.changeType === "decrease"
                        ? "text-red-600"
                        : "text-gray-400"
                    }`}
                  >
                    {stat.change}
                  </span>
                  <span className="font-body text-sm text-gray-500 ml-1">
                    vs bulan lalu
                  </span>
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
  );
}
