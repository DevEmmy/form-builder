"use client"
import Builder from '@/components/Builder'
import ListOfForms, { components } from '@/components/Nav/ListOfForms'
import { createForm } from '@/helper/requests'
import { FormBuilderContext } from '@/providers/FormBuilderProvider'
import React, { useContext, useState } from 'react'
import { RiLink } from 'react-icons/ri'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import toast from 'react-hot-toast'


const page = () => {
  const [widgets, setWidgets] = useState<any>([]);


  const handleDrag = (e: React.DragEvent, widgetElement: any) => {
    e.dataTransfer.setData("widgetElement", widgetElement);
    console.log("drag")
  }

  const handleDrop = (e: React.DragEvent) => {
    let widgetElement: any = e.dataTransfer.getData("widgetElement")
    widgetElement = components[widgetElement].component
    setWidgets([...widgets, widgetElement]);
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  const { formData } = useContext(FormBuilderContext)

  let [response, setResponse] = useState<any>();

  const submit = async () => {
    let response: any = await createForm(formData);
    console.log(response)
    setResponse(response)
  }

  return (
    <div className='grid grid-cols-[1fr_2fr_1fr] gap-10'>
      <ListOfForms handleDrag={handleDrag} />
      <Builder handleDrop={handleDrop} handleDragOver={handleDragOver} widgets={widgets} />

      <div className='mt-20 mx-10 flex fle-col gap-3 flex-col'>
        <button className='p-3 rounded-md bg-primary1 w-full text-white' onClick={submit}>
          Save
        </button>
        {
          response &&
          <CopyToClipboard text={`http://localhost:3000/p/${response?.id}`}
            onCopy={() => toast.success("Copied")}>


            <button className='flex-all-center w-full bg-white border-primary1 border p-3 gap-2'>
              Share link <RiLink />
            </button>
          </CopyToClipboard>
        }
      </div>
    </div>
  )
}

export default page