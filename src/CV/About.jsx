import React from 'react'
import ReactDOM from 'react-dom'
import InputCV from '../CV/Input'
function About() {
        const initialProfile = `Em là sinh viên lớp Cứ nhân Tài Năng ngành công nghệ thông tin HCMUS. Với kinh nghiệm 4 năm làm gia sư
    và niềm đam mê lập trình, đặc biệt là C++. Cùng với thành tích về học thuật đã hỗ trợ nhiều học sinh - sinh viên nằm vững kiến
    thức lập trình, tư duy giải thuật và kĩ năng xử lý bài tập. Mục tiêu của em là giúp việc học Tin học trở nên thực tiễn, dễ
    hiểu và thú vị.`
    return (
        <div className='bg-gray-800 w-full text-white text-base p-4'>
            <h2 className='font-semibold text-2xl uppercase mb-2'>VỀ BẢN THÂN</h2>
            <InputCV initialValue={initialProfile} containerStyle='w-full' editorStyle={{ width: '100%', textAlign: 'justify' }} />
        </div>
    )
}
export default About