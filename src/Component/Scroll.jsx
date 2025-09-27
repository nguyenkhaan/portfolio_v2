import React from 'react'
import ReactDOM from 'react-dom'
import { useScroll } from 'framer-motion'
import { motion } from 'framer-motion';
import { useSpring } from 'framer-motion';
function Scroll()
{
    const {scrollYProgress} = useScroll(); 
    const smoothScale = useSpring(scrollYProgress , {
        stiffness: 100, 
        damping: 20, 
        mass: 0.2
    })
    return (
        <motion.div className="fixed top-0 left-0 w-full h-1 bg-red-600 z-999999"
            style={{scaleX: smoothScale , transformOrigin: 'left'}}
        ></motion.div>
    )
}
export default Scroll