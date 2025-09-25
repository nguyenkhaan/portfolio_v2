import React from 'react'
import ReactDOM from 'react-dom'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'

import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import router from '../Routes/route'
function Layout()
{
    return (
        <div>
            <Navbar /> 
            <Routes>
                {router.map((routeInfo) => {
                    return <Route path={routeInfo.path} element={React.createElement(routeInfo.element)} /> 
                })}
            </Routes>
            <Footer /> 
        </div>
    )
}
export default Layout