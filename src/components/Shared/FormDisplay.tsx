import Link from 'next/link'
import React from 'react'
import { RiFile2Fill, RiFile2Line } from 'react-icons/ri'
import TimeAgo from 'react-timeago'

const FormDisplay = ({ form }: any) => {
  return (
    <Link href={`http://localhost:3000/p/${form.id}`}>
      <div className='border p-3 flex flex-col gap-2 cursor-pointer hover:shadow-xl transition-all'>
        <RiFile2Line className='w-full text-[200px] text-gray-400' />
        <div className='py-3 border-t'>
          <p className='text-[18px] font-[500]'>{form.title}</p>
          <p className='text-sm text-gray-500 line-clamp-2'>{form.description}</p>
        </div>
      </div>
    </Link>
  )
}

export default FormDisplay