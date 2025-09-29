import React from 'react'
import ReactDOM from 'react-dom'
import InputCV from './Input'
function Contact() {
        const props = {
        minHeight: '20px',
        width: '100%',
        fontSize: '16px'
    }
    return (
        <div className='col-span-12 w-full'>
            <ul className='p-0 text-lg my-4 w-full px-3 flex items-center justify-between gap-4 mt-5 flex-1'>
                <li className='text-gray-700 mb-2 text-xl flex items-center justify-start gap-2'>
                    <i class="fa-solid fa-location-dot"></i>
                    <InputCV initialValue={'Khanh Hoa'} containerStyle={'flex-1'} />
                </li>
                {/* Facebook - Mạng xã hội */}
                <li className='text-gray-700 mb-2 text-xl flex items-center justify-start gap-2'>
                    <i class="fa-solid fa-phone"></i>
                    <InputCV initialValue={'0941422097'} containerStyle={'flex-1'} />
                </li>
                {/* Gmail */}
                <li className='text-gray-700 mb-2 text-xl flex items-center justify-start gap-2'>
                    <i class="fa-solid fa-envelope"></i>
                    <InputCV initialValue={'nguyenkhaan2006@gmail.com'} containerStyle={'flex-1'} />
                </li>
                {/* Github */}
                <li className='text-gray-700 mb-2 text-xl flex items-center justify-start gap-2'>
                    <i class="fa-brands fa-github"></i>
                    <InputCV initialValue={'nguyenkhaancloudian.github.io.vn'} containerStyle={'flex-1'} />
                </li>
            </ul>
        </div>
    )
}
export default Contact