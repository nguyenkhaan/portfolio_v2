import React from 'react'
import ReactDOM from 'react-dom'
import Profile from '../Component/Home/Profile'
import RecentBlogs from '../Component/Home/RecentBlogs'
import Feature from '../Component/Home/Feature'
import Foreground from '../Component/Home/Foreground'
function Home()
{
    return (
        <>     
            <Profile />        
            <RecentBlogs /> 
            <Feature />    
            <Foreground />  
        </>
    )
}
export default Home