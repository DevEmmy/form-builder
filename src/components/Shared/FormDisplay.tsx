import React from 'react'
import { RiFile2Fill, RiFile2Line } from 'react-icons/ri'

const FormDisplay = () => {
  return (
    <div className='border p-3 flex flex-col gap-2 cursor-pointer hover:shadow-xl transition-all'>
        <RiFile2Line className='w-full text-[200px] text-gray-400'/>
        <div className='py-3 border-t'>
            <p className='text-[18px] font-[500]'>Untitled Form</p>
            <p className='text-sm text-gray-500'>created 7th of May</p>
        </div>  
    </div>
  )
}

export default FormDisplay