import React from 'react'
import ReactDOM from 'react-dom'
import JobDetailItem from './JobDetailItem'
import { useState } from 'react'
import { motion } from 'framer-motion'
const datas = [
    {
        heading: 'User experience',
        content: '1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum.'
    },
    {
        heading: 'Working Skills',
        content: '2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum.'
    },
    {
        heading: 'Checking List',
        content: '3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum.'
    }
]
function JobDetail() {
    const [choose, setChoose] = useState(0);
    return (
        <div className='w-full flex-col md:flex-row my-5 min-h-100 bg-gray-200 py-12 gap-12 flex items-center justify-between px-10 md:px-36'>
            <motion.div 
                className='flex-1'
                initial={{opacity: 0}} 
                animate={{opacity: 1}} 
                transition={{duration: 0.3, ease: "easeInOut"}}
                key={choose}
            >
                <h2 className='font-bold text-3xl text-center lg:text-left my-4'>{datas[choose].heading}</h2>
                <span className='block pr-6 text-gray-800 text-center md:text-left text-base'>
                    {datas[choose].content}
                </span>
            </motion.div>
            <motion.ul className='flex-1'>
                {datas.map((data, index) => <JobDetailItem
                    id={index}
                    heading={data.heading} content={data.content}
                    choose={choose} setChoose={setChoose} 
                    key={index}
                    />)}
            </motion.ul>
        </div>
    )
}
export default JobDetail