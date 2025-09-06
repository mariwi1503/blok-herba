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
          address: "Herba " + d.houseNumber,
          committeeDescription: d.Committee?.description,
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

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const { residentId, committeeId } = body;
    if (!residentId || !committeeId)
      return NextResponse.json(
        {
          status: "failed",
          message: "Data tidak lengkap",
        },
        { status: 400 }
      );

    const [resident, committee] = await Promise.all([
      prisma.resident.findUnique({where: {id: residentId}, select: {committeeId: true}}),
      prisma.committee.findUnique({where: {id: committeeId}, select: {id: true}})
    ])
    if (!resident) return NextResponse.json(
        {
          status: "failed",
          message: "Data warga tidak ditemukan",
        },
        { status: 404 }
      );

    if (resident.committeeId) return NextResponse.json(
        {
          status: "failed",
          message: "Warga ini sudah masuk ke dalam pengurus",
        },
        { status: 409 }
      );

    if (!committee) return NextResponse.json(
        {
          status: "failed",
          message: "Tipe pengurus tidak ditemukan",
        },
        { status: 404 }
      );

    await prisma.resident.update({
      where: {id: residentId},
      data: {committeeId}
    })
    return NextResponse.json({
      status: "success",
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
