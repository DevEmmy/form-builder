import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <div className='flex-all-center flex-col gap-5 h-[100vh]'>
        <p className='text-[20px] font-[500]'>Sign up</p>
        <form action="" className='flex gap-2 flex-col'>
          <input type="email" />
          <input type="password" name="" id="" />
          <button className='bg-primary1 p-3 rounded-md text-white'>sign up</button>
        </form>
        <p>I have an account already <Link className='text-primary1' href={"/sign-in"}>Sign in</Link></p>
      </div>
    </div>
  )
}

export default page