import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt"
import bodyParser from 'body-parser';
import prisma from "../../../../lib/prisma"
import { getToken } from "../../../../lib/jwt";


export async function POST(req: Request, res: NextApiResponse) {

  try {
    const { email, password } = await req.json();

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log({email, password})
    // Create the user
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });

    if(user){
      let token = getToken(user.id, user.email)

    return NextResponse.json({ message: 'User created successfully', user, token });
    }
    else{
      return NextResponse.json({ message: 'This Email has been connected to a different account'});
    }

    
  } catch (error) {
    console.log(error)
    return NextResponse.json({ message: 'Error creating user', error }, {status: 400});
  }
}