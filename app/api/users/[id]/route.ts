import { residentSchema } from "@/lib/validators";
import prisma from "@/prisma/client";
import { UserRole } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export const PATCH = async (
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) => {
  try {
    const { id } = await context.params;
    const {role, isActive} = await req.json();
    // const  validRole = [UserRole.ADMIN,UserRole.SUPER,UserRole.FINANCE,]
    // if (role && !validRole.includes(role)) return NextResponse.json(
    //     { status: "failed", message: "Role tidak valid" },
    //     { status: 404 }
    //   );

    if (role === undefined && isActive === undefined) {
      return NextResponse.json(
        { status: "failed", message: "Tidak ada data untuk diperbarui. Body harus berisi 'role' atau 'isActive'." },
        { status: 400 } // Bad Request
      );
    }

    const user = await prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      return NextResponse.json(
        { status: "failed", message: "Data pengguna tidak ditemukan" },
        { status: 404 }
      );
    }

    await prisma.user.update({
      where: {id},
      data: {
        role: role ? role : undefined,
        isActive: typeof isActive === 'boolean' ? isActive : undefined
      }
    })
    
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
    const data = await prisma.user.findUnique({
      where: { id },
    });

    if (!data) {
      return NextResponse.json(
        { status: "failed", message: "Data tidak ditemukan" },
        { status: 404 }
      );
    }

    await prisma.user.delete({where: {id}})

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
