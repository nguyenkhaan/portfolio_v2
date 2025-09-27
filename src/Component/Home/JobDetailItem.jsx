import React from 'react'
import ReactDOM from 'react-dom'
import { motion } from 'framer-motion'
function JobDetailItem({ id, content, heading, choose, setChoose }) {
    return (
        <motion.li className={`bg-white relative cursor-pointer my-3 p-6 overflow-hidden pl-8 rounded-lg shadow-2xl`}
            onClick={() => setChoose(id)}
            whileHover={{ scale: 1.05 }}
        >
            <motion.div
                className='absolute left-0 m-0 p-0 top-0 h-full bg-red-600 w-[6px]'
                animate={{ opacity: (id === choose) ? 1 : 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
            >

            </motion.div>
            <h3 className="text-lg font-bold mb-2">{heading}</h3>
            <p className="text-sm text-gray-600 line-clamp-3">
                {content}
            </p>
        </motion.li>
    )
}
export default JobDetailItem