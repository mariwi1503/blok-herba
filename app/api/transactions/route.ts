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
