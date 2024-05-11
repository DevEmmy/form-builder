import React from 'react'
import TitleContainer from '../Form/TitleContainer'

const Builder = ({ handleDragOver, handleDrop, widgets }: any) => {
    return (
        <div className='mt-20 flex flex-col gap-5 '>
            <TitleContainer />
            
            {
                widgets.map((w: any, i: number) => {
                    return (
                        <div className="container" key={i}>
                            {w}
                        </div>
                    )
                })
            }


            <div
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                className='border-dashed border-gray-400 bg-gray-100 border-2 rounded-lg w-full p-16 text-[20px] text-gray-500 text-center cursor-pointer'>
                Drag & Drop a Form Component
            </div>
        </div>
    )
}

export default Builder