import { NextResponse } from "next/server";
import { verifyToken } from "../../../../../lib/jwt";
import { getEachForm } from "../../../../../services/form.services";

export async function GET(req: Request, {params}:{params: {id: string}}) {
    try {
      let {id} = params;
  
      let form = await getEachForm(id);
      
      return NextResponse.json({ message: "Successful", form });
    } catch (error) {
      console.error(error);
      return NextResponse.json({ message: 'Error', error });
    }
  }
  