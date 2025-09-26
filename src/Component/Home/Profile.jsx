import React from 'react'
import ReactDOM from 'react-dom'
import { motion } from 'framer-motion'
function Profile()
{
    return (
        <motion.div 
            className='w-full gap-16 md:px-40 px-10 md:flex-row flex flex-col-reverse py-15 min-h-80 items-center justify-between'
            initial = {{x: -400, opacity: 0}}
            whileInView={{x: 0 , opacity: 1}}
            transition={{duration: 0.5, ease: "easeInOut"}}
        >
            <div className='flex-1 flex flex-col justify-center items-start gap-7'>
                <h2 className='font-bold text-3xl'>Hi, I Am John, A Creative Duelist</h2>
                <span>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                </span>
                <button className='py-2.5 px-6 hover:scale-[1.1] hover:cursor-pointer hover:transition-all hover:duration-300 hover:ease-in-out font-bold text-base text-white rounded-sm'
                        style = {{backgroundColor: '#FF6464'}}
                ><i class="bi bi-arrow-down-square-fill"></i> Dowload my CV</button>
            </div> 
            <div className='flex-1 flex items-center justify-end'>
                <div 
                    className='rounded-full w-60 h-60 bg-black'
                    style={{backgroundImage: `url${'Xin chao cac ban'}`}}
                >

            </div>

            </div>
        </motion.div>
    )
}
export default Profile