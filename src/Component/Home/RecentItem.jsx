import React from 'react'
import ReactDOM from 'react-dom'
function RecentItem() {
    return (
        <>
            <div
                className='md:w-1/2 w-full md:p-5 p-6 md:h-70 h-80 bg-white'
            >
                <h2 className='font-bold md:text-xl text-lg leading-8'>Making A Design System from Scratching Heading</h2>
                {/* Component chua thoi gian  */}
                <div className="w-full md:text-base text-sm text-gray-700 items-center md:mt-4 mt-2 flex justify-start gap-8">
                    <span>Xin chao</span>
                    <span>|</span>
                    <span>Xin chao</span>
                </div>
                <p className='text-justify text-gray-700 text-sm mt-4 md:line-clamp-5 line-clamp-6'>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </p>
            </div>
        </>
    )
}
export default RecentItem