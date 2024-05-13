import FormDisplay from '@/components/Shared/FormDisplay'
import Link from 'next/link'
import React from 'react'
import { HiPlus } from 'react-icons/hi'

const page = () => {
  return (
    <div className='px-[20%] my-20 flex gap-5 flex-col'>
      
        <Link href={"/new"} className='flex-all-center flex-col gap-2 w-fit p-5 border'>
          <HiPlus size='50' />
          <p>Create Form</p>
        </Link>
      
      <p className='text-[20px] font-[600] '>Recent Forms</p>

      <div className='grid grid-cols-4 gap-5'>
        {
          [1, 2, 3, 4, 5, 6].map((item, i) => {
            return (
              <FormDisplay />
            )
          })
        }
      </div>
    </div>
  )
}

export default page