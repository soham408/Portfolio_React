import React from 'react'
import Transition from '../Transition';  
import { motion } from 'framer-motion';

function About({delay = 0}) {
    // document.body.style.backgroundColor = "#ad9476";

    return (
        <>
        
        <motion.h1 
        initial = {{ y: "100%" }}
        animate = {{ y: 0 }}
        exit={{ y: "-100%"}}
        transition={{ duration: 0.5, delay }}
        className='text-white text-6xl  font-serif text-center pt-[100px]'>About</motion.h1>
        
        <motion.h1
        initial = {{ y: "100%" }}
        animate = {{ y: 0 }}
        exit={{ y: "-100%"}}
        transition={{ duration: 0.5, }}
        className='text-white font-serif text-center pt-[80px] pb-[100px]'>Hellow! I'm  Soham, <br /> <br />
         <strong> A passionate beginner web and software developer </strong> <br /> <br />
         excited to build intuitive, functional, and visually appealing digital experiences. <br /> 
         I recently started my journey in development, transforming creative ideas into <br /> working code. 
        I’ve been exploring web technologies like <strong> HTML, CSS, JavaScript, and frameworks like Vite.js. </strong> <br />
        I am constantly learning and experimenting to enhance my skills and stay updated with the latest industry trends. <br />
         My goal is to create solutions that not only meet technical requirements but also provide great user experiences.</motion.h1>
         
         </>
    )
}

export default Transition(About);