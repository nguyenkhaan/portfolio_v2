import React from 'react'
import ReactDOM from 'react-dom'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import router from '../Routes/route'
function Layout()
{
    return (
        <div className='w-full flex items-center justify-center'>
            <Routes>
                {router.map((routeInfo) => {
                    return <Route path={routeInfo.path} element={React.createElement(routeInfo.element)} /> 
                })}
            </Routes>
        </div>
    )
}
export default Layout