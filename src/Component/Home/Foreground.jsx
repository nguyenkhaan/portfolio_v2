import React from 'react'
import ReactDOM from 'react-dom'
function Foreground() {
    return (
        <div className='relative no-print full my-6 bg-blue-200 h-120 flex items-center justify-center bg-fixed bg-cover bg-center bg-no-repeat'
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1504253163759-c23fccaebb55?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' }}

        >
            <div className='absolute top-0 left-0 bg-black right-0  flex-col bottom-0 opacity-50 flex items-center justify-center'>
                <h2 className='font-bold text-3xl md:text-4xl px-20 md:px-60 md:leading-12 block text-center line-clamp-2 w-full text-white'>Do you have any Idea?
                    <br />Let's talk about your work progress</h2>
                <span className='text-lg hidden md:block text-white text-center w-full px-20 lg:px-80 my-4'>There are many variations of passages of Lorem Ipsum available,
                    but the majority have suffered alteration.
                </span>
            </div>
        </div>
    )
}
export default Foreground