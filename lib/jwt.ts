import jwt from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
import { verify } from 'jsonwebtoken'; // Assuming you're using 'jsonwebtoken' for JWT verification

const jwtSecret: string = process.env.JWT_SECRET as string ;

export const getToken = (id: string, email: string)=>{
    const token = jwt.sign({id, email}, jwtSecret)
    return token;
}


interface AuthenticatedRequest extends NextApiRequest {
    user?: any;
  }


  
  interface User {
    id: string;
    email: string;
  }
  
  export const verifyToken = async (req: Request) => {
    if (!req.headers) {
      return NextResponse.json({ message: 'Unauthorized' });
    }

    const authHeader = req.headers.get('authorization');
    console.log(authHeader)
  
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ message: 'Unauthorized' });
    }
  
    const token = authHeader.replace('Bearer ', '');
  
    try {
      const decoded = verify(token, process.env.JWT_SECRET as string) as User;
      (req as any).user = decoded; // Type assertion for user property
      if(!decoded.id){
        return NextResponse.json({ message: 'Unauthorized' });
      }
      return decoded;
    } catch (error) {
      return NextResponse.json({ message: 'Unauthorized' });
    }
  };
  