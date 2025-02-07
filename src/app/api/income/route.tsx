import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {}
export async function POST(request: NextRequest) {
  const params = await request.json();
  const income = await prisma.$queryRaw`select
                                          i.id,
                                          c.tag,
                                          i.item,
                                          i.amount,
                                          i.fixed,
                                          sum(i.amount) over (partition by c.class)::int as totalamount
                                        from
                                          income as i
                                        inner join code as c on
                                          c.class = 'I'
                                          and extract(year from i.standarddate) = ${Number(
                                            params.yyyy
                                          )}
                                          and extract(month from i.standarddate) = ${Number(
                                            params.m
                                          )}
                                          and i.tagid = c.id`;
  return NextResponse.json(income);
}
export async function PUT() {}
export async function DELETE() {}
