import React from 'react'
import ReactDOM from 'react-dom'
import CVHeader from '../CV/CVHeader'
import Contact from '../CV/Contact'
import About from '../CV/About'
import Knowledge from '../CV/Knowledge'
function CV() {
    return (
        <div className='min-h-80 grid grid-cols-12 gap-0'>
            <CVHeader />
            <Contact /> 
            <div className='col-span-4 flex items-center flex-col justify-between gap-0.5 bg-blue-500 min-h-80'>
                <About />
                <Knowledge />
            </div>
            <div className='col-span-8 bg-green-500 min-h-80'>

            </div>
        </div>
    )
}
export default CV 