"use client"
import FormDisplay from '@/components/Shared/FormDisplay'
import { getForms } from '@/helper/requests'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { HiPlus } from 'react-icons/hi'

const page = () => {
  const [form, setForms] = useState([]);

  const fetcher = async ()=>{
    let forms = await getForms();
    setForms(forms);
  }
  
  useEffect(()=>{
    fetcher();
  },[])
  return (
    <div className='px-[20%] my-20 flex gap-5 flex-col'>
      
        <Link href={"/new"} className='flex-all-center flex-col gap-2 w-fit p-5 border'>
          <HiPlus size='50' />
          <p>Create Form</p>
        </Link>
      
      <p className='text-[20px] font-[600] '>Recent Forms</p>

      {
        form.length > 0
        ?
        <div className='grid grid-cols-4 gap-5'>
        {
          form.map((item, i) => {
            return (
              <FormDisplay form={item} />
            )
          })
        }
      </div>
      :
      <p>You have not created any form</p>
      }
    </div>
  )
}

export default page