// app/api/organization-profile/route.ts
import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { organizationProfileSchema } from "@/lib/validators"; // Import validator

export const GET = async () => {
  try {
    const data = await prisma.organizationProfile.findFirst()
    return NextResponse.json({
      status: "success",
      data
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
}

export const PUT = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const validation = organizationProfileSchema.safeParse(body);

    // Jika validasi gagal, kembalikan error
    if (!validation.success) {
      const { errors } = validation.error;
      return NextResponse.json(
        { message: "Data tidak valid", errors },
        { status: 400 }
      );
    }

    // Ambil data yang sudah divalidasi
    const data = validation.data;

    const organizationDataExist = await prisma.organizationProfile.findFirst({
      select: { id: true },
    });

    if (organizationDataExist) {
      await prisma.organizationProfile.update({
        where: { id: organizationDataExist.id },
        data,
      });
    } else {
      await prisma.organizationProfile.create({ data });
    }

    return NextResponse.json({ status: "success" });
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
