import React from 'react'
import ReactDOM from 'react-dom'
import InputCV from './Input'
function AchievementItem({
    index,
    handleInputClick, 
    sampleContent
}) {
    return (
        <div className='input__container group flex flex-col w-full items-start justify-start hover:outline-1 relative rounded-lg'>
            <div className='input__icon h-10 absolute -translate-y-8 top-0 right-0 hidden items-center justify-between'>
                <i
                    class="fa-solid fa-square-plus text-blue-500 cursor-pointer text-lg no-print"
                    onClick={() => handleInputClick('add', index)}
                ></i>
                <i
                    class="fa-solid fa-trash text-red-500 cursor-pointer text-lg no-print"
                    onClick={() => handleInputClick('remove', index)}
                ></i>
            </div>
            <div className='flex items-center w-full justify-between gap-4'>
                <InputCV editorStyle={{ fontWeight: '400', fontSize: 16 }}  initialValue={sampleContent} />
                <InputCV editorStyle={{fontWeight: '700' , fontSize: 14}} initialValue='2025'/>
            </div>
        </div>
    )
}
export default AchievementItem