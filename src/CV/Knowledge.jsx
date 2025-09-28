import React from 'react'
import ReactDOM from 'react-dom'
import InputKnowledgeItem from './InputKnowledggItem'
import { useState } from 'react'
function Knowledge() {
    const [representArray, setRepresentArray] = useState([1])
    const handleInputClick = (type, index) => {
        switch (type) {
            case 'remove': setRepresentArray((prev) => {
                const newArr = [...prev]
                if (newArr.length != 0) newArr.splice(index, 1)
                return newArr
            });
                return;
            case 'add': setRepresentArray((prev) => {
                const newArr = [...prev]
                newArr.splice(index + 1, 0, 1)
                return newArr
            });
                return;
        }
    }
    return (
        <div className='bg-gray-800 w-full text-white text-base p-4'>
            <h2 className='font-semibold text-2xl uppercase mb-4'>
                Học vấn
                <i
                    class="fa-solid fa-square-plus text-blue-500 cursor-pointer text-xl ml-2"
                    onClick={() => handleInputClick('add', representArray.length)}
                ></i>
            </h2>
            <div className='w-full items-start flex flex-col gap-4 justify-between'>
                {representArray.map((value, index) => <InputKnowledgeItem index={index} handleInputClick={handleInputClick} />)}
            </div>
        </div>
    )
}
export default Knowledge