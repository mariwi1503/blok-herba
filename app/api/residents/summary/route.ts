import prisma from "@/prisma/client";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const [totalFamilyCard, totalResident, totalHouse, totalEmptyHouse] =
      await Promise.all([
        prisma.familyCard.count(),
        prisma.resident.count(),
        prisma.house.count(),
        prisma.house.count({ where: { isFilled: true } }),
      ]);

    return NextResponse.json({
      status: "success",
      data: {
        totalFamilyCard,
        totalResident,
        totalFilledHouse: totalHouse - totalEmptyHouse,
        totalEmptyHouse,
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
