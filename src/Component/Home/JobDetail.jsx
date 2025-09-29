import React from 'react'
import ReactDOM from 'react-dom'
import JobDetailItem from './JobDetailItem'
import { useState } from 'react'
import { motion } from 'framer-motion'
const datas = [
    {
        heading: '1. Mục tiêu',
        content:  `Mình đang là sinh viên ngành Kĩ thuật phần mềm của Trường ĐH CNTT - ĐHQG.TPHCM. Mục tiêu dài hạn của
        minh trong tương lai là trở thành một Fullstack Developer, làm chủ cả Frontend và Backend, thêm một chút kiến thức
        trong lĩnh vực bảo mật nữa. Tuy rằng bản thân còn nhiều khiếm khuyết, nhưng mình nhất định sẽ cố hết sức ☁️`
    },
    {
        heading: '2. Kỹ năng chuyên môn',
        content: `Mình có nền tảng vững về C++, JavaScript, TypeScript, Python, cùng kiến thức cơ sở dữ liệu MySQL và MongoDB. Trong phát triển web, mình quen thuộc với các framework và thư viện như ReactJS, ExpressJS, và Tailwind CSS. 
        Hiện tại mình cũng đang có một chút hứng thú với các con game, nên mình đang chủ động tìm hiểu thêm ngôn ngữ lập trình C#.`
    },
    {
        heading: '3. Kỹ năng mềm',
        content: `Minh có điểm mạnh trong lĩnh vực thuyết trình, đặc biệt là giảng dạy và truyền đạt kiến thức cho mọi người, 
        nhờ có nhiều năm làm việc trong BHT CNPM. Tuy nhiên, bản thân mình cũng khá yếu trong khoản giữ cảm xúc của bản thân, quản lý công việc, 
        cũng như mình đang cố gắng trau dồi thêm khả năng ngoại ngữ.`
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