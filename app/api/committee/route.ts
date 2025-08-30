// app/api/organization-profile/route.ts
import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    const url = new URL(req.url);
    const search = url.searchParams.get("search") || "";
    const data = await prisma.resident.findMany({
      where: {
        OR: [
          { fullName: { contains: search, mode: "insensitive" } },
          { idCardNumber: { contains: search, mode: "insensitive" } },
          { houseNumber: { contains: search, mode: "insensitive" } },
        ],
        committeeId: { not: null },
      },
      select: {
        id: true,
        fullName: true,
        idCardNumber: true,
        houseNumber: true,
        phone: true,
        image: true,
        committeeId: true,
        Committee: {
          select: {
            label: true,
            description: true,
          },
        },
      },
    });
    return NextResponse.json({
      status: "success",
      data: data.map((d) => {
        return {
          id: d.id,
          fullName: d.fullName,
          committeeLabel: d.Committee?.label,
          committeeId: d.committeeId,
          phone: d.phone,
          address: 'Herba ' + d.houseNumber,
          committeeDescription:
            d.Committee?.description,
          image: d.image,
        };
      }),
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
