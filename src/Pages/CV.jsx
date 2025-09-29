import React, { useRef } from 'react'
import ReactDOM from 'react-dom'
import { useReactToPrint } from 'react-to-print'
import { motion } from 'framer-motion'
import CVHeader from '../CV/CVHeader'
import Contact from '../CV/Contact'
import About from '../CV/About'
import Knowledge from '../CV/Knowledge'
import Skills from '../CV/Skills'
import Achievement from '../CV/Achievement'
import Promise from '../CV/Promise'

function CV() {
    const componentRef = useRef(null) 
    const handlePrintPage = useReactToPrint({
        contentRef: componentRef
    })
    return (
        <div className='w-full flex flex-col items-center justify-center'>
            <div className='print-container min-h-[1122px] w-[800px] relative grid grid-cols-12 gap-0 border-solid border-1 border-black shadow-2xl pt-8' ref={componentRef}>
                <div className='col-span-12 header-contact-print max-h-36'>
                    <CVHeader />
                    <Contact /> 
                </div>
                <div className='col-span-5 flex items-center flex-col justify-start gap-1 min-h-80'>
                    <About />
                    <Knowledge />
                    <Skills /> 
                </div>
                <div className='col-span-7 bg-blue-950 flex items-center flex-col justify-start gap-0.5 min-h-80'>
                    <Achievement className = 'cv-section' heading = 'Thành tích' sampleContent = 'Huy chương Đồng Tin học, Olympic 30/4' /> 
                    <Achievement className = 'cv-section' heading = 'Kinh nghiệm thực tế' sampleContent = 'Gia sư Toán - Lý - Hóa (lớp 8), 1 kèm 1 trực tiếp'/> 
                    <Promise /> 
                </div>
            </div>
            <motion.button 
                    className='right-0 top-0 px-7 py-4 no-print mt-8 bg-blue-600 rounded-lg text-xl cursor-pointer text-white font-semibold' onClick={handlePrintPage}
                    initial={{scale: 1}} 
                    whileHover={{scale: 1.1}} 
                    transition={{duration: 0.3, ease:"easeInOut"}}
                >
                Publish CV
            </motion.button>
        </div>
    )
}
export default CV 