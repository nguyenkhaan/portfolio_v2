import React from 'react'
import ReactDOM from 'react-dom'
import { motion } from 'framer-motion'
function FeatureItem({
    heading,
    description,
    thumbnail,
    link
}) {
    return (
        // Bo flex-1 di la duoc
        <motion.div
            className='flex items-stretch h-30 md:h-42 justify-between gap-5 pb-6 pt-0 border-b-gray-200 border-b-1'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
        >
            <div
                className='bg-gray-800 md:w-50 w-30 md:gap-8 gap-4 h-full bg-cover bg-center bg-no-repeat'
                style={{ backgroundImage: `url(${thumbnail})` }}
            ></div>
            <div className='flex items-start flex-1 justify-between h-full flex-col'>
                <a href={link}>
                    <h2 className='font-semibold text-lg md:text-2xl text-blue-800 underline'>{heading}</h2>
                </a>
                {/* Sau nay cho nay chua thoi gian */}
                <span className='block text-xs md:text-sm text-gray-700'>Dashboard</span>
                <p className='w-full hidden md:block md:text-base text-sm line-clamp-3'>
                    {description}
                </p>
            </div>
        </motion.div>
    )
}
export default FeatureItem