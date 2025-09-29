import React from 'react'
import ReactDOM from 'react-dom'
import InputCV from './Input'
function TextArea() {
    const initialValue = `
        C/C++, Python, Java, SQL, JAvascript 
        Tin học cơ ban và bâng cao 
        Kỹ năng sư phạm 
        Kỹ năng thuyết trình, giải quết vấn đề, nghiên cứu khoa học, tranh luận, tư duy phản biện 
    `
    return (
        <InputCV containerStyle='w-full min-h-20' initialValue={initialValue} />
    )
}
export default TextArea