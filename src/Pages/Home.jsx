import React from 'react'
import ReactDOM from 'react-dom'
import { useRef } from 'react'
import { useReactToPrint } from 'react-to-print'
import Profile from '../Component/Home/Profile'
import RecentBlogs from '../Component/Home/RecentBlogs'
import Feature from '../Component/Home/Feature'
import Foreground from '../Component/Home/Foreground' 
import componentToPrint from '../Services/getComponentToPrint'
import JobDetail from '../Component/Home/JobDetail'
function Home()
{
    const componentRef = useRef(); 
    const handlePrintPage = useReactToPrint({
        contentRef: componentRef
    }); 
    return (
        <div ref={componentRef}>     
            <button onClick={handlePrintPage}>Print trang nay di em</button>
            <Profile />        
            <RecentBlogs /> 
            <Feature />    
            <JobDetail /> 
            <Foreground />  
        </div>
    )
}
export default Home