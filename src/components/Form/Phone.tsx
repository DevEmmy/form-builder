import React from 'react'
import ClickableInput from './ClickableInput'

const Phone = () => {
    return (
        <div className='flex flex-col gap-2'>
            <ClickableInput type="text" value={"What is your Phone Number?"} size='medium' placeholder='Click to edit question' />
            <ClickableInput type='tel' placeholder='+xxx-xxxxxxxx' size='small' />
        </div>
    )
}

export default Phone