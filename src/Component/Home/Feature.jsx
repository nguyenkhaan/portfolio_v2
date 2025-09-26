import React from 'react'
import ReactDOM from 'react-dom'
import FeatureItem from './FeatureItem'
function Feature() {
    return (
        <div className='no-print md:px-40 px-10 py-4 w-full min-h-80 gap-6 flex flex-col'>
            <span className='text-base md:text-xl my-2'>Feature work</span>
            <FeatureItem />
            <FeatureItem />
            <FeatureItem />
        </div>
    )
}
export default Feature