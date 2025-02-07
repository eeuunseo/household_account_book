import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  const codes = await prisma.$queryRaw`select * from code`;
  return NextResponse.json(codes); // 응답으로 데이터를 반환
}

export async function POST(resquest: NextRequest) {}

export async function PUT(resquest: NextRequest) {}

export async function DELETE(resquest: NextRequest) {}
