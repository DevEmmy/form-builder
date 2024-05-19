"use client"
import { signUp } from '@/helper/requests';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

const Page = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Call your function to send the data
    sendData({ email, password });
  };

  const sendData = async (data: { email: string, password: string }) => {
    try {
      if (email.length == 0 || password.length == 0) {
        toast.error("Kindly fill all fields")
      }
      else {
        signUp(data)
          .then((token) => {
            if (token) {
              router.push("/")
            }
          })
        setEmail('');
        setPassword('');
      }
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };

  return (
    <div>
      <div className='flex-all-center flex-col gap-5 h-[100vh] w-1/3 m-auto'>
        <p className='text-[20px] font-[500]'>Sign up</p>
        <form onSubmit={handleSubmit} className='flex gap-2 flex-col auth w-full'>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
          <button type="submit" className='bg-primary1 p-3 rounded-md text-white'>Sign up</button>
        </form>
        <p>I have an account already <Link href="/sign-in" className='text-primary1'>Sign in</Link></p>
      </div>
    </div>
  )
}

export default Page;
