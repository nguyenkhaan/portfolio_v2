import React from 'react'
import ReactDOM from 'react-dom'
import InputCV from '../CV/Input'
function About() {
    const initialProfile = `
    Sinh viên Kỹ thuật Phần mềm với đam mê phát triển ứng dụng và xây dựng giải pháp công nghệ. 
    Thành thạo C++, JavaScript, HTML/CSS và Python, có tư duy phân tích, giải quyết vấn đề và làm việc nhóm hiệu quả. 
    Hướng tới việc áp dụng kiến thức và kỹ năng để tạo ra sản phẩm phần mềm chất lượng, sáng tạo và bền vững.`
    return (
        <div className='bg-gray-800 w-full text-white text-base p-4'>
            <h2 className='font-semibold text-2xl uppercase mb-2'>VỀ BẢN THÂN</h2>
            <InputCV initialValue={initialProfile} containerStyle='w-full' editorStyle={{ width: '100%', textAlign: 'justify' }} />
        </div>
    )
}
export default About