import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <ul className='no-print md:w-full w-screen mt-4 h-10 flex items-center gap-10 md:px-12 px-15 justify-end'>
            <Link to='/'><li className='font-medium text-lg navbar__link__effect'>Portfolio</li></Link>
            <Link to='/my-cv'><li className='font-medium text-lg navbar__link__effect'>MyCV</li></Link>
        </ul>

    )
}
export default Navbar