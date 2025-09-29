import React from 'react'
import ReactDOM from 'react-dom'
function RecentItem({
    heading,
    start,
    end,
    description,
    link
}) {
    return (
        <>
            <div
                className='md:w-1/2 w-full md:p-5 p-6 md:h-70 h-80 bg-white'
            >
                <a href={link}><h2 className='font-bold md:text-xl text-lg leading-8 underline text-blue-700'>{heading}</h2></a>
                {/* Component chua thoi gian  */}
                <div className="w-full md:text-base text-sm text-gray-700 items-center md:mt-4 mt-2 flex justify-start gap-8">
                    <span>{start}</span>
                    <span>|</span>
                    <span>{end}</span>
                </div>
                <p className='text-justify text-gray-700 text-sm mt-4 md:line-clamp-7 line-clamp-5'>
                    {description}
                </p>
            </div>
        </>
    )
}
export default RecentItem