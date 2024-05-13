import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <div className='flex-all-center flex-col gap-5 h-[100vh]'>
        <p className='text-[20px] font-[500]'>Sign in</p>
        <form action="" className='flex gap-2 flex-col'>
          <input type="email" />
          <input type="password" name="" id="" />
          <button className='bg-primary1 p-3 rounded-md text-white'>sign in</button>
        </form>
        <p>I don't have an account yet? <Link className='text-primary1' href={"/sign-up"}>Sign up</Link></p>
      </div>
    </div>
  )
}

export default page