import { NextResponse } from "next/server";
import { verifyToken } from "../../../../../lib/jwt";
import { getEachForm } from "../../../../../services/form.services";
import { getSubmission } from "../../../../../services/submission.services";

export async function GET(req: Request, {params}:{params: {id: string}}) {
    try {
      let user : any = await verifyToken(req);

      let {id} = params;
  
      let submissions : any = await getSubmission(id);
      
      return NextResponse.json({ message: "Successful", submissions });
    } catch (error) {
      console.error(error);
      return NextResponse.json({ message: 'Error', error });
    }
  }
  