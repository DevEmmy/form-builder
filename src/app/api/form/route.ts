import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { verifyToken } from "../../../../lib/jwt";
import { createForm, getForms } from "../../../../services/form.services";

interface AuthenticatedRequest extends Request {
    user?: any;
}

export async function POST(req: Request) {
  try {
    let user : any = await verifyToken(req); // Call verifyToken and handle errors

    if (!user) {
      return NextResponse.json({ message: 'Unauthorized' });
    }

    console.log(user);

    const data = await req.json();
    data.userId = user.id
    let form = await createForm(data);
    
    return NextResponse.json({ message: "Created", form });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error', error });
  }
}


export async function GET(req: Request) {
  try {
    let user : any = await verifyToken(req); // Call verifyToken and handle errors

    let forms = await getForms(user.id);
    
    return NextResponse.json({ message: "Created", forms });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error', error });
  }
}
