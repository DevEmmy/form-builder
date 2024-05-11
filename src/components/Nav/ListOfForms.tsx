"use client";
import React, { useState } from 'react'
import { RiCalendarLine, RiCheckboxLine, RiFile3Line, RiFileUploadLine, RiMailLine, RiPhoneLine, RiStackLine, RiText, RiTextBlock, RiTimeLine } from "react-icons/ri"
import { } from "react-icons/hi2"
import ClickableInput from '../Form/ClickableInput';
import MultiChoice from '../Form/MultiChoice';

export const components = [
    {
        title: "Multi Choice",
        icon: <RiStackLine />,
        component: <MultiChoice />
    },
    {
        title: "Email",
        icon: <RiMailLine />,
        component: <ClickableInput type='text' placeholder='Click to Add description' size='small'/>
    },
    {
        title: "Phone",
        icon: <RiPhoneLine />,
        component: <ClickableInput type='text' placeholder='Click to Add description' size='small'/>
    },
    {
        title: "Date",
        icon: <RiCalendarLine />,
        component: <ClickableInput type='text' placeholder='Click to Add description' size='small'/>
    },
    {
        title: "Time",
        icon: <RiTimeLine />,
        component: <ClickableInput type='text' placeholder='Click to Add description' size='small'/>
    },
    {
        title: "Short Text",
        icon: <RiText />,
        component: <ClickableInput type='text' placeholder='Click to Add description' size='small'/>
    },
    {
        title: "Long Text",
        icon: <RiTextBlock />,
        component: <ClickableInput type='text' placeholder='Click to Add description' size='small'/>
    },
    {
        title: "File Upload",
        icon: <RiFileUploadLine />,
        component: <ClickableInput type='text' placeholder='Click to Add description' size='small'/>
    },
    {
        title: "CheckBox",
        icon: <RiCheckboxLine />,
        component: <ClickableInput type='text' placeholder='Click to Add description' size='small'/>
    },
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

            <div className='flex flex-col gap-3 my-5'>
                <p>Form Components</p>
                <div className='text-gray-400 grid  grid-cols-3 gap-3 text-center'>
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