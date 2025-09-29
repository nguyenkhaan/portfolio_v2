import React from 'react'
import ReactDOM from 'react-dom'
import TextArea from './TextArea'
import Heading from './Heading'
function Skills() {

    return (
        <div className='bg-gray-800 w-full text-white text-base p-4 flex-1'>
            <Heading initialValue='Kỹ năng'/>
            <div className='w-full items-start flex flex-col gap-4 justify-between'>
                <TextArea /> 
            </div>
        </div>
    )
}
export default Skills