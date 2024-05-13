"use client";
import React, { useState } from 'react'
import ClickableInput from './ClickableInput'

const Email = () => {
    const [email, seEmail] = useState();

    return (
        <div className='flex flex-col gap-2'>
            <ClickableInput type="text" value={email || "What is your email?"} size='medium' placeholder='Click to edit question' />
            <ClickableInput type='email' placeholder='example@mail.com' size='small' />
        </div>
    )
}

export default Email