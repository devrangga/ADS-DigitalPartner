import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { extractPhoneNumbers } from "@/lib/utils";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const extractedPhoneNumber = extractPhoneNumbers(body.numberType);

    const user = await prisma.user.create({
      data: {
        email: body.email,
        username: body.username,
        phone: `${extractedPhoneNumber}${body.phone}`,
        password: await bcrypt.hash(body.password, 12),
      },
    });

    console.log("User created:", user);
    return NextResponse.json({ user });
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      { error: "Failed to create user" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
