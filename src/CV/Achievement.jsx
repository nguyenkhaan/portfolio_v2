import React from 'react'
import ReactDOM from 'react-dom'
import { useState } from 'react'
import AchievementItem from './AchievementItem'
import Heading from './Heading'
function Achievement({
    heading,
    sampleContent
}) {
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
        <div className='bg-white text-gray-800 w-full text-base p-4'>
            <div className='flex items-center w-full justify-start'>
                <Heading initialValue='thành tích' />
                <i
                    class="fa-solid fa-square-plus text-blue-500 mb-3 cursor-pointer text-xl ml-2 no-print"
                    onClick={() => handleInputClick('add', representArray.length)}
                ></i>
            </div>
            {/* <h2 className='font-semibold text-2xl uppercase mb-2'>
                {heading}
            </h2> */}
            <div className='w-full items-start flex flex-col gap-1 justify-between'>
                {representArray.map((value, index) => <AchievementItem index={index} handleInputClick={handleInputClick} sampleContent={sampleContent} />)}
            </div>
        </div>
    )
}
export default Achievement