import React from 'react'
import ReactDOM from 'react-dom'
import Profile from '../Component/Home/Profile'
import RecentBlogs from '../Component/Home/RecentBlogs'
import Feature from '../Component/Home/Feature'
function Home()
{
    return (
        <>     
            <Profile />        
            <RecentBlogs /> 
            <Feature />     
        </>
    )
}
export default Home