import React from 'react'
import ReactDOM from 'react-dom'
import InputCV from './Input'
function InputKnowledgeItem({
    index,
    handleInputClick
}) {
    return (
        <div className='input__container group flex flex-col w-full items-start justify-start hover:outline-1 relative rounded-lg'>
            <div className='input__icon h-10 absolute -translate-y-8 top-0 right-0 hidden items-center justify-between'>
                <i
                    class="fa-solid fa-square-plus text-blue-500 cursor-pointer text-lg"
                    onClick={() => handleInputClick('add', index)}
                ></i>
                <i
                    class="fa-solid fa-trash text-red-500 cursor-pointer text-lg"
                    onClick={() => handleInputClick('remove', index)}
                ></i>
            </div>
            <div className='flex items-center w-full justify-between'>
                <InputCV editorStyle={{ fontWeight: '700' }} initialValue='Chuyên tin' />
                <InputCV editorStyle={{ fontWeight: '700', fontSize: 14 }} initialValue='2025' />
            </div>
            <InputCV initialValue='Trường THPT Chuyên Hùng Vương, Tỉnh Gia Lai' />
        </div>
    )
}
export default InputKnowledgeItem