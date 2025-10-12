import React from 'react'
import ReactDOM from 'react-dom'
import FeatureItem from './FeatureItem'
function Feature() {
    const datas = [
        {
            heading: 'Trainers Ban học tập',
            description: 'Đây là hoạt động mình tham gia thường xuyên nhất với vai trò là Thành viên Ban học tập CNPM. Mình có nhiều kinh nghiệm trong việc training ôn tập cho rất nhiề người, vì vậy, mình hoàn toàn tự tin vào kỹ năng thuyết trình và truyền đạt kiến thức của bản thân',
            thumbnail: 'images/thumbnail_1.jpg', 
            link: 'https://www.facebook.com/share/p/17X6uHAEDV/'
        },
        {
            heading: 'Ban tổ chức Đấu trường IT 2025',
            description: `Tham gia với vai trò chính là hỗ trợ kĩ thuật cho hoạt động học thuật thường niên của Khoa 
            Công nghệ phần mềm - Đấu Trường IT.`,
            thumbnail: 'images/thumbnail_2.jpg', 
            link: 'https://www.facebook.com/share/p/19kWXKN1gD/'
        },
        {
            heading: 'Diễn giả Seminar "Ctrl + N" - BHT.CNPM',
            description: 'Chia sẻ và gỡ rối cho các bạn Tân sinh viên về Phường pháp học lập trình hiệu quả. Giúp các bạn chống shock khi mới vào đại học.',
            thumbnail: 'images/thumbnail_3.jpg', 
            link: 'https://www.facebook.com/share/p/1ChcyGEFhN/'
        },

    ]
    return (
        <div className='no-print md:px-40 px-10 py-4 w-full min-h-80 gap-6 flex flex-col'>
            <span className='text-base md:text-xl my-2 font-semibold'>Hoạt động</span>
            {datas.map((data) => {
                return <FeatureItem heading={data.heading} description={data.description} thumbnail={data.thumbnail} link={data.link}/>
            })}
        </div>
    )
}
export default Feature