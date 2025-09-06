import { residentSchema } from "@/lib/validators";
import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export const PUT = async (
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) => {
  try {
    const { id } = await context.params;
    const body = await req.json();
    if (!body.committeeId)
      return NextResponse.json(
        {
          status: "failed",
          message: "committeeId tidak boleh kosong",
        },
        { status: 400 }
      );

    const resident = await prisma.resident.findUnique({
      where: { id },
      select: { id: true },
    });

    if (!resident) {
      return NextResponse.json(
        { status: "failed", message: "Data warga tidak ditemukan" },
        { status: 404 }
      );
    }

    const committee = await prisma.committee.findUnique({
      where: { id: body.committeeId },
      select: { id: true },
    });

    if (!committee) {
      return NextResponse.json(
        { status: "failed", message: "Data tidak ditemukan" },
        { status: 404 }
      );
    }

    await prisma.resident.update({
      where: { id },
      data: { committeeId: body.committeeId },
    });

    return NextResponse.json({
      status: "success",
      message: "Data berhasil diperbarui",
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

export const DELETE = async (
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) => {
  try {
    const { id } = await context.params;
    const resident = await prisma.resident.findUnique({
      where: { id },
      select: { id: true },
    });

    if (!resident) {
      return NextResponse.json(
        { status: "failed", message: "Data warga tidak ditemukan" },
        { status: 404 }
      );
    }

    await prisma.resident.update({
      where: { id },
      data: { committeeId: null },
    });

    return NextResponse.json({
      status: "success",
      message: "Data berhasil dihapus",
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
