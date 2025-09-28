import React from 'react'
import ReactDOM from 'react-dom'
import TextArea from './TextArea'
function Skills() {

    return (
        <div className='bg-gray-800 w-full text-white text-base p-4'>
            <h2 className='font-semibold text-2xl uppercase mb-4'>
                Kỹ năng 
            </h2>
            <div className='w-full items-start flex flex-col gap-4 justify-between'>
                <TextArea /> 
            </div>
        </div>
    )
}
export default Skills