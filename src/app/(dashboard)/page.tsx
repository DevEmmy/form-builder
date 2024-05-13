"use client"
import Builder from '@/components/Builder'
import ListOfForms, { components } from '@/components/Nav/ListOfForms'
import React, { useState } from 'react'

const page = () => {
  const [widgets, setWidgets] = useState<any>([]);

  const handleDrag = (e: React.DragEvent, widgetElement: any)=>{
      e.dataTransfer.setData("widgetElement", widgetElement);
      console.log("drag")
  }

  const handleDrop = (e: React.DragEvent)=>{
      let widgetElement: any = e.dataTransfer.getData("widgetElement")
      widgetElement = components[widgetElement].component
      setWidgets([...widgets, widgetElement]);
  }

  const handleDragOver = (e: React.DragEvent)=>{
      e.preventDefault()
  }

  return (
    <div className='grid grid-cols-[1fr_2fr_1fr] gap-10'>
      <ListOfForms handleDrag={handleDrag}/>
      <Builder handleDrop ={handleDrop} handleDragOver={handleDragOver} widgets={widgets}/>
      <div />
    </div>
  )
}

export default page