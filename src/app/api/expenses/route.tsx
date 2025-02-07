import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();
const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth() + 1;

export async function GET() {}
export async function POST(request: NextRequest) {
  const params = await request.json();
  const expenses = await prisma.$queryRaw`select
                                            e.id,
                                            c.tag,
                                            e.item,
                                            e.amount,
                                            e.fixed,
                                            sum(e.amount) over (partition by c.class)::int as totalamount
                                          from
                                            expenses as e
                                          inner join code as c on
                                            c.class = 'E'
                                            and extract(year from e.standarddate) = ${Number(
                                              params.yyyy
                                            )}
                                            and extract(month from e.standarddate) = ${Number(
                                              params.m
                                            )}
                                            and e.tagid = c.id`;
  return NextResponse.json(expenses);
}
export async function PUT() {}
export async function DELETE() {}
