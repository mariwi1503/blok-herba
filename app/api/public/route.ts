import prisma from "@/prisma/client";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const [
      organizationData,
      totalHouse,
      totalResident,
      totalFamilyCard,
      transaction,
    ] = await Promise.all([
      prisma.organizationProfile.findFirst({
        select: {
          heroTagline: true,
          footerTagline: true,
          address: true,
          phone: true,
          email: true,
          vision: true,
          mission: true,
          history: true
        },
      }),
      prisma.house.count(),
      prisma.resident.count(),
      prisma.familyCard.count(),
      prisma.transaction.findMany({
        take: 5,
        orderBy: { date: "desc" },
      }),
    ]);

    // saldo terbaru
    const latestBalance =
      transaction.length > 0 ? Number(transaction[0].balance) : 0;

    // cari transaksi terakhir bulan lalu
    const lastMonth = new Date();
    lastMonth.setMonth(lastMonth.getMonth() - 1);

    const lastMonthTransaction = await prisma.transaction.findFirst({
      where: {
        date: {
          lt: new Date(new Date().getFullYear(), new Date().getMonth(), 1), // sebelum awal bulan ini
          gte: new Date(lastMonth.getFullYear(), lastMonth.getMonth(), 1), // awal bulan lalu
        },
      },
      orderBy: { date: "desc" },
    });

    const prevBalance = lastMonthTransaction
      ? Number(lastMonthTransaction.balance)
      : 0;

    // hitung trend
    let trend: "up" | "down" | "same" = "same";
    let percentageChange = 0;

    if (prevBalance > 0) {
      if (latestBalance > prevBalance) {
        trend = "up";
        percentageChange = ((latestBalance - prevBalance) / prevBalance) * 100;
      } else if (latestBalance < prevBalance) {
        trend = "down";
        percentageChange = ((prevBalance - latestBalance) / prevBalance) * 100;
      }
    }

    const transactionHistory = {
      balance: latestBalance,
      trend,
      percentageChange: Number(percentageChange.toFixed(1)),
      history: transaction,
    };

    return NextResponse.json({
      status: "success",
      data: {
        ...organizationData,
        totalHouse,
        totalResident,
        totalFamilyCard,
        transactionHistory,
      },
    });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({status: "failed", message: error.message }, { status: 500 });
    }
    return NextResponse.json({status: "failed", message: "Unknown error" }, { status: 500 });
  }
};
