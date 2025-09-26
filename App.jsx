import React from 'react'
import ReactDOM from 'react-dom'
import Layout from './src/Pages/Layout'
import Scroll from './src/Component/Scroll'
import Navbar from './src/Component/Navbar' 
import Footer from './src/Component/Footer'
function App()
{
    return (
        <>
            <Scroll/> 
            <Navbar /> 
            <Layout />  
            <Footer /> 
        </>
    )
}
export default App