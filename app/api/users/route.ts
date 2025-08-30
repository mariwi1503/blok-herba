// app/api/organization-profile/route.ts
import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcryptjs';

export const GET = async () => {
  try {
    const users = await prisma.user.findMany({
      include: {
        Committee: true
      }
    }); // Mengambil semua data user
    return NextResponse.json({
      status: "success",
      data: users.map(u => {
        return {
          id: u.id,
          fullName: u.fullName,
          phone: u.phone,
          role: u.role,
          isActive: u.isActive,
          position: u.Committee.label
        }
      })
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
    const { residentId, role, password } = body;

    // 1. Validasi input yang diperlukan: Resident ID, role, dan password
    if (!residentId || !role || !password) {
      return NextResponse.json(
        { status: "failed", message: "Resident ID, role, dan password diperlukan." },
        { status: 400 } // Bad Request
      );
    }

    // 2. Cek apakah resident dengan residentId yang diberikan ada
    const resident = await prisma.resident.findUnique({
      where: { id: residentId },
    });

    if (!resident) {
      return NextResponse.json(
        { status: "failed", message: "Resident tidak ditemukan." },
        { status: 404 } // Not Found
      );
    }

    // 3. Pastikan resident memiliki committeeId, karena User membutuhkannya
    // Jika resident tidak memiliki committeeId, tidak dapat membuat pengguna
    if (!resident.committeeId) {
      return NextResponse.json(
        { status: "failed", message: "Warga bukan pengurus" },
        { status: 400 } // Bad Request
      );
    }

    // 4. Hash password sebelum menyimpannya ke database
    const hashedPassword = await bcrypt.hash(password, 10); // 10 adalah salt rounds untuk keamanan

    // 5. Buat user baru menggunakan data resident, tanpa kolom email
    const newUser = await prisma.user.create({
      data: {
        fullName: resident.fullName,
        phone: resident.phone || '', // Asumsi resident memiliki phone, atau default ke string kosong
        hashPassword: hashedPassword,
        residentId: resident.id,
        role: role, // Pastikan 'role' sesuai dengan enum UserRole di skema Prisma
        committeeId: resident.committeeId,
      },
    });

    return NextResponse.json({
      status: "success",
      message: "User berhasil dibuat."
    }); // 201 Created
  } catch (error) {
    if (error instanceof Error) {
      // Menangani error karena constraint unik (misalnya, nomor telepon sudah digunakan)
      if (error.message.includes("Unique constraint failed on the fields: (`phone`)")) {
        return NextResponse.json(
          { status: "failed", message: "Nomor telepon sudah terdaftar." },
          { status: 409 } // Conflict
        );
      }
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
