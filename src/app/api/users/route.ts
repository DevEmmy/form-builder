// Notice from where NextResponse is imported:
import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";



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