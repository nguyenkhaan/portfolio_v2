import React from 'react'
import ReactDOM from 'react-dom'
import About from '../CV/About'
function CV()
{
    return (
        <div className='min-h-80 grid grid-cols-12 gap-2'>
            <About /> 
            <div className='col-span-5 bg-blue-500 min-h-80'>

            </div>
            <div className='col-span-7 bg-green-500 min-h-80'>

            </div>
        </div>
    )
}
export default CV 