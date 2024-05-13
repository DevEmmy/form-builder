import React from 'react'
import ClickableInput from './ClickableInput'

const ShortText = () => {
    return (
        <div className='flex flex-col gap-2'>
            <ClickableInput type='text' placeholder='Click to add' size='medium' />
            <ClickableInput type='text' placeholder='Click to Add description' size='small' />
        </div>
    )
}

export default ShortText