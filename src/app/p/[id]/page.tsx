"use client"
import { FormElement } from '@/providers/FormBuilderProvider'
import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';
import { createFormSubmission, getEachForm } from '@/helper/requests';
import { useRouter } from 'next/navigation';
import ViewForm from '@/components/Form/ViewForm';
import Responses from '@/components/Form/Responses';

const Page = ({ params }: any) => {
    const { id } = params;


    const [view, setView] = useState<number>(0)
    const [isCheckSubmission, setIsCheckSubmission] = useState(false)

    const tabs = [
        {
            title: "View Form",
            component: <ViewForm id={id} setIsCheckSubmission={setIsCheckSubmission} />
        },
        {
            title: "Responses",
            component: <Responses id={id}/>
        }
    ]

    const [element, setElement] = useState<any>()




    return (
        <>
            <div className='my-20 w-2/5 m-auto'>
                {
                    isCheckSubmission &&
                    <div className='flex-all-center gap-10 tab my-5'>
                       {
                        tabs.map((tab, i: number)=>{
                            return(
                                <div onClick={()=> setView(i)} className={`${i == view && "!bg-primary1 !text-white"}`}>
                                    {tab.title}
                                </div>
                            )
                        })
                       }
                    </div>
                }

                {tabs[view].component}
            </div>
        </>
    )
}

export default Page;
