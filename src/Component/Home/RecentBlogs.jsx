import React from 'react'
import ReactDOM from 'react-dom'
import { motion } from 'framer-motion'
import RecentItem from './RecentItem'
function RecentBlogs() {
    return (
        <div
            className='no-print w-full md:px-40 px-10 py-6 min-h-80 bg-blue-100'
        >
            <div className='w-full text-base md:text-xl flex items-center justify-between'>
                <span className='font-medium'>Recent Blogs</span>
                <a className='text-blue-700 underline cursor-pointer'>View all</a>
            </div>
            <div className='w-full mt-6 md:flex-row flex-col flex items-center justify-between gap-8'>
                <RecentItem />
                <RecentItem />
            </div>

        </div>
    )
}
export default RecentBlogs