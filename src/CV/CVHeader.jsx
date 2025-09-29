import React, { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import InputCV from './Input'
function CVHeader() {
    const inputRef = useRef(null); 
    const [avatar , setAvatar] = useState('images/default-avatar.jpg')
    useEffect(() => {
        return () => URL.revokeObjectURL(avatar) 
    } , [avatar])
    const handleClick = () => {
        inputRef.current?.click() 
    }
    const handleChange = (e) => {
        const file = e.target.files[0] 
        if (file) 
        {
            const url = URL.createObjectURL(file) 
            setAvatar(url)
            console.log(url) 
        }
    }
    return (    
        <div className='col-span-12 px-8 min-h-20 flex items-center justify-between gap-8'>
            <div className='flex items-center min-h-20 flex-col gap-4 justify-between'>
                <div 
                    className='rounded-full w-50 h-50 bg-black cursor-pointer bg-center bg-cover bg-no-repeat'
                    onClick={handleClick}
                    style={{ backgroundImage: `url(${avatar})` }}
                >
                </div>
                {/* Dia chi noi o */}
            <input 
                ref={inputRef} 
                type='file' 
                className='hidden w-0 h-0'
                onChange={(e) => handleChange(e)}
            />
            </div>
            <div className='flex flex-col items-start justify-start gap-4  w-full min-h-20'>
                <div className='w-full flex items-start flex-col justify-start gap-1'>
                    <InputCV editorStyle={{ fontSize: '48px', fontWeight: 800, display: 'flex', alignItem: 'center' }} initialValue={'Nguyen Kha An'} />
                    <InputCV initialValue={'Software Engineer'} editorStyle={{ fontWeight: 500, fontSize: '28px' }} />
                </div>
            </div>
        </div>
    )
}
export default CVHeader

//  <div data-placeholder = {'I am a fullstack developer'} contentEditable className='outline-none text-base flex-1 text-gray-600 rounded-base px-1 min-w-20 inline-block focus:bg-gray-200'/> 