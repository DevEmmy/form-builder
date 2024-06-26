import { NextResponse } from "next/server";
import { verifyToken } from "../../../../../lib/jwt";
import { getEachForm } from "../../../../../services/form.services";

export async function GET(req: Request, {params}:{params: {id: string}}) {
    try {
      let user : any = await verifyToken(req);

      let {id} = params;
  
      let form : any = await getEachForm(id);

      if(user.id == form?.userId){
        form.isCheckSubmission = true
      }
      
      return NextResponse.json({ message: "Successful", form });
    } catch (error) {
      console.error(error);
      return NextResponse.json({ message: 'Error', error });
    }
  }
  