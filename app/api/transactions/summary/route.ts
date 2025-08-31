import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { startOfMonth, endOfMonth, subMonths } from "date-fns";

export const GET = async (req: NextRequest) => {
  try {
    const now = new Date();

    // periode bulan ini
    const startThisMonth = startOfMonth(now);
    const endThisMonth = endOfMonth(now);

    // periode bulan lalu
    const startLastMonth = startOfMonth(subMonths(now, 1));
    const endLastMonth = endOfMonth(subMonths(now, 1));

    // --- Saldo total saat ini (dari semua transaksi)
    const allTransactions = await prisma.transaction.findMany();
    const totalIncome = allTransactions
      .filter((t) => t.type === "INCOME")
      .reduce((acc, t) => acc + Number(t.amount), 0);
    const totalExpense = allTransactions
      .filter((t) => t.type === "EXPENSE")
      .reduce((acc, t) => acc + Number(t.amount), 0);
    const currentBalance = totalIncome - totalExpense;

    // --- Saldo bulan lalu (hitung sampai akhir bulan lalu)
    const lastMonthTransactions = allTransactions.filter(
      (t) => t.date >= startLastMonth && t.date <= endLastMonth
    );
    const lastIncomeTotal = lastMonthTransactions
      .filter((t) => t.type === "INCOME")
      .reduce((acc, t) => acc + Number(t.amount), 0);
    const lastExpenseTotal = lastMonthTransactions
      .filter((t) => t.type === "EXPENSE")
      .reduce((acc, t) => acc + Number(t.amount), 0);
    const lastBalance = lastIncomeTotal - lastExpenseTotal;

    // --- Pemasukan bulan ini
    const incomeThisMonth = await prisma.transaction.aggregate({
      _sum: {
        amount: true,
      },
      where: {
        type: "INCOME",
        date: {
          gte: startThisMonth,
          lte: endThisMonth,
        },
      },
    });

    const incomeLastMonth = await prisma.transaction.aggregate({
      _sum: {
        amount: true,
      },
      where: {
        type: "INCOME",
        date: {
          gte: startLastMonth,
          lte: endLastMonth,
        },
      },
    });

    // --- Pengeluaran bulan ini
    const expenseThisMonth = await prisma.transaction.aggregate({
      _sum: {
        amount: true,
      },
      where: {
        type: "EXPENSE",
        date: {
          gte: startThisMonth,
          lte: endThisMonth,
        },
      },
    });

    const expenseLastMonth = await prisma.transaction.aggregate({
      _sum: {
        amount: true,
      },
      where: {
        type: "EXPENSE",
        date: {
          gte: startLastMonth,
          lte: endLastMonth,
        },
      },
    });

    // --- Fungsi helper persentase perubahan
    const getPercentageChange = (current: number, previous: number) => {
      if (previous === 0) {
        return current > 0 ? 100 : 0;
      }
      return ((current - previous) / previous) * 100;
    };

    return NextResponse.json({
      status: "success",
      data: {
        balance: {
          current: currentBalance,
          change: getPercentageChange(currentBalance, lastBalance),
        },
        income: {
          current: Number(incomeThisMonth._sum.amount) || 0,
          change: getPercentageChange(
            Number(incomeThisMonth._sum.amount) || 0,
            Number(incomeLastMonth._sum.amount) || 0
          ),
        },
        expense: {
          current: Number(expenseThisMonth._sum.amount) || 0,
          change: getPercentageChange(
            Number(expenseThisMonth._sum.amount) || 0,
            Number(expenseLastMonth._sum.amount) || 0
          ),
        },
      },
    });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        { status: "failed", message: error.message },
        { status: 500 }
      );
    }
    return NextResponse.json(
      { status: "failed", message: "Unknown error" },
      { status: 500 }
    );
  }
};
