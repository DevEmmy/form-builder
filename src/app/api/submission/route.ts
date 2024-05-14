import { NextResponse } from "next/server";
import { createSubmission } from "../../../../services/submission.services";

export async function POST(req: Request) {
    try {
      const data = await req.json();
      let submission = await createSubmission(data);
      
      return NextResponse.json({ message: "Created", submission });
    } catch (error) {
      console.error(error);
      return NextResponse.json({ message: 'Error', error });
    }
  }