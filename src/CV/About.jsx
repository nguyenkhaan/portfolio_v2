import React, { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import InputCV from './Input'
function About() {
    const props = {
        minHeight: '20px', 
        width: '100%', 
        fontSize: '16px' 
    }
    return (
        <div className='col-span-12 py-12 px-8 min-h-60 flex items-center justify-between gap-6'>
            <div className='flex items-center min-h-80 flex-col gap-4 justify-between'>
                <div className='rounded-full w-50 h-50 bg-black bg-center bg-cover bg-no-repeat'>
                </div>
                {/* Dia chi noi o */}
                <ul className='p-0 text-lg my-4 w-full flex-1'>
                    <li className='text-gray-700 mb-2 text-xl flex items-center justify-between gap-2'>
                        <i class="fa-solid fa-location-dot"></i>
                        <InputCV initialValue={'Khanh Hoa'} propsStyle={{}} />
                    </li>
                    {/* Facebook - Mạng xã hội */}
                    <li className='text-gray-700 mb-2 text-xl flex items-center justify-start gap-2'>
                        <i class="fa-solid fa-globe"></i>
                        <InputCV initialValue={'https://www.facebook.com/kha.an.907155'} propsStyle={{}} />
                    </li>
                    {/* Gmail */}
                    <li className='text-gray-700 mb-2 text-xl flex items-center justify-between gap-2'>
                        <i class="fa-solid fa-envelope"></i>
                        <InputCV initialValue={'nguyenkhaan2006@gmail.com'} propsStyle={{}} />
                    </li>
                    {/* Github */}
                    <li className='text-gray-700 mb-2 text-xl flex items-center justify-between gap-2'>
                        <i class="fa-brands fa-github"></i>
                        <InputCV initialValue={'nguyenkhaancloudian.github.io.vn'} propsStyle={{}} />
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default About

//  <div data-placeholder = {'I am a fullstack developer'} contentEditable className='outline-none text-base flex-1 text-gray-600 rounded-base px-1 min-w-20 inline-block focus:bg-gray-200'/> 