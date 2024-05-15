"use client";
import React, { useState } from 'react'
import { RiCalendarLine, RiCheckboxLine, RiFile3Line, RiFileUploadLine, RiMailLine, RiPhoneLine, RiStackLine, RiText, RiTextBlock, RiTimeLine } from "react-icons/ri"
import { } from "react-icons/hi2"
import ClickableInput from '../Form/ClickableInput';
import MultiChoice from '../Form/MultiChoice';
import Email from '../Form/Email';
import Phone from '../Form/Phone';
import ShortText from '../Form/ShortText';

export const components = [
    {
        title: "Multi Choice",
        icon: <RiStackLine />,
        component: <MultiChoice />
    },
    {
        title: "Email",
        icon: <RiMailLine />,
        component: <Email />
    },
    {
        title: "Phone",
        icon: <RiPhoneLine />,
        component: <Phone />
    },
    {
        title: "Text",
        icon: <RiText />,
        component: <ShortText />
    },
    // {
    //     title: "Long Text",
    //     icon: <RiTextBlock />,
    //     component: <ClickableInput type='text' placeholder='Click to Add description' size='small'/>
    // },
]

const ListOfForms = ({handleDrag}: any) => {

   
    return (
        <div className=' bg-white shadow-2xl top-24  py-10 h-[100vh] p-3 flex-center flex-col gap-3 '>
            <div className=' rounded-full p-1 w-full bg-shade'>
                <div className=' w-full bg-white text-center p-3 rounded-full'>
                    Components
                </div>
            </div>

            {/* <div>
                <input type="search" name="" id="" placeholder='Search Components' />
            </div> */}

            <div className=' flex-col gap-3 my-5 items-start justify-start w-full px-3'>
                <p>Form Components</p>
                <div className='text-gray-400 py-3 grid gap-3 grid-cols-2 text-center '>
                    {
                        components.map((item, i) => {
                            return (
                                <div
                                draggable
                                onDragStart={(e)=> {handleDrag(e, i)}}
                                className='flex-col flex-all-center bg-gray-100 rounded-lg p-3 cursor-pointer'>
                                    <p className='text-[40px]'>{item.icon}</p>
                                    <p className='text-[12px]'>{item.title}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </div>
    )
}

export default ListOfForms