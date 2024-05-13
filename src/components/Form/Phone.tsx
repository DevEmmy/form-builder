import React, { useContext, useState } from 'react'
import ClickableInput from './ClickableInput'
import { FormBuilderContext, FormElement } from '@/providers/FormBuilderProvider';

const Phone = () => {
    let [data, setData] = useState<FormElement>({
        label: "What is your Phone Number",
        type: "tel"
    })
    const { addFormElement } = useContext(FormBuilderContext);


    const handleLabel = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, label: e.target.value })
    }

    return (
        <div className='flex flex-col gap-2'>
            <ClickableInput type="text" value={data.label} size='medium' onChange={handleLabel} placeholder='Click to edit question' />
            <ClickableInput type='tel' placeholder='+xxx-xxxxxxxx' size='small' />
            <div className='flex items-end justify-end px-5 py-2 rounded-md bg-primary1 w-fit text-white cursor-pointer' onClick={()=> addFormElement(data)}>
                Done
            </div>
        </div>
    )
}

export default Phone