import React from 'react'
import ClickableInput from './ClickableInput'

const TitleContainer = () => {

  return (
    <div className='container border-t-8  border-t-primary1'>
        <ClickableInput type='text' placeholder='Click to Add Title' size='large'/>
        <ClickableInput type='text' placeholder='Click to Add description' size='small'/>
    </div>
  )
}

export default TitleContainer