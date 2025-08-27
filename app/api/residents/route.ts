import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { createPaginator } from "prisma-pagination";

export const GET = async (req: NextRequest) => {
  try {
    const url = new URL(req.url);
    const page = parseInt(url.searchParams.get("page") || "1", 10);
    const perPage = parseInt(url.searchParams.get("per_page") || "10", 10);
    
    // Mendapatkan parameter pencarian dan filter dari URL
    const search = url.searchParams.get("search") || "";
    const gender = url.searchParams.get("gender");
    const maritalStatus = url.searchParams.get("maritalStatus");
    const idCardType = url.searchParams.get("idCardType");

    const paginate = createPaginator({ perPage });

    const whereClause = {
      OR: [
        {
          fullName: {
            contains: search,
            mode: "insensitive",
          },
        },
        {
          idCardNumber: {
            contains: search,
            mode: "insensitive",
          },
        },
        {
          houseNumber: {
            contains: search,
            mode: "insensitive",
          },
        },
      ],
      // Menambahkan filter secara kondisional
      ...(gender && { gender: gender }),
      ...(maritalStatus && { maritalStatus: maritalStatus }),
      ...(idCardType && { idCardType: idCardType }),
    };

    const result = await paginate(
      prisma.resident,
      {
        where: whereClause,
      },
      { page: page }
    );

    return NextResponse.json({
      status: "success",
      ...result
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