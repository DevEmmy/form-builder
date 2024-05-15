import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';
import prisma from '../../../../lib/prisma';
import { NextResponse } from 'next/server';
import { getToken } from '../../../../lib/jwt';

export async function POST(req: Request, res: NextApiResponse) {
  try {
    const { email, password } = await req.json();

    // Find the user by email
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, {status: 400});
    }

    // Verify password
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return NextResponse.json({ message: 'Invalid email or password' }, {status: 400});
    }

    let token = getToken(user.id, user.email)

    // Password is correct, sign in successful
    return NextResponse.json({ message: 'Sign in successful', user, token });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error signing in', error }, {status: 400});
  }
}
