"use client"
import { getEachForm } from '@/helper/requests';
import { FormElement } from '@/providers/FormBuilderProvider';
import React, { useEffect, useState } from 'react'

const page = ({ params }: any) => {
    const { id } = params;
    const [form, setForm] = useState<any>({})

    const fetch = async (id: string) => {
        let response = await getEachForm(id)
        console.log(response)
        setForm(response)
    }

    useEffect(() => {
        fetch(id)

    }, [id])
    return (
        <>
            {
                form ?
                    <div className='w-2/5 m-auto flex flex-col gap-10 my-20'>
                        <div className='container border-t-8  border-t-primary1 flex flex-col gap-2'>
                            <p className="input-large">
                                {form.title}
                            </p>
                            <p className='input-small'>
                                {form.description}
                            </p>
                        </div>

                        {
                            form.fields?.map((field: FormElement, i: number) => {
                                return (
                                    <div className='container flex flex-col gap-2'>
                                        <label htmlFor={field.label}>{field.label}</label>
                                        {
                                            field.type !== "select"
                                                ?
                                                <input type={field.type} name={field.label} className='border-b'/>
                                                :
                                              <>
                                                    {
                                                        field.option?.map((op: string, j) => {
                                                            return (
                                                                <div className='flex-center gap-2 '>
                                                                    <input type="radio" name={field.label} value={op}/>
                                                                    <label htmlFor={field.label}>{op}</label>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                             </>   
                                        }
                                    </div>
                                )
                            })
                        }

                        <button className='w-full p-4 rounded-md text-white bg-primary1'>
                            Submit
                        </button>
                    </div>
                    :
                    <p>Loading...</p>
            }
        </>
    )
}

export default page