import prisma from "@/prisma/client"
import { NextRequest, NextResponse } from "next/server"

export const GET = async (req: NextRequest) => {
  try {
    const { searchParams } = new URL(req.url)

    const start = searchParams.get("start")
    const end = searchParams.get("end")
    const category = searchParams.get("category")

    const where: any = {}

    // filter range tanggal
    if (start && end) {
      where.date = {
        gte: new Date(start),
        lte: new Date(end),
      }
    } else if (start) {
      where.date = { gte: new Date(start) }
    } else if (end) {
      where.date = { lte: new Date(end) }
    }

    // filter kategori
    if (category) {
      where.category = category
    }

    const transactions = await prisma.transaction.findMany({
      where,
      orderBy: {
        date: "desc",
      },
    })
    console.log("🚀 ~ :37 ~ transactions:", transactions)

    return NextResponse.json({
      status: "success",
      data: transactions,
    })
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        { status: "failed", message: error.message },
        { status: 500 }
      )
    }
    return NextResponse.json(
      { status: "failed", message: "Unknown error" },
      { status: 500 }
    )
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { date, description, type, category, amount, source } = body;

    // Ambil saldo terakhir
    const lastTransaction = await prisma.transaction.findFirst({
      orderBy: { date: "desc" },
    });
    const prevBalance = lastTransaction ? lastTransaction.balance : 0;
    console.log("🚀 ~ :68 ~ prevBalance:", typeof prevBalance)

    // Hitung saldo baru
    const newBalance =
      type === "INCOME"
        ? prevBalance + amount
        : prevBalance - amount;

    // Simpan transaksi
    const newTransaction = await prisma.transaction.create({
      data: {
        date: new Date(date), // FIX: convert string → Date
        description,
        type, // pastikan sesuai enum di schema
        category,
        amount: Number(amount), // FIX: pastikan angka
        source,
        balance: newBalance,
      },
    });

    return NextResponse.json(
      { status: "success", data: newTransaction },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating transaction:", error);
    return NextResponse.json(
      { status: "error", message: "Failed to create transaction" },
      { status: 500 }
    );
  }
}


