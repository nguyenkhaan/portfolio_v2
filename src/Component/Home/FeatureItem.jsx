import React from 'react'
import ReactDOM from 'react-dom'
function FeatureItem() {
    return (
        // Bo flex-1 di la duoc
        <div className='flex items-stretch h-30 md:h-42 justify-between gap-5 pb-6 pt-0 border-b-gray-200 border-b-1'>
            <div className='bg-gray-800 md:w-50 w-30 md:gap-8 gap-4 h-full'></div>
            <div className='flex items-start flex-1 justify-between h-full flex-col'>
                <h2 className='font-semibold text-lg md:text-2xl'>Vibrant Portraits of 2020</h2>
                {/* Sau nay cho nay chua thoi gian */}
                <span className='block text-xs md:text-sm text-gray-700'>Dashboard</span>
                <p className='w-full hidden md:block md:text-base text-sm line-clamp-3'>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                </p>
            </div>
        </div>
    )
}
export default FeatureItem