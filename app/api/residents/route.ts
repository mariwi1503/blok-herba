import { residentSchema } from "@/lib/validators";
import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { createPaginator } from "prisma-pagination";

// GET Endpoint (Tidak Berubah)
export const GET = async (req: NextRequest) => {
  try {
    const url = new URL(req.url);
    const page = parseInt(url.searchParams.get("page") || "1", 10);
    const perPage = parseInt(url.searchParams.get("per_page") || "10", 10);
    const search = url.searchParams.get("search") || "";
    const gender = url.searchParams.get("gender");
    const maritalStatus = url.searchParams.get("maritalStatus");
    const idCardType = url.searchParams.get("idCardType");

    const paginate = createPaginator({ perPage });

    const whereClause: any = {
      OR: [
        { fullName: { contains: search, mode: "insensitive" } },
        { idCardNumber: { contains: search, mode: "insensitive" } },
        { houseNumber: { contains: search, mode: "insensitive" } },
      ],
    };

    if (gender) whereClause.gender = gender;
    if (maritalStatus) whereClause.maritalStatus = maritalStatus;
    if (idCardType) whereClause.idCardType = idCardType;

    const result = await paginate(
      prisma.resident,
      { where: whereClause },
      { page: page }
    );

    return NextResponse.json({ status: "success", ...result });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { status: "failed", message: "Terjadi kesalahan pada server." },
      { status: 500 }
    );
  }
};

// POST Endpoint (Baru)
export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    
    // Validasi body menggunakan Zod
    const validation = residentSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { 
          status: "failed", 
          message: "Data tidak valid.",
          errors: validation.error.issues,
        },
        { status: 400 } // Bad Request
      );
    }
    
    // Periksa apakah nomor KTP sudah ada
    const existingResident = await prisma.resident.findUnique({
      where: { idCardNumber: validation.data.idCardNumber },
    });
    if (existingResident) {
      return NextResponse.json(
        { 
          status: "failed", 
          message: "Nomor KTP sudah terdaftar.",
        },
        { status: 409 }
      );
    }

    // check house
    const houseExist = await prisma.house.findUnique({where: {number: validation.data.houseNumber},select: {number: true}})
    if (!houseExist) return NextResponse.json(
        { 
          status: "failed", 
          message: "Data runah tidak ditemukan",
        },
        { status: 404 }
      );

    // Buat data warga baru di database
    const newResident = await prisma.resident.create({
      data: validation.data,
    });

    return NextResponse.json(
      { 
        status: "success", 
        message: "Data warga berhasil ditambahkan.",
        data: newResident
      },
      { status: 201 } // Created
    );

  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { status: "failed", message: "Terjadi kesalahan saat menambahkan data." },
      { status: 500 }
    );
  }
};