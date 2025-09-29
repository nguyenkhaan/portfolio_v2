import React from 'react'
import ReactDOM from 'react-dom'
import FeatureItem from './FeatureItem'
function Feature() {
    const datas = [
        {
            heading: 'Trainers Ban học tập',
            description: 'Đây là hoạt động mình tham gia thường xuyên nhất với vai trò là Thành viên Ban học tập CNPM. Mình có nhiều kinh nghiệm trong việc training ôn tập cho rất nhiề người, vì vậy, mình hoàn toàn tự tin vào kỹ năng thuyết trình và truyền đạt kiến thức của bản thân',
            thumbnail: 'https://scontent.fhan4-5.fna.fbcdn.net/v/t39.30808-6/499337436_1234690978581335_4864011434128750772_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFEBik3URiRfoC60SLELw3my9znKBHPLxzL3OcoEc8vHEC4sIc9nWGSJ6sC_-_222OA7ba3PIo0uiqgdn6iY8aA&_nc_ohc=jYk7aUbOO2YQ7kNvwHS4OiJ&_nc_oc=AdloM1ZHyGpSjL5osJ38_BWwZjoDSi7JXVCqxVmCdUcCPApgswdE32l8Ja4LK-jE3eo&_nc_zt=23&_nc_ht=scontent.fhan4-5.fna&_nc_gid=o6fxqx5cUuB9DTGbIS0KiA&oh=00_AfY3WwsUg6b_hRXu0ggji0t00h41Pe_UIAGv6-SVzM76uw&oe=68E040D7',
            link: 'https://www.facebook.com/share/p/17X6uHAEDV/'
        },
        {
            heading: 'Ban tổ chức Đấu trường IT 2025',
            description: `Tham gia với vai trò chính là hỗ trợ kĩ thuật cho hoạt động học thuật thường niên của Khoa 
            Công nghệ phần mềm - Đấu Trường IT.`,
            thumbnail: 'https://scontent.fsgn5-12.fna.fbcdn.net/v/t39.30808-6/495542644_1225022839548149_8727378315291039368_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeHCSW4GJvZlzIypYmCFKCv8EC2pvR1g4wsQLam9HWDjCzorBAdTjPgKlNFTT7-6nKqFQTkfImbKdSQMsYiWH7h2&_nc_ohc=3PF74qtslPMQ7kNvwFbsI0u&_nc_oc=AdlDgcsZOwnmM157T9bnEL3P-9ar5P15iPv5Pv2ATYNFm-aT0qydM_3LCjcc7vKo2Oc&_nc_zt=23&_nc_ht=scontent.fsgn5-12.fna&_nc_gid=TBlai1m4-bQ5KXhhA8Zyjg&oh=00_AfZkEeuX5NEnRuezAyjNceMXMf8GC5BPGeRRQuL1bGZ46g&oe=68E00CDA', 
            link: 'https://www.facebook.com/share/p/19kWXKN1gD/'
        },
        {
            heading: 'Diễn giả Seminar "Ctrl + N" - BHT.CNPM',
            description: 'Chia sẻ và gỡ rối cho các bạn Tân sinh viên về Phường pháp học lập trình hiệu quả. Giúp các bạn chống shock khi mới vào đại học.',
            thumbnail: 'https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/547945819_1337580131625752_4058403854906360016_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFc0pjTlqpNhMT3ITzozmq1245Xa-fRLLXbjldr59EstUnPLsUZnlfk5xChdMieYEWjbu57RDSPB0SXlD6bikKF&_nc_ohc=w_lf3MHvcSEQ7kNvwEcQVib&_nc_oc=AdkwARGxBaZyOw4YkZsbXH8KmNZsMhBzo0n8TQ0ZL3MOT1Fq0xWGlnYI2ULs9kWWKd8&_nc_zt=23&_nc_ht=scontent.fsgn5-9.fna&_nc_gid=ttTRjSTSTNNc9i1HhSqNSw&oh=00_AfZFomshYcQuzz_-2R9gnACJ0jN0jVNDpKaUgIpA6gbL4g&oe=68E01AAB',
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