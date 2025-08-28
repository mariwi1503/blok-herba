import { residentSchema } from "@/lib/validators";
import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) => {
  try {
    const { id } = await context.params;
    const data = await prisma.resident.findUnique({
      where: { id },
    });

    if (!data) {
      return NextResponse.json(
        { status: "failed", message: "Data tidak ditemukan" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      status: "success",
      data,
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

export const PUT = async (
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) => {
  try {
    const { id } = await context.params;
    const body = await req.json();

    const validation = residentSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        {
          status: "failed",
          message: "Data tidak valid.",
          errors: validation.error.issues,
        },
        { status: 400 }
      );
    }

    const data = await prisma.resident.findUnique({
      where: { id },
    });

    if (!data) {
      return NextResponse.json(
        { status: "failed", message: "Data tidak ditemukan" },
        { status: 404 }
      );
    }

    const existingResident = await prisma.resident.findUnique({
      where: { idCardNumber: validation.data.idCardNumber },
      select: { id: true },
    });
    if (existingResident && existingResident.id !== id) {
      return NextResponse.json(
        {
          status: "failed",
          message: "Nomor KTP sudah terdaftar.",
        },
        { status: 409 }
      );
    }

    const houseExist = await prisma.house.findUnique({
      where: { number: validation.data.houseNumber },
      select: { number: true },
    });
    if (!houseExist)
      return NextResponse.json(
        {
          status: "failed",
          message: "Data runah tidak ditemukan",
        },
        { status: 404 }
      );

    await prisma.resident.update({
      where: { id },
      data: validation.data,
    });

    return NextResponse.json({
      status: "success",
      message: 'Data berhasil diperbarui'
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
    const data = await prisma.resident.findUnique({
      where: { id },
    });

    if (!data) {
      return NextResponse.json(
        { status: "failed", message: "Data tidak ditemukan" },
        { status: 404 }
      );
    }

    await prisma.resident.delete({where: {id}})

    return NextResponse.json({
      status: "success",
      message: 'Data berhasil dihapus!'
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
