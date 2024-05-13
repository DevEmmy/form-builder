// Notice from where NextResponse is imported:
import { NextResponse } from "next/server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Notice the funciton definiton:
export async function GET(req: any) {
  let users = await prisma.user.findMany()
  return NextResponse.json(
    {
      message: "Hey",
      data: users
    }
  );
}