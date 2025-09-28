import React from 'react'
import ReactDOM from 'react-dom'
import TextArea from './TextArea'
function Promise() {
    return (
        <div className='bg-white text-gray-800 w-full text-base p-4'>
            <h2 className='font-semibold text-2xl uppercase mb-2'>Cam kết</h2>
            <div className='w-full items-start flex flex-col gap-4 justify-between'>
                <TextArea />
            </div>
        </div>
    )
}
export default Promise