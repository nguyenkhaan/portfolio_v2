import React from 'react'
import ReactDOM from 'react-dom'
import { motion } from 'framer-motion'
import RecentItem from './RecentItem'
function RecentBlogs() {
    const datas = [
        {
            heading: 'Blogging Website', 
            start: '01-08-2025', 
            end: 'No', 
            description: `Website cho phép người dùng đọc, viết và xuất bản blog cá nhân một cách nhanh chóng. Ứng dụng được xây dựng trên MERN Stack (MongoDB, Express, React, Node.js), mang lại trải nghiệm mượt mà và dễ sử dụng.
            Đây là dự án có vai trò rất quan trọng trong hành trình của mình, là dự án đầu tiên mình đưng dưới vai trò là một FE lẫn BE Developer 𐔌՞. .՞𐦯.
            `, 
            link : 'https://www.facebook.com/share/p/14HYFx4Ubpe/'
        }, 
        {
            heading: 'Portfolio Website', 
            start: '27-09-2025', 
            end: 'No', 
            description: 'Trang Portfolio cá nhân được thiết kế theo phong cách minimalist pha lẫn chút hiện đại. Rất thích hợp cho mấy đứa mây mây, làm màu như mình. Đặc biệt trang web còn tích hợp chức năng tạo CV nữa (P/S: Chiếc Resume bạn bấm dow ở trên là được tạo ra từ website này đấy)', 
            link: '' 
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