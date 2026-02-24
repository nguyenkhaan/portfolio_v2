import React from 'react'
import ReactDOM from 'react-dom'
import { motion } from 'framer-motion'
import RecentItem from './RecentItem'
function RecentBlogs() {
    const datas = [
        {
            heading: 'Rainy Word Adventure', 
            start: '2024', 
            end: 'No', 
            description: `Website hỗ trợ cho trẻ em Tiểu học học tập và luyện tập Tiếng anh. Giao diện thân thiện, 
            cuốn hút, hấp dẫn trẻ học Tiếng anh thông qua các trò chơi, giải đố trên websie.`, 
            link : 'https://rainywords.uit.edu.vn/'
        }, 
        {
            heading: 'Portfolio Website', 
            start: '27-09-2025', 
            end: 'No', 
            description: 'Trang Portfolio cá nhân được thiết kế theo phong cách minimalist pha lẫn chút hiện đại. Rất thích hợp cho mấy đứa mây mây, làm màu như mình. Đặc biệt trang web còn tích hợp chức năng tạo CV nữa (P/S: Chiếc Resume bạn bấm dow ở trên là được tạo ra từ website này đấy)', 
            link: 'https://portfolio.cloudian.io.vn' 
        }
    ]
    return (
        <div
            className='no-print w-full md:px-40 px-10 py-6 min-h-80 bg-blue-100'
        >
            <div className='w-full text-base md:text-xl flex items-center justify-between'>
                <span className='font-medium'>Sản phẩm nổi bật</span>
                <a href='https://github.com/nguyenkhaan' className='text-blue-700 underline cursor-pointer'>My Github</a>
            </div>
            <div className='w-full mt-6 md:flex-row flex-col flex items-center justify-between gap-8'>
                {datas.map(data => {
                    return <RecentItem heading={data.heading}  start = {data.start}  end = {data.end}  description={data.description} link={data.link}/>
                })}
            </div>

        </div>
    )
}
export default RecentBlogs