"use client";
import React, { ReactElement, useContext } from 'react'
import ClickableInput from './ClickableInput'
import { FormBuilderContext } from '@/providers/FormBuilderProvider';

const TitleContainer = () => {

  const {updateFormTitle, updateFormDescription} = useContext(FormBuilderContext)

  const handleTitle = (e: any)=>{
    updateFormTitle(e.target.value) 
  }

  const handleDesc = (e: any)=>{
    updateFormDescription(e.target.value) 
  }

  return (
    <div className='container border-t-8  border-t-primary1 flex flex-col gap-2'>
        <ClickableInput type='text' onChange={handleTitle} placeholder='Click to Add Title' size='large'/>
        <ClickableInput type='text' onChange={handleDesc} placeholder='Click to Add description' size='small'/>
    </div>
  )
}

export default TitleContainer